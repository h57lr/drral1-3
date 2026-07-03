import Link from "next/link";
import { CaseCarousel } from "@/components/CaseCarousel";
import { HeroVideo } from "@/components/HeroVideo";
import { TestimonialReelSlider } from "@/components/TestimonialReelSlider";
import { blogPosts, cases, dictionary, doctorProfileHighlight, reels, reviews, services, site, type CaseMedia } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const dict = dictionary[locale];
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{locale === "ar" ? "طب تجميل الأسنان في الأردن" : "Cosmetic Dentistry in Jordan"}</p>
          <h1 className="display">
            {locale === "ar" ? "ابتسامة مصممة" : "Smile design"}<br />
            <span className="script">{locale === "ar" ? "بشكل طبيعي" : "with softness"}</span>
          </h1>
          <p className="lead">
            {locale === "ar"
              ? "د. علي الحنيطي يقدم تجربة تجميل أسنان راقية تجمع بين الجمال، الدقة الطبية، والنتائج الطبيعية لابتسامة واثقة في عمان، الأردن."
              : "Dr. Ali Alheneiti creates refined cosmetic dentistry experiences where beauty, precision, and natural results meet in Amman, Jordan."}
          </p>
          <div className="button-row">
            <a className="button" href={site.whatsapp} target="_blank" rel="noopener noreferrer">{dict.cta}</a>
            <Link className="button secondary" href={`/${locale}/cases`}>{dict.viewCases}</Link>
          </div>
          <p className="cta-note">
            {locale === "ar"
              ? "أرسل صور الابتسامة بسرية لتحصل على توجيه أولي حول الخيارات، الوقت، والخطوة التالية."
              : "Send smile photos privately for initial guidance on options, timing, and next steps."}
          </p>
        </div>
        <div className="hero-media" aria-hidden="true">
          <div className="hero-card">
            <HeroVideo />
          </div>
          <div className="hero-note">
            <strong>{locale === "ar" ? "نتائج طبيعية" : "Natural results"}</strong>
            <span>{locale === "ar" ? "ابتسامة طبيعية تمنحك ثقة والقوة، فينير، زيركون وزراعة الاسنان بتخطيط  دقيق يراعي تفاصيل تصميم الوجه" : "Hollywood smile, veneers, zircon, and implants planned around your facial details."}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip({ locale }: { locale: Locale }) {
  const items = locale === "ar"
    ? [["5★", "تقييمات المرضى"], ["AR/EN", "تجربة ثنائية اللغة"], ["Amman", "عيادة في الأردن"], ["WA", "توجيه خاص بالصور"]]
    : [["5★", "Patient reviews"], ["AR/EN", "Bilingual experience"], ["Amman", "Jordan clinic"], ["WA", "Photo-based guidance"]];

  return (
    <section className="section compact">
      <div className="container trust-strip">
        {items.map(([value, label]) => (
          <div className="trust-item" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DoctorProfileHighlight({ locale }: { locale: Locale }) {
  const content = doctorProfileHighlight[locale];
  const titleParts = content.title.split(content.accent);

  return (
    <section className="section doctor-profile-section" aria-labelledby="doctor-profile-title">
      <div className="container doctor-profile-panel">
        <div className="doctor-profile-media">
          <img src="/media/profile-pic.jpg" alt={content.imageAlt} loading="lazy" />
          <div className="doctor-profile-signature" aria-label={`${content.signature}, ${content.specialty}`}>
            <strong>{content.signature}</strong>
            <span>{content.specialty}</span>
          </div>
        </div>

        <div className="doctor-profile-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title" id="doctor-profile-title">
            {titleParts[0]}
            <span className="script">{content.accent}</span>
            {titleParts[1] ?? ""}
          </h2>
          <p className="lead">{content.body}</p>

        </div>

        <ul className="doctor-journey-grid" aria-label={locale === "ar" ? "بطاقات تجربة الابتسامة" : "Smile journey score cards"}>
          {content.scoreCards.map((card) => (
            <li className="doctor-journey-card" key={card.title}>
              <span className="doctor-journey-icon" aria-hidden="true"><JourneyIcon name={card.icon} /></span>
              <strong>{card.title}</strong>
              <span>{card.text}</span>
            </li>
          ))}
        </ul>
        <p className="doctor-profile-note doctor-journey-note">{content.trustNote}</p>
      </div>
    </section>
  );
}

function JourneyIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (name === "natural") {
    return (
      <svg {...common}>
        <path d="M7.8 4.8h8.4c.9 0 1.6.7 1.6 1.6v11.2c0 .9-.7 1.6-1.6 1.6H7.8c-.9 0-1.6-.7-1.6-1.6V6.4c0-.9.7-1.6 1.6-1.6Z" />
        <path d="M9 8.1c1.9-1.1 4.1-1.1 6 0" />
        <path d="M9.2 15.1c1.7 1.4 3.9 1.4 5.6 0" />
        <path d="M12 10.2v3.1" />
      </svg>
    );
  }

  if (name === "journey") {
    return (
      <svg {...common}>
        <path d="M8.2 7.5V6.3c0-1 .8-1.8 1.8-1.8h4c1 0 1.8.8 1.8 1.8v1.2" />
        <path d="M5.8 7.5h12.4c.9 0 1.6.7 1.6 1.6v7.8c0 .9-.7 1.6-1.6 1.6H5.8c-.9 0-1.6-.7-1.6-1.6V9.1c0-.9.7-1.6 1.6-1.6Z" />
        <path d="M4.6 12.2h14.8" />
        <path d="M9.2 12.2v1.5c0 .5.4.9.9.9h3.8c.5 0 .9-.4.9-.9v-1.5" />
      </svg>
    );
  }

  if (name === "consultation") {
    return (
      <svg {...common}>
        <path d="M7.2 12.9 9 11.1c.8-.8 2-.8 2.8 0l.4.4" />
        <path d="m12.2 11.5.4-.4c.8-.8 2-.8 2.8 0l1.4 1.4" />
        <path d="m8.1 13.8 3.1 3.1c.5.5 1.3.5 1.8 0l3.1-3.1" />
        <path d="M6.4 8.8h11.2" />
        <path d="M12 4.6a7.4 7.4 0 1 0 0 14.8 7.4 7.4 0 0 0 0-14.8Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 4.2c1.4 3.2 3.2 5 6.4 6.4-3.2 1.4-5 3.2-6.4 6.4-1.4-3.2-3.2-5-6.4-6.4 3.2-1.4 5-3.2 6.4-6.4Z" />
      <path d="M18.2 3.8c.5 1.2 1.2 1.9 2.4 2.4-1.2.5-1.9 1.2-2.4 2.4-.5-1.2-1.2-1.9-2.4-2.4 1.2-.5 1.9-1.2 2.4-2.4Z" />
    </svg>
  );
}

export function ServicesPreview({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow={locale === "ar" ? "الخدمات الأساسية" : "Signature Services"}
          title={locale === "ar" ? "خيارات تجميل الأسنان بخطة واضحة ومظهر طبيعي." : "Cosmetic dentistry options with a clear plan and natural finish."}
          text={locale === "ar" ? "تعرف على العلاجات الأساسية ثم انتقل إلى استشارة خاصة مبنية على صورك وهدفك الجمالي." : "Explore signature treatments, then move into a private consultation based on your photos and smile goals."}
        />
        <div className="card-grid">
          {services.slice(0, 3).map((service) => (
            <Link className="service-card" key={service.slug} href={`/${locale}/services/${service.slug}`}>
              <span className="pill">{service.keywords[0]}</span>
              <h3>{service.navTitle[locale]}</h3>
              <p>{service.description[locale]}</p>
              <ul>
                {service.bullets[locale].slice(0, 3).map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseShowcase({ locale, full = false, variant = "cases" }: { locale: Locale; full?: boolean; variant?: "cases" | "reels" }) {
  if (variant === "reels") {
    return <SmileReelTransformations locale={locale} />;
  }

  const instagramCases = reels.filter((item) => item.type === "before-after");
  const list = full ? [...instagramCases, ...cases] : [...instagramCases.slice(0, 4), ...cases.slice(0, 1)];
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow={locale === "ar" ? "قبل وبعد" : "Before & After"}
          title={locale === "ar" ? "تحولات ابتسامة تظهر الفرق بهدوء ووضوح." : "Smile transformations that show the difference clearly."}
          text={locale === "ar" ? "شاهد أمثلة على تناسق اللون، الشكل، وخط الابتسامة قبل اختيار الاستشارة المناسبة لحالتك." : "See examples of shade, shape, and smile-line improvements before choosing the right consultation path."}
        />
        <div className="case-grid">
          {list.map((item) => <CaseCard key={item.id} item={item} locale={locale} />)}
        </div>
        {!full ? <Link className="text-link" href={`/${locale}/cases`}>{locale === "ar" ? "شاهد جميع الحالات" : "View all transformations"}</Link> : null}
      </div>
    </section>
  );
}

const smileReelTransformations = [
  {
    id: "perfect-veneers",
    videoSrc: "/media/reels/reel-02.mp4#t=1.8",
    posterSrc: "/media/posters/reel-02.jpg",
    title: { en: "Perfect Veneers", ar: "فينير مثالي" },
    caption: { en: "Balanced shape, soft brightness, natural finish.", ar: "شكل متوازن، إشراقة ناعمة، ونتيجة طبيعية." },
    alt: { en: "Perfect veneers transformation reel", ar: "ريل تحول فينير مثالي" }
  },
  {
    id: "hollywood-smile",
    videoSrc: "/media/reels/reel-12.mp4",
    posterSrc: "/media/posters/reel-12.jpg",
    title: { en: "Hollywood Smile", ar: "هوليوود سمايل" },
    caption: { en: "Premium harmony with a camera-ready finish.", ar: "تناغم فاخر ولمسة جاهزة للكاميرا." },
    alt: { en: "Hollywood Smile transformation reel", ar: "ريل هوليوود سمايل" }
  },
  {
    id: "confident-smile",
    videoSrc: "/media/reels/reel-17.mp4#t=2.5",
    posterSrc: "/media/posters/reel-17.jpg",
    title: { en: "Confident Smile", ar: "ابتسامة واثقة" },
    caption: { en: "A polished result designed around the face.", ar: "نتيجة راقية مصممة حول ملامح الوجه." },
    alt: { en: "Confident smile patient reel", ar: "ريل ابتسامة واثقة" }
  }
] as const;

function SmileReelTransformations({ locale }: { locale: Locale }) {
  return (
    <section className="section smile-reels-section">
      <div className="container">
        <div className="smile-reels-head">
          <div>
            <p className="eyebrow">{locale === "ar" ? "تحولات الابتسامة" : "Smile Transformations"}</p>
            <h2 className="section-title">
              {locale === "ar" ? (
                <>حالات مراجع حقيقية <span className="script">قبل وبعد</span>.</>
              ) : (
                <>Real <span className="script">before</span> &amp;<br />after references.</>
              )}
            </h2>
          </div>
          <p className="lead">
            {locale === "ar"
              ? "شاهد الحالات التالية التي توضح اللون، الشكل، وتناسق الابتسامة مع الوجه قبل اختيار مسار الاستشارة المناسب."
              : "Watch three selected reels showing shade, shape, and facial harmony before choosing the right consultation path."}
          </p>
        </div>

        <div className="smile-reel-grid" aria-label={locale === "ar" ? "ريلز تحولات الابتسامة" : "Smile transformation reels"}>
          {smileReelTransformations.map((item) => (
            <article className="smile-reel-card" key={item.id}>
              <video
                src={item.videoSrc}
                poster={item.posterSrc}
                aria-label={item.alt[locale]}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
              <div className="smile-reel-overlay">
                <h3>{item.title[locale]}</h3>
                <p>{item.caption[locale]}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="smile-reels-note">
          {locale === "ar" ? "نتائج مرضى حقيقية. قد تختلف النتائج الفردية حسب كل حالة." : "Actual patient results. Individual outcomes may vary."}
        </p>
      </div>
    </section>
  );
}

export function ReelsShowcase({ locale, full = false }: { locale: Locale; full?: boolean }) {
  const list = full ? reels : reels.slice(0, 5);
  return (
    <section className="section testimonials-media-section">
      <div className="container">
        <SectionHead
          eyebrow={locale === "ar" ? "شهادات المرضى" : "Testimonials"}
          title={locale === "ar" ? "تجارب حقيقية تلهم الثقة قبل ابتسامتك الجديدة." : "Real patient stories that build confidence before your new smile."}
          text={locale === "ar" ? "شاهد لحظات قصيرة من تجربة المرضى وتحولات الابتسامة لدى الدكتور علي، حيث يلتقي التخطيط الدقيق مع النتيجة الطبيعية والشعور بالثقة." : "Watch refined patient moments and smile transformations from Dr. Ali's clinic, where careful planning meets natural results and renewed confidence."}
        />
        {full ? (
          <>
            <p className="scroll-hint">{locale === "ar" ? "اسحب لمشاهدة المزيد" : "Swipe to see more"}</p>
            <div className="reel-row">
              {list.map((item) => <ReelCard key={item.id} item={item} locale={locale} />)}
            </div>
          </>
        ) : <TestimonialReelSlider locale={locale} />}
      </div>
    </section>
  );
}

export function AboutPreview({ locale }: { locale: Locale }) {
  const content = doctorProfileHighlight[locale];
  const titleParts = content.title.split(content.accent);

  return (
    <section className="section doctor-profile-section" aria-labelledby="about-doctor-title">
      <div className="container doctor-profile-panel about-doctor-panel">
        <div className="doctor-profile-media">
          <img src="/media/profile-pic.jpg" alt={content.imageAlt} loading="lazy" />
          <div className="doctor-profile-signature" aria-label={`${content.signature}, ${content.specialty}`}>
            <strong>{content.signature}</strong>
            <span>{content.specialty}</span>
          </div>
        </div>
        <div className="doctor-profile-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title" id="about-doctor-title">
            {titleParts[0]}
            <span className="script">{content.accent}</span>
            {titleParts[1] ?? ""}
          </h2>
          <p className="lead">{content.body}</p>
        </div>
      </div>
    </section>
  );
}

export function Process({ locale }: { locale: Locale }) {
  const steps = locale === "ar"
    ? ["أرسل الصور بسرية", "مراجعة الحالة", "خطة وتوقيت مبدئي", "زيارة للتشخيص النهائي"]
    : ["Send photos privately", "Case review", "Initial plan and timing", "Clinic diagnosis"];
  return (
    <section className="section compact">
      <div className="container">
        <SectionHead
          eyebrow={locale === "ar" ? "الرحلة" : "The Process"}
          title={locale === "ar" ? "تجربة واضحة من أول رسالة واتساب." : "A clear experience from the first WhatsApp message."}
          text={locale === "ar" ? "الأسعار تبقى ضمن الاستشارة الخاصة، مع توجيه أولي مبني على الصور والهدف الجمالي." : "Pricing stays private through consultation, with early guidance based on photos and cosmetic goals."}
        />
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{step}</h3>
              <p>{locale === "ar" ? "خطوة بسيطة توضح ما تحتاجه، ما الصور المطلوبة، وكيف تبدأ بدون ضغط." : "A simple step that clarifies what is needed, which photos help, and how to start without pressure."}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow={locale === "ar" ? "الثقة" : "Trust"}
          title={locale === "ar" ? "ما يبحث عنه المرضى قبل اختيار طبيب التجميل." : "What patients look for before choosing a cosmetic dentist."}
          text={locale === "ar" ? "محاور ثقة أساسية: وضوح الخطة، راحة التجربة، ونتيجة طبيعية. أضف التقييمات الأصلية بعد موافقة العميل." : "Core trust themes: a clear plan, comfortable experience, and natural result. Add verified reviews after client approval."}
        />
        <div className="card-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.id}>
              <span className="pill">{review.treatment ?? review.source}</span>
              <span className="quote-mark" aria-hidden="true">“</span>
              <h3>{review.name}</h3>
              <p>{review.text[locale]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogPreview({ locale }: { locale: Locale }) {
  const featured = blogPosts[2] ?? blogPosts[0];
  const rest = blogPosts.filter((post) => post.slug !== featured.slug);
  const trust = locale === "ar"
    ? ["كتبها أطباء تجميل الأسنان", "معلومات موثوقة", "يتم تحديثها باستمرار", "موثوق من المرضى الدوليين"]
    : ["Written by cosmetic dentists", "Evidence-based information", "Updated regularly", "Trusted by international patients"];

  return (
    <section className="section journal-section">
      <div className="container">
        <div className="journal-head">
          <div>
            <p className="eyebrow">{locale === "ar" ? "مجلة الدكتور علي" : "Dental Journal"}</p>
            <h2 className="section-title">{locale === "ar" ? "كل ما تحتاج معرفته قبل ابتسامتك الجديدة" : "Everything You Need to Know Before Your New Smile"}</h2>
            <p className="lead">{locale === "ar" ? "أدلة شاملة، ونصائح من الخبراء، ومقارنات بين العلاجات، وتجارب حقيقية تساعدك على اتخاذ القرار بثقة." : "Expert advice, treatment comparisons, real patient insights, and complete guides to help you choose your smile with confidence."}</p>
          </div>
          <Link className="button secondary journal-cta" href={`/${locale}/blog`}>{locale === "ar" ? "عرض جميع المقالات →" : "View All Articles →"}</Link>
        </div>

        <div className="journal-grid">
          {rest.slice(0, 2).map((post, index) => <JournalCard key={post.slug} post={post} locale={locale} reverse={index % 2 === 1} />)}
          {featured ? <JournalCard post={featured} locale={locale} featured /> : null}
          {rest.slice(2, 3).map((post) => <JournalCard key={post.slug} post={post} locale={locale} />)}
        </div>

        <div className="journal-trust-strip" aria-label={locale === "ar" ? "مؤشرات الثقة" : "Editorial trust markers"}>
          {trust.map((item) => <span key={item}>✓ {item}</span>)}
        </div>
      </div>
    </section>
  );
}

function JournalCard({ post, locale, reverse = false, featured = false }: { post: (typeof blogPosts)[number]; locale: Locale; reverse?: boolean; featured?: boolean }) {
  return (
    <Link className={`journal-card ${reverse ? "reverse" : ""} ${featured ? "featured" : ""}`} href={`/${locale}/${post.slug}`}>
      <div className="journal-image">
        <img src={post.coverImage} alt={post.coverAlt[locale]} loading="lazy" />
      </div>
      <div className="journal-card-copy">
        <div className="journal-meta">
          <span className="pill">{post.category[locale]}</span>
          <span>{post.readTime}</span>
        </div>
        <h3>{post.title[locale]}</h3>
        <p>{post.excerpt[locale]}</p>
        <span className="read-more">{locale === "ar" ? "اقرأ المقال →" : "Read More →"}</span>
      </div>
    </Link>
  );
}

export function FinalCta({ locale }: { locale: Locale }) {
  const dict = dictionary[locale];
  return (
    <section className="section compact">
      <div className="container cta-panel">
        <p className="eyebrow">{locale === "ar" ? "استشارة خاصة" : "Private Consultation"}</p>
        <h2 className="section-title">{dict.finalCtaTitle}</h2>
        <p className="lead">{dict.finalCtaText}</p>
        <div className="button-row">
          <a className="button pistachio" href={site.whatsapp} target="_blank" rel="noopener noreferrer">{dict.cta}</a>
          <Link className="button secondary" href={`/${locale}/contact`}>{locale === "ar" ? "طرق التواصل" : "Contact details"}</Link>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-head">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      <p className="lead">{text}</p>
    </div>
  );
}

export function CaseCard({ item, locale }: { item: CaseMedia; locale: Locale }) {
  const slot = item.id.startsWith("ig-") ? item.id.replace("ig-", "") : null;
  const carouselOverrides: Record<string, string[]> = {
    "ig-03": ["04", "05"].map((image) => `/media/cases/instagram/20/image-${image}.jpg`),
    "ig-13": ["07", "06"].map((image) => `/media/cases/instagram/20/image-${image}.jpeg`),
  };
  const carouselImages = carouselOverrides[item.id]
    ?? (item.type === "before-after" && slot
    ? ["01", "03"].map((image) => `/media/cases/instagram/${slot}/image-${image}.jpg`)
    : []);
  const isPortraitCarousel = item.id === "ig-13";

  return (
    <article className={`case-card ${item.isFeatured ? "featured" : ""} ${isPortraitCarousel ? "portrait-carousel" : ""}`}>
      <div className="case-visual">
        {item.type === "before-after" ? (
          <>
            <span className="ba-label before">{locale === "ar" ? "قبل" : "Before"}</span>
            <span className="ba-label after">{locale === "ar" ? "بعد" : "After"}</span>
          </>
        ) : null}
        {carouselImages.length > 0 ? <CaseCarousel images={carouselImages} alt={item.alt[locale]} /> : item.assetReady ? <img src={item.posterSrc} alt={item.alt[locale]} /> : null}
      </div>
      <div className="case-body">
        <span className="pill">{item.treatment.replaceAll("-", " ")}</span>
        <h3>{item.title[locale]}</h3>
        <p>{item.caption[locale]}</p>
      </div>
    </article>
  );
}

export function ReelCard({ item, locale }: { item: CaseMedia; locale: Locale }) {
  const videoSrc = item.videoSrc && item.trimStartSeconds ? `${item.videoSrc}#t=${item.trimStartSeconds}` : item.videoSrc;
  return (
    <article className="reel-card">
      <div className="reel-frame">
        {item.assetReady && videoSrc ? (
          <video src={videoSrc} poster={item.posterSrc} muted playsInline preload="none" controls />
        ) : item.assetReady ? (
          <img src={item.posterSrc} alt={item.alt[locale]} />
        ) : null}
        <div className="reel-overlay">
          <span className="pill">{item.type}</span>
          <h3>{item.title[locale]}</h3>
          <p>{item.caption[locale]}</p>
          {item.sourceUrl ? <a className="reel-link" href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Instagram</a> : null}
        </div>
      </div>
    </article>
  );
}
