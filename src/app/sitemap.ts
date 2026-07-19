import type { MetadataRoute } from "next";
import { blogPosts, services } from "@/lib/content";

const base = "https://alialheneiti.com";
const locales = ["en", "ar"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "services", "transformations", "testimonials", "blog", "about", "faq", "contact"];
  const urls = locales.flatMap((locale) => [
    ...staticPages.map((page) => ({ url: `${base}/${locale}${page ? `/${page}` : ""}`, lastModified: new Date() })),
    ...services.map((service) => ({ url: `${base}/${locale}/services/${service.slug}`, lastModified: new Date() })),
    ...blogPosts.map((post) => ({ url: `${base}/${locale}/${post.slug}`, lastModified: new Date(post.lastUpdated) }))
  ]);

  return urls;
}
