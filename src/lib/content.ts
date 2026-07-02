import type { Locale } from "./i18n";

export type Service = {
  slug: string;
  title: Record<Locale, string>;
  navTitle: Record<Locale, string>;
  description: Record<Locale, string>;
  keywords: string[];
  bullets: Record<Locale, string[]>;
  process: Record<Locale, string[]>;
  faqs: Record<Locale, { question: string; answer: string }[]>;
};

export type CaseMedia = {
  id: string;
  title: Record<Locale, string>;
  slug: string;
  treatment: "hollywood-smile" | "zircon-veneers" | "implants" | "whitening" | "gummy-smile" | "testimonial";
  type: "before-after" | "reel" | "testimonial";
  videoSrc?: string;
  assetReady?: boolean;
  trimStartSeconds?: number;
  posterSrc: string;
  caption: Record<Locale, string>;
  alt: Record<Locale, string>;
  isFeatured: boolean;
  sourceUrl?: string;
};

export type Review = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: Record<Locale, string>;
  source: "google" | "instagram" | "video" | "manual";
  treatment?: string;
};

export type BlogPost = {
  slug: string;
  title: Record<Locale, string>;
  seoTitle: Record<Locale, string>;
  metaDescription: Record<Locale, string>;
  h1: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  category: Record<Locale, string>;
  readTime: string;
  coverImage: string;
  coverAlt: Record<Locale, string>;
  keywords: string[];
  lastUpdated: string;
  author: Record<Locale, { name: string; title: string; bio: string }>;
  introduction: Record<Locale, string[]>;
  sections: {
    id: string;
    heading: Record<Locale, string>;
    body: Record<Locale, string[]>;
  }[];
  faqs: { question: Record<Locale, string>; answer: Record<Locale, string> }[];
  relatedService: string;
};

export const site = {
  whatsapp: "https://wa.me/962000000000",
  instagram: "https://www.instagram.com/ali_alheneiti/",
  googleReview: "https://g.page/r/CQplNDBUe0xKEAE/review",
  address: {
    en: "Amman, Jordan",
    ar: "عمان، الأردن"
  },
  brand: {
    en: "Dr. Ali Alheneiti",
    ar: "الدكتور علي الحنيطي"
  },
  specialty: {
    en: "Cosmetic Dentistry",
    ar: "طب تجميل الأسنان"
  }
};

export const dictionary = {
  en: {
    nav: {
      services: "Services",
      cases: "Cases",
      reels: "Reels",
      testimonials: "Reviews",
      blog: "Blog",
      about: "About",
      contact: "Contact"
    },
    cta: "Send Photos on WhatsApp",
    viewCases: "View Transformations",
    finalCtaTitle: "Start with a private smile consultation.",
    finalCtaText: "Send your photos on WhatsApp and Dr. Ali's team will guide you toward the right cosmetic treatment without publishing prices online.",
    reelsNotice: "Selected educational reels and patient moments from Dr. Ali's smile-design work."
  },
  ar: {
    nav: {
      services: "الخدمات",
      cases: "الحالات",
      reels: "الريلز",
      testimonials: "التقييمات",
      blog: "المدونة",
      about: "عن الدكتور",
      contact: "تواصل"
    },
    cta: "أرسل الصور عبر واتساب",
    viewCases: "شاهد التحولات",
    finalCtaTitle: "ابدئي باستشارة خاصة لابتسامتك.",
    finalCtaText: "أرسلي صورك عبر واتساب وسيقوم فريق الدكتور علي بإرشادك للعلاج التجميلي المناسب بدون عرض الأسعار علناً.",
    reelsNotice: "مختارات من الريلز التعليمية ولحظات المرضى من أعمال تصميم الابتسامة لدى الدكتور علي."
  }
} satisfies Record<Locale, unknown>;

export const doctorProfileHighlight = {
  en: {
    eyebrow: "About the Doctor",
    title: "Exceptional Dental Aesthetics & High-Quality Care.",
    accent: "High-Quality Care.",
    body: "Dr. Ali Alheneiti blends precise cosmetic planning with a soft, natural aesthetic for Hollywood smiles, veneers, and smile transformations in Amman.",
    imageAlt: "Dr. Ali Alheneiti, cosmetic dentist in Amman, Jordan",
    signature: "Dr. Ali Alheneiti",
    specialty: "Cosmetic Dentistry",
    trustNote: "Figures reflect clinic positioning and public review signals. Individual outcomes may vary.",
    stats: [
      { value: "850+", label: "Hollywood / Veneer Cases" },
      { value: "Patients", label: "from GCC & Europe" },
      { value: "98%", label: "Patient Satisfaction" },
      { value: "4.9★", label: "Google Rating" }
    ]
  },
  ar: {
    eyebrow: "عن الطبيب",
    title: "جماليات أسنان استثنائية ورعاية عالية الجودة.",
    accent: "رعاية عالية الجودة.",
    body: "يجمع الدكتور علي الحنيطي بين التخطيط التجميلي الدقيق والنتائج الطبيعية الراقية لابتسامات هوليوود، الفينير، وتحولات الابتسامة في عمّان.",
    imageAlt: "الدكتور علي الحنيطي، طبيب تجميل أسنان في عمّان، الأردن",
    signature: "د. علي الحنيطي",
    specialty: "طب تجميل الأسنان",
    trustNote: "تعكس الأرقام مؤشرات العيادة والتقييمات العامة. قد تختلف النتائج من حالة لأخرى.",
    stats: [
      { value: "+850", label: "حالة هوليوود سمايل وفينير" },
      { value: "مرضى", label: "من الخليج وأوروبا" },
      { value: "98%", label: "رضا المرضى" },
      { value: "4.9★", label: "تقييم Google" }
    ]
  }
} satisfies Record<Locale, {
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  imageAlt: string;
  signature: string;
  specialty: string;
  trustNote: string;
  stats: { value: string; label: string }[];
}>;

