import type { Metadata } from "next";
import { FinalCta, SectionHead } from "@/components/Sections";
import { services } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";

  return {
    title: locale === "ar" ? "أسئلة شائعة" : "FAQ",
    description: locale === "ar"
      ? "أسئلة شائعة حول الفينير، ابتسامة هوليود، تبييض الأسنان، زراعة الأسنان وتجميل الأسنان مع د. علي الحنيطي."
      : "Frequently asked questions about veneers, Hollywood Smile, whitening, implants, and cosmetic dentistry with Dr. Ali Alheneiti.",
    alternates: {
      canonical: `/${locale}/faq`,
      languages: {
        en: "/en/faq",
        ar: "/ar/faq",
        "x-default": "/en/faq"
      }
    },
    openGraph: {
      title: locale === "ar" ? "أسئلة شائعة" : "FAQ",
      description: locale === "ar"
        ? "إجابات مختصرة قبل حجز استشارتك في تجميل الأسنان."
        : "Short answers before booking your cosmetic dentistry consultation.",
      type: "website",
      url: `/${locale}/faq`,
      locale: locale === "ar" ? "ar_JO" : "en_US"
    }
  };
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const faqs = services.flatMap((service) => service.faqs[locale]);
  return (
    <main>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={locale === "ar" ? "الأسئلة الشائعة" : "FAQ"} title={locale === "ar" ? "أسئلة شائعة" : "Frequently asked questions"} text={locale === "ar" ? "إجابات مختصرة قبل حجز استشارتك." : "Short answers before booking your consultation."} />
          <div className="faq-list">{faqs.map((faq) => <article className="faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div>
        </div>
      </section>
      <FinalCta locale={locale} />
    </main>
  );
}
