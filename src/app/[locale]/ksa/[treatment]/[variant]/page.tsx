import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KsaLandingPage } from "@/components/KsaLandingPage";
import {
  getKsaLandingContent,
  isKsaTreatment,
  isKsaVariant,
  ksaTreatments,
  ksaVariants
} from "@/components/KsaLandingContent";
import { isLocale, type Locale } from "@/lib/i18n";

type PageParams = {
  locale: string;
  treatment: string;
  variant: string;
};

const siteUrl = "https://www.dralialheneiti.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return (["ar", "en"] as const).flatMap((locale) =>
    ksaTreatments.flatMap((treatment) =>
      ksaVariants.map((variant) => ({ locale, treatment, variant }))
    )
  );
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { locale: rawLocale, treatment: rawTreatment, variant: rawVariant } = await params;

  if (!isLocale(rawLocale) || !isKsaTreatment(rawTreatment) || !isKsaVariant(rawVariant)) {
    return { title: rawLocale === "ar" ? "الصفحة غير موجودة" : "Page not found" };
  }

  const locale = rawLocale as Locale;
  const content = getKsaLandingContent(locale, rawTreatment, rawVariant);
  const path = `/ksa/${rawTreatment}/${rawVariant}`;
  const canonical = `/${locale}${path}`;
  const title = `${content.treatment.shortName} | ${content.variant.seoTitle}`;

  return {
    title,
    description: content.variant.seoDescription,
    // These are paid-campaign experiment variants. Keep them out of search
    // results so near-duplicate test concepts do not compete with core pages.
    robots: { index: false, follow: true },
    alternates: {
      canonical,
      languages: {
        "ar-SA": `/ar${path}`,
        en: `/en${path}`,
        "x-default": `/ar${path}`
      }
    },
    openGraph: {
      title,
      description: content.variant.seoDescription,
      type: "website",
      url: canonical,
      siteName: locale === "ar" ? "د. علي الحنيطي" : "Dr. Ali Alheneiti",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_SA"],
      images: [{ url: content.media.src }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: content.variant.seoDescription,
      images: [content.media.src]
    }
  };
}

export default async function KsaPage({ params }: { params: Promise<PageParams> }) {
  const { locale: rawLocale, treatment: rawTreatment, variant: rawVariant } = await params;

  if (!isLocale(rawLocale) || !isKsaTreatment(rawTreatment) || !isKsaVariant(rawVariant)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const content = getKsaLandingContent(locale, rawTreatment, rawVariant);
  const pageUrl = `${siteUrl}/${locale}/ksa/${rawTreatment}/${rawVariant}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: `${content.treatment.name} — ${content.variant.title}`,
      description: content.variant.seoDescription,
      inLanguage: locale === "ar" ? "ar-SA" : "en",
      url: pageUrl,
      about: {
        "@type": "MedicalProcedure",
        name: content.treatment.name
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.treatment.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <KsaLandingPage locale={locale} treatment={rawTreatment} variant={rawVariant} />
    </>
  );
}
