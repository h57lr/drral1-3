import type { Metadata } from "next";
import Link from "next/link";
import { TransformationCaseCarousel } from "@/components/TransformationCaseCarousel";
import { TransformationReelsSlider, type TransformationReelSlide } from "@/components/TransformationReelsSlider";
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
    alt: { en: "Dental smile design transformation by Dr. Ali Al Heneiti", ar: "تصميم ابتسامة طبيعي مع الدكتور علي الحنيطي" }
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

const transformationReels: TransformationReelSlide[] = [
  {
    id: "smile-transformation-in-motion",
    badge: { en: "Smile Reveal Magic", ar: "سحر إظهار الابتسامة" },
    title: { en: "Smile Transformation in Motion", ar: "تحوّل ابتسامة بالفيديو" },
    caption: { en: "A real case with a polished, confident smile reveal.", ar: "حالة حقيقية مع إظهار راقٍ وواثق للنتيجة." },
    src: "/media/transformations/reels/smile-transformation-in-motion-amman-01.mp4",
    poster: "/media/transformations/reels/posters/smile-transformation-in-motion-amman-01-poster.jpg",
    alt: { en: "Smile transformation reel in Amman Jordan", ar: "فيديو تحوّل ابتسامة في عمّان الأردن" }
  },
  {
    id: "natural-veneers-reel",
    badge: { en: "Natural Confidence", ar: "ثقة طبيعية" },
    title: { en: "Natural Veneers Result", ar: "نتيجة فينير طبيعية" },
    caption: { en: "A natural veneers case focused on shape, shade, and facial harmony.", ar: "حالة فينير طبيعية تركز على الشكل، اللون، وتناسق الابتسامة مع الوجه." },
    src: "/media/transformations/reels/natural-veneers-reel-jordan-02.mp4",
    poster: "/media/transformations/reels/posters/natural-veneers-reel-jordan-02-poster.jpg",
    alt: { en: "Natural veneers smile transformation video in Jordan", ar: "فيديو تحوّل ابتسامة طبيعي بالفينير في الأردن" },
    startAtSeconds: 5
  },
  {
    id: "hollywood-smile-video-result",
    badge: { en: "Hollywood Glow", ar: "إشراقة هوليوود" },
    title: { en: "Hollywood Smile Result", ar: "نتيجة ابتسامة هوليوود" },
    caption: { en: "A refined transformation with a bright, camera-ready finish.", ar: "تحوّل راقٍ بإشراقة جميلة وجاهزة للكاميرا." },
    src: "/media/transformations/reels/hollywood-smile-video-result-amman-03.mp4",
    poster: "/media/transformations/reels/posters/hollywood-smile-video-result-amman-03-poster.jpg",
    alt: { en: "Hollywood Smile video result in Amman", ar: "فيديو نتيجة ابتسامة هوليوود في عمّان" }
  },
  {
    id: "smile-design-reveal",
    badge: { en: "Attractive Smile", ar: "ابتسامة جذابة" },
    title: { en: "Smile Design Reveal", ar: "إظهار تصميم الابتسامة" },
    caption: { en: "A balanced smile design result shaped around proportion and elegance.", ar: "نتيجة تصميم ابتسامة متوازنة مبنية على التناسق والأناقة." },
    src: "/media/transformations/reels/smile-design-reveal-jordan-04.mp4",
    poster: "/media/transformations/reels/posters/smile-design-reveal-jordan-04-poster.jpg",
    alt: { en: "Smile design reveal video in Jordan", ar: "فيديو إظهار تصميم الابتسامة في الأردن" },
    startAtSeconds: 3
  },
  {
    id: "confident-smile-transformation-reel",
    badge: { en: "Confidence Transformation", ar: "تحوّل الثقة" },
    title: { en: "Confident Smile Moment", ar: "لحظة ابتسامة واثقة" },
    caption: { en: "A patient-focused transformation with an elegant, natural-looking result.", ar: "تحوّل يركّز على المريض ونتيجة أنيقة وطبيعية المظهر." },
    src: "/media/transformations/reels/confident-smile-transformation-reel-05.mp4",
    poster: "/media/transformations/reels/posters/confident-smile-transformation-reel-05-poster.jpg",
    alt: { en: "Confident smile transformation reel", ar: "فيديو تحوّل ابتسامة واثق" }
  },
  {
    id: "dental-veneers-before-after-video",
    badge: { en: "Veneers Glow Up", ar: "تألّق الفينير" },
    title: { en: "Veneers Before & After", ar: "فينير قبل وبعد" },
    caption: { en: "A clean before-and-after case showing a clearer smile transformation.", ar: "حالة قبل وبعد واضحة تعرض تحوّل الابتسامة بشكل أنيق." },
    src: "/media/transformations/reels/dental-veneers-before-after-video-06.mp4",
    poster: "/media/transformations/reels/posters/dental-veneers-before-after-video-06-poster.jpg",
    alt: { en: "Dental veneers before and after video in Jordan", ar: "فيديو فينير قبل وبعد في الأردن" }
  },
  {
    id: "bright-natural-smile-video",
    badge: { en: "Radiant Smile", ar: "ابتسامة مشرقة" },
    title: { en: "Bright Natural Smile", ar: "ابتسامة مشرقة وطبيعية" },
    caption: { en: "A soft case demonstrating brightness with a natural visual tone.", ar: "حالة ناعمة تبرز الإشراقة بطابع بصري طبيعي." },
    src: "/media/transformations/reels/bright-natural-smile-video-amman-07.mp4",
    poster: "/media/transformations/reels/posters/bright-natural-smile-video-amman-07-poster.jpg",
    alt: { en: "Bright natural smile transformation video in Amman", ar: "فيديو ابتسامة مشرقة وطبيعية في عمّان" }
  },
  {
    id: "elegant-veneers-result-reel",
    badge: { en: "Elegant Result", ar: "نتيجة أنيقة" },
    title: { en: "Elegant Veneers Result", ar: "نتيجة فينير أنيقة" },
    caption: { en: "An elegant veneers case with a polished aesthetic result.", ar: "حالة فينير أنيقة بنتيجة جمالية مصقولة." },
    src: "/media/transformations/reels/elegant-veneers-result-reel-08.mp4",
    poster: "/media/transformations/reels/posters/elegant-veneers-result-reel-08-poster.jpg",
    alt: { en: "Elegant veneers result reel in Jordan", ar: "فيديو نتيجة فينير أنيقة في الأردن" }
  }
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";

  return {
    title: locale === "ar"
      ? "حالات قبل وبعد للأسنان في الأردن"
      : "Smile Transformations in Jordan | Before & After Dental Cases",
    description: locale === "ar"
      ? "شاهد حالات حقيقية قبل وبعد لتصميم الابتسامة، الفينير، وابتسامة هوليوود مع الدكتور علي الحنيطي في الأردن، بنتائج طبيعية وراقية."
      : "Explore real smile transformations by Dr. Ali Al Heneiti, including veneers, Hollywood Smile, smile design, and natural-looking dental aesthetic results in Jordan.",
    alternates: {
      canonical: `/${locale}/transformations`,
      languages: {
        en: "/en/transformations",
        ar: "/ar/transformations",
        "x-default": "/en/transformations"
      }
    },
    openGraph: {
      title: locale === "ar" ? "حالات قبل وبعد للأسنان في الأردن" : "Smile Transformations in Jordan",
      description: locale === "ar"
        ? "تحوّلات ابتسامة حقيقية مع الدكتور علي الحنيطي في الأردن."
        : "Real smile transformations and premium dental aesthetic cases by Dr. Ali Al Heneiti.",
      images: [transformationCases[0].images[0]],
      locale: locale === "ar" ? "ar_JO" : "en_US",
      url: `/${locale}/transformations`,
      type: "website"
    }
  };
}

