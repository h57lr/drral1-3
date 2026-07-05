import type { Metadata } from "next";
import { BlogPreview, CaseShowcase, DoctorProfileHighlight, FinalCta, Hero, Process, ReelsShowcase, Reviews, ServicesPreview } from "@/components/Sections";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  return {
    title: locale === "ar" ? "الدكتور علي الحنيطي | تجميل الأسنان في الأردن" : "Cosmetic Dentist in Jordan",
    description: locale === "ar" ? "ابتسامات هوليوود، فينير، زيركون وزراعة أسنان بتجربة فاخرة ثنائية اللغة." : "Hollywood smile, veneers, zircon, and dental implants with a premium bilingual cosmetic dentistry experience."
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;

  return (
    <main>
      <Hero locale={locale} />
      <DoctorProfileHighlight locale={locale} />
      <CaseShowcase locale={locale} variant="reels" />
      <ServicesPreview locale={locale} />
      <Process locale={locale} />
      <Reviews locale={locale} />
      <ReelsShowcase locale={locale} />
      <BlogPreview locale={locale} />
      <FinalCta locale={locale} />
    </main>
  );
}
