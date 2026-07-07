import type { Metadata } from "next";
import Link from "next/link";
import { TransformationCaseCarousel } from "@/components/TransformationCaseCarousel";
import { isLocale, type Locale } from "@/lib/i18n";
import { site } from "@/lib/content";

type TransformationCase = {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  badge: Record<Locale, string>;
  images: string[];
  alt: Record<Locale, string>;
  featured?: boolean;
};

type TransformationReel = {
  id: string;
  title: Record<Locale, string>;
  caption: Record<Locale, string>;
  src: string;
  poster: string;
  alt: Record<Locale, string>;
};

const caseImageSet = (caseNumber: number, fileBase: string, count: number) =>
  Array.from({ length: count }, (_, index) => `/media/transformations/cases/case-${String(caseNumber).padStart(2, "0")}/${fileBase}-${String(index + 1).padStart(2, "0")}.webp`);

const transformationCases: TransformationCase[] = [
  {
    id: "natural-veneers-transformation",
    title: { en: "Natural Veneers Transformation", ar: "تحوّل ابتسامة طبيعي" },
    description: {
      en: "A refined before-and-after sequence focused on softness, proportion, and a natural-looking finish.",
      ar: "تسلسل قبل وبعد بلمسة هادئة يبرز التناسق، النعومة، والمظهر الطبيعي الراقي."
    },
    badge: { en: "Before & After", ar: "قبل وبعد" },
    images: caseImageSet(1, "natural-veneers-transformation-amman", 3),
    alt: { en: "Natural veneers smile transformation in Jordan", ar: "تحوّل ابتسامة طبيعي بالفينير في الأردن" },
    featured: true
  },
  {
    id: "hollywood-smile-enhancement",
    title: { en: "Hollywood Smile Enhancement", ar: "ابتسامة هوليوود راقية" },
    description: {
      en: "A polished smile outcome with bright aesthetics balanced around the patient’s facial presence.",
      ar: "نتيجة ابتسامة مصقولة بإشراقة متوازنة ومنسجمة مع حضور الوجه."
    },
    badge: { en: "Smile Design", ar: "تصميم ابتسامة" },
    images: caseImageSet(2, "hollywood-smile-enhancement-jordan", 4),
    alt: { en: "Hollywood Smile before and after result in Amman", ar: "نتيجة قبل وبعد لابتسامة هوليوود في عمّان" }
  },
  {
    id: "balanced-veneers-result",
    title: { en: "Balanced Veneers Result", ar: "نتيجة فينير متوازنة" },
    description: {
      en: "A clean case study showing how shade and tooth shape can create a more harmonious smile line.",
      ar: "حالة نظيفة توضّح أثر اللون وشكل الأسنان في إبراز خط ابتسامة أكثر تناسقاً."
    },
    badge: { en: "Veneers", ar: "فينير" },
    images: caseImageSet(3, "balanced-veneers-result-amman", 3),
    alt: { en: "Dental veneers before and after smile result in Jordan", ar: "نتيجة فينير قبل وبعد في الأردن" }
  },
  {
    id: "soft-white-smile-design",
    title: { en: "Soft White Smile Design", ar: "تصميم ابتسامة ناعم" },
    description: {
      en: "An editorial carousel highlighting refined brightness without an overdone visual effect.",
      ar: "عرض بصري راقٍ يبرز إشراقة ناعمة دون مبالغة أو مظهر مصطنع."
    },
    badge: { en: "Facial Harmony", ar: "تناسق الوجه" },
    images: caseImageSet(4, "soft-white-smile-design-jordan", 7),
    alt: { en: "Soft white smile design transformation by Dr. Ali Al Heneiti", ar: "تصميم ابتسامة ناعم مع الدكتور علي الحنيطي" }
  },
  {
    id: "elegant-smile-upgrade",
    title: { en: "Elegant Smile Upgrade", ar: "تجديد ابتسامة أنيق" },
    description: {
      en: "A premium smile gallery sequence with close-up details and natural aesthetic balance.",
      ar: "تسلسل صور راقٍ يبرز التفاصيل القريبة والتوازن الجمالي الطبيعي."
    },
    badge: { en: "Aesthetic Case", ar: "حالة تجميلية" },
    images: caseImageSet(5, "elegant-smile-upgrade-amman", 6),
    alt: { en: "Elegant smile upgrade dental transformation in Amman", ar: "تجديد ابتسامة أنيق في عمّان" }
  },
  {
    id: "smile-harmony-makeover",
    title: { en: "Smile Harmony Makeover", ar: "تناسق الابتسامة مع ملامح الوجه" },
    description: {
      en: "A face-led transformation story where the smile is presented through proportion and calm refinement.",
      ar: "حكاية تحوّل تقودها ملامح الوجه، وتظهر الابتسامة من خلال التناسب واللمسة الهادئة."
    },
    badge: { en: "Smile Harmony", ar: "تناسق الابتسامة" },
    images: caseImageSet(6, "smile-harmony-makeover-jordan", 7),
    alt: { en: "Dental smile design transformation by Dr. Ali Al Heneiti", ar: "تصميم ابتسامة طبيعي مع الدكتور علي الحنيطي" },
    featured: true
  },
  {
    id: "confident-smile-transformation",
    title: { en: "Confident Smile Transformation", ar: "تحوّل ابتسامة واثق" },
    description: {
      en: "A confident result shown through close details and full-smile references for stronger visual context.",
      ar: "نتيجة واثقة تُعرض بتفاصيل قريبة ولقطات ابتسامة كاملة لسياق بصري أوضح."
    },
    badge: { en: "Smile Reveal", ar: "إظهار النتيجة" },
    images: caseImageSet(7, "confident-smile-transformation-amman", 8),
    alt: { en: "Confident smile transformation before and after in Amman", ar: "تحوّل ابتسامة واثق قبل وبعد في عمّان" }
  },
  {
    id: "bright-natural-smile",
    title: { en: "Bright Natural Smile", ar: "ابتسامة مشرقة وطبيعية" },
    description: {
      en: "A detailed case carousel built around brightness, symmetry, and a natural-looking smile presence.",
      ar: "كاروسيل تفصيلي يركّز على الإشراقة، التماثل، وحضور ابتسامة طبيعية المظهر."
    },
    badge: { en: "Natural Finish", ar: "نتيجة طبيعية" },
    images: caseImageSet(8, "bright-natural-smile-design-jordan", 9),
    alt: { en: "Natural-looking veneers result in Jordan", ar: "نتيجة فينير طبيعية في الأردن" }
  },
  {
    id: "refined-veneers-smile-result",
    title: { en: "Refined Veneers Smile Result", ar: "نتيجة فينير راقية" },
    description: {
      en: "A clean transformation set with a premium focus on smile line, shade, and visual balance.",
      ar: "مجموعة تحوّل نظيفة تركّز على خط الابتسامة، اللون، والتوازن البصري الراقي."
    },
    badge: { en: "Veneers Result", ar: "نتيجة فينير" },
    images: caseImageSet(9, "refined-veneers-smile-result-amman", 6),
    alt: { en: "Refined veneers smile transformation in Jordan", ar: "تحوّل ابتسامة بالفينير في الأردن" }
  },
  {
    id: "natural-smile-upgrade",
    title: { en: "Natural Smile Upgrade", ar: "ترقية ابتسامة طبيعية" },
    description: {
      en: "A compact case story showing a softer, cleaner, and more balanced smile appearance.",
      ar: "حالة مختصرة تُظهر مظهراً أنعم وأنظف وأكثر توازناً للابتسامة."
    },
    badge: { en: "Case Detail", ar: "تفاصيل الحالة" },
    images: caseImageSet(10, "natural-smile-upgrade-jordan", 4),
    alt: { en: "Natural smile upgrade before and after dental result", ar: "ترقية ابتسامة طبيعية قبل وبعد" }
  }
];

