import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta, SectionHead } from "@/components/Sections";
import { blogPosts } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry Blog",
  description: "SEO-focused cosmetic dentistry articles for Hollywood smile, veneers, zircon, and implants in Jordan."
};

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{locale === "ar" ? "المدونة" : "Blog"}</p>
          <h1 className="display">{locale === "ar" ? "محتوى يدعم السيو" : "SEO content hub"}</h1>
          <p className="lead">{locale === "ar" ? "مقالات موجهة لبحث المرضى عن هوليوود سمايل، الفينير، الزيركون والزراعة." : "Articles aimed at patient search intent around Hollywood smile, veneers, zircon, and implants."}</p>
        </div>
      </section>
      <section className="section compact">
        <div className="container">
          <SectionHead eyebrow="SEO" title={locale === "ar" ? "موضوعات جاهزة للتوسع." : "Topics ready to scale."} text={locale === "ar" ? "كل مقال يربط المستخدم بالخدمة والاستشارة." : "Every article links search intent back to service and consultation."} />
          <div className="card-grid">
            {blogPosts.map((post) => (
              <Link className="blog-card" key={post.slug} href={`/${locale}/blog/${post.slug}`}>
                <span className="pill">{post.relatedService.replaceAll("-", " ")}</span>
                <h3>{post.title[locale]}</h3>
                <p>{post.excerpt[locale]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta locale={locale} />
    </main>
  );
}
