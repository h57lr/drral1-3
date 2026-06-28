import type { Metadata } from "next";
import { ServicesPreview, FinalCta } from "@/components/Sections";
import { isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry Services",
  description: "Hollywood smile, zircon, veneers, dental implants, whitening, and gummy smile treatment in Jordan."
};

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{locale === "ar" ? "الخدمات" : "Services"}</p>
          <h1 className="display">{locale === "ar" ? "خدمات تجميل الأسنان" : "Cosmetic dentistry services"}</h1>
          <p className="lead">{locale === "ar" ? "صفحات خدمات مبنية للسيو والتحويل مع ربط مباشر بالحالات والريلز." : "SEO-focused service pages connected to cases, reels, FAQs, and WhatsApp consultation."}</p>
        </div>
      </section>
      <ServicesPreview locale={locale} />
      <FinalCta locale={locale} />
    </main>
  );
}
