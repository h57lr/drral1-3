import type { MetadataRoute } from "next";
import { blogPosts, services } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { postPath, sectionPath, servicePath } from "@/lib/localized-routes";

const base = "https://www.dralialheneiti.com";
const locales: Locale[] = ["en", "ar"];
const sectionKeys = ["services", "transformations", "testimonials", "blog", "about", "faq", "contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = locales.flatMap((locale) => [
    { url: `${base}/${locale}`, lastModified: new Date() },
    ...sectionKeys.map((key) => ({ url: `${base}${sectionPath(key, locale)}`, lastModified: new Date() })),
    ...services.map((service) => ({ url: `${base}${servicePath(service.slug, locale)}`, lastModified: new Date() })),
    ...blogPosts.map((post) => ({ url: `${base}${postPath(post.slug, locale)}`, lastModified: new Date(post.lastUpdated) }))
  ]);

  return urls;
}
