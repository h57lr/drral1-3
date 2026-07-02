import Link from "next/link";
import { CaseCarousel } from "@/components/CaseCarousel";
import { HeroVideo } from "@/components/HeroVideo";
import { blogPosts, cases, dictionary, reels, reviews, services, site, type CaseMedia } from "@/lib/content";
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
            <span>{locale === "ar" ? "هوليوود سمايل، فينير، زيركون وزراعة بتخطيط يراعي تفاصيل الوجه." : "Hollywood smile, veneers, zircon, and implants planned around your facial details."}</span>
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
    id: "reel-01",
    videoSrc: "/media/reels/reel-01.mp4",
    posterSrc: "/media/posters/reel-01.jpg",
    title: { en: "Veneers + Hollywood Smile", ar: "فينير وابتسامة هوليوود" },
    caption: { en: "Curated smile reel · Case 1", ar: "ريل ابتسامة مختار · الحالة 1" },
    alt: { en: "Smile transformation reel 1", ar: "ريل تحول ابتسامة 1" }
  },
  {
    id: "reel-12",
    videoSrc: "/media/reels/reel-12.mp4",
    posterSrc: "/media/posters/reel-12.jpg",
    title: { en: "Smile Transformation", ar: "تحول الابتسامة" },
    caption: { en: "Curated smile reel · Case 12", ar: "ريل ابتسامة مختار · الحالة 12" },
    alt: { en: "Smile transformation reel 12", ar: "ريل تحول ابتسامة 12" }
  },
  {
    id: "reel-02",
    videoSrc: "/media/reels/reel-02.mp4#t=1.8",
    posterSrc: "/media/posters/reel-02.jpg",
    title: { en: "Veneers Focus", ar: "تفاصيل الفينير" },
    caption: { en: "Curated smile reel · Case 2", ar: "ريل ابتسامة مختار · الحالة 2" },
    alt: { en: "Smile transformation reel 2", ar: "ريل تحول ابتسامة 2" }
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
                <>مراجع حقيقية <span className="script">قبل وبعد</span>.</>
              ) : (
                <>Real <span className="script">before</span> &amp;<br />after references.</>
              )}
            </h2>
          </div>
          <p className="lead">
            {locale === "ar"
              ? "شاهد ثلاث ريلز مختارة توضح اللون، الشكل، وتناسق الابتسامة مع الوجه قبل اختيار مسار الاستشارة المناسب."
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
                controls
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
  const dict = dictionary[locale];
  const list = full ? reels : reels.slice(0, 5);
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow={locale === "ar" ? "إنستغرام ريلز" : "Instagram Reels"}
          title={locale === "ar" ? "لقطات تعليمية واجتماعية من تجربة الابتسامة." : "Educational and social moments from the smile experience."}
          text={dict.reelsNotice}
        />
        <p className="scroll-hint">{locale === "ar" ? "اسحب لمشاهدة المزيد" : "Swipe to see more"}</p>
        <div className="reel-row">
          {list.map((item) => <ReelCard key={item.id} item={item} locale={locale} />)}
        </div>
      </div>
    </section>
  );
}

export function AboutPreview({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="container split">
        <div className="portrait-card" aria-hidden="true" />
        <div>
          <p className="eyebrow">{locale === "ar" ? "عن الدكتور" : "About Dr. Ali"}</p>
          <h2 className="section-title">{locale === "ar" ? "نهج طبي وجمالي لابتسامات تبدو طبيعية." : "A medical and aesthetic approach to natural-looking smiles."}</h2>
          <p className="lead">
            {locale === "ar"
              ? "يجمع الدكتور علي بين التخطيط الطبي الدقيق والحس الجمالي الهادئ لمساعدة المرضى على اختيار لون وشكل ابتسامة يناسب الوجه ولا يبدو مصطنعاً."
              : "Dr. Ali combines precise clinical planning with restrained aesthetic taste to help patients choose a smile shape and shade that fits the face without looking artificial."}
          </p>
          <div className="button-row">
            <Link className="button secondary" href={`/${locale}/about`}>{locale === "ar" ? "تعرف على الدكتور" : "Meet Dr. Ali"}</Link>
          </div>
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
  return (
    <section className="section compact">
      <div className="container">
        <SectionHead
          eyebrow={locale === "ar" ? "دليل المرضى" : "Patient Guides"}
          title={locale === "ar" ? "مقالات تدعم البحث والتحويل." : "Content that supports ranking and conversion."}
          text={locale === "ar" ? "موضوعات مبنية حول هوليوود سمايل، الزيركون، الفينير، الزراعة، والسياحة العلاجية." : "Topics built around Hollywood smile, zircon, veneers, implants, and medical tourism search intent."}
        />
        <div className="card-grid">
          {blogPosts.map((post) => (
            <Link className="blog-card" key={post.slug} href={`/${locale}/blog/${post.slug}`}>
              <span className="pill">SEO</span>
              <h3>{post.title[locale]}</h3>
              <p>{post.excerpt[locale]}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
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
