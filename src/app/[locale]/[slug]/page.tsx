import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticlePage } from "@/components/BlogArticlePage";
import { blogPosts, getCoverImage, getPostByLocaleSlug, getPostSlug } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return blogPosts.flatMap((post) => [
    { locale: "en", slug: getPostSlug(post, "en") },
    { locale: "ar", slug: getPostSlug(post, "ar") }
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const post = getPostByLocaleSlug(slug, locale);

  return {
    title: post?.seoTitle[locale] ?? (locale === "ar" ? "مجلة تجميل الأسنان" : "Dental Journal"),
    description: post?.metaDescription[locale],
    alternates: post ? {
      canonical: `/${locale}/${getPostSlug(post, locale)}`,
      languages: {
        en: `/en/${getPostSlug(post, "en")}`,
        ar: `/ar/${getPostSlug(post, "ar")}`,
        "x-default": `/en/${getPostSlug(post, "en")}`
      }
    } : undefined,
    openGraph: post ? {
      title: post.seoTitle[locale],
      description: post.metaDescription[locale],
      type: "article",
      url: `/${locale}/${getPostSlug(post, locale)}`,
      locale: locale === "ar" ? "ar_JO" : "en_US",
      images: [{ url: getCoverImage(post, locale), alt: post.coverAlt[locale] }]
    } : undefined
  };
}

export default async function DirectBlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const post = getPostByLocaleSlug(slug, locale);

  if (!post) notFound();

  return <BlogArticlePage post={post} locale={locale} />;
}
