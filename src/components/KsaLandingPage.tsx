import type { CSSProperties } from "react";
import { getKsaLandingContent, ksaSectionOrder, type KsaTreatment, type KsaVariant } from "@/components/KsaLandingContent";
import { KsaStoryVideo } from "@/components/KsaStoryVideo";
import type { Locale } from "@/lib/i18n";

type KsaLandingPageProps = {
  locale: Locale;
  treatment: KsaTreatment;
  variant: KsaVariant;
};

const whatsappNumber = "962790169494";

const variantNames: Record<KsaVariant, Record<Locale, string>> = {
  natural: { ar: "التصميم الطبيعي", en: "natural-design" },
  journey: { ar: "ترتيب رحلة العلاج", en: "treatment-journey" },
  clarity: { ar: "وضوح الخطة والتكلفة", en: "plan-and-cost-clarity" }
};

export function getKsaWhatsappUrl(locale: Locale, treatment: KsaTreatment, variant: KsaVariant) {
  const treatmentName = treatment === "veneers"
    ? (locale === "ar" ? "الفينير" : "veneers")
    : (locale === "ar" ? "تخطيط هوليود سمايل" : "Hollywood Smile planning");
  const message = locale === "ar"
    ? `مرحباً، أنا من السعودية ومهتم/ة بـ ${treatmentName} في عمّان.\n\nالمدينة: \nموعد السفر المتوقع: \nما الذي أرغب بتحسينه: \n\nوصلت عبر صفحة ${variantNames[variant].ar}.`
    : `Hello, I am from Saudi Arabia and interested in ${treatmentName} in Amman.\n\nCity: \nExpected travel date: \nWhat I would like to improve: \n\nI came from the ${variantNames[variant].en} page.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function KsaIcon({ name }: { name: "pin" | "material" | "calendar" | "plane" | "check" }) {
  const paths = {
    pin: <><path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></>,
    material: <><path d="m12 3 7 4-7 4-7-4 7-4Z" /><path d="m5 12 7 4 7-4M5 17l7 4 7-4" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 10h18M8 15h.01M12 15h.01M16 15h.01" /></>,
    plane: <><path d="m3 11 18-7-7 18-2-8-9-3Z" /><path d="m12 14 4-4" /></>,
    check: <path d="m5 12 4 4L19 6" />
  };

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function SectionHeading({ eyebrow, title, text, id }: { eyebrow: string; title: string; text?: string; id: string }) {
  return (
    <div className="ksa-section-heading">
      <p className="ksa-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function Hero({ locale, treatment, variant }: KsaLandingPageProps) {
  const content = getKsaLandingContent(locale, treatment, variant);
  const { shared, media } = content;
  const imageStyle = { objectPosition: media.position } as CSSProperties;
  const imageAlt = locale === "ar" ? `تخطيط ${content.treatment.shortName} في عمّان` : `${content.treatment.shortName} planning in Amman`;
  const whatsappUrl = getKsaWhatsappUrl(locale, treatment, variant);
  const title = (
    <h1>
      <span>{content.treatment.name}</span>
      {content.variant.title}
    </h1>
  );
  const actions = (
    <div className="ksa-hero-actions">
      <a className="ksa-button ksa-button--gold" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{shared.consult}<span aria-hidden="true">↗</span></a>
      <a className="ksa-button ksa-button--ghost" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{shared.whatsapp}</a>
    </div>
  );

  if (variant === "journey") {
    return (
      <section className="ksa-hero ksa-hero--journey" aria-labelledby="ksa-hero-title">
        <img className="ksa-journey-backdrop" src={media.src} alt="" style={imageStyle} width="1600" height="1000" fetchPriority="high" />
        <div className="ksa-hero-shade" />
        <div className="ksa-container ksa-journey-layout">
          <div className="ksa-journey-route" aria-label={locale === "ar" ? "مسار الزيارة" : "Visit route"}>
            <p><KsaIcon name="plane" /> {shared.travelEyebrow}</p>
            <ol>
              <li><span>01</span>{locale === "ar" ? "ابدأ المحادثة عبر واتساب" : "Start on WhatsApp"}</li>
              <li><span>02</span>{locale === "ar" ? "تقييم سريري في عمّان" : "Clinical assessment in Amman"}</li>
              <li><span>03</span>{locale === "ar" ? "٢–٣ زيارات عادةً" : "Typically 2–3 visits"}</li>
            </ol>
          </div>
          <div className="ksa-hero-copy">
            <p className="ksa-eyebrow">{content.variant.eyebrow}</p>
            <div id="ksa-hero-title">{title}</div>
            <p className="ksa-hero-lead">{content.variant.lead}</p>
            <p className="ksa-hero-note">{content.variant.heroNote}</p>
            {actions}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "clarity") {
    return (
      <section className="ksa-hero ksa-hero--clarity" aria-labelledby="ksa-hero-title">
        <div className="ksa-container ksa-clarity-layout">
          <aside className="ksa-clarity-board" aria-label={shared.priceEyebrow}>
            <div className="ksa-clarity-image">
              <img src={media.src} alt={imageAlt} style={imageStyle} width="900" height="760" fetchPriority="high" />
            </div>
            <div className="ksa-clarity-price">
              <small>{content.treatment.priceTitle}</small>
              <strong>{content.treatment.priceValue}</strong>
              <span>{content.treatment.priceUnit}</span>
            </div>
            <p>{shared.finalCost}</p>
          </aside>
          <div className="ksa-hero-copy">
            <p className="ksa-eyebrow">{content.variant.eyebrow}</p>
            <div id="ksa-hero-title">{title}</div>
            <p className="ksa-hero-lead">{content.variant.lead}</p>
            <div className="ksa-clarity-facts">
              <span><b>02–03</b>{locale === "ar" ? "زيارات عادةً" : "typical visits"}</span>
              <span><b>AMM</b>{shared.location}</span>
            </div>
            <p className="ksa-hero-note">{content.variant.heroNote}</p>
            {actions}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="ksa-hero ksa-hero--natural" aria-labelledby="ksa-hero-title">
      <div className="ksa-container ksa-natural-layout">
        <div className="ksa-hero-copy">
          <p className="ksa-eyebrow">{content.variant.eyebrow}</p>
          <div id="ksa-hero-title">{title}</div>
          <p className="ksa-hero-lead">{content.variant.lead}</p>
          <p className="ksa-hero-note"><span aria-hidden="true">✦</span>{content.variant.heroNote}</p>
          {actions}
          <div className="ksa-hero-facts">
            {shared.quickFacts.map((fact) => <span key={fact}><KsaIcon name="check" />{fact}</span>)}
          </div>
        </div>
        <figure className="ksa-natural-visual">
          <div className="ksa-image-frame">
            <img src={media.src} alt={imageAlt} style={imageStyle} width="900" height="1100" fetchPriority="high" />
          </div>
          <figcaption><span>AMMAN</span>{shared.location}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function KsaLandingPage({ locale, treatment, variant }: KsaLandingPageProps) {
  const content = getKsaLandingContent(locale, treatment, variant);
  const { shared } = content;
  const whatsappUrl = getKsaWhatsappUrl(locale, treatment, variant);
  const otherLocale = locale === "ar" ? "en" : "ar";
  const otherLocaleUrl = `/${otherLocale}/ksa/${treatment}/${variant}`;

  function TreatmentSection() {
    return (
      <section className="ksa-section ksa-treatment-section" aria-labelledby="ksa-treatment-title">
        <div className="ksa-container ksa-treatment-layout">
          <div className="ksa-treatment-media">
            <img src="/media/video-posters/smile-design-veneers-jordan-poster.jpg" alt={locale === "ar" ? "تخطيط مظهر الابتسامة في عمّان" : "Smile appearance planning in Amman"} width="900" height="760" loading="lazy" />
            <span>{content.treatment.shortName}</span>
          </div>
          <div>
            <SectionHeading id="ksa-treatment-title" eyebrow={content.treatment.distinctionEyebrow} title={content.treatment.distinctionTitle} />
            <p className="ksa-large-copy">{content.treatment.distinctionText}</p>
            <a className="ksa-text-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{shared.consult}<span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    );
  }

  function TrustSection() {
    const icons = ["pin", "material", "calendar", "plane"] as const;
    return (
      <section className="ksa-section ksa-trust-section" aria-labelledby="ksa-trust-title">
        <div className="ksa-container">
          <SectionHeading id="ksa-trust-title" eyebrow={shared.trustEyebrow} title={shared.trustTitle} text={shared.trustIntro} />
          <div className="ksa-trust-grid">
            {shared.trustCards.map((card, index) => (
              <article key={card.title}>
                <span className="ksa-icon"><KsaIcon name={icons[index]} /></span>
                <span className="ksa-card-number">0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function ProcessSection() {
    return (
      <section className="ksa-section ksa-process-section" aria-labelledby="ksa-process-title">
        <div className="ksa-container">
          <SectionHeading id="ksa-process-title" eyebrow={shared.processEyebrow} title={shared.processTitle} text={shared.processIntro} />
          <ol className="ksa-process-list">
            {shared.process.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  function PriceSection() {
    return (
      <section className="ksa-section ksa-price-section" aria-labelledby="ksa-price-title">
        <div className="ksa-container ksa-price-layout">
          <div className="ksa-price-main">
            <p className="ksa-eyebrow">{shared.priceEyebrow}</p>
            <h2 id="ksa-price-title">{content.treatment.priceTitle}</h2>
            <div className="ksa-price-value"><strong>{content.treatment.priceValue}</strong><span>{content.treatment.priceUnit}</span></div>
            <p>{content.treatment.priceText}</p>
          </div>
          <aside className="ksa-price-notes">
            <strong>{shared.finalCost}</strong>
            <ul>
              {shared.priceNotes.map((note) => <li key={note}><KsaIcon name="check" />{note}</li>)}
            </ul>
            <a className="ksa-button ksa-button--ink" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{shared.consult}</a>
          </aside>
        </div>
      </section>
    );
  }

  function TravelSection() {
    return (
      <section className="ksa-section ksa-travel-section" aria-labelledby="ksa-travel-title">
        <div className="ksa-travel-image" aria-hidden="true">
          <img src="/media/service-images/dental-tourism-jordan-travel-planning.webp" alt="" width="1000" height="850" loading="lazy" />
        </div>
        <div className="ksa-container ksa-travel-layout">
          <div className="ksa-travel-copy">
            <SectionHeading id="ksa-travel-title" eyebrow={shared.travelEyebrow} title={shared.travelTitle} text={shared.travelText} />
            <ul>{shared.travelPoints.map((point) => <li key={point}><KsaIcon name="check" />{point}</li>)}</ul>
            <a className="ksa-button ksa-button--gold" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{shared.consult}</a>
          </div>
        </div>
      </section>
    );
  }

  function StoriesSection() {
    return (
      <section className="ksa-section ksa-stories-section" aria-labelledby="ksa-stories-title">
        <div className="ksa-container ksa-stories-layout">
          <div className="ksa-stories-copy">
            <SectionHeading id="ksa-stories-title" eyebrow={shared.storiesEyebrow} title={shared.storiesTitle} text={shared.storiesText} />
            <p className="ksa-case-note"><span aria-hidden="true">◇</span>{locale === "ar" ? "النتائج وخطط العلاج تختلف من حالة إلى أخرى." : "Results and treatment plans vary by case."}</p>
          </div>
          <KsaStoryVideo
            src="/media/smile-transformation-videos/dental-veneers-patient-testimonial-jordan.mp4"
            poster="/media/video-posters/dental-veneers-patient-testimonial-poster.jpg"
            caption={shared.storiesCardTitle}
            ariaLabel={shared.storiesCardTitle}
          />
        </div>
      </section>
    );
  }

  function FaqSection() {
    return (
      <section className="ksa-section ksa-faq-section" aria-labelledby="ksa-faq-title">
        <div className="ksa-container ksa-faq-layout">
          <SectionHeading id="ksa-faq-title" eyebrow={shared.faqEyebrow} title={shared.faqTitle} />
          <div className="ksa-faq-list">
            {content.treatment.faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<b aria-hidden="true">＋</b></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function ConversionSection() {
    return (
      <section className="ksa-section ksa-conversion-section" id="consultation" aria-labelledby="ksa-conversion-title">
        <div className="ksa-container ksa-conversion-layout">
          <div className="ksa-conversion-copy">
            <SectionHeading id="ksa-conversion-title" eyebrow={shared.conversionEyebrow} title={shared.conversionTitle} text={shared.conversionText} />
            <div className="ksa-conversion-contact">
              <span>{shared.whatsappPrompt}</span>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{shared.whatsapp}<span aria-hidden="true">↗</span></a>
            </div>
            <div className="ksa-whatsapp-benefits">
              {shared.whatsappBenefits.map((benefit) => <span key={benefit}><KsaIcon name="check" />{benefit}</span>)}
            </div>
          </div>
          <aside className="ksa-whatsapp-card">
            <span className="ksa-whatsapp-kicker">WhatsApp</span>
            <h3>{shared.whatsappCardTitle}</h3>
            <p>{shared.whatsappCardText}</p>
            <ol>
              {shared.whatsappSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}
            </ol>
            <a className="ksa-button ksa-button--gold" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {shared.whatsappCta}<span aria-hidden="true">↗</span>
            </a>
            <small>{shared.whatsappNote}</small>
          </aside>
        </div>
      </section>
    );
  }

  const sectionMap = {
    treatment: <TreatmentSection />,
    trust: <TrustSection />,
    process: <ProcessSection />,
    price: <PriceSection />,
    travel: <TravelSection />,
    stories: <StoriesSection />,
    faq: <FaqSection />,
    conversion: <ConversionSection />
  };

  return (
    <div className={`ksa-landing ksa-landing--${variant}`} dir={locale === "ar" ? "rtl" : "ltr"} lang={locale === "ar" ? "ar-SA" : "en"}>
      <a className="ksa-skip-link" href="#ksa-main">{locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}</a>
      <header className="ksa-header">
        <div className="ksa-container ksa-header-inner">
          <div className="ksa-brand" aria-label={locale === "ar" ? "الدكتور علي الحنيطي" : "Dr. Ali Alheneiti"}>
            <img src="/media/brand/dr-ali-alheneiti-logo.webp" alt="" width="118" height="48" />
            <span>{shared.brandLine}</span>
          </div>
          <p className="ksa-header-location"><KsaIcon name="pin" />{shared.location}</p>
          <nav className="ksa-header-actions" aria-label={locale === "ar" ? "خيارات الصفحة" : "Page options"}>
            <a className="ksa-language-link" href={otherLocaleUrl} hrefLang={otherLocale}>{shared.switchLanguage}</a>
            <a className="ksa-header-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{shared.whatsapp}<span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main id="ksa-main">
        <Hero locale={locale} treatment={treatment} variant={variant} />
        {ksaSectionOrder[variant].map((section) => <div key={section}>{sectionMap[section as keyof typeof sectionMap]}</div>)}
      </main>

      <footer className="ksa-footer">
        <div className="ksa-container">
          <img src="/media/brand/dr-ali-alheneiti-logo.webp" alt={locale === "ar" ? "الدكتور علي الحنيطي" : "Dr. Ali Alheneiti"} width="124" height="52" />
          <p>{shared.footer}</p>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
      <a className="ksa-mobile-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{shared.whatsappCta}<span aria-hidden="true">↗</span></a>
    </div>
  );
}
