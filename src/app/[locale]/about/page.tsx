import type { Metadata } from "next";
import { AboutPreview, FinalCta, Process } from "@/components/Sections";
import { isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = { title: "About Dr. Ali", description: "About Dr. Ali Alheneiti and his premium cosmetic dentistry approach." };

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  return <main><AboutPreview locale={locale} /><Process locale={locale} /><FinalCta locale={locale} /></main>;
}
