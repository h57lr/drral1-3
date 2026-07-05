import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { SectionHead } from "@/components/Sections";
import { ServiceCaseCarousel, ServiceHeroCarousel } from "@/components/ServiceHeroCarousel";
import { getCanonicalServiceSlug, getService, services, site, type Service } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return services.flatMap((service) => [{ locale: "en", slug: service.slug }, { locale: "ar", slug: service.slug }]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const service = getService(slug);

  if (!service) {
    return { title: "Service" };
  }

  return {
    title: service.seoTitle[locale],
    description: service.metaDescription[locale],
    keywords: service.keywords,
    alternates: {
      canonical: `/${locale}/services/${service.slug}`,
      languages: {
        en: `/en/services/${service.slug}`,
        ar: `/ar/services/${service.slug}`
      }
    },
    openGraph: {
      title: service.seoTitle[locale],
      description: service.metaDescription[locale],
      type: "website",
      url: `/${locale}/services/${service.slug}`
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const canonicalSlug = getCanonicalServiceSlug(slug);

  if (canonicalSlug !== slug) {
    redirect(`/${locale}/services/${canonicalSlug}`);
  }

  const service = getService(slug);
  if (!service) notFound();

  const labels = getServiceLabels(locale);
  const heroMedia = getServiceHeroMedia(service.slug, locale);
  const caseMedia = getServiceCaseMedia(service.slug, locale);
  const hideJourneyAndCases = service.slug === "teeth-whitening-amman" || service.slug === "orthodontics-amman";
  const visibleCases = service.slug === "dental-implants-amman" ? service.cases[locale].slice(0, 1) : service.cases[locale];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs[locale].map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="service-hero">
        <div className="container service-hero-grid">
          <div className="service-hero-copy">
            <p className="eyebrow">{service.heroEyebrow[locale]}</p>
            <h1 className="display">{service.title[locale]}</h1>
            <p className="lead">{service.description[locale]}</p>
            <p className="service-hero-intro">{service.heroIntro[locale]}</p>
            <div className="button-row">
              <Link className="button" href={`/${locale}/contact`}>{labels.book}</Link>
              <a className="button secondary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">{labels.whatsapp}</a>
            </div>
            <div className="service-trust-line" aria-label={labels.trustAria}>
              <span>{service.trustPhrase[locale]}</span>
              <span>{locale === "ar" ? "تخطيط واضح قبل العلاج" : "Clear planning before treatment"}</span>
            </div>
          </div>

          <div className={`service-hero-visual service-media-${service.slug}${heroMedia ? ` has-image has-${heroMedia.type}` : ""}`} aria-hidden={heroMedia ? undefined : "true"}>
            {heroMedia?.type === "image" ? (
              <img className="service-hero-image" src={heroMedia.src} alt={heroMedia.alt} />
            ) : heroMedia?.type === "carousel" ? (
              <ServiceHeroCarousel images={heroMedia.images} alt={heroMedia.alt} />
            ) : (
              <>
                <div className="service-visual-card primary">
                  <span className="service-visual-icon"><ServiceIcon name={service.benefits[locale][0]?.icon ?? "spark"} /></span>
                  <strong>{service.navTitle[locale]}</strong>
                  <p>{service.bullets[locale][0]}</p>
                </div>
                <div className="service-visual-card floating">
                  <span>{locale === "ar" ? "عمّان، الأردن" : "Amman, Jordan"}</span>
                  <strong>{locale === "ar" ? "نتائج طبيعية" : "Natural-looking results"}</strong>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container service-intro-panel">
          <div>
            <p className="eyebrow">{labels.introduction}</p>
            <h2 className="section-title">{service.intro[locale].heading}</h2>
          </div>
          <div className="service-intro-copy">
            {service.intro[locale].body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {service.intro[locale].note ? <p className="service-note">{service.intro[locale].note}</p> : null}
          </div>
        </div>
      </section>

      <section className="section compact service-soft-section">
        <div className="container">
          <SectionHead eyebrow={labels.candidatesEyebrow} title={labels.candidatesTitle} text={labels.candidatesText} />
          <div className="service-check-grid">
            {service.candidates[locale].map((item) => <article className="service-check-card" key={item}>{item}</article>)}
          </div>
        </div>
      </section>

      {!hideJourneyAndCases ? (
        <section className="section compact">
          <div className="container">
            <SectionHead eyebrow={labels.processEyebrow} title={labels.processTitle} text={labels.processText} />
            <div className="service-timeline">
              {service.process[locale].map((step, index) => (
                <article className="service-step-card" key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section compact service-dark-section">
        <div className="container">
          <SectionHead eyebrow={labels.benefitsEyebrow} title={labels.benefitsTitle} text={labels.benefitsText} />
          <div className="service-benefit-grid">
            {service.benefits[locale].map((benefit) => (
              <article className="service-benefit-card" key={benefit.title}>
                <span className="service-card-icon"><ServiceIcon name={benefit.icon} /></span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {!hideJourneyAndCases ? (
        <>
          <section className="section compact">
            <div className="container service-why-panel">
              <div className="service-why-copy">
                <p className="eyebrow">{labels.whyEyebrow}</p>
                <h2 className="section-title">{labels.whyTitle}</h2>
                <p className="lead">{labels.whyText}</p>
              </div>
              <div className="service-why-list">
                {service.whyChoose[locale].map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section compact service-journey-section">
            <div className="container service-journey-card">
              <p className="eyebrow">{labels.travelEyebrow}</p>
              <h2>{labels.travelTitle}</h2>
              <p>{labels.travelText}</p>
            </div>
          </section>
        </>
      ) : null}

      {!hideJourneyAndCases ? (
        <section className="section compact">
          <div className="container">
            <SectionHead eyebrow={labels.casesEyebrow} title={labels.casesTitle} text={labels.casesText} />
            <div className={`service-case-grid${visibleCases.length === 1 ? " single" : ""}`}>
              {visibleCases.map((item, index) => {
                const media = caseMedia[index];

                return (
                  <article className="service-case-card" key={item.title}>
                    <div className={`service-case-visual${media ? " has-carousel" : ""}`}>
                      {media ? <ServiceCaseCarousel images={media.images} alt={media.alt} /> : null}
                      {service.slug !== "dental-implants-amman" ? <span className="service-case-number">{String(index + 1).padStart(2, "0")}</span> : null}
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section compact service-soft-section">
        <div className="container">
          <SectionHead eyebrow={labels.faqEyebrow} title={labels.faqTitle} text={labels.faqText} />
          <div className="faq-list service-faq-list">
            {service.faqs[locale].map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices service={service} locale={locale} />
      <ServiceFinalCta locale={locale} />
    </main>
  );
}

function RelatedServices({ service, locale }: { service: Service; locale: Locale }) {
  const labels = getServiceLabels(locale);
  const relatedServices = service.related.map((slug) => services.find((item) => item.slug === slug)).filter((item): item is Service => Boolean(item));

  if (relatedServices.length === 0) return null;

  return (
    <section className="section compact">
      <div className="container">
        <SectionHead eyebrow={labels.relatedEyebrow} title={labels.relatedTitle} text={labels.relatedText} />
        <div className="card-grid service-related-grid">
          {relatedServices.map((item) => (
            <Link className="service-card" href={`/${locale}/services/${item.slug}`} key={item.slug}>
              <span className="pill">{item.keywords[0]}</span>
              <h3>{item.title[locale]}</h3>
              <p>{item.description[locale]}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceFinalCta({ locale }: { locale: Locale }) {
  return (
    <section className="section compact">
      <div className="container cta-panel service-final-cta">
        <p className="eyebrow">{locale === "ar" ? "ابدأ بخطة واضحة" : "Start with a clear plan"}</p>
        <h2 className="section-title">{locale === "ar" ? "هل أنت مستعد لتخطيط ابتسامتك مع الدكتور علي؟" : "Ready to plan your smile with Dr. Ali?"}</h2>
        <p className="lead">{locale === "ar" ? "احجز استشارتك واحصل على توجيه واضح قبل بدء العلاج." : "Book a consultation and receive clear guidance before starting your treatment."}</p>
        <div className="button-row">
          <Link className="button pistachio" href={`/${locale}/contact`}>{locale === "ar" ? "احجز استشارة" : "Book Consultation"}</Link>
          <a className="button secondary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">{locale === "ar" ? "تواصل عبر واتساب" : "WhatsApp Consultation"}</a>
        </div>
      </div>
    </section>
  );
}

function getServiceHeroMedia(slug: string, locale: Locale) {
  if (slug === "dental-veneers-jordan") {
    return {
      type: "carousel" as const,
      alt: locale === "ar" ? "حالة فينير أسنان قبل وبعد مع الدكتور علي" : "Dental veneers before and after case with Dr. Ali",
      images: [
        {
          src: "/media/cases/instagram/20/image-07.webp",
          label: locale === "ar" ? "قبل" : "Before"
        },
        {
          src: "/media/cases/instagram/20/image-06.webp",
          label: locale === "ar" ? "بعد" : "After"
        }
      ]
    };
  }

  if (slug === "teeth-whitening-amman") {
    return {
      type: "carousel" as const,
      alt: locale === "ar" ? "تبييض الأسنان قبل وبعد مع الدكتور علي" : "Teeth whitening before and after with Dr. Ali",
      images: [
        {
          src: "/media/yellow_teeth_before.webp",
          label: locale === "ar" ? "قبل" : "Before"
        },
        {
          src: "/media/yellow_teeth_after.webp",
          label: locale === "ar" ? "بعد" : "After"
        }
      ]
    };
  }

  if (slug === "orthodontics-amman") {
    return {
      type: "carousel" as const,
      alt: locale === "ar" ? "تقويم الأسنان والشفاف مع الدكتور علي" : "Orthodontics braces and aligners with Dr. Ali",
      images: [
        {
          src: "/media/Transparent-Teeth-Braces_and_aligner_1.webp",
          label: locale === "ar" ? "تقويم شفاف" : "Aligners"
        },
        {
          src: "/media/Transparent-Teeth-Braces_and_aligner_2.webp",
          label: locale === "ar" ? "تقويم الأسنان" : "Braces"
        },
        {
          src: "/media/Transparent-Teeth-Braces_and_aligner_3.webp",
          label: locale === "ar" ? "ابتسامة مثالية" : "Perfect Smile"
        }
      ]
    };
  }

  if (slug !== "dental-implants-amman") return null;

  return locale === "ar"
    ? {
      type: "image" as const,
      src: "/media/dental_implants_infographic_arabic.png",
      alt: "إنفوجرافيك يوضح زراعة الأسنان في عمّان مع الدكتور علي"
    }
    : {
      type: "image" as const,
      src: "/media/dental_implants_infographic_english.png",
      alt: "Dental implants infographic for Dr. Ali in Amman"
    };
}

function getServiceCaseMedia(slug: string, locale: Locale) {
  const before = locale === "ar" ? "قبل" : "Before";
  const after = locale === "ar" ? "بعد" : "After";

  if (slug === "dental-implants-amman") {
    return [
      {
        alt: locale === "ar" ? "حالة زراعة سن واحد وتاج نهائي" : "Single tooth implant case and final crown",
        images: [
          { src: "/media/implant_case_top_1.webp", label: locale === "ar" ? "البداية" : "Initial" },
          { src: "/media/implant_case_top_2.webp", label: locale === "ar" ? "التخطيط" : "Planning" },
          { src: "/media/implant_case_top_2_xray.webp", label: locale === "ar" ? "الأشعة" : "X-ray" },
          { src: "/media/implant_case_top_final.webp", label: locale === "ar" ? "النتيجة" : "Final" }
        ]
      }
    ];
  }

  if (slug !== "dental-veneers-jordan") return [];

  return [
    {
      alt: locale === "ar" ? "حالة فينير طبيعي قبل وبعد" : "Natural veneer smile before and after",
      images: [
        { src: "/media/cases/instagram/20/image-11.webp", label: "", splitLabels: { before, after } },
        { src: "/media/cases/instagram/20/image-12.webp", label: "", splitLabels: { before, after } }
      ]
    },
    {
      alt: locale === "ar" ? "نتيجة فينير زيركون قبل وبعد" : "Zircon veneer result before and after",
      images: [
        { src: "/media/cases/instagram/20/image-22.webp", label: before },
        { src: "/media/cases/instagram/20/image-21.webp", label: after }
      ]
    },
    {
      alt: locale === "ar" ? "تحسين شكل الابتسامة قبل وبعد" : "Smile shape enhancement before and after",
      images: [
        { src: "/media/cases/instagram/20/image-16.webp", label: before },
        { src: "/media/cases/instagram/20/image-15.webp", label: after }
      ]
    }
  ];
}

function ServiceIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {name === "anchor" ? <><path d="M12 4.5v13" /><path d="M8.5 8h7" /><path d="M6 14.5c1.2 3 3.2 4.8 6 4.8s4.8-1.8 6-4.8" /><path d="M9.5 4.5h5" /></> : null}
      {name === "bite" ? <><path d="M7.2 5.2c1.9-1 3.2.4 4.8.4s2.9-1.4 4.8-.4c2.1 1.1 2.4 4.8.5 9.6-.8 2-1.7 4-3.1 4-1.2 0-1-2.7-2.2-2.7s-1 2.7-2.2 2.7c-1.4 0-2.3-2-3.1-4-1.9-4.8-1.6-8.5.5-9.6Z" /><path d="M9 10.2h6" /></> : null}
      {name === "clock" || name === "calendar" ? <><path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z" /><path d="M12 8.2v4.1l2.7 1.6" /></> : null}
      {name === "align" || name === "foundation" ? <><path d="M5 7h14" /><path d="M7 12h10" /><path d="M9 17h6" /></> : null}
      {name === "target" ? <><path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z" /><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" /><path d="M12 11.4v1.2" /></> : null}
      {name === "leaf" || name === "natural" ? <><path d="M6 17.5c7.2.2 10.9-3.4 12-11.2-7.6.9-11.3 4.8-12 11.2Z" /><path d="M6 17.5 14.5 9" /></> : null}
      {name === "balance" ? <><path d="M12 4.5v15" /><path d="M6 8h12" /><path d="M7.5 8 5 13h5L7.5 8Z" /><path d="M16.5 8 14 13h5l-2.5-5Z" /></> : null}
      {! ["anchor", "bite", "clock", "calendar", "align", "foundation", "target", "leaf", "natural", "balance"].includes(name) ? <><path d="M12 4.2c1.4 3.2 3.2 5 6.4 6.4-3.2 1.4-5 3.2-6.4 6.4-1.4-3.2-3.2-5-6.4-6.4 3.2-1.4 5-3.2 6.4-6.4Z" /><path d="M18.2 3.8c.5 1.2 1.2 1.9 2.4 2.4-1.2.5-1.9 1.2-2.4 2.4-.5-1.2-1.2-1.9-2.4-2.4 1.2-.5 1.9-1.2 2.4-2.4Z" /></> : null}
    </svg>
  );
}

function getServiceLabels(locale: Locale) {
  return locale === "ar" ? {
    book: "احجز استشارة",
    whatsapp: "تواصل عبر واتساب",
    trustAria: "مؤشرات الثقة",
    introduction: "شرح العلاج",
    candidatesEyebrow: "لمن يناسب؟",
    candidatesTitle: "علامات تساعدك على معرفة إن كان العلاج مناسباً.",
    candidatesText: "تقييم الحالة هو الخطوة الأهم قبل أي قرار علاجي أو تجميلي.",
    processEyebrow: "رحلة العلاج",
    processTitle: "خطوات واضحة من الاستشارة إلى المتابعة.",
    processText: "كل خدمة لها مسار مختصر ومنظم يساعدك على فهم ما يحدث قبل البدء.",
    benefitsEyebrow: "المزايا",
    benefitsTitle: "نتيجة أجمل عندما يكون التخطيط أهدأ وأكثر دقة.",
    benefitsText: "فوائد عملية وجمالية بدون وعود مبالغ فيها أو لغة تجارية.",
    whyEyebrow: "لماذا الدكتور علي؟",
    whyTitle: "تخطيط طبيعي ومحافظ لتجربة راقية.",
    whyText: "يركز الدكتور علي على الاستشارة الواضحة، النتائج الطبيعية، وتخطيط الابتسامة حول الوجه لا حول قالب جاهز.",
    travelEyebrow: "مرضى أوروبا والخليج",
    travelTitle: "رحلة علاجية منظمة في الأردن.",
    travelText: "تخطيط واضح، تنسيق للمواعيد، وتوجيه مهني للمرضى القادمين إلى الأردن لعلاج الأسنان دون تحويل التجربة إلى سياحة مبالغ فيها.",
    casesEyebrow: "قبل وبعد",
    casesTitle: "مساحة جاهزة لحالات حقيقية لاحقاً.",
    casesText: "هذه البطاقات مصممة لتستبدل بصور حالات حقيقية عند توفرها مع الحفاظ على شكل الصفحة الراقي.",
    faqEyebrow: "أسئلة شائعة",
    faqTitle: "إجابات واضحة قبل الاستشارة.",
    faqText: "أسئلة المرضى الأكثر شيوعاً بصياغة مهنية تساعد على اتخاذ القرار بثقة.",
    relatedEyebrow: "خدمات مرتبطة",
    relatedTitle: "خيارات أخرى قد تكمل خطة ابتسامتك.",
    relatedText: "روابط داخلية تساعدك على فهم الصورة الكاملة قبل الحجز."
  } : {
    book: "Book Consultation",
    whatsapp: "WhatsApp Consultation",
    trustAria: "Trust markers",
    introduction: "Treatment Introduction",
    candidatesEyebrow: "Who is it for?",
    candidatesTitle: "Signs this treatment may be right for you.",
    candidatesText: "A consultation is still the most important step before choosing any cosmetic or restorative treatment.",
    processEyebrow: "Treatment Journey",
    processTitle: "A clear path from consultation to follow-up.",
    processText: "Each service follows a concise, doctor-led sequence so you understand the plan before starting.",
    benefitsEyebrow: "Benefits",
    benefitsTitle: "Better outcomes begin with calmer, more precise planning.",
    benefitsText: "Practical and aesthetic benefits presented without exaggerated promises.",
    whyEyebrow: "Why choose Dr. Ali?",
    whyTitle: "Natural, conservative planning for a premium experience.",
    whyText: "Dr. Ali focuses on clear consultation, natural-looking results, and face-balanced smile planning rather than a one-template approach.",
    travelEyebrow: "EU & GCC Patient Journey",
    travelTitle: "Organized dental treatment planning in Jordan.",
    travelText: "Clear treatment planning, appointment coordination, and professional guidance for patients visiting Jordan for dental treatment — premium, calm, and not overly touristy.",
    casesEyebrow: "Before & After",
    casesTitle: "A polished case area ready for real results.",
    casesText: "These placeholders are designed to be replaced with approved real patient cases while keeping the page visually consistent.",
    faqEyebrow: "FAQ",
    faqTitle: "Clear answers before consultation.",
    faqText: "Common patient questions answered in a professional, search-friendly way.",
    relatedEyebrow: "Related Services",
    relatedTitle: "Other treatments that may support your smile plan.",
    relatedText: "Internal links help you compare connected options before booking."
  };
}