const transformationReels: TransformationReel[] = [
  {
    id: "smile-transformation-in-motion",
    title: { en: "Smile Transformation in Motion", ar: "تحوّل ابتسامة بالفيديو" },
    caption: { en: "A short real-case reel with a polished smile reveal.", ar: "ريل قصير لحالة حقيقية مع إظهار راقٍ للنتيجة." },
    src: "/media/transformations/reels/smile-transformation-in-motion-amman-01.mp4",
    poster: "/media/transformations/reels/posters/smile-transformation-in-motion-amman-01-poster.jpg",
    alt: { en: "Smile transformation reel in Amman Jordan", ar: "فيديو تحوّل ابتسامة في عمّان الأردن" }
  },
  {
    id: "natural-veneers-reel",
    title: { en: "Natural Veneers Reel", ar: "فيديو فينير طبيعي" },
    caption: { en: "A vertical reel focused on natural shape and shade harmony.", ar: "فيديو عمودي يركّز على الشكل الطبيعي وتناسق اللون." },
    src: "/media/transformations/reels/natural-veneers-reel-jordan-02.mp4",
    poster: "/media/transformations/reels/posters/natural-veneers-reel-jordan-02-poster.jpg",
    alt: { en: "Natural veneers smile transformation video in Jordan", ar: "فيديو تحوّل ابتسامة طبيعي بالفينير في الأردن" }
  },
  {
    id: "hollywood-smile-video-result",
    title: { en: "Hollywood Smile Result", ar: "نتيجة ابتسامة هوليوود" },
    caption: { en: "A refined result reel with a bright, camera-ready finish.", ar: "ريل نتيجة راقية بإشراقة جاهزة للكاميرا." },
    src: "/media/transformations/reels/hollywood-smile-video-result-amman-03.mp4",
    poster: "/media/transformations/reels/posters/hollywood-smile-video-result-amman-03-poster.jpg",
    alt: { en: "Hollywood Smile video result in Amman", ar: "فيديو نتيجة ابتسامة هوليوود في عمّان" }
  },
  {
    id: "smile-design-reveal",
    title: { en: "Smile Design Reveal", ar: "إظهار تصميم الابتسامة" },
    caption: { en: "Motion-led storytelling for a balanced smile design result.", ar: "عرض بالفيديو لنتيجة تصميم ابتسامة متوازنة." },
    src: "/media/transformations/reels/smile-design-reveal-jordan-04.mp4",
    poster: "/media/transformations/reels/posters/smile-design-reveal-jordan-04-poster.jpg",
    alt: { en: "Smile design reveal video in Jordan", ar: "فيديو إظهار تصميم الابتسامة في الأردن" }
  },
  {
    id: "confident-smile-transformation-reel",
    title: { en: "Confident Smile Moment", ar: "لحظة ابتسامة واثقة" },
    caption: { en: "A patient-focused reel that keeps the result elegant and natural.", ar: "فيديو يركّز على المريض والنتيجة بأسلوب طبيعي وأنيق." },
    src: "/media/transformations/reels/confident-smile-transformation-reel-05.mp4",
    poster: "/media/transformations/reels/posters/confident-smile-transformation-reel-05-poster.jpg",
    alt: { en: "Confident smile transformation reel", ar: "فيديو تحوّل ابتسامة واثق" }
  },
  {
    id: "dental-veneers-before-after-video",
    title: { en: "Veneers Before & After", ar: "فينير قبل وبعد" },
    caption: { en: "A clean vertical before-and-after video for smile transformation context.", ar: "فيديو عمودي نظيف قبل وبعد لسياق أوضح للتحوّل." },
    src: "/media/transformations/reels/dental-veneers-before-after-video-06.mp4",
    poster: "/media/transformations/reels/posters/dental-veneers-before-after-video-06-poster.jpg",
    alt: { en: "Dental veneers before and after video in Jordan", ar: "فيديو فينير قبل وبعد في الأردن" }
  },
  {
    id: "bright-natural-smile-video",
    title: { en: "Bright Natural Smile", ar: "ابتسامة مشرقة وطبيعية" },
    caption: { en: "A soft reel showcasing brightness with a natural visual tone.", ar: "ريل ناعم يبرز الإشراقة بنبرة بصرية طبيعية." },
    src: "/media/transformations/reels/bright-natural-smile-video-amman-07.mp4",
    poster: "/media/transformations/reels/posters/bright-natural-smile-video-amman-07-poster.jpg",
    alt: { en: "Bright natural smile transformation video in Amman", ar: "فيديو ابتسامة مشرقة وطبيعية في عمّان" }
  },
  {
    id: "elegant-veneers-result-reel",
    title: { en: "Elegant Veneers Result", ar: "نتيجة فينير أنيقة" },
    caption: { en: "A vertical case reel with a polished aesthetic result.", ar: "فيديو حالة عمودي بنتيجة جمالية مصقولة." },
    src: "/media/transformations/reels/elegant-veneers-result-reel-08.mp4",
    poster: "/media/transformations/reels/posters/elegant-veneers-result-reel-08-poster.jpg",
    alt: { en: "Elegant veneers result reel in Jordan", ar: "فيديو نتيجة فينير أنيقة في الأردن" }
  }
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";

  return {
    title: {
      absolute: locale === "ar"
        ? "حالات قبل وبعد للأسنان في الأردن | تحوّلات ابتسامة حقيقية"
        : "Smile Transformations in Jordan | Before & After Dental Cases"
    },
    description: locale === "ar"
      ? "شاهد حالات حقيقية قبل وبعد لتصميم الابتسامة، الفينير، وابتسامة هوليوود مع الدكتور علي الحنيطي في الأردن، بنتائج طبيعية وراقية."
      : "Explore real smile transformations by Dr. Ali Al Heneiti, including veneers, Hollywood Smile, smile design, and natural-looking dental aesthetic results in Jordan.",
    openGraph: {
      title: locale === "ar" ? "حالات قبل وبعد للأسنان في الأردن" : "Smile Transformations in Jordan",
      description: locale === "ar"
        ? "تحوّلات ابتسامة حقيقية مع الدكتور علي الحنيطي في الأردن."
        : "Real smile transformations and premium dental aesthetic cases by Dr. Ali Al Heneiti.",
      images: [transformationCases[0].images[0]],
      locale: locale === "ar" ? "ar_JO" : "en_US",
      type: "website"
    }
  };
}

