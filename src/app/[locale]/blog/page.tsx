import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta, SectionHead } from "@/components/Sections";
import { blogPosts, getCoverImage, getReadTime } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";

  return {
    title: locale === "ar" ? "مجلة تجميل الأسنان" : "Dental Journal",
    description: locale === "ar"
      ? "مقالات وأدلة عن ابتسامة هوليود، الفينير، السياحة العلاجية للأسنان، وخيارات تجميل الأسنان في الأردن."
      : "Premium cosmetic dentistry articles about Hollywood Smile, veneers, dental tourism, and patient guides in Jordan.",
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        en: "/en/blog",
        ar: "/ar/blog",
        "x-default": "/en/blog"
      }
    },
    openGraph: {
      title: locale === "ar" ? "مجلة تجميل الأسنان" : "Dental Journal",
      description: locale === "ar"
        ? "أدلة واضحة تساعدك على فهم خيارات تجميل الأسنان قبل الاستشارة."
        : "Clear patient guides for cosmetic dentistry decisions in Jordan.",
      type: "website",
      url: `/${locale}/blog`,
      locale: locale === "ar" ? "ar_JO" : "en_US"
    }
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{locale === "ar" ? "المدونة" : "Blog"}</p>
          <h1 className="display">{locale === "ar" ? "مجلة الدكتور علي" : "Dental Journal"}</h1>
          <p className="lead">{locale === "ar" ? "أدلة راقية تساعدك على فهم هوليوود سمايل، الفينير، والسياحة العلاجية قبل اتخاذ القرار." : "Premium editorial guides to help you understand Hollywood Smile, veneers, and dental tourism before choosing your treatment."}</p>
        </div>
      </section>
      <section className="section compact">
        <div className="container">
          <SectionHead eyebrow={locale === "ar" ? "دليل المرضى" : "Patient Guides"} title={locale === "ar" ? "ثقة في كل معلومة، راحة في كل قرار" : "Trusted knowledge. Peaceful decisions."} text={locale === "ar" ? "كل مقال يوضح الخيارات ويربطك بالخدمة المناسبة والخطوة التالية." : "Each guide explains treatment options and connects you to the right service and next step."} />
          <div className="journal-grid listing">
            {blogPosts.map((post) => (
              <Link className="journal-card" key={post.slug} href={`/${locale}/${post.slug}`}>
                <div className="journal-image"><img src={getCoverImage(post, locale)} alt={post.coverAlt[locale]} loading="lazy" /></div>
                <div className="journal-card-copy">
                <div className="journal-meta"><span className="pill">{post.category[locale]}</span><span>{getReadTime(post, locale)}</span></div>
                <h3>{post.title[locale]}</h3>
                <p>{post.excerpt[locale]}</p>
                <span className="read-more">{locale === "ar" ? "اقرأ المقال →" : "Read More →"}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta locale={locale} />
    </main>
  );
}
