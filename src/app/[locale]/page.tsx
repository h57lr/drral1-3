import type { Metadata } from "next";
import { BlogPreview, CaseShowcase, DoctorProfileHighlight, FinalCta, Hero, Process, Reviews, ServicesPreview, TransformationVideosShowcase } from "@/components/Sections";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  return {
    title: {
      absolute: locale === "ar"
        ? "طبيب تجميل أسنان في الأردن لابتسامات طبيعية - د. علي الحنيطي"
        : "Cosmetic Dentist in Jordan for Natural Smiles | Dr. Ali Alheneiti"
    },
    description: locale === "ar" ? "ابتسامات هوليوود، فينير، زيركون وزراعة أسنان بتجربة فاخرة ثنائية اللغة." : "Hollywood smile, veneers, zircon, and dental implants with a premium bilingual cosmetic dentistry experience.",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
        "x-default": "/en"
      }
    },
    openGraph: {
      title: locale === "ar" ? "طبيب تجميل أسنان في الأردن لابتسامات طبيعية" : "Cosmetic Dentist in Jordan for Natural Smiles",
      description: locale === "ar"
        ? "ابتسامات هوليوود، فينير، زيركون وزراعة أسنان بتجربة فاخرة ثنائية اللغة."
        : "Hollywood smile, veneers, zircon, and dental implants with a premium bilingual cosmetic dentistry experience.",
      type: "website",
      url: `/${locale}`,
      locale: locale === "ar" ? "ar_JO" : "en_US"
    }
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;

  return (
    <main>
      <Hero locale={locale} />
      <DoctorProfileHighlight locale={locale} />
      <CaseShowcase locale={locale} variant="transformationVideos" />
      <ServicesPreview locale={locale} />
      <Process locale={locale} />
      <Reviews locale={locale} />
      <TransformationVideosShowcase locale={locale} />
      <BlogPreview locale={locale} />
      <FinalCta locale={locale} />
    </main>
  );
}
