import type { Metadata } from "next";
import { ServicesPreview, FinalCta } from "@/components/Sections";
import { isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Premium Smile Treatments in Jordan",
  description: "Explore premium veneers, zircon restorations, dental implants, whitening, and gummy smile treatments in Amman, Jordan."
};

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
          <p className="lead">{locale === "ar" ? "صفحات خدمات مبنية للسيو والتحويل مع ربط مباشر بالحالات والريلز." : "Explore natural-looking veneers, zircon restorations, implants, whitening, and gum treatments planned with Dr. Ali’s refined cosmetic approach in Amman."}</p>
        </div>
      </section>
      <ServicesPreview locale={locale} tight />
      <FinalCta locale={locale} />
    </main>
  );
}
