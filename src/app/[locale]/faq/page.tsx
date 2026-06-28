import type { Metadata } from "next";
import { FinalCta, SectionHead } from "@/components/Sections";
import { services } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = { title: "FAQ", description: "Frequently asked questions about cosmetic dentistry with Dr. Ali Alheneiti." };

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const faqs = services.flatMap((service) => service.faqs[locale]);
  return (
    <main>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="FAQ" title={locale === "ar" ? "أسئلة شائعة" : "Frequently asked questions"} text={locale === "ar" ? "إجابات مختصرة قبل التواصل عبر واتساب." : "Short answers before contacting on WhatsApp."} />
          <div className="faq-list">{faqs.map((faq) => <article className="faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div>
        </div>
      </section>
      <FinalCta locale={locale} />
    </main>
  );
}
