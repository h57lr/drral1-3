import type { Metadata } from "next";
import { FinalCta, Reviews } from "@/components/Sections";
import { isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = { title: "Patient Trust", description: "Trust themes and patient priorities for Dr. Ali Alheneiti cosmetic dentistry consultations." };

export default async function TestimonialsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  return <main><Reviews locale={locale} /><FinalCta locale={locale} /></main>;
}