export default async function TransformationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const featuredCases = transformationCases.filter((item) => item.featured);

  return (
    <main className="transformations-page">
      <section className="transformations-hero" aria-labelledby="transformations-title">
        <div className="container transformations-hero-grid">
          <div className="transformations-hero-copy">
            <p className="eyebrow">{locale === "ar" ? "حالات قبل وبعد" : "Transformations"}</p>
            <h1 className="display" id="transformations-title">
              {locale === "ar" ? "حالات قبل وبعد" : "Transformations"}
            </h1>
            <p className="lead">
              {locale === "ar"
                ? "تحوّلات حقيقية للابتسامة بتخطيط دقيق، وتناسق مع ملامح الوجه، ونتائج طبيعية راقية."
                : "Real smile transformations designed with precision, facial harmony, and natural-looking aesthetics."}
            </p>
            <p className="transformations-hero-text">
              {locale === "ar"
                ? "تعرض هذه الصفحة مختارات من نتائج تجميل الأسنان الحقيقية لدى الدكتور علي الحنيطي. كل ابتسامة يتم التخطيط لها بناءً على ملامح الوجه، درجة اللون، شكل الأسنان، واحتياج الحالة دون مبالغة أو وعود غير واقعية."
                : "Explore selected real aesthetic dental outcomes by Dr. Ali Al Heneiti. Every smile is planned around the patient’s face, shade, tooth shape, and treatment needs with a refined, natural-looking direction."}
            </p>
            <div className="button-row">
              <a className="button" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                {locale === "ar" ? "احجز عبر واتساب" : "Book on WhatsApp"}
              </a>
              <Link className="button secondary" href={`/${locale}/contact`}>
                {locale === "ar" ? "طرق التواصل" : "Contact details"}
              </Link>
            </div>
          </div>

          <div className="transformations-hero-gallery" aria-label={locale === "ar" ? "معاينة حالات تحوّل الابتسامة" : "Smile transformation case preview"}>
            <div className="hero-gallery-card primary">
              <img src={featuredCases[0].images[0]} alt={featuredCases[0].alt[locale]} fetchPriority="high" />
            </div>
            <div className="hero-gallery-card secondary">
              <img src={featuredCases[1].images[0]} alt={featuredCases[1].alt[locale]} loading="lazy" decoding="async" />
            </div>
            <div className="hero-gallery-note">
              <strong>{locale === "ar" ? "حالات حقيقية" : "Real cases"}</strong>
              <span>{locale === "ar" ? "صور وفيديوهات منظمة ضمن تجربة عرض راقية وسريعة." : "Case-based carousels and reels in a polished gallery experience."}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section transformations-cases-section" aria-labelledby="featured-transformations-title">
        <div className="container">
          <div className="section-head transformations-section-head">
            <div>
              <p className="eyebrow">{locale === "ar" ? "الحالات المختارة" : "Featured Cases"}</p>
              <h2 className="section-title" id="featured-transformations-title">
                {locale === "ar" ? "معرض حالات مصمم بعناية لكل ابتسامة." : "An editorial case showcase for every smile."}
              </h2>
            </div>
            <p className="lead">
              {locale === "ar"
                ? "كل مجموعة صور أدناه تمثل حالة واحدة مستقلة، دون دمج صور من حالات مختلفة داخل نفس الكاروسيل."
                : "Each image set below represents one dedicated transformation case, with every carousel kept separate by case folder."}
            </p>
          </div>

          <div className="transformations-case-grid">
            {transformationCases.map((item, index) => (
              <article className={`transformation-case-card ${item.featured ? "featured" : ""}`} key={item.id}>
                <div className="transformation-case-visual">
                  <TransformationCaseCarousel images={item.images} alt={item.alt[locale]} locale={locale} />
                </div>
                <div className="transformation-case-body">
                  <div className="transformation-case-meta">
                    <span className="pill">{item.badge[locale]}</span>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3>{item.title[locale]}</h3>
                  <p>{item.description[locale]}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="transformations-disclaimer">
            {locale === "ar"
              ? "الصور تعرض حالات مرضى حقيقية، وقد تختلف النتائج من شخص لآخر حسب التشخيص والخطة العلاجية المناسبة."
              : "Photos show real patient cases. Individual results vary depending on diagnosis, planning, and treatment needs."}
          </p>
        </div>
      </section>

      <section className="section transformations-reels-section" aria-labelledby="transformations-reels-title">
        <div className="container">
          <div className="section-head transformations-reels-head">
            <div>
              <p className="eyebrow">{locale === "ar" ? "فيديوهات قصيرة" : "Reels & Videos"}</p>
              <h2 className="section-title" id="transformations-reels-title">
                {locale === "ar" ? "تحوّلات الابتسامة بالفيديو" : "Smile Transformations in Motion"}
              </h2>
            </div>
            <p className="lead">
              {locale === "ar"
                ? "فيديوهات عمودية مختارة تعرض لحظات من النتائج والحالات بأسلوب خفيف وسريع، مع تحميل محافظ للحفاظ على سرعة الصفحة."
                : "Selected vertical reels present transformation moments in a smooth, mobile-friendly format with careful loading for performance."}
            </p>
          </div>

          <div className="transformations-reels-grid">
            {transformationReels.map((item) => (
              <article className="transformation-reel-card" key={item.id}>
                <video
                  aria-label={item.alt[locale]}
                  controls
                  muted
                  playsInline
                  preload="none"
                  poster={item.poster}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
                <div className="transformation-reel-copy">
                  <h3>{item.title[locale]}</h3>
                  <p>{item.caption[locale]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section compact transformations-final-section">
        <div className="container transformations-final-cta">
          <p className="eyebrow">{locale === "ar" ? "استشارة ابتسامة" : "Smile Consultation"}</p>
          <h2 className="section-title">
            {locale === "ar" ? "جاهز لتخطيط ابتسامتك؟" : "Ready to plan your smile transformation?"}
          </h2>
          <p className="lead">
            {locale === "ar"
              ? "احجز استشارتك عبر واتساب، وسيقوم الفريق بإرشادك إلى الخيارات الأنسب لحالتك."
              : "Book a consultation on WhatsApp and our team will guide you through the best treatment options for your case."}
          </p>
          <div className="button-row">
            <a className="button pistachio" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              {locale === "ar" ? "احجز عبر واتساب" : "Book on WhatsApp"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
