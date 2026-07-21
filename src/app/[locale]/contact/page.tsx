import type { Metadata } from "next";
import { ContactLeadForm } from "@/components/ContactLeadForm";
import { FinalCta } from "@/components/Sections";
import { site } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";

  return {
    title: locale === "ar" ? "احجز استشارتك" : "Book Your Consultation",
    description: locale === "ar"
      ? "تواصل مع د. علي الحنيطي لحجز استشارة خاصة في تجميل الأسنان وتصميم الابتسامة في عمّان."
      : "Contact Dr. Ali Alheneiti for a private cosmetic dentistry consultation in Amman.",
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: "/en/contact",
        ar: "/ar/contact",
        "x-default": "/en/contact"
      }
    },
    openGraph: {
      title: locale === "ar" ? "احجز استشارتك" : "Book Your Consultation",
      description: locale === "ar"
        ? "استشارة خاصة لتجميل الأسنان وتصميم الابتسامة في عمّان."
        : "Private cosmetic dentistry consultation in Amman.",
      type: "website",
      url: `/${locale}/contact`,
      locale: locale === "ar" ? "ar_JO" : "en_US"
    }
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{locale === "ar" ? "الحجز" : "Booking"}</p>
          <h1 className="display">{locale === "ar" ? "استشارة خاصة" : "Private consultation"}</h1>
          <p className="lead">{locale === "ar" ? "الأسعار والتفاصيل عبر واتساب بعد مراجعة الصور والهدف الجمالي." : "Pricing and details are handled privately on WhatsApp after reviewing photos and cosmetic goals."}</p>
          <div className="button-row"><a className="button" href={site.whatsapp} target="_blank" rel="noopener noreferrer">{locale === "ar" ? "احجز استشارتك" : "Book Your Consultation"}</a><a className="button secondary" href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></div>
        </div>
      </section>
      <ContactLeadForm locale={locale} />
      <FinalCta locale={locale} />
    </main>
  );
}
