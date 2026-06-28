import Link from "next/link";
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
            <span className="script">{locale === "ar" ? "بطبيعية" : "with softness"}</span>
          </h1>
          <p className="lead">
            {locale === "ar"
              ? "د. علي الحنيطي يقدم تجربة تجميل أسنان راقية تجمع بين الجمال، الدقة الطبية، والنتائج الطبيعية لابتسامة واثقة في عمان، الأردن."
              : "Dr. Ali Alheneiti creates refined cosmetic dentistry experiences where beauty, precision, and natural results meet in Amman, Jordan."}
          </p>
          <div className="button-row">
            <Link className="button" href={site.whatsapp}>{dict.cta}</Link>
            <Link className="button secondary" href={`/${locale}/cases`}>{dict.viewCases}</Link>
          </div>
        </div>
        <div className="hero-media" aria-hidden="true">
          <div className="hero-card" />
          <div className="hero-orbit" />
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
    ? [["5★", "تقييمات جوجل"], ["AR/EN", "تجربة ثنائية اللغة"], ["30", "مساحة ريلز للحالات"], ["WA", "استشارة خاصة"]]
    : [["5★", "Google-style reviews"], ["AR/EN", "Bilingual experience"], ["30", "Reel case slots"], ["WA", "Private consultation"]];

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
          title={locale === "ar" ? "تجميل أسنان مصمم كعلامة جمال فاخرة." : "Cosmetic dentistry designed like a luxury beauty experience."}
          text={locale === "ar" ? "كل صفحة خدمة جاهزة للسيو وتربط بين المعلومات، الحالات، الريلز، والاستشارة." : "Each service page is SEO-ready and connects education, transformations, reels, and consultation."}
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

export function CaseShowcase({ locale, full = false }: { locale: Locale; full?: boolean }) {
  const instagramCases = reels.filter((item) => item.type === "before-after");
  const list = full ? [...instagramCases, ...cases] : [...instagramCases.slice(0, 4), ...cases.slice(0, 1)];
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow={locale === "ar" ? "قبل وبعد" : "Before & After"}
          title={locale === "ar" ? "النتائج يجب أن تقود الصفحة." : "Proof should lead the page."}
          text={locale === "ar" ? "هذه البطاقات جاهزة لاستبدالها بصور الحالات الحقيقية من تصدير إنستغرام أو ملفات العميل." : "These cards are ready to be replaced with real transformations from Instagram export or client media."}
        />
        <div className="case-grid">
          {list.map((item) => <CaseCard key={item.id} item={item} locale={locale} />)}
        </div>
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
          title={locale === "ar" ? "فيديوهات عمودية تشبه تجربة إنستغرام." : "Vertical video content with an Instagram-feed feel."}
          text={locale === "ar" ? dict.placeholderNotice : dict.placeholderNotice}
        />
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
          <p className="eyebrow">{locale === "ar" ? "العلامة الشخصية" : "Doctor-Led Brand"}</p>
          <h2 className="section-title">{locale === "ar" ? "د. علي كوجهة للابتسامات الطبيعية." : "Dr. Ali as the destination for natural smile beauty."}</h2>
          <p className="lead">
            {locale === "ar"
              ? "يركز الموقع على شخصية الدكتور وخبرته الجمالية، مع بناء ثقة طبية واضحة وواجهة أنيقة تناسب جمهوراً يبحث عن نتيجة راقية لا تبدو مصطنعة."
              : "The website centers Dr. Ali's personal brand: refined taste, cosmetic precision, and a medically grounded path to a smile that looks beautiful without looking artificial."}
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
    ? ["استشارة خاصة", "تحليل الابتسامة", "تصميم وخطة", "النتيجة والمتابعة"]
    : ["Private consultation", "Smile analysis", "Design and plan", "Reveal and follow-up"];
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
              <p>{locale === "ar" ? "خطوة عملية مصممة لتقليل التردد وتوضيح النتيجة المتوقعة." : "A practical step designed to reduce uncertainty and clarify the expected result."}</p>
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
          eyebrow={locale === "ar" ? "التقييمات" : "Reviews"}
          title={locale === "ar" ? "تقييمات جوجل وفيديوهات المرضى." : "Google-style reviews and patient videos."}
          text={locale === "ar" ? "الهيكل جاهز للتقييمات الأصلية من Google Business Profile وفيديوهات المرآة من إنستغرام." : "The structure is ready for original Google Business Profile reviews and Instagram mirror-reaction testimonials."}
        />
        <div className="card-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.id}>
              <span className="pill">★★★★★ {review.source}</span>
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
          eyebrow={locale === "ar" ? "السيو" : "SEO Blog"}
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
          <Link className="button pistachio" href={site.whatsapp}>{dict.cta}</Link>
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
  return (
    <article className={`case-card ${item.isFeatured ? "featured" : ""}`}>
      <div className="case-visual" role="img" aria-label={item.alt[locale]}>
        {item.assetReady ? <img src={item.posterSrc} alt={item.alt[locale]} /> : null}
      </div>
      <div className="case-body">
        <span className="pill">{item.treatment.replaceAll("-", " ")}</span>
        <h3>{item.title[locale]}</h3>
        <p>{item.caption[locale]}</p>
        {item.sourceUrl ? <a className="text-link" href={item.sourceUrl}>{locale === "ar" ? "افتح المصدر على إنستغرام" : "Open Instagram source"}</a> : null}
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
          <video src={videoSrc} poster={item.posterSrc} muted playsInline preload="metadata" controls />
        ) : item.assetReady ? (
          <img src={item.posterSrc} alt={item.alt[locale]} />
        ) : null}
        <div className="reel-overlay">
          <span className="pill">{item.type}</span>
          <h3>{item.title[locale]}</h3>
          <p>{item.caption[locale]}</p>
          {item.trimStartSeconds ? <p>{locale === "ar" ? `قص البداية: ${item.trimStartSeconds} ثانية` : `Trim start: ${item.trimStartSeconds}s`}</p> : null}
          {item.sourceUrl ? <a className="reel-link" href={item.sourceUrl}>{locale === "ar" ? "المصدر" : "Source"}</a> : null}
        </div>
      </div>
    </article>
  );
}