export const services: Service[] = [
  {
    slug: "hollywood-smile-jordan",
    title: {
      en: "Hollywood Smile in Jordan",
      ar: "ابتسامة هوليوود في الأردن"
    },
    navTitle: {
      en: "Hollywood Smile",
      ar: "ابتسامة هوليوود"
    },
    description: {
      en: "A complete smile transformation designed around facial harmony, natural tooth proportions, and a refined cosmetic finish.",
      ar: "تحويل كامل للابتسامة بتصميم يراعي تناسق الوجه، نسب الأسنان الطبيعية، واللمسة الجمالية الراقية."
    },
    keywords: ["Hollywood Smile Jordan", "Hollywood Smile Amman", "smile makeover Jordan"],
    bullets: {
      en: ["Digital smile planning", "Natural shade selection", "Face-led proportions", "Photo and video case review"],
      ar: ["تخطيط رقمي للابتسامة", "اختيار لون طبيعي", "تصميم متناسق مع الوجه", "مراجعة الحالات بالصور والفيديو"]
    },
    process: {
      en: ["Private consultation", "Smile analysis", "Digital design", "Treatment planning", "Final reveal"],
      ar: ["استشارة خاصة", "تحليل الابتسامة", "تصميم رقمي", "خطة علاج", "النتيجة النهائية"]
    },
    faqs: {
      en: [
        { question: "Will my smile look natural?", answer: "The goal is a refined smile that fits your face, skin tone, and personality rather than an artificial one-shade look." },
        { question: "Can I get an estimate online?", answer: "Yes. Send photos on WhatsApp for initial guidance, then confirm the plan during consultation." }
      ],
      ar: [
        { question: "هل ستكون الابتسامة طبيعية؟", answer: "الهدف هو ابتسامة راقية تناسب الوجه ولون البشرة والشخصية، وليس مظهراً اصطناعياً بلون واحد." },
        { question: "هل يمكن معرفة التقدير عبر الإنترنت؟", answer: "نعم. يمكن إرسال الصور عبر واتساب للحصول على توجيه أولي ثم تأكيد الخطة في الاستشارة." }
      ]
    }
  },
  {
    slug: "zircon-veneers-amman",
    title: {
      en: "Zircon and Veneers in Amman",
      ar: "الزيركون والفينير في عمان"
    },
    navTitle: {
      en: "Zircon & Veneers",
      ar: "زيركون وفينير"
    },
    description: {
      en: "Premium ceramic restorations for patients who want brighter, balanced, and durable smile aesthetics.",
      ar: "تركيبات خزفية راقية لمن يرغبون بابتسامة أكثر إشراقاً وتوازناً ومتانة."
    },
    keywords: ["zircon veneers Jordan", "veneers Amman", "natural veneers Jordan"],
    bullets: {
      en: ["Porcelain veneers", "Zircon crowns", "Smile shade design", "Minimal-prep planning"],
      ar: ["فينير بورسلان", "تيجان زيركون", "تصميم لون الابتسامة", "تخطيط بأقل تحضير ممكن"]
    },
    process: {
      en: ["Case evaluation", "Shade and shape design", "Preparation", "Trial and fitting", "Final bonding"],
      ar: ["تقييم الحالة", "تصميم اللون والشكل", "التحضير", "التجربة والتركيب", "التثبيت النهائي"]
    },
    faqs: {
      en: [
        { question: "Veneers or zircon?", answer: "The right choice depends on tooth structure, bite, color goals, and whether strength or minimal preparation is the priority." },
        { question: "How long do veneers last?", answer: "With good planning and care, premium veneers can last many years with regular follow-up." }
      ],
      ar: [
        { question: "فينير أم زيركون؟", answer: "يعتمد الاختيار على بنية الأسنان، العضة، هدف اللون، وما إذا كانت الأولوية للمتانة أو التحضير الأقل." },
        { question: "كم يدوم الفينير؟", answer: "مع التخطيط الجيد والعناية والمتابعة، يمكن أن يدوم الفينير عالي الجودة لسنوات طويلة." }
      ]
    }
  },
  {
    slug: "dental-implants-jordan",
    title: {
      en: "Teeth Implants in Jordan",
      ar: "زراعة الأسنان في الأردن"
    },
    navTitle: {
      en: "Teeth Implants",
      ar: "زراعة الأسنان"
    },
    description: {
      en: "Implant solutions planned for strength, facial balance, chewing comfort, and a natural-looking final smile.",
      ar: "حلول زراعة مخططة للقوة، توازن الوجه، راحة المضغ، وابتسامة نهائية طبيعية."
    },
    keywords: ["dental implants Jordan", "teeth implants Amman", "implant dentist Jordan"],
    bullets: {
      en: ["Single implants", "Implant crowns", "Full smile planning", "Post-treatment follow-up"],
      ar: ["زراعة سن واحد", "تيجان على الزراعة", "تخطيط كامل للابتسامة", "متابعة بعد العلاج"]
    },
    process: {
      en: ["Scan and diagnosis", "Implant planning", "Surgical placement", "Healing phase", "Final restoration"],
      ar: ["تصوير وتشخيص", "تخطيط الزراعة", "وضع الزرعة", "مرحلة الالتئام", "التركيب النهائي"]
    },
    faqs: {
      en: [
        { question: "Are implants suitable for medical tourism?", answer: "Many patients plan implant treatment in stages. WhatsApp consultation helps estimate timing before travel." },
        { question: "Is the result cosmetic too?", answer: "Yes. Implant planning should consider the gum line, tooth shape, and the smile as a whole." }
      ],
      ar: [
        { question: "هل الزراعة مناسبة للسياحة العلاجية؟", answer: "يمكن تخطيط علاج الزراعة على مراحل، وتساعد استشارة واتساب في تقدير التوقيت قبل السفر." },
        { question: "هل النتيجة جمالية أيضاً؟", answer: "نعم. يجب أن يراعي تخطيط الزراعة خط اللثة وشكل السن والابتسامة ككل." }
      ]
    }
  },
  {
    slug: "teeth-whitening-amman",
    title: {
      en: "Teeth Whitening in Amman",
      ar: "تبييض الأسنان في عمان"
    },
    navTitle: {
      en: "Whitening",
      ar: "تبييض الأسنان"
    },
    description: {
      en: "A brighter smile option for patients who want a clean, refreshed look without changing tooth shape.",
      ar: "خيار لابتسامة أكثر إشراقاً لمن يريدون مظهراً نظيفاً ومنتعشاً دون تغيير شكل الأسنان."
    },
    keywords: ["teeth whitening Amman", "teeth whitening Jordan"],
    bullets: {
      en: ["Professional whitening", "Stain assessment", "Sensitivity-aware planning", "Maintenance advice"],
      ar: ["تبييض احترافي", "تقييم التصبغات", "خطة تراعي الحساسية", "نصائح للحفاظ على النتيجة"]
    },
    process: {
      en: ["Assessment", "Shade recording", "Whitening session", "Aftercare"],
      ar: ["تقييم", "تسجيل درجة اللون", "جلسة التبييض", "العناية بعد الجلسة"]
    },
    faqs: {
      en: [{ question: "Is whitening enough for every smile?", answer: "Whitening improves color only. Veneers or zircon may be better if shape, gaps, or old restorations are the concern." }],
      ar: [{ question: "هل التبييض يكفي لكل ابتسامة؟", answer: "التبييض يحسن اللون فقط. قد يكون الفينير أو الزيركون أفضل إذا كان القلق من الشكل أو الفراغات أو التركيبات القديمة." }]
    }
  },
  {
    slug: "facing-to-veneers-jordan",
    title: {
      en: "Facing to Veneers in Jordan",
      ar: "من الفيسنج إلى الفينير في الأردن"
    },
    navTitle: {
      en: "Facing to Veneers",
      ar: "من الفيسنج للفينير"
    },
    description: {
      en: "A focused cosmetic page for patients replacing old facing or composite work with natural-looking veneers planned for texture, shape, and smile harmony.",
      ar: "صفحة جمالية مخصصة لمن يرغبون باستبدال الفيسنج أو الحشوات التجميلية القديمة بفينير طبيعي يراعي الملمس والشكل وتناسق الابتسامة."
    },
    keywords: ["facing to veneers Jordan", "replace facing with veneers", "veneers after composite Jordan"],
    bullets: {
      en: ["Old facing assessment", "Veneer texture planning", "Natural shade correction", "Before and after documentation"],
      ar: ["تقييم الفيسنج القديم", "تخطيط ملمس الفينير", "تصحيح لون طبيعي", "توثيق قبل وبعد"]
    },
    process: {
      en: ["Assess old work", "Plan veneer design", "Remove and prepare conservatively", "Trial smile", "Final veneers"],
      ar: ["تقييم العمل القديم", "تصميم الفينير", "إزالة وتحضير محافظ", "تجربة الابتسامة", "الفينير النهائي"]
    },
    faqs: {
      en: [
        { question: "Can old facing be replaced with veneers?", answer: "Yes, many patients replace older composite facing with porcelain veneers for improved color stability, texture, and a more refined smile shape." },
        { question: "Will the teeth look bulky?", answer: "The design should account for existing tooth shape and old material thickness so the final veneers look balanced, not heavy." }
      ],
      ar: [
        { question: "هل يمكن استبدال الفيسنج القديم بالفينير؟", answer: "نعم، يستبدل الكثير من المرضى الفيسنج أو الكومبوزت القديم بفينير بورسلان لتحسين ثبات اللون والملمس وشكل الابتسامة." },
        { question: "هل ستبدو الأسنان سميكة؟", answer: "يجب أن يراعي التصميم شكل الأسنان الحالي وسماكة المادة القديمة حتى تبدو النتيجة متوازنة وغير ثقيلة." }
      ]
    }
  },
  {
    slug: "gummy-smile-treatment",
    title: {
      en: "Gummy Smile Treatment",
      ar: "علاج الابتسامة اللثوية"
    },
    navTitle: {
      en: "Gummy Smile",
      ar: "الابتسامة اللثوية"
    },
    description: {
      en: "Aesthetic gum-line correction to create a more balanced smile while preserving natural expression.",
      ar: "تصحيح جمالي لخط اللثة للحصول على ابتسامة أكثر توازناً مع الحفاظ على التعبير الطبيعي."
    },
    keywords: ["gummy smile Jordan", "gummy smile treatment Amman"],
    bullets: {
      en: ["Gum-line analysis", "Smile proportion planning", "Conservative correction", "Natural final look"],
      ar: ["تحليل خط اللثة", "تخطيط نسب الابتسامة", "تصحيح محافظ", "مظهر نهائي طبيعي"]
    },
    process: {
      en: ["Assessment", "Cause identification", "Treatment selection", "Follow-up"],
      ar: ["تقييم", "تحديد السبب", "اختيار العلاج", "متابعة"]
    },
    faqs: {
      en: [{ question: "What causes a gummy smile?", answer: "It may be related to gum position, tooth proportions, lip movement, or jaw structure. The cause determines treatment." }],
      ar: [{ question: "ما سبب الابتسامة اللثوية؟", answer: "قد ترتبط بمكان اللثة أو نسب الأسنان أو حركة الشفاه أو بنية الفك، والسبب يحدد العلاج." }]
    }
  }
];

export const cases: CaseMedia[] = [
  {
    id: "case-01",
    slug: "soft-hollywood-smile",
    treatment: "hollywood-smile",
    type: "before-after",
    posterSrc: "/media/posters/placeholder-01.svg",
    title: { en: "Soft Hollywood Smile", ar: "ابتسامة هوليوود ناعمة" },
    caption: { en: "Balanced brightness with a natural facial fit.", ar: "إشراقة متوازنة مع تناسق طبيعي مع الوجه." },
    alt: { en: "Before and after Hollywood smile result", ar: "صورة قبل وبعد لابتسامة هوليوود" },
    isFeatured: true
  },
  {
    id: "case-02",
    slug: "zircon-smile-balance",
    treatment: "zircon-veneers",
    type: "before-after",
    posterSrc: "/media/posters/placeholder-02.svg",
    title: { en: "Zircon Smile Balance", ar: "توازن ابتسامة الزيركون" },
    caption: { en: "A refined ceramic result planned around symmetry.", ar: "نتيجة خزفية راقية مخططة حول التناسق." },
    alt: { en: "Before and after zircon smile result", ar: "صورة قبل وبعد للزيركون" },
    isFeatured: false
  },
  {
    id: "case-03",
    slug: "implant-restoration",
    treatment: "implants",
    type: "before-after",
    posterSrc: "/media/posters/placeholder-03.svg",
    title: { en: "Implant Restoration", ar: "ترميم بالزراعة" },
    caption: { en: "Function, comfort, and a complete smile line.", ar: "وظيفة وراحة وخط ابتسامة مكتمل." },
    alt: { en: "Dental implant smile result", ar: "صورة نتيجة زراعة الأسنان" },
    isFeatured: false
  },
  {
    id: "case-04",
    slug: "mirror-reaction",
    treatment: "testimonial",
    type: "testimonial",
    posterSrc: "/media/posters/placeholder-04.svg",
    title: { en: "Mirror Reveal", ar: "لحظة المرآة" },
    caption: { en: "Patient reaction moments that show the emotional side of smile design.", ar: "لحظات رد فعل المرضى التي تعكس الجانب الإنساني لتصميم الابتسامة." },
    alt: { en: "Patient mirror reaction moment", ar: "لحظة رد فعل المريض أمام المرآة" },
    isFeatured: false
  }
];

