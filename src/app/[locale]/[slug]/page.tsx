import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticlePage } from "@/components/BlogArticlePage";
import { blogPosts, getCoverImage, getPost } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return blogPosts.flatMap((post) => [{ locale: "en", slug: post.slug }, { locale: "ar", slug: post.slug }]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const post = getPost(slug);

  return {
    title: post?.seoTitle[locale] ?? "Dental Journal",
    description: post?.metaDescription[locale],
    alternates: post ? { canonical: `/${locale}/${post.slug}` } : undefined,
    openGraph: post ? {
      title: post.seoTitle[locale],
      description: post.metaDescription[locale],
      type: "article",
      images: [{ url: getCoverImage(post, locale), alt: post.coverAlt[locale] }]
    } : undefined
  };
}

export default async function DirectBlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const post = getPost(slug);

  if (!post) notFound();

  return <BlogArticlePage post={post} locale={locale} />;
}
