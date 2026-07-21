import type { Metadata } from "next";
import { FinalCta, Reviews, TransformationVideosShowcase } from "@/components/Sections";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";

  return {
    title: locale === "ar" ? "ثقة المرضى" : "Patient Trust",
    description: locale === "ar"
      ? "تجارب وثقة المرضى مع د. علي الحنيطي في تجميل الأسنان وتصميم الابتسامة الطبيعية."
      : "Trust themes and patient priorities for Dr. Ali Alheneiti cosmetic dentistry consultations.",
    alternates: {
      canonical: `/${locale}/testimonials`,
      languages: {
        en: "/en/testimonials",
        ar: "/ar/testimonials",
        "x-default": "/en/testimonials"
      }
    },
    openGraph: {
      title: locale === "ar" ? "ثقة المرضى" : "Patient Trust",
      description: locale === "ar"
        ? "تجارب مرضى وتحولات ابتسامة تبني الثقة قبل الاستشارة."
        : "Patient stories and smile transformations that build trust before consultation.",
      type: "website",
      url: `/${locale}/testimonials`,
      locale: locale === "ar" ? "ar_JO" : "en_US"
    }
  };
}

export default async function TestimonialsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  return <main><TransformationVideosShowcase locale={locale} /><Reviews locale={locale} /><FinalCta locale={locale} /></main>;
}
