import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/Sections";
import { site } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = { title: "Book Consultation", description: "Contact Dr. Ali Alheneiti for a private cosmetic dentistry consultation." };

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
          <div className="button-row"><Link className="button" href={site.whatsapp}>WhatsApp</Link><Link className="button secondary" href={site.instagram}>Instagram</Link></div>
        </div>
      </section>
      <FinalCta locale={locale} />
    </main>
  );
}
