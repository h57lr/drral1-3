import type { Metadata } from "next";
import Link from "next/link";
import { CaseShowcase, FinalCta, ReelsShowcase, SectionHead } from "@/components/Sections";
import { getService, services, site } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return services.flatMap((service) => [{ locale: "en", slug: service.slug }, { locale: "ar", slug: service.slug }]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const service = getService(slug);
  return {
    title: service?.title[locale] ?? "Service",
    description: service?.description[locale]
  };
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const service = getService(slug);

  if (!service) return null;

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{service.keywords[0]}</p>
          <h1 className="display">{service.title[locale]}</h1>
          <p className="lead">{service.description[locale]}</p>
          <div className="button-row">
            <Link className="button" href={site.whatsapp}>{locale === "ar" ? "استشارة واتساب" : "WhatsApp Consultation"}</Link>
            <Link className="button secondary" href={`/${locale}/cases`}>{locale === "ar" ? "شاهد الحالات" : "View Cases"}</Link>
          </div>
        </div>
      </section>
      <section className="section compact">
        <div className="container card-grid">
          <div className="content-card">
            <h3>{locale === "ar" ? "لمن تناسب؟" : "Who it is for"}</h3>
            <p>{locale === "ar" ? "للمرضى الباحثين عن نتيجة جمالية راقية وطبيعية مع تخطيط طبي دقيق." : "For patients seeking a refined, natural cosmetic result with precise medical planning."}</p>
          </div>
          <div className="content-card">
            <h3>{locale === "ar" ? "المزايا" : "Benefits"}</h3>
            <ul>{service.bullets[locale].map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </div>
          <div className="content-card">
            <h3>{locale === "ar" ? "الخطوات" : "Process"}</h3>
            <ul>{service.process[locale].map((step) => <li key={step}>{step}</li>)}</ul>
          </div>
        </div>
      </section>
      {service.slug === "facing-to-veneers-jordan" ? (
        <section className="section compact">
          <div className="container split">
            <div className="content-card">
              <span className="pill">SEO Focus</span>
              <h3>{locale === "ar" ? "لماذا يستبدل المرضى الفيسنج بالفينير؟" : "Why patients replace facing with veneers"}</h3>
              <p>
                {locale === "ar"
                  ? "الفيسنج أو الكومبوزت القديم قد يتغير لونه، يفقد لمعانه، أو يجعل الأسنان تبدو أثقل مع الوقت. الفينير المصمم جيداً يساعد على تحسين اللون، الشكل، والملمس مع نتيجة أكثر ثباتاً وطبيعية."
                  : "Older facing or composite work can stain, lose polish, or make teeth look heavier over time. Properly planned veneers can improve shade, shape, texture, and long-term cosmetic stability."}
              </p>
            </div>
            <div className="content-card">
              <span className="pill">Cases</span>
              <h3>{locale === "ar" ? "حالات موثقة من إنستغرام" : "Instagram-documented cases"}</h3>
              <p>
                {locale === "ar"
                  ? "تم ربط هذه الصفحة بحالات فيسنج إلى فينير من حساب الدكتور. عند توفر ملفات MP4 والصور، ستظهر مباشرة داخل الصفحة كدليل بصري قبل وبعد."
                  : "This page is connected to Dr. Ali's facing-to-veneers Instagram cases. Once MP4s and carousel images are available, they appear directly here as visual before-and-after proof."}
              </p>
            </div>
          </div>
        </section>
      ) : null}
      <CaseShowcase locale={locale} />
      <ReelsShowcase locale={locale} />
      <section className="section compact">
        <div className="container">
          <SectionHead
            eyebrow={locale === "ar" ? "أسئلة شائعة" : "FAQ"}
            title={locale === "ar" ? "أسئلة قبل الاستشارة." : "Questions before consultation."}
            text={locale === "ar" ? "إجابات مختصرة تساعد المريض على اتخاذ القرار ثم الانتقال إلى واتساب." : "Short answers designed to reduce hesitation and move patients to WhatsApp."}
          />
          <div className="faq-list">
            {service.faqs[locale].map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta locale={locale} />
    </main>
  );
}