const providedInstagramMedia: Omit<CaseMedia, "videoSrc" | "posterSrc" | "assetReady">[] = [
  { id: "ig-01", slug: "case-reel-cw-k2axilyg", treatment: "hollywood-smile", type: "reel", title: { en: "Perfect Veneers", ar: "فينير مثالي" }, caption: { en: "A refined veneer result with clean shape, shade harmony, and a natural smile line.", ar: "نتيجة فينير راقية بتناسق الشكل واللون وخط ابتسامة طبيعي." }, alt: { en: "Perfect veneers cosmetic dentistry reel", ar: "ريل فينير مثالي لتجميل الأسنان" }, isFeatured: true, sourceUrl: "https://www.instagram.com/p/Cw-K2axIlYg/" },
  { id: "ig-02", slug: "trimmed-case-reel-cw-k69jobtx", treatment: "hollywood-smile", type: "reel", title: { en: "Confident Smile", ar: "ابتسامة واثقة" }, caption: { en: "A premium smile-design moment focused on confidence, balance, and natural brightness.", ar: "لحظة تصميم ابتسامة راقية تركز على الثقة والتوازن والإشراقة الطبيعية." }, alt: { en: "Confident smile design reel", ar: "ريل تصميم ابتسامة واثقة" }, isFeatured: true, sourceUrl: "https://www.instagram.com/p/Cw-K69JoBtX/" },
  { id: "ig-03", slug: "carousel-smile-dz7xqb", treatment: "zircon-veneers", type: "reel", title: { en: "Hollywood Smile", ar: "هوليوود سمايل" }, caption: { en: "A polished smile transformation with premium facial harmony.", ar: "تحول ابتسامة مصقول بتناغم فاخر مع ملامح الوجه." }, alt: { en: "Hollywood Smile transformation reel", ar: "ريل تحول هوليوود سمايل" }, isFeatured: true, sourceUrl: "https://www.instagram.com/p/DZ7XQb_CP83/?img_index=1" },
  { id: "ig-04", slug: "testimonial-dznu9", treatment: "testimonial", type: "testimonial", title: { en: "Patient testimonial 1", ar: "تجربة مريض 1" }, caption: { en: "Video testimonial from Instagram.", ar: "فيديو شهادة من إنستغرام." }, alt: { en: "Patient testimonial video", ar: "فيديو تجربة مريض" }, isFeatured: true, sourceUrl: "https://www.instagram.com/p/DZNU9b2IT0X/" },
  { id: "ig-05", slug: "testimonial-dzcw", treatment: "testimonial", type: "testimonial", title: { en: "Patient testimonial 2", ar: "تجربة مريض 2" }, caption: { en: "Video testimonial from Instagram.", ar: "فيديو شهادة من إنستغرام." }, alt: { en: "Patient testimonial video", ar: "فيديو تجربة مريض" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DZCwFrdo_cD/" },
  { id: "ig-06", slug: "doctor-working-case-dyrh", treatment: "testimonial", type: "testimonial", title: { en: "Treatment and reveal", ar: "العلاج والنتيجة" }, caption: { en: "Doctor working on a case, final result, and testimonial.", ar: "الدكتور أثناء العمل على الحالة ثم النتيجة والشهادة." }, alt: { en: "Doctor working on smile case", ar: "الدكتور يعمل على حالة ابتسامة" }, isFeatured: true, sourceUrl: "https://www.instagram.com/p/DYrh8kWIPIS/" },
  { id: "ig-07", slug: "carousel-case-dxom", treatment: "zircon-veneers", type: "before-after", title: { en: "Layered smile case", ar: "حالة ابتسامة متعددة الصور" }, caption: { en: "A documented transformation with several angles for clearer visual proof.", ar: "تحول موثق بعدة زوايا لتقديم دليل بصري أوضح." }, alt: { en: "Before and after smile transformation images", ar: "صور قبل وبعد لتحول الابتسامة" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DXomfNHjHTy/?img_index=1" },
  { id: "ig-08", slug: "testimonial-dwn", treatment: "testimonial", type: "testimonial", title: { en: "Patient testimonial 3", ar: "تجربة مريض 3" }, caption: { en: "Video testimonial from Instagram.", ar: "فيديو شهادة من إنستغرام." }, alt: { en: "Patient testimonial video", ar: "فيديو تجربة مريض" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DWn-VFDjEJM/" },
  { id: "ig-09", slug: "testimonial-dw3", treatment: "testimonial", type: "testimonial", title: { en: "Patient testimonial 4", ar: "تجربة مريض 4" }, caption: { en: "Video testimonial from Instagram.", ar: "فيديو شهادة من إنستغرام." }, alt: { en: "Patient testimonial video", ar: "فيديو تجربة مريض" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DW3xF3NjEnN/" },
  { id: "ig-10", slug: "testimonial-dvx", treatment: "testimonial", type: "testimonial", title: { en: "Patient testimonial 5", ar: "تجربة مريض 5" }, caption: { en: "Video testimonial from Instagram.", ar: "فيديو شهادة من إنستغرام." }, alt: { en: "Patient testimonial video", ar: "فيديو تجربة مريض" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DVx-uKQjH7I/" },
  { id: "ig-11", slug: "testimonial-dvmi", treatment: "testimonial", type: "testimonial", title: { en: "Patient testimonial 6", ar: "تجربة مريض 6" }, caption: { en: "Video testimonial from Instagram.", ar: "فيديو شهادة من إنستغرام." }, alt: { en: "Patient testimonial video", ar: "فيديو تجربة مريض" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DVMIhJsDKJ4/" },
  { id: "ig-12", slug: "after-only-case-dt2", treatment: "hollywood-smile", type: "reel", title: { en: "After-only smile case", ar: "حالة نتيجة فقط" }, caption: { en: "Attractive after-only reel case.", ar: "ريل جذاب يعرض النتيجة فقط." }, alt: { en: "After only smile result reel", ar: "ريل نتيجة ابتسامة فقط" }, isFeatured: true, sourceUrl: "https://www.instagram.com/p/DT2uW2xDNZK/" },
  { id: "ig-13", slug: "full-face-before-after-dtu", treatment: "zircon-veneers", type: "before-after", title: { en: "Full-face before and after", ar: "قبل وبعد مع ظهور الوجه" }, caption: { en: "Before and after carousel with full-face context.", ar: "كاروسيل قبل وبعد مع ظهور الوجه كاملاً." }, alt: { en: "Full face before and after carousel", ar: "كاروسيل قبل وبعد للوجه كامل" }, isFeatured: true, sourceUrl: "https://www.instagram.com/p/DTu0d-xjFDx/?img_index=1" },
  { id: "ig-14", slug: "full-face-before-after-dua", treatment: "zircon-veneers", type: "before-after", title: { en: "Full-face before and after 2", ar: "قبل وبعد مع ظهور الوجه 2" }, caption: { en: "Second full-face before and after carousel.", ar: "كاروسيل ثانٍ قبل وبعد مع ظهور الوجه." }, alt: { en: "Second full face before and after carousel", ar: "كاروسيل ثانٍ قبل وبعد" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DUAjPT_jB8P/?img_index=1" },
  { id: "ig-15", slug: "facing-to-veneers-dog", treatment: "zircon-veneers", type: "before-after", title: { en: "Facing to veneers", ar: "من الفيسنج إلى الفينير" }, caption: { en: "Before facing, after veneers. Featured on the facing-to-veneers SEO page.", ar: "قبل فيسنج وبعد فينير. حالة أساسية لصفحة من الفيسنج إلى الفينير." }, alt: { en: "Facing to veneers before and after", ar: "قبل وبعد من الفيسنج إلى الفينير" }, isFeatured: true, sourceUrl: "https://www.instagram.com/p/DOGWCVMCGVH/?img_index=1" },
  { id: "ig-16", slug: "male-texture-case-dj1", treatment: "zircon-veneers", type: "before-after", title: { en: "Male texture detail case", ar: "حالة رجل مع تفاصيل الملمس" }, caption: { en: "Male case showing tooth texture details.", ar: "حالة رجل تظهر تفاصيل ملمس الأسنان." }, alt: { en: "Male veneer texture case", ar: "حالة فينير لرجل مع تفاصيل الملمس" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DJ1JpwvIzZD/?img_index=1" },
  { id: "ig-17", slug: "facing-to-veneers-djuc", treatment: "zircon-veneers", type: "reel", title: { en: "Facing to veneers 2", ar: "من الفيسنج إلى الفينير 2" }, caption: { en: "Second facing-to-veneers case reel.", ar: "ريل الحالة الثانية من الفيسنج إلى الفينير." }, alt: { en: "Facing to veneers reel", ar: "ريل من الفيسنج إلى الفينير" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DJucmWnoPxG/" },
  { id: "ig-18", slug: "male-facing-to-veneers-dig", treatment: "zircon-veneers", type: "before-after", title: { en: "Male facing to veneers", ar: "رجل من الفيسنج إلى الفينير" }, caption: { en: "Male case moving from facing to veneers.", ar: "حالة رجل من الفيسنج إلى الفينير." }, alt: { en: "Male facing to veneers before and after", ar: "حالة رجل قبل وبعد من الفيسنج إلى الفينير" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DIgG3l4IGN_/?img_index=1" },
  { id: "ig-19", slug: "case-reel-db3", treatment: "hollywood-smile", type: "reel", title: { en: "Soft Smile Reveal", ar: "كشف ابتسامة ناعم" }, caption: { en: "A premium smile-design reveal with natural brightness.", ar: "كشف ابتسامة راقٍ بإشراقة طبيعية." }, alt: { en: "Soft Hollywood Smile reveal reel", ar: "ريل كشف ابتسامة هوليوود ناعمة" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DB3hWNLoijl/" }
];

const downloadedVideoSlots = new Set(["01", "02", "04", "05", "06", "08", "09", "10", "11", "12", "17"]);
const mediaSlotOverrides: Record<string, string> = {
  "ig-01": "04",
  "ig-02": "08",
  "ig-03": "04"
};

export const reels: CaseMedia[] = providedInstagramMedia.map((item, index) => {
  const number = mediaSlotOverrides[item.id] ?? String(index + 1).padStart(2, "0");
  return {
    ...item,
    videoSrc: downloadedVideoSlots.has(number) ? `/media/reels/reel-${number}.mp4` : undefined,
    posterSrc: `/media/posters/reel-${number}.jpg`,
    assetReady: true
  };
});

export const reviews: Review[] = [
  {
    id: "review-01",
    name: "Clear consultation",
    rating: 5,
    source: "manual",
    treatment: "Hollywood Smile",
    text: {
      en: "Patients should understand the likely options, timing, and next step before committing to treatment.",
      ar: "من المهم أن يفهم المريض الخيارات المتوقعة، التوقيت، والخطوة التالية قبل الالتزام بالعلاج."
    }
  },
  {
    id: "review-02",
    name: "Natural smile goals",
    rating: 5,
    source: "manual",
    treatment: "Veneers",
    text: {
      en: "Shade, shape, and tooth texture should be planned around the face so the result feels refined, not artificial.",
      ar: "يجب تخطيط اللون والشكل والملمس حول ملامح الوجه حتى تبدو النتيجة راقية وغير مصطنعة."
    }
  },
  {
    id: "review-03",
    name: "Travel planning",
    rating: 5,
    source: "manual",
    treatment: "Dental Implants",
    text: {
      en: "Patients traveling to Jordan need early clarity about visit count, timing, and follow-up expectations.",
      ar: "يحتاج المرضى القادمون إلى الأردن إلى وضوح مبكر حول عدد الزيارات، التوقيت، والمتابعة."
    }
  }
];

const editorialAuthor = {
  en: {
    name: "Dr. Ali Alheneiti Editorial Team",
    title: "Cosmetic Dentistry · Amman, Jordan",
    bio: "Reviewed for clarity by a cosmetic dentistry team focused on natural veneers, Hollywood Smile planning, and premium patient experiences."
  },
  ar: {
    name: "الفريق التحريري للدكتور علي الحنيطي",
    title: "طب تجميل الأسنان · عمّان، الأردن",
    bio: "محتوى مُراجع من فريق تجميل أسنان يركز على الفينير الطبيعي، تخطيط هوليوود سمايل، وتجربة المريض الراقية."
  }
} satisfies BlogPost["author"];

export const blogPosts: BlogPost[] = [
  {
    slug: "hollywood-smile-guide",
    relatedService: "hollywood-smile-jordan",
    title: { en: "The Complete Hollywood Smile Guide (2026)", ar: "الدليل الكامل لهوليوود سمايل 2026" },
    seoTitle: { en: "The Complete Hollywood Smile Guide (2026) | Jordan", ar: "الدليل الكامل لهوليوود سمايل 2026 | الأردن" },
    metaDescription: { en: "Learn what a Hollywood Smile is, cost factors in Jordan, veneers vs crowns, zircon vs Emax, treatment timeline, pain, recovery, and consultation steps.", ar: "تعرف على هوليوود سمايل في الأردن، عوامل التكلفة، الفينير مقابل التيجان، الزيركون مقابل إيماكس، المدة، الألم، التعافي وخطوات الاستشارة." },
    h1: { en: "The Complete Hollywood Smile Guide (2026)", ar: "الدليل الكامل لهوليوود سمايل 2026" },
    excerpt: { en: "A complete patient guide to Hollywood Smile Jordan planning, cost factors, materials, timeline, comfort, and realistic before-and-after expectations.", ar: "دليل شامل لتخطيط هوليوود سمايل في الأردن، عوامل التكلفة، المواد، المدة، الراحة، وتوقعات النتائج الواقعية." },
    category: { en: "Hollywood Smile", ar: "هوليوود سمايل" },
    readTime: "10 min read",
    coverImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85",
    coverAlt: { en: "Cosmetic dentist planning a premium Hollywood Smile in Jordan", ar: "طبيب تجميل أسنان يخطط لابتسامة هوليوود في الأردن" },
    keywords: ["Hollywood Smile Jordan", "Hollywood Smile Cost Jordan", "Smile Makeover Jordan", "Hollywood Smile Procedure", "Hollywood Smile Dentist Jordan"],
    lastUpdated: "2026-01-15",
    author: editorialAuthor,
    introduction: {
      en: [
        "A Hollywood Smile is not simply a bright set of teeth. In premium cosmetic dentistry, it is a planned smile makeover that studies facial proportions, lip movement, tooth display, gum balance, personality, and long-term function before choosing veneers, crowns, whitening, orthodontics, or a combination of treatments.",
        "Patients searching for Hollywood Smile Jordan or Hollywood Smile Cost Jordan often want a clear answer before booking. The honest answer is that cost and timeline depend on tooth condition, material choice, number of teeth, bite, gum health, and the level of digital planning required. This guide explains what to expect before you send photos or schedule a consultation."
      ],
      ar: [
        "هوليوود سمايل ليست مجرد أسنان بيضاء. في طب التجميل الراقي هي خطة ابتسامة تدرس تناسق الوجه، حركة الشفاه، ظهور الأسنان، خط اللثة، الشخصية، والوظيفة قبل اختيار الفينير أو التيجان أو التبييض أو التقويم أو الدمج بينها.",
        "عند البحث عن هوليوود سمايل في الأردن أو تكلفة هوليوود سمايل، من الطبيعي أن ترغب بإجابة واضحة قبل الحجز. الحقيقة أن التكلفة والمدة ترتبط بحالة الأسنان، نوع المادة، عدد الأسنان، العضة، صحة اللثة، ومستوى التخطيط الرقمي المطلوب."
      ]
    },
    sections: [
      { id: "what-is", heading: { en: "What Is a Hollywood Smile?", ar: "ما هي هوليوود سمايل؟" }, body: { en: ["A Hollywood Smile is a customized cosmetic plan designed to improve color, shape, alignment, tooth proportions, and smile harmony. The result should look polished in photos and natural in conversation. The best Hollywood Smile dentist in Jordan will not copy one template; they will adapt the design to your face.", "The procedure can involve porcelain veneers, Emax veneers, zircon crowns, whitening, gum contouring, or replacement of old restorations. The correct approach is selected after examining enamel, existing fillings, bite forces, gum line, and how much brightness the patient wants."], ar: ["هوليوود سمايل خطة تجميلية مخصصة لتحسين اللون والشكل والاصطفاف ونسب الأسنان وتناسق الابتسامة. النتيجة يجب أن تبدو راقية في الصور وطبيعية أثناء الحديث.", "قد تشمل الخطة فينير بورسلان أو إيماكس أو تيجان زيركون أو تبييض أو تعديل اللثة أو استبدال تركيبات قديمة. الاختيار الصحيح يتم بعد فحص المينا، الحشوات، العضة، خط اللثة ودرجة اللون المطلوبة."] } },
      { id: "candidate", heading: { en: "Candidate Assessment Before Treatment", ar: "تقييم المرشح للعلاج" }, body: { en: ["Good candidates usually want a brighter, more balanced smile and have healthy gums or are willing to treat gum concerns first. A consultation should include photos, bite evaluation, shade discussion, and a review of old restorations or worn edges.", "Patients with active decay, gum inflammation, severe grinding, or unstable bite may need preparatory care before veneers or crowns. This protects the investment and helps the final smile last longer."], ar: ["المرشح الجيد غالباً يريد ابتسامة أكثر إشراقاً وتوازناً مع لثة صحية أو استعداد لعلاج اللثة أولاً. يجب أن تشمل الاستشارة الصور، تقييم العضة، مناقشة اللون، ومراجعة التركيبات القديمة أو تآكل الحواف.", "وجود تسوس نشط أو التهاب لثة أو صرير شديد أو عضة غير مستقرة قد يتطلب علاجاً تحضيرياً قبل الفينير أو التيجان لحماية النتيجة وإطالة عمرها."] } },
      { id: "smile-design", heading: { en: "Digital Smile Design and Facial Harmony", ar: "تصميم الابتسامة الرقمي وتناسق الوجه" }, body: { en: ["Smile design connects dentistry with facial aesthetics. Width, length, midline, incisal edge position, tooth texture, translucency, and lip support are planned together. A premium smile makeover Jordan experience should feel measured, calm, and personal.", "Digital mockups and photo analysis help patients understand the direction before irreversible steps are taken. They also help the dentist communicate clearly with the laboratory about texture, brightness, and ceramic layering."], ar: ["تصميم الابتسامة يربط طب الأسنان بجماليات الوجه. يتم تخطيط العرض والطول وخط المنتصف وحواف الأسنان والملمس والشفافية ودعم الشفاه معاً لتبدو النتيجة شخصية ومتزنة.", "تساعد النماذج الرقمية وتحليل الصور المريض على فهم الاتجاه قبل أي خطوات غير قابلة للتراجع، كما تسهل التواصل مع المختبر حول الملمس واللون وطبقات السيراميك."] } },
      { id: "materials", heading: { en: "Veneers vs Crowns, Zircon vs Emax", ar: "الفينير مقابل التيجان والزيركون مقابل إيماكس" }, body: { en: ["Veneers are thin ceramic shells bonded to the visible tooth surface. They are ideal when tooth structure is healthy and the goal is shape, shade, and minor alignment improvement. Crowns cover more tooth structure and may be needed for heavily restored, cracked, root-canal-treated, or structurally weak teeth.", "Emax is often chosen for lifelike translucency and refined anterior aesthetics. Zircon is valued for strength and masking power, especially when underlying teeth are dark or need broader coverage. The choice is not about one material being universally best; it is about matching the material to the clinical situation."], ar: ["الفينير قشور خزفية رقيقة تلصق على السطح الظاهر للأسنان، وهو مناسب عندما تكون بنية السن جيدة والهدف تحسين الشكل واللون والاصطفاف البسيط. التيجان تغطي مساحة أكبر وقد تلزم للأسنان الضعيفة أو المتشققة أو المعالجة عصبياً.", "إيماكس يتميز بالشفافية والمظهر الطبيعي في الأسنان الأمامية، بينما الزيركون قوي وله قدرة أعلى على إخفاء اللون الداكن أو تغطية أوسع. الاختيار يعتمد على الحالة وليس على اسم المادة فقط."] } },
      { id: "timeline", heading: { en: "Timeline, Pain, and Recovery", ar: "المدة والألم والتعافي" }, body: { en: ["A Hollywood Smile procedure can often be completed in a focused sequence of visits after diagnosis, planning, preparation, trial, and bonding. International patients should ask about the exact visit count before booking flights, because complex cases may need extra planning or gum treatment.", "Most patients describe veneer preparation and bonding as manageable with local anesthesia. Sensitivity can occur temporarily, especially with temperature changes. Recovery is usually about adapting to the new bite feel, maintaining excellent hygiene, and attending follow-up appointments."], ar: ["يمكن إنجاز هوليوود سمايل خلال زيارات مركزة بعد التشخيص والتخطيط والتحضير والتجربة والتثبيت. على المرضى القادمين من الخارج معرفة عدد الزيارات بدقة قبل حجز السفر لأن الحالات المعقدة قد تحتاج وقتاً إضافياً.", "غالباً ما يكون التحضير والتثبيت مريحاً مع التخدير الموضعي. قد تظهر حساسية مؤقتة خاصة مع البرودة والحرارة، والتعافي يعتمد على التعود على العضة الجديدة والعناية والمتابعة."] } },
      { id: "cost", heading: { en: "Hollywood Smile Cost Factors in Jordan", ar: "عوامل تكلفة هوليوود سمايل في الأردن" }, body: { en: ["Hollywood Smile cost Jordan searches usually focus on price per tooth, but total cost depends on the number of teeth treated, ceramic type, laboratory level, gum work, old restoration replacement, bite protection, diagnostic records, and follow-up. A low quote without diagnosis can lead to compromises in fit, color, or longevity.", "A professional consultation should explain why each tooth is included, whether veneers or crowns are recommended, what material is suitable, and what maintenance is expected. Transparent planning is more valuable than a generic package price."], ar: ["غالباً يركز البحث عن التكلفة على سعر السن، لكن التكلفة الإجمالية تعتمد على عدد الأسنان، نوع السيراميك، مستوى المختبر، علاج اللثة، استبدال التركيبات القديمة، حماية العضة، السجلات التشخيصية والمتابعة.", "الاستشارة الجيدة تشرح لماذا تم اختيار كل سن، وهل الأنسب فينير أم تاج، وما المادة المناسبة، وما العناية المطلوبة. وضوح الخطة أهم من سعر عام غير مشخص."] } },
      { id: "expectations", heading: { en: "Before & After Expectations", ar: "توقعات قبل وبعد" }, body: { en: ["Before-and-after photos are useful, but they should be interpreted carefully. Lighting, lip position, gum health, facial expression, and camera angle all influence the image. Ask to see cases that resemble your starting point, not only the brightest results.", "A natural Hollywood Smile should improve confidence without making every tooth look identical. Subtle surface texture, controlled translucency, and a shade that suits skin tone often look more expensive than an extremely white, flat result."], ar: ["صور قبل وبعد مفيدة لكنها تحتاج تفسيراً دقيقاً لأن الإضاءة وحركة الشفاه وصحة اللثة والتعبير وزاوية الكاميرا تؤثر في الصورة. من الأفضل مشاهدة حالات تشبه حالتك وليس فقط أكثر النتائج بياضاً.", "هوليوود سمايل الطبيعية تعزز الثقة دون أن تجعل كل الأسنان متطابقة تماماً. الملمس الخفيف والشفافية المدروسة ولون يناسب البشرة غالباً يبدو أكثر فخامة من البياض المبالغ فيه."] } }
    ],
    faqs: [
      { question: { en: "How long does a Hollywood Smile last?", ar: "كم تدوم هوليوود سمايل؟" }, answer: { en: "With good planning, oral hygiene, bite protection when needed, and regular checkups, premium ceramic veneers or crowns can last many years. Longevity depends on habits and clinical condition.", ar: "مع التخطيط الجيد والعناية وحماية العضة عند الحاجة والمتابعة المنتظمة، يمكن أن تدوم القشور أو التيجان الخزفية لسنوات طويلة حسب العادات والحالة." } },
      { question: { en: "Is a Hollywood Smile painful?", ar: "هل هوليوود سمايل مؤلمة؟" }, answer: { en: "Most steps are performed with local anesthesia when needed. Temporary sensitivity can happen, but significant pain is not expected in a well-managed case.", ar: "تتم أغلب الخطوات بتخدير موضعي عند الحاجة. قد تحدث حساسية مؤقتة لكن الألم الشديد غير متوقع في الحالة المدارة جيداً." } },
      { question: { en: "Can I start with photos on WhatsApp?", ar: "هل يمكن البدء بالصور عبر واتساب؟" }, answer: { en: "Yes. Photos can help the clinic give initial direction, but final diagnosis, cost, and material choice require an in-person examination.", ar: "نعم، تساعد الصور في إعطاء توجيه أولي، لكن التشخيص النهائي والتكلفة واختيار المادة يحتاجون فحصاً في العيادة." } }
    ]
  },
  {
    slug: "why-veneers",
    relatedService: "zircon-veneers-amman",
    title: { en: "Why Veneers Are the Best Cosmetic Dental Treatment", ar: "لماذا يعد الفينير من أفضل علاجات تجميل الأسنان" },
    seoTitle: { en: "Why Veneers Are the Best Cosmetic Dental Treatment", ar: "لماذا يعد الفينير أفضل علاج تجميلي للأسنان" },
    metaDescription: { en: "Compare veneers with whitening, bonding, crowns, orthodontics, composite veneers, zircon, and Emax. Learn benefits, longevity, maintenance, and ideal candidates.", ar: "قارن الفينير مع التبييض، البوندنج، التيجان، التقويم، كومبوزت فينير، الزيركون وإيماكس، وتعرف على المزايا والعمر والعناية." },
    h1: { en: "Why Veneers Are the Best Cosmetic Dental Treatment", ar: "لماذا يعد الفينير من أفضل علاجات تجميل الأسنان" },
    excerpt: { en: "A clear comparison explaining why dental veneers remain one of the most predictable, aesthetic, and long-lasting smile makeover options.", ar: "مقارنة واضحة توضح لماذا يبقى الفينير من أكثر خيارات تجميل الابتسامة توقعاً وجمالاً واستمرارية." },
    category: { en: "Veneers", ar: "الفينير" },
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85",
    coverAlt: { en: "Premium dental veneers shade selection", ar: "اختيار لون فينير أسنان فاخر" },
    keywords: ["Best veneers", "Dental veneers", "Veneers benefits", "Smile makeover", "Cosmetic dentistry"],
    lastUpdated: "2026-01-15",
    author: editorialAuthor,
    introduction: {
      en: ["Dental veneers are often considered the signature treatment in cosmetic dentistry because they can transform color, shape, length, symmetry, and minor alignment at the same time. For patients who want a smile makeover without years of orthodontics or repeated whitening, veneers offer precision and visual control.", "The best veneers are not the whitest or thickest veneers. They are carefully planned ceramic restorations that protect tooth structure, reflect light naturally, and support the lips and face. This guide compares veneers with common alternatives so you can choose with confidence."],
      ar: ["يُعد الفينير علاجاً أساسياً في تجميل الأسنان لأنه يستطيع تحسين اللون والشكل والطول والتناسق والاصطفاف البسيط في وقت واحد. لمن يرغب بابتسامة جديدة دون سنوات من التقويم أو تكرار التبييض، يوفر الفينير دقة وتحكماً بصرياً.", "أفضل فينير ليس الأكثر بياضاً أو سماكة، بل القشرة الخزفية المخططة بعناية لحماية السن وعكس الضوء بشكل طبيعي ودعم ملامح الوجه والشفاه."]
    },
    sections: [
      { id: "benefits", heading: { en: "The Main Benefits of Veneers", ar: "أهم فوائد الفينير" }, body: { en: ["Veneers can correct stubborn discoloration, small gaps, worn edges, uneven tooth length, old composite facing, mild rotations, and shape concerns. They provide a controlled final shade and surface texture that whitening or bonding cannot always deliver.", "Because porcelain is color-stable and polishable, premium veneers can maintain their appearance with proper hygiene and professional follow-up. They are also conservative when planned on suitable teeth."], ar: ["يمكن للفينير تصحيح التصبغات العنيدة، الفراغات الصغيرة، تآكل الحواف، اختلاف أطوال الأسنان، الفيسنج القديم، الدورانات البسيطة ومشاكل الشكل. يوفر لوناً وملمساً نهائيين لا يستطيع التبييض أو البوندنج توفيرهما دائماً.", "لأن البورسلان ثابت اللون وقابل للتلميع، يمكن للفينير الفاخر الحفاظ على مظهره مع العناية والمتابعة، كما يكون محافظاً عندما يخطط على أسنان مناسبة."] } },
      { id: "whitening-bonding", heading: { en: "Veneers vs Whitening and Bonding", ar: "الفينير مقابل التبييض والبوندنج" }, body: { en: ["Whitening improves tooth color but does not change shape, length, texture, or alignment. It is ideal for healthy teeth with simple staining, but it may not work well for deep discoloration, old fillings, or enamel defects.", "Composite bonding can be useful for small repairs and budget-conscious improvements. However, it stains faster, chips more easily, and often lacks the depth and light reflection of porcelain veneers. Veneers are usually stronger aesthetically for full smile makeovers."], ar: ["التبييض يحسن اللون لكنه لا يغير الشكل أو الطول أو الملمس أو الاصطفاف. يناسب الأسنان الصحية ذات التصبغ البسيط لكنه قد لا ينجح مع التصبغ العميق أو الحشوات القديمة أو عيوب المينا.", "البوندنج مفيد للإصلاحات الصغيرة والتحسينات الاقتصادية، لكنه يتصبغ أسرع وقد يتكسر أكثر ولا يمنح غالباً عمق وانعكاس البورسلان. لذلك يكون الفينير أقوى جمالياً لتحولات الابتسامة الكاملة."] } },
      { id: "crowns-orthodontics", heading: { en: "Veneers vs Crowns and Orthodontics", ar: "الفينير مقابل التيجان والتقويم" }, body: { en: ["Crowns are excellent when teeth are weak, broken, heavily filled, or need full coverage. But for healthy front teeth, veneers can achieve a major aesthetic change while preserving more tooth structure.", "Orthodontics is best when the main issue is tooth position or bite. Veneers can visually improve mild alignment concerns, but they should not replace orthodontics when movement is clinically necessary for function or stability."], ar: ["التيجان ممتازة عندما تكون الأسنان ضعيفة أو مكسورة أو مليئة بالحشوات أو تحتاج تغطية كاملة. أما الأسنان الأمامية الصحية فيمكن للفينير تحسينها مع الحفاظ على بنية أكبر من السن.", "التقويم هو الأفضل عندما تكون المشكلة الأساسية في موضع الأسنان أو العضة. يمكن للفينير تحسين الاصطفاف البسيط بصرياً لكنه لا يستبدل التقويم عندما تكون الحركة ضرورية وظيفياً."] } },
      { id: "materials", heading: { en: "Composite Veneers, Zircon, and Emax", ar: "كومبوزت فينير والزيركون وإيماكس" }, body: { en: ["Composite veneers are shaped directly or indirectly using resin. They cost less initially and can be repaired, but they require more maintenance and usually do not match porcelain longevity or translucency.", "Emax veneers are valued for natural translucency and refined beauty. Zircon can be selected when strength or masking is more important. A cosmetic dentist should explain why one material suits your teeth rather than presenting all materials as identical."], ar: ["كومبوزت فينير يصنع من الراتنج مباشرة أو غير مباشرة، وتكلفته الأولية أقل ويمكن إصلاحه، لكنه يحتاج عناية أكثر ولا يطابق عادة عمر وشفافية البورسلان.", "إيماكس مشهور بشفافيته وجماله الطبيعي، بينما يستخدم الزيركون عند الحاجة لقوة أو إخفاء لون أكبر. يجب أن يشرح الطبيب سبب اختيار المادة المناسبة لأسنانك تحديداً."] } },
      { id: "maintenance", heading: { en: "Longevity, Maintenance, and Ideal Candidates", ar: "العمر والعناية والمرشحون المناسبون" }, body: { en: ["Veneer longevity depends on bonding quality, bite forces, hygiene, material, tooth preparation, and habits such as nail biting or teeth grinding. Many patients need a night guard if they clench.", "Ideal candidates have realistic expectations, healthy gums, enough enamel for bonding, and a desire for a refined but natural result. Maintenance includes brushing, flossing, professional cleaning, avoiding destructive habits, and attending reviews."], ar: ["يعتمد عمر الفينير على جودة اللصق وقوى العضة والعناية ونوع المادة وتحضير السن وعادات مثل قضم الأظافر أو الصرير. قد يحتاج بعض المرضى إلى واقي ليلي.", "المرشح المناسب لديه توقعات واقعية، لثة صحية، مينا كافية للالتصاق، ورغبة بنتيجة راقية وطبيعية. تشمل العناية التفريش والخيط والتنظيف الاحترافي وتجنب العادات المؤذية والمتابعة."] } }
    ],
    faqs: [
      { question: { en: "Are veneers better than whitening?", ar: "هل الفينير أفضل من التبييض؟" }, answer: { en: "For shape, length, texture, and deep discoloration, veneers are more comprehensive. For simple staining on healthy teeth, whitening may be enough.", ar: "للشكل والطول والملمس والتصبغ العميق، الفينير أشمل. أما التصبغ البسيط على أسنان صحية فقد يكفيه التبييض." } },
      { question: { en: "Do veneers damage teeth?", ar: "هل يضر الفينير الأسنان؟" }, answer: { en: "Conservative veneers on suitable teeth can preserve structure. Over-preparation or poor planning creates risk, which is why diagnosis matters.", ar: "الفينير المحافظ على أسنان مناسبة يمكن أن يحافظ على البنية. التحضير الزائد أو التخطيط الضعيف هو ما يرفع المخاطر." } },
      { question: { en: "Can veneers look natural?", ar: "هل يمكن أن يبدو الفينير طبيعياً؟" }, answer: { en: "Yes. Natural veneers rely on proportion, texture, translucency, and shade selection rather than extreme whiteness.", ar: "نعم، الفينير الطبيعي يعتمد على النسب والملمس والشفافية واختيار اللون وليس البياض المبالغ فيه." } }
    ]
  },
  {
    slug: "veneers-dr-ali-jordan",
    relatedService: "zircon-veneers-amman",
    title: { en: "Why Patients Choose Dr. Ali for Veneers in Jordan", ar: "لماذا يختار المرضى الدكتور علي للفينير في الأردن" },
    seoTitle: { en: "Why Patients Choose Dr. Ali for Veneers in Jordan", ar: "لماذا يختار المرضى الدكتور علي للفينير في الأردن" },
    metaDescription: { en: "Discover why patients choose Dr. Ali for veneers in Jordan: Digital Smile Design, premium materials, natural results, international patient support, and follow-up care.", ar: "اكتشف لماذا يختار المرضى الدكتور علي للفينير في الأردن: تصميم رقمي، مواد فاخرة، نتائج طبيعية، دعم المرضى الدوليين والمتابعة." },
    h1: { en: "Why Patients Choose Dr. Ali for Veneers in Jordan", ar: "لماذا يختار المرضى الدكتور علي للفينير في الأردن" },
    excerpt: { en: "An inside look at Dr. Ali's veneer philosophy, digital planning, premium materials, patient journey, and why Jordan is trusted for smile transformations.", ar: "نظرة على فلسفة الدكتور علي في الفينير، التخطيط الرقمي، المواد الفاخرة، رحلة المريض، ولماذا الأردن وجهة موثوقة للابتسامة." },
    category: { en: "Expert Advice", ar: "نصائح الخبراء" },
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85",
    coverAlt: { en: "Cosmetic dental clinic consultation for veneers in Jordan", ar: "استشارة في عيادة تجميل أسنان للفينير في الأردن" },
    keywords: ["Best Veneers Jordan", "Dr Ali Veneers", "Hollywood Smile Jordan", "Dental Clinic Jordan", "Medical Tourism Jordan"],
    lastUpdated: "2026-01-15",
    author: editorialAuthor,
    introduction: { en: ["Choosing veneers is a personal decision. Patients are not only selecting ceramic; they are selecting a dentist's eye, planning process, laboratory standards, and follow-up philosophy. That is why searches such as Best Veneers Jordan and Dr Ali Veneers often focus on trust as much as price.", "Dr. Ali's approach centers on natural smile design, clear communication, and a calm premium experience for local and international patients."], ar: ["اختيار الفينير قرار شخصي. المريض لا يختار السيراميك فقط، بل يختار عين الطبيب، طريقة التخطيط، مستوى المختبر، وفلسفة المتابعة. لذلك تركز عمليات البحث عن أفضل فينير في الأردن والدكتور علي فينير على الثقة بقدر السعر.", "يركز نهج الدكتور علي على تصميم ابتسامة طبيعية، تواصل واضح، وتجربة راقية هادئة للمرضى المحليين والدوليين."] },
    sections: [
      { id: "experience", heading: { en: "Doctor Experience and Cosmetic Eye", ar: "خبرة الطبيب والذوق التجميلي" }, body: { en: ["The difference between ordinary veneers and premium veneers is often in small decisions: edge length, line angles, texture, translucency, and how the smile looks when the patient speaks. Experience helps the dentist avoid over-bright, bulky, or artificial outcomes.", "Dr. Ali's philosophy favors smiles that enhance the face without overpowering it. The aim is confidence, not a generic template."], ar: ["الفرق بين الفينير العادي والفينير الفاخر غالباً في قرارات صغيرة: طول الحافة، زوايا الخطوط، الملمس، الشفافية، وكيف تبدو الابتسامة أثناء الكلام. الخبرة تساعد على تجنب النتائج السميكة أو المصطنعة.", "فلسفة الدكتور علي تفضل ابتسامة تعزز الوجه دون أن تطغى عليه. الهدف هو الثقة وليس قالباً موحداً."] } },
      { id: "digital", heading: { en: "Digital Smile Design and Personalized Treatment", ar: "تصميم رقمي وخطة شخصية" }, body: { en: ["Digital Smile Design allows the team to study photos and facial references before choosing tooth shapes. It improves communication between patient, dentist, and laboratory, reducing guesswork.", "Personalization means the treatment plan may combine veneers, whitening, gum refinement, or replacement of older work. Not every tooth needs the same treatment."], ar: ["يسمح التصميم الرقمي بدراسة الصور وملامح الوجه قبل اختيار أشكال الأسنان. يحسن التواصل بين المريض والطبيب والمختبر ويقلل التخمين.", "الخطة الشخصية قد تجمع بين الفينير والتبييض وتعديل اللثة أو استبدال عمل قديم. ليس كل سن يحتاج العلاج نفسه."] } },
      { id: "materials", heading: { en: "Premium Materials and Natural Results", ar: "مواد فاخرة ونتائج طبيعية" }, body: { en: ["Premium materials such as Emax or carefully selected zircon are chosen according to tooth color, strength needs, and aesthetic goals. Material selection is paired with laboratory artistry, shade communication, and trial evaluation.", "Natural results come from layering, surface texture, proportion, and shade control. Patients often want a bright smile, but the most elegant results avoid flat, opaque whiteness."], ar: ["تُختار المواد الفاخرة مثل إيماكس أو الزيركون المناسب حسب لون الأسنان واحتياجات القوة والهدف الجمالي. اختيار المادة يرتبط بفن المختبر وتواصل اللون وتجربة الشكل.", "النتائج الطبيعية تأتي من الطبقات والملمس والنسب وضبط اللون. يرغب المرضى غالباً بابتسامة مشرقة، لكن أرقى النتائج تتجنب البياض المسطح المعتم."] } },
      { id: "international", heading: { en: "International Patient Journey", ar: "رحلة المريض الدولي" }, body: { en: ["International patients need clarity before arriving in Jordan. The journey often starts with WhatsApp photos, medical history, smile goals, and available travel dates. The clinic can guide visit timing, airport pickup coordination, accommodation guidance, and follow-up expectations when arranged in advance.", "A successful medical tourism Jordan experience depends on realistic scheduling. Some cases are completed within a short trip, while others require staged care or preparatory treatment."], ar: ["يحتاج المرضى القادمون من الخارج إلى وضوح قبل الوصول إلى الأردن. تبدأ الرحلة غالباً بصور واتساب، التاريخ الطبي، أهداف الابتسامة، وتواريخ السفر المتاحة. يمكن توجيه المريض حول توقيت الزيارات، تنسيق الاستقبال من المطار، إرشادات السكن، والمتابعة عند الترتيب مسبقاً.", "نجاح السياحة العلاجية في الأردن يعتمد على جدول واقعي. بعض الحالات تنجز خلال رحلة قصيرة، وأخرى تحتاج مراحل أو علاجاً تحضيرياً."] } },
      { id: "jordan", heading: { en: "Why Jordan Is an Ideal Destination", ar: "لماذا الأردن وجهة مثالية" }, body: { en: ["Jordan is accessible for patients from the Gulf, Europe, and nearby regions. Amman offers strong medical infrastructure, bilingual communication, hospitality, and convenient travel logistics for cosmetic dental treatment.", "Patients choose Jordan when they want premium care with personal attention, cultural comfort, and a destination that is easy to plan around family or business travel."], ar: ["الأردن قريب ومناسب للمرضى من الخليج وأوروبا والمنطقة. توفر عمّان بنية طبية قوية، تواصلاً ثنائياً، ضيافة، وسهولة في تنظيم السفر لعلاج الأسنان التجميلي.", "يختار المرضى الأردن عندما يريدون رعاية راقية واهتماماً شخصياً ووجهة سهلة التخطيط مع العائلة أو العمل."] } },
      { id: "proof", heading: { en: "Testimonials, Before & After Cases, and Follow-Up", ar: "الشهادات والحالات والمتابعة" }, body: { en: ["Testimonials and before-and-after cases help patients understand the clinic's aesthetic language. Look for cases with similar starting conditions, not only ideal examples.", "Follow-up care is part of the result. Bite checks, hygiene guidance, night guard recommendations, and maintenance visits help preserve veneers and patient comfort."], ar: ["تساعد الشهادات وصور قبل وبعد المريض على فهم الأسلوب الجمالي للعيادة. الأفضل البحث عن حالات تشبه البداية الخاصة بك وليس فقط الحالات المثالية.", "المتابعة جزء من النتيجة. فحص العضة، إرشادات العناية، توصية الواقي الليلي، وزيارات الصيانة تساعد في الحفاظ على الفينير وراحة المريض."] } }
    ],
    faqs: [
      { question: { en: "Does Dr. Ali treat international veneer patients?", ar: "هل يعالج الدكتور علي مرضى فينير من الخارج؟" }, answer: { en: "Yes. International patients can begin with photos and travel dates, then receive guidance on visit timing and preparation before arriving in Amman.", ar: "نعم، يمكن للمرضى الدوليين البدء بالصور وتواريخ السفر للحصول على توجيه حول الزيارات والتحضير قبل الوصول إلى عمّان." } },
      { question: { en: "Will my veneers look natural?", ar: "هل سيبدو الفينير طبيعياً؟" }, answer: { en: "The goal is a smile that fits your face, skin tone, and personality. Shade and shape are customized rather than copied from a template.", ar: "الهدف ابتسامة تناسب الوجه ولون البشرة والشخصية. يتم تخصيص اللون والشكل بدلاً من نسخ قالب جاهز." } },
      { question: { en: "Can the clinic help with travel planning?", ar: "هل تساعد العيادة في تخطيط السفر؟" }, answer: { en: "The team can provide guidance about timing, airport pickup coordination, accommodation suggestions, and follow-up expectations when arranged in advance.", ar: "يمكن للفريق تقديم إرشادات حول التوقيت، تنسيق استقبال المطار، اقتراحات السكن، وتوقعات المتابعة عند الترتيب مسبقاً." } }
    ]
  },
  {
    slug: "dental-tourism-jordan",
    relatedService: "hollywood-smile-jordan",
    title: { en: "Dental Tourism in Jordan: Complete Patient Guide", ar: "السياحة العلاجية للأسنان في الأردن: دليل المريض الكامل" },
    seoTitle: { en: "Dental Tourism in Jordan: Complete Patient Guide", ar: "السياحة العلاجية للأسنان في الأردن: دليل المريض الكامل" },
    metaDescription: { en: "Plan dental tourism in Jordan with guidance on safety, costs, hotels, treatment duration, recovery, attractions, FAQs, and patient journey timeline.", ar: "خطط للسياحة العلاجية للأسنان في الأردن مع معلومات السلامة، التكلفة، الفنادق، مدة العلاج، التعافي، المعالم، الأسئلة والجدول الزمني." },
    h1: { en: "Dental Tourism in Jordan: Complete Patient Guide", ar: "السياحة العلاجية للأسنان في الأردن: دليل المريض الكامل" },
    excerpt: { en: "A practical travel and treatment guide for patients considering veneers, Hollywood Smile, or cosmetic dentistry in Jordan.", ar: "دليل عملي للسفر والعلاج لمن يفكر بالفينير أو هوليوود سمايل أو تجميل الأسنان في الأردن." },
    category: { en: "Dental Tourism", ar: "السياحة العلاجية" },
    readTime: "10 min read",
    coverImage: "/media/dental-tourism.webp",
    coverAlt: { en: "Amman Jordan travel planning for dental tourism", ar: "تخطيط السفر إلى عمّان الأردن للسياحة العلاجية للأسنان" },
    keywords: ["Dental Tourism Jordan", "Dental Clinic Jordan", "Hollywood Smile Jordan", "Medical Tourism Jordan", "Veneers Jordan"],
    lastUpdated: "2026-01-15",
    author: editorialAuthor,
    introduction: { en: ["Dental tourism in Jordan is attractive for patients who want high-quality cosmetic dentistry, accessible travel, bilingual care, and a comfortable destination. Whether you are planning veneers Jordan, Hollywood Smile Jordan, or a broader smile makeover, preparation is the key to a smooth trip.", "This guide explains safety, costs, travel planning, treatment duration, recovery, hotels, local attractions, and the patient journey timeline so you can make decisions confidently."], ar: ["تجذب السياحة العلاجية للأسنان في الأردن المرضى الذين يريدون تجميل أسنان عالي الجودة، سفر سهل، رعاية ثنائية اللغة، ووجهة مريحة. سواء كنت تخطط للفينير أو هوليوود سمايل أو تحول ابتسامة كامل، فالتحضير هو مفتاح الرحلة الناجحة.", "يوضح هذا الدليل السلامة والتكاليف والتخطيط للسفر ومدة العلاج والتعافي والفنادق والمعالم المحلية وجدول رحلة المريض لاتخاذ القرار بثقة."] },
    sections: [
      { id: "why-jordan", heading: { en: "Why Choose Jordan for Dental Treatment?", ar: "لماذا تختار الأردن لعلاج الأسنان؟" }, body: { en: ["Jordan combines medical reputation, hospitality, regional accessibility, and experienced clinicians. Amman is easy to reach from many Gulf and European cities, and patients often appreciate the direct communication and personal approach.", "For cosmetic dentistry, the destination matters because patients need both technical quality and a comfortable environment for photos, trials, follow-up, and recovery."], ar: ["يجمع الأردن بين السمعة الطبية والضيافة وسهولة الوصول الإقليمي وخبرة الأطباء. عمّان قريبة من مدن خليجية وأوروبية كثيرة ويقدر المرضى التواصل المباشر والاهتمام الشخصي.", "في تجميل الأسنان، الوجهة مهمة لأن المريض يحتاج جودة تقنية وبيئة مريحة للصور والتجارب والمتابعة والتعافي."] } },
      { id: "safety-cost", heading: { en: "Safety, Costs, and Treatment Quality", ar: "السلامة والتكلفة وجودة العلاج" }, body: { en: ["Safety begins with diagnosis, sterilization standards, material selection, and honest planning. Patients should avoid choosing only by the lowest package price and should ask what is included: consultation, imaging, temporary restorations, laboratory work, final bonding, reviews, and night guard if needed.", "Costs vary by number of teeth, material, gum treatment, replacement of old work, complexity, and timeline. A photo-based estimate is useful, but the final plan requires a clinical exam."], ar: ["تبدأ السلامة بالتشخيص ومعايير التعقيم واختيار المواد والتخطيط الصادق. يجب ألا يختار المريض بناء على أقل باقة فقط، بل يسأل عما يشمله السعر: الاستشارة، الصور، المؤقتات، المختبر، التثبيت، المراجعات، والواقي الليلي عند الحاجة.", "تختلف التكلفة حسب عدد الأسنان والمادة وعلاج اللثة واستبدال العمل القديم والتعقيد والمدة. التقدير عبر الصور مفيد لكن الخطة النهائية تحتاج فحصاً سريرياً."] } },
      { id: "planning", heading: { en: "Travel Planning, Hotels, and Visit Duration", ar: "تخطيط السفر والفنادق ومدة الزيارة" }, body: { en: ["Before booking flights, send photos, describe your goals, share medical history, and mention available dates. The clinic can then advise whether your case may fit a short trip or requires staged treatment.", "Choose accommodation with easy access to the clinic, predictable transportation, and enough rest time between visits. Airport pickup and accommodation guidance can make the first day easier, especially for international patients visiting Jordan for the first time."], ar: ["قبل حجز الطيران، أرسل الصور، اشرح أهدافك، شارك التاريخ الطبي، واذكر التواريخ المتاحة. يمكن للعيادة بعدها توجيهك إن كانت الحالة تناسب رحلة قصيرة أو تحتاج مراحل.", "اختر سكناً قريباً من العيادة مع مواصلات سهلة ووقت راحة كاف بين الزيارات. يساعد تنسيق استقبال المطار وإرشادات السكن في جعل اليوم الأول أسهل خاصة لمن يزور الأردن لأول مرة."] } },
      { id: "duration-recovery", heading: { en: "Treatment Duration and Recovery", ar: "مدة العلاج والتعافي" }, body: { en: ["Veneers and Hollywood Smile treatment may involve consultation, records, preparation, temporary phase, try-in, final bonding, and review. Some patients complete care quickly; others need gum treatment, whitening, orthodontic preparation, or replacement of old restorations first.", "Recovery is usually light for cosmetic dentistry, but patients should plan for temporary sensitivity, bite adaptation, and careful eating during the temporary phase. Follow the clinic's instructions closely."], ar: ["قد يشمل الفينير وهوليوود سمايل الاستشارة والسجلات والتحضير والمرحلة المؤقتة والتجربة والتثبيت والمراجعة. بعض المرضى ينهون بسرعة، وآخرون يحتاجون علاج لثة أو تبييض أو تحضير تقويمي أو استبدال تركيبات قديمة أولاً.", "التعافي في تجميل الأسنان غالباً بسيط، لكن يجب توقع حساسية مؤقتة والتعود على العضة والحذر في الأكل خلال المؤقتات مع الالتزام بتعليمات العيادة."] } },
      { id: "attractions", heading: { en: "Local Attractions and Comfortable Recovery", ar: "المعالم المحلية والتعافي المريح" }, body: { en: ["Many patients combine treatment with quiet time in Amman, cafes, shopping, or short cultural visits when clinically appropriate. More demanding trips such as Petra or the Dead Sea should be planned around appointment timing and recovery comfort.", "Avoid overloading the schedule. A premium dental tourism experience should feel organized, not rushed."], ar: ["يجمع كثير من المرضى العلاج مع وقت هادئ في عمّان أو المقاهي أو التسوق أو زيارات ثقافية قصيرة عندما يكون ذلك مناسباً طبياً. الرحلات الأطول مثل البتراء أو البحر الميت يجب تنسيقها حول المواعيد والراحة.", "تجنب ازدحام الجدول. التجربة العلاجية الراقية يجب أن تكون منظمة وليست مستعجلة."] } },
      { id: "timeline", heading: { en: "Patient Journey Timeline", ar: "الجدول الزمني لرحلة المريض" }, body: { en: ["Step one is remote orientation: photos, goals, health information, and travel dates. Step two is clinical diagnosis in Amman. Step three is smile design and treatment planning. Step four is preparation or preliminary care. Step five is try-in, bonding, and final review.", "After returning home, keep communication open for questions and attend local hygiene visits as recommended. Long-term success depends on maintenance as much as the initial treatment."], ar: ["الخطوة الأولى هي التوجيه عن بعد: الصور والأهداف والمعلومات الصحية وتواريخ السفر. الثانية التشخيص السريري في عمّان. الثالثة تصميم الابتسامة وخطة العلاج. الرابعة التحضير أو العلاج الأولي. الخامسة التجربة والتثبيت والمراجعة.", "بعد العودة إلى بلدك، حافظ على التواصل للأسئلة والتزم بجلسات التنظيف والمتابعة حسب التوصية. النجاح طويل المدى يعتمد على الصيانة بقدر العلاج الأولي."] } }
    ],
    faqs: [
      { question: { en: "Is dental tourism in Jordan safe?", ar: "هل السياحة العلاجية للأسنان في الأردن آمنة؟" }, answer: { en: "It can be safe when you choose a qualified clinic, receive proper diagnosis, understand the treatment plan, and allow enough time for follow-up.", ar: "يمكن أن تكون آمنة عند اختيار عيادة مؤهلة والحصول على تشخيص صحيح وفهم خطة العلاج وتوفير وقت كاف للمتابعة." } },
      { question: { en: "How long should I stay in Jordan for veneers?", ar: "كم يجب أن أبقى في الأردن للفينير؟" }, answer: { en: "The stay depends on case complexity and visit sequence. Send photos and travel dates first, then confirm timing after examination.", ar: "تعتمد مدة الإقامة على تعقيد الحالة وتسلسل الزيارات. أرسل الصور وتواريخ السفر أولاً ثم يتم تأكيد المدة بعد الفحص." } },
      { question: { en: "Can I visit Petra or the Dead Sea during treatment?", ar: "هل يمكن زيارة البتراء أو البحر الميت أثناء العلاج؟" }, answer: { en: "Often yes, but plan attractions around appointments, temporary restorations, and comfort. Avoid exhausting trips immediately after longer visits.", ar: "غالباً نعم، لكن خطط الرحلات حول المواعيد والمؤقتات والراحة، وتجنب الرحلات المرهقة مباشرة بعد الجلسات الطويلة." } }
    ]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
