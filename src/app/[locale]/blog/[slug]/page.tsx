import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/Sections";
import { blogPosts, getPost, site } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return blogPosts.flatMap((post) => [{ locale: "en", slug: post.slug }, { locale: "ar", slug: post.slug }]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const post = getPost(slug);
  return {
    title: post?.title[locale] ?? "Blog",
    description: post?.excerpt[locale]
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const post = getPost(slug);

  if (!post) return null;

  return (
    <main>
      <section className="page-hero">
        <div className="container article">
          <p className="eyebrow">SEO Guide</p>
          <h1 className="display">{post.title[locale]}</h1>
          <p className="lead">{post.excerpt[locale]}</p>
          <div className="button-row">
            <Link className="button" href={site.whatsapp}>{locale === "ar" ? "استشارة واتساب" : "WhatsApp Consultation"}</Link>
            <Link className="button secondary" href={`/${locale}/services/${post.relatedService}`}>{locale === "ar" ? "الخدمة المرتبطة" : "Related service"}</Link>
          </div>
        </div>
      </section>
      <section className="section compact">
        <article className="container article">
          {post.sections[locale].map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </article>
      </section>
      <FinalCta locale={locale} />
    </main>
  );
}
