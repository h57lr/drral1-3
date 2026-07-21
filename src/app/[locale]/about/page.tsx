import type { Metadata } from "next";
import { AboutPreview, FinalCta, Process } from "@/components/Sections";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";

  return {
    title: locale === "ar" ? "عن الطبيب" : "About",
    description: locale === "ar"
      ? "تعرف على د. علي الحنيطي ونهجه الراقي في تجميل الأسنان وتصميم الابتسامة الطبيعية في عمّان، الأردن."
      : "About Dr. Ali Alheneiti and his premium cosmetic dentistry approach in Amman, Jordan.",
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: "/en/about",
        ar: "/ar/about",
        "x-default": "/en/about"
      }
    },
    openGraph: {
      title: locale === "ar" ? "عن الطبيب" : "About",
      description: locale === "ar"
        ? "نهج راقٍ في تجميل الأسنان وتصميم الابتسامة الطبيعية في الأردن."
        : "Premium cosmetic dentistry and natural smile design in Jordan.",
      type: "website",
      url: `/${locale}/about`,
      locale: locale === "ar" ? "ar_JO" : "en_US"
    }
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  return <main><AboutPreview locale={locale} /><Process locale={locale} /><FinalCta locale={locale} /></main>;
}
