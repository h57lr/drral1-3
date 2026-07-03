import type { Metadata } from "next";
import { ServicesPreview, FinalCta } from "@/components/Sections";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";

  return {
    title: locale === "ar" ? "خدمات طب الأسنان التجميلي في عمّان" : "Premium Dental Services in Amman, Jordan",
    description: locale === "ar"
      ? "استكشف خدمات فينير الأسنان، تبييض الأسنان، زراعة الأسنان، تقويم الأسنان، وعلاج الابتسامة اللثوية مع الدكتور علي في عمّان."
      : "Explore Dr. Ali’s premium dental veneers, teeth whitening, dental implants, orthodontics, and gummy smile treatment pages in Amman, Jordan.",
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        en: "/en/services",
        ar: "/ar/services"
      }
    },
    openGraph: {
      title: locale === "ar" ? "خدمات طب الأسنان التجميلي في عمّان" : "Premium Dental Services in Amman, Jordan",
      description: locale === "ar"
        ? "خمس خدمات أساسية بتخطيط راقٍ ومحتوى ثنائي اللغة للمرضى في الأردن والخليج وأوروبا."
        : "Five refined service pages with bilingual guidance for patients in Jordan, the GCC, and Europe.",
      type: "website",
      url: `/${locale}/services`
    }
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  return (
    <main>
      <section className="page-hero services-page-hero">
        <div className="container">
          <p className="eyebrow">{locale === "ar" ? "الخدمات" : "Services"}</p>
          <h1 className="display">
            {locale === "ar" ? "خدمات تجميل الأسنان" : <><span className="script">Premium Smile</span> Treatments in Jordan</>}
          </h1>
          <p className="lead">{locale === "ar" ? "خمس خدمات أساسية بتخطيط راقٍ ومحتوى واضح يساعدك على اختيار الخطوة المناسبة قبل الاستشارة." : "Explore five polished service journeys planned with Dr. Ali’s refined cosmetic approach in Amman: veneers, whitening, implants, orthodontics, and gummy smile treatment."}</p>
        </div>
      </section>
      <ServicesPreview locale={locale} tight />
      <FinalCta locale={locale} />
    </main>
  );
}
