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
  excerpt: Record<Locale, string>;
  sections: Record<Locale, { heading: string; body: string }[]>;
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
    cta: "WhatsApp Consultation",
    viewCases: "View Transformations",
    finalCtaTitle: "Start with a private smile consultation.",
    finalCtaText: "Send your photos on WhatsApp and Dr. Ali's team will guide you toward the right cosmetic treatment without publishing prices online.",
    placeholderNotice: "Placeholder until the real Instagram export is added."
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
    cta: "استشارة واتساب",
    viewCases: "شاهد التحولات",
    finalCtaTitle: "ابدئي باستشارة خاصة لابتسامتك.",
    finalCtaText: "أرسلي صورك عبر واتساب وسيقوم فريق الدكتور علي بإرشادك للعلاج التجميلي المناسب بدون عرض الأسعار علناً.",
    placeholderNotice: "عنصر مؤقت إلى حين إضافة تصدير إنستغرام الحقيقي."
  }
} satisfies Record<Locale, unknown>;

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
    alt: { en: "Before and after Hollywood smile placeholder", ar: "صورة مؤقتة قبل وبعد لابتسامة هوليوود" },
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
    alt: { en: "Before and after zircon placeholder", ar: "صورة مؤقتة قبل وبعد للزيركون" },
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
    alt: { en: "Dental implant result placeholder", ar: "صورة مؤقتة لنتيجة زراعة الأسنان" },
    isFeatured: false
  },
  {
    id: "case-04",
    slug: "mirror-reaction-placeholder",
    treatment: "testimonial",
    type: "testimonial",
    posterSrc: "/media/posters/placeholder-04.svg",
    title: { en: "Mirror Reveal", ar: "لحظة المرآة" },
    caption: { en: "Reserved for Instagram patient reaction videos.", ar: "مخصص لفيديوهات رد فعل المرضى من إنستغرام." },
    alt: { en: "Patient mirror reaction placeholder", ar: "فيديو مؤقت لرد فعل المريض أمام المرآة" },
    isFeatured: false
  }
];

