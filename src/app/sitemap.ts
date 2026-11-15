import type { MetadataRoute } from "next";
import { blogPosts, getPostSlug, services } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const base = "https://www.dralialheneiti.com";
const locales: Locale[] = ["en", "ar"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "services", "transformations", "testimonials", "blog", "about", "faq", "contact"];
  const urls = locales.flatMap((locale) => [
    ...staticPages.map((page) => ({ url: `${base}/${locale}${page ? `/${page}` : ""}`, lastModified: new Date() })),
    ...services.map((service) => ({ url: `${base}/${locale}/services/${service.slug}`, lastModified: new Date() })),
    ...blogPosts.map((post) => ({ url: `${base}/${locale}/${getPostSlug(post, locale)}`, lastModified: new Date(post.lastUpdated) }))
  ]);

  return urls;
}