export default async function TransformationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const heroPreviewCases = [transformationCases[0], transformationCases[5]];

  return (
    <main className="transformations-page">
      <section className="transformations-hero" aria-labelledby="transformations-title">
        <div className="container transformations-hero-grid">
          <div className="transformations-hero-copy">
            <p className="eyebrow">{locale === "ar" ? "حالات قبل وبعد" : "Transformations"}</p>
            <h1 className={`display transformations-hero-title ${locale === "en" ? "english-title" : ""}`} id="transformations-title">
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
                {locale === "ar" ? "احجز استشارتك" : "Book Your Consultation"}
              </a>
              <Link className="button secondary" href={`/${locale}/contact`}>
                {locale === "ar" ? "تواصل مع العيادة" : "Contact the Clinic"}
              </Link>
            </div>
          </div>

          <div className="transformations-hero-gallery" aria-label={locale === "ar" ? "معاينة حالات تحوّل الابتسامة" : "Smile transformation case preview"}>
            <div className="hero-gallery-card primary">
              <img src={heroPreviewCases[0].images[0]} alt={heroPreviewCases[0].alt[locale]} fetchPriority="high" />
            </div>
            <div className="hero-gallery-card secondary">
              <img src={heroPreviewCases[1].images[1]} alt={heroPreviewCases[1].alt[locale]} loading="lazy" decoding="async" />
            </div>
            <div className="hero-gallery-note">
              <strong>{locale === "ar" ? "حالات حقيقية" : "Real cases"}</strong>
              <span>{locale === "ar" ? "صور وفيديوهات منظمة ضمن تجربة عرض راقية وسريعة." : "Case-based carousels and videos in a polished gallery experience."}</span>
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
              <p className="eyebrow">{locale === "ar" ? "نتائج تحوّل ساحرة" : "Magical Transformation Results"}</p>
              <h2 className="section-title" id="transformations-reels-title">
                {locale === "ar" ? "تحوّلات الابتسامة بالفيديو" : "Smile Transformations in Motion"}
              </h2>
            </div>
            <p className="lead">
              {locale === "ar"
                ? "فيديوهات مختارة تعرض لحظات من النتائج والحالات بأسلوب راقٍ وسريع، مع تحميل محافظ للحفاظ على سرعة الصفحة."
                : "Selected case videos present transformation moments in a smooth, mobile-friendly format with careful loading for performance."}
            </p>
          </div>

          <TransformationReelsSlider locale={locale} reels={transformationReels} />
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
              ? "احجز استشارتك وسيقوم الفريق بإرشادك إلى الخيارات الأنسب لحالتك."
              : "Book your consultation and our team will guide you through the best treatment options for your case."}
          </p>
          <div className="button-row">
            <a className="button pistachio" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              {locale === "ar" ? "احجز استشارتك" : "Book Your Consultation"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