const providedInstagramMedia: Omit<CaseMedia, "videoSrc" | "posterSrc" | "assetReady">[] = [
  { id: "ig-01", slug: "case-reel-cw-k2axilyg", treatment: "hollywood-smile", type: "reel", title: { en: "Smile case reel", ar: "ريل حالة ابتسامة" }, caption: { en: "Case reel from Dr. Ali's Instagram feed.", ar: "ريل حالة من حساب الدكتور علي على إنستغرام." }, alt: { en: "Cosmetic dentistry case reel", ar: "ريل حالة تجميل أسنان" }, isFeatured: true, sourceUrl: "https://www.instagram.com/p/Cw-K2axIlYg/" },
  { id: "ig-02", slug: "trimmed-case-reel-cw-k69jobtx", treatment: "hollywood-smile", type: "reel", trimStartSeconds: 1.5, title: { en: "Trimmed smile reel", ar: "ريل ابتسامة مقصوص" }, caption: { en: "Use from 1.5 seconds onward when the MP4 is available.", ar: "يستخدم من الثانية 1.5 عند توفر ملف MP4." }, alt: { en: "Trimmed cosmetic dentistry reel", ar: "ريل تجميل أسنان مقصوص" }, isFeatured: true, sourceUrl: "https://www.instagram.com/p/Cw-K69JoBtX/" },
  { id: "ig-03", slug: "carousel-smile-dz7xqb", treatment: "zircon-veneers", type: "before-after", title: { en: "Carousel case", ar: "حالة كاروسيل" }, caption: { en: "Carousel post reserved for downloaded case images.", ar: "منشور كاروسيل مخصص لصور الحالة بعد تنزيلها." }, alt: { en: "Carousel case images", ar: "صور حالة كاروسيل" }, isFeatured: true, sourceUrl: "https://www.instagram.com/p/DZ7XQb_CP83/?img_index=1" },
  { id: "ig-04", slug: "testimonial-dznu9", treatment: "testimonial", type: "testimonial", title: { en: "Patient testimonial 1", ar: "تجربة مريض 1" }, caption: { en: "Video testimonial from Instagram.", ar: "فيديو شهادة من إنستغرام." }, alt: { en: "Patient testimonial video", ar: "فيديو تجربة مريض" }, isFeatured: true, sourceUrl: "https://www.instagram.com/p/DZNU9b2IT0X/" },
  { id: "ig-05", slug: "testimonial-dzcw", treatment: "testimonial", type: "testimonial", title: { en: "Patient testimonial 2", ar: "تجربة مريض 2" }, caption: { en: "Video testimonial from Instagram.", ar: "فيديو شهادة من إنستغرام." }, alt: { en: "Patient testimonial video", ar: "فيديو تجربة مريض" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DZCwFrdo_cD/" },
  { id: "ig-06", slug: "doctor-working-case-dyrh", treatment: "testimonial", type: "testimonial", title: { en: "Treatment and reveal", ar: "العلاج والنتيجة" }, caption: { en: "Doctor working on a case, final result, and testimonial.", ar: "الدكتور أثناء العمل على الحالة ثم النتيجة والشهادة." }, alt: { en: "Doctor working on smile case", ar: "الدكتور يعمل على حالة ابتسامة" }, isFeatured: true, sourceUrl: "https://www.instagram.com/p/DYrh8kWIPIS/" },
  { id: "ig-07", slug: "carousel-case-dxom", treatment: "zircon-veneers", type: "before-after", title: { en: "Carousel smile case", ar: "حالة ابتسامة كاروسيل" }, caption: { en: "Carousel images reserved for real case media.", ar: "صور كاروسيل مخصصة للحالة الحقيقية." }, alt: { en: "Carousel before and after images", ar: "صور كاروسيل قبل وبعد" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DXomfNHjHTy/?img_index=1" },
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
  { id: "ig-19", slug: "case-reel-db3", treatment: "hollywood-smile", type: "reel", title: { en: "Smile case reel 2", ar: "ريل حالة ابتسامة 2" }, caption: { en: "Case reel from Dr. Ali's Instagram feed.", ar: "ريل حالة من حساب الدكتور علي على إنستغرام." }, alt: { en: "Cosmetic dentistry reel", ar: "ريل تجميل أسنان" }, isFeatured: false, sourceUrl: "https://www.instagram.com/p/DB3hWNLoijl/" }
];

const downloadedVideoSlots = new Set(["01", "02", "04", "05", "06", "08", "09", "10", "11", "12", "17"]);

export const reels: CaseMedia[] = providedInstagramMedia.map((item, index) => {
  const number = String(index + 1).padStart(2, "0");
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
    name: "Google Patient",
    rating: 5,
    source: "google",
    treatment: "Hollywood Smile",
    text: {
      en: "Placeholder for a real Google review. Replace only with verified text from the Google Business Profile or Places API.",
      ar: "نص مؤقت لتقييم جوجل حقيقي. يستبدل فقط بنص موثق من ملف جوجل التجاري أو واجهة Places API."
    }
  },
  {
    id: "review-02",
    name: "Instagram Patient",
    rating: 5,
    source: "video",
    treatment: "Veneers",
    text: {
      en: "Placeholder for a patient mirror-reaction testimonial from Instagram export.",
      ar: "نص مؤقت لشهادة مريض من فيديو رد الفعل أمام المرآة بعد تصدير إنستغرام."
    }
  },
  {
    id: "review-03",
    name: "Medical Tourism Patient",
    rating: 5,
    source: "manual",
    treatment: "Dental Implants",
    text: {
      en: "Placeholder for a verified international patient review after client approval.",
      ar: "نص مؤقت لتقييم موثق من مريضة قادمة من الخارج بعد موافقة العميل."
    }
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "hollywood-smile-jordan-guide",
    relatedService: "hollywood-smile-jordan",
    title: { en: "Hollywood Smile in Jordan: What to Know Before Booking", ar: "ابتسامة هوليوود في الأردن: ما يجب معرفته قبل الحجز" },
    excerpt: { en: "A practical guide to natural-looking smile makeovers, timing, and consultation planning.", ar: "دليل عملي لابتسامات هوليوود الطبيعية والتوقيت والاستشارة." },
    sections: {
      en: [
        { heading: "What makes a Hollywood Smile look natural?", body: "A beautiful smile depends on proportion, shade, facial fit, and controlled brightness. The best results avoid a flat, artificial look." },
        { heading: "How to start", body: "Send clear photos on WhatsApp, then plan the final shade, shape, and timeline during consultation." }
      ],
      ar: [
        { heading: "ما الذي يجعل ابتسامة هوليوود طبيعية؟", body: "تعتمد الابتسامة الجميلة على النسب واللون وتناسقها مع الوجه والتحكم بدرجة الإشراق. أفضل النتائج تتجنب الشكل الاصطناعي." },
        { heading: "كيف تبدأ؟", body: "أرسل صوراً واضحة عبر واتساب، ثم يتم تخطيط اللون والشكل والمدة خلال الاستشارة." }
      ]
    }
  },
  {
    slug: "zircon-vs-veneers",
    relatedService: "zircon-veneers-amman",
    title: { en: "Zircon vs Veneers: Which Is Better for Your Smile?", ar: "الزيركون أم الفينير: أيهما أفضل لابتسامتك؟" },
    excerpt: { en: "A clear comparison for patients choosing between strength, minimal preparation, and cosmetic refinement.", ar: "مقارنة واضحة لمن يختارون بين المتانة والتحضير الأقل والجمال." },
    sections: {
      en: [
        { heading: "The main difference", body: "Veneers usually cover the visible front surface. Zircon restorations may be selected when more structure, strength, or coverage is needed." },
        { heading: "The right choice", body: "The decision depends on tooth condition, bite, color goals, and the desired final appearance." }
      ],
      ar: [
        { heading: "الفرق الأساسي", body: "الفينير غالباً يغطي السطح الأمامي الظاهر، بينما قد يستخدم الزيركون عند الحاجة إلى تغطية أو قوة أكبر." },
        { heading: "الاختيار الصحيح", body: "يعتمد القرار على حالة الأسنان والعضة وهدف اللون والشكل النهائي المطلوب." }
      ]
    }
  },
  {
    slug: "dental-implants-medical-tourism-jordan",
    relatedService: "dental-implants-jordan",
    title: { en: "Dental Implants and Medical Tourism in Jordan", ar: "زراعة الأسنان والسياحة العلاجية في الأردن" },
    excerpt: { en: "How international patients can plan implant treatment timelines before traveling to Amman.", ar: "كيف يمكن للمرضى القادمين من الخارج تخطيط زراعة الأسنان قبل السفر إلى عمان." },
    sections: {
      en: [
        { heading: "Planning before travel", body: "Initial photos, scans when available, and medical history help estimate the visit schedule before booking flights." },
        { heading: "Treatment stages", body: "Implants may require staged treatment, so timing and follow-up should be discussed early." }
      ],
      ar: [
        { heading: "التخطيط قبل السفر", body: "الصور الأولية والفحوصات المتاحة والتاريخ الصحي تساعد في تقدير جدول الزيارات قبل حجز السفر." },
        { heading: "مراحل العلاج", body: "قد تحتاج الزراعة إلى مراحل، لذلك يجب مناقشة التوقيت والمتابعة مبكراً." }
      ]
    }
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
