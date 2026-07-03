import type { Locale } from "./i18n";

export type Service = {
  slug: string;
  title: Record<Locale, string>;
  navTitle: Record<Locale, string>;
  description: Record<Locale, string>;
  seoTitle: Record<Locale, string>;
  metaDescription: Record<Locale, string>;
  heroEyebrow: Record<Locale, string>;
  heroIntro: Record<Locale, string>;
  trustPhrase: Record<Locale, string>;
  keywords: string[];
  bullets: Record<Locale, string[]>;
  intro: Record<Locale, { heading: string; body: string[]; note?: string }>;
  candidates: Record<Locale, string[]>;
  process: Record<Locale, { title: string; text: string }[]>;
  benefits: Record<Locale, { icon: string; title: string; text: string }[]>;
  whyChoose: Record<Locale, { title: string; text: string }[]>;
  cases: Record<Locale, { title: string; text: string }[]>;
  related: string[];
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
      reels: "Transformations",
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
      reels: "التحولات",
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
    trustNote: "A planned, natural, and comfortable smile transformation experience — not just veneers.",
    scoreCards: [
      {
        icon: "design",
        title: "Smile Design First",
        text: "Every case starts with facial harmony, tooth shape, and natural smile planning."
      },
      {
        icon: "natural",
        title: "Natural-Looking Results",
        text: "Designed to enhance your smile without making it look artificial or overdone."
      },
      {
        icon: "journey",
        title: "EU & GCC Patient Journey",
        text: "Clear planning for patients visiting Jordan for veneers or Hollywood Smile treatment."
      },
      {
        icon: "consultation",
        title: "Doctor-Led Consultation",
        text: "Your smile plan is reviewed with professional guidance before treatment begins."
      }
    ]
  },
  ar: {
    eyebrow: "عن الطبيب",
    title: "مهارة استثنائية ولمسة إبداعية تمنحك ثقة لا حدود لها",
    accent: "ثقة لا حدود لها",
    body: "يجمع الدكتور علي الحنيطي بين التخطيط التجميلي الدقيق والنتائج الطبيعية الراقية لابتسامات هوليوود، الفينير، وتحولات الابتسامة في عمّان.",
    imageAlt: "الدكتور علي الحنيطي، طبيب تجميل أسنان في عمّان، الأردن",
    signature: "د. علي الحنيطي",
    specialty: "طب تجميل الأسنان",
    trustNote: "تجربة تحول ابتسامة مخططة، طبيعية، ومريحة — وليست مجرد فينير.",
    scoreCards: [
      {
        icon: "design",
        title: "تصميم الابتسامة أولاً",
        text: "كل حالة تبدأ بدراسة تناسق الوجه، شكل الأسنان، وطبيعة الابتسامة."
      },
      {
        icon: "natural",
        title: "نتائج طبيعية المظهر",
        text: "ابتسامة محسّنة بدون مظهر مصطنع أو مبالغ فيه."
      },
      {
        icon: "journey",
        title: "تجربة مخصصة لمرضى أوروبا والخليج",
        text: "تخطيط واضح للمرضى القادمين إلى الأردن لعلاج الفينير أو هوليوود سمايل."
      },
      {
        icon: "consultation",
        title: "استشارة بإشراف الطبيب",
        text: "تتم مراجعة خطة ابتسامتك بإرشاد مهني قبل بدء العلاج."
      }
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
  scoreCards: { icon: string; title: string; text: string }[];
}>;

export const services: Service[] = [
  {
    slug: "dental-veneers-jordan",
    title: { en: "Dental Veneers in Jordan", ar: "فينير الأسنان في الأردن" },
    navTitle: { en: "Dental Veneers", ar: "فينير الأسنان" },
    description: {
      en: "Natural looking veneers planned around your face, smile shape, and aesthetic goals.",
      ar: "فينير طبيعي المظهر يتم تخطيطه حول ملامح وجهك، شكل ابتسامتك، وأهدافك الجمالية."
    },
    seoTitle: { en: "Dental Veneers in Jordan | Natural Veneers in Amman", ar: "فينير الأسنان في الأردن | فينير طبيعي في عمّان" },
    metaDescription: {
      en: "Dental veneers in Jordan with Dr. Ali in Amman. Natural smile planning, zircon veneers guidance, candidate assessment, process, benefits, FAQs, and consultation booking.",
      ar: "فينير الأسنان في الأردن مع الدكتور علي في عمّان. تخطيط ابتسامة طبيعي، توجيه حول فينير الزيركون، تقييم الحالة، الخطوات، المزايا والأسئلة الشائعة."
    },
    heroEyebrow: { en: "Cosmetic Dentistry in Jordan", ar: "طب تجميل الأسنان في الأردن" },
    heroIntro: {
      en: "A refined veneer experience for patients who want brighter, better shaped teeth without an artificial or overdone look.",
      ar: "تجربة فينير راقية لمن يرغبون بأسنان أكثر تناسقاً وإشراقاً دون مظهر صناعي أو مبالغ فيه."
    },
    trustPhrase: { en: "Doctor-led veneer consultation in Amman, Jordan", ar: "استشارة فينير بإشراف الطبيب في عمّان، الأردن" },
    keywords: ["Dental Veneers in Jordan", "Veneers in Jordan", "Zircon veneers in Jordan", "Cosmetic Dentistry in Jordan", "Dental Clinic in Amman"],
    bullets: {
      en: ["Natural veneer smile planning", "Zircon veneers guidance", "Face-balanced shape and shade", "Conservative aesthetic approach"],
      ar: ["تخطيط فينير طبيعي", "توجيه حول فينير الزيركون", "شكل ولون متناسقان مع الوجه", "نهج تجميلي محافظ"]
    },
    intro: {
      en: {
        heading: "A premium veneer plan, not a one-shade template.",
        body: [
          "Dental veneers are thin custom restorations designed to improve tooth shape, shade, spacing, worn edges, and overall smile harmony while keeping the result natural in conversation and photography.",
          "With Dr. Ali, veneer planning begins with the face, lips, gum line, bite, and the personality of the smile. The goal is refinement and confidence, not a copied smile."
        ],
        note: "Zircon veneers and stronger ceramic options can be discussed inside the same plan when masking power, durability, or old restorations require a different material choice."
      },
      ar: {
        heading: "خطة فينير راقية وليست لوناً واحداً جاهزاً.",
        body: [
          "فينير الأسنان هو قشور أو ترميمات رقيقة مخصصة لتحسين شكل الأسنان، لونها، الفراغات بينها، الحواف المتآكلة، وتناسق الابتسامة مع الحفاظ على مظهر طبيعي في الحديث والصور.",
          "مع الدكتور علي يبدأ تخطيط الفينير من الوجه، الشفاه، خط اللثة، العضة، وطابع الابتسامة. الهدف هو نتيجة مصقولة وواثقة وليست ابتسامة منسوخة."
        ],
        note: "يمكن مناقشة فينير الزيركون أو الخيارات الخزفية الأقوى ضمن الخطة نفسها عندما تحتاج الحالة إلى إخفاء لون داكن، متانة أعلى، أو استبدال تركيبات قديمة."
      }
    },
    candidates: {
      en: ["Discolored teeth that do not respond well to whitening", "Gaps between teeth", "Uneven tooth shape or size", "Worn or chipped edges", "Patients who want a natural looking smile design", "Patients interested in zircon veneers or premium veneer materials"],
      ar: ["تصبغات لا تستجيب جيداً للتبييض", "فراغات بين الأسنان", "اختلاف في شكل أو حجم الأسنان", "حواف متآكلة أو مكسورة", "من يرغبون بتصميم ابتسامة طبيعي", "المهتمون بفينير الزيركون أو مواد الفينير الفاخرة"]
    },
    process: {
      en: [
        { title: "Smile consultation", text: "Facial assessment, photos, goals, gum line, and bite are reviewed before any design decision." },
        { title: "Shape and material planning", text: "Shade, texture, ceramic type, and zircon veneer suitability are selected around the case." },
        { title: "Smile preview", text: "Digital smile design or preview may be used to clarify the desired direction where available." },
        { title: "Preparation and fitting", text: "Tooth preparation is planned conservatively, followed by try-in, fit, and refinement." },
        { title: "Final review", text: "The final veneer result is reviewed with bite and aftercare guidance." }
      ],
      ar: [
        { title: "استشارة الابتسامة", text: "تتم مراجعة ملامح الوجه، الصور، الهدف الجمالي، خط اللثة والعضة قبل أي قرار تصميمي." },
        { title: "تخطيط الشكل والمادة", text: "يتم اختيار اللون، الملمس، نوع الخزف، ومدى ملاءمة فينير الزيركون حسب الحالة." },
        { title: "معاينة الابتسامة", text: "يمكن استخدام تصميم أو معاينة رقمية لتوضيح الاتجاه الجمالي عندما يكون ذلك متاحاً." },
        { title: "التحضير والتركيب", text: "يتم التخطيط للتحضير بشكل محافظ ثم تجربة الفينير والتأكد من الملاءمة والتفاصيل." },
        { title: "المراجعة النهائية", text: "تتم مراجعة النتيجة النهائية مع إرشادات العضة والعناية." }
      ]
    },
    benefits: {
      en: [
        { icon: "spark", title: "Natural transformation", text: "A visible smile upgrade designed to still feel like you." },
        { icon: "shade", title: "Improved shape and shade", text: "Refine color, length, edges, and surface character together." },
        { icon: "balance", title: "Better symmetry", text: "Create a calmer relationship between teeth, lips, and gums." },
        { icon: "face", title: "Face-balanced planning", text: "The design is adapted to facial proportions and smile movement." }
      ],
      ar: [
        { icon: "spark", title: "تحول طبيعي", text: "تحسين واضح للابتسامة مع الحفاظ على مظهر يشبهك." },
        { icon: "shade", title: "تحسين الشكل واللون", text: "تنسيق اللون والطول والحواف وملمس السطح معاً." },
        { icon: "balance", title: "تناسق أفضل", text: "علاقة أهدأ بين الأسنان والشفاه واللثة." },
        { icon: "face", title: "تخطيط حول الوجه", text: "يتم تكييف التصميم مع نسب الوجه وحركة الابتسامة." }
      ]
    },
    whyChoose: {
      en: [
        { title: "Doctor-led consultation", text: "Your veneer plan is reviewed with clear clinical guidance before treatment begins." },
        { title: "Aesthetic restraint", text: "Dr. Ali focuses on natural looking results and avoids the bulky, overly white effect many patients fear." },
        { title: "Premium patient experience", text: "Patients from Jordan, the EU, and GCC receive calm planning, appointment coordination, and realistic expectations." }
      ],
      ar: [
        { title: "استشارة بإشراف الطبيب", text: "تتم مراجعة خطة الفينير بتوجيه سريري واضح قبل بدء العلاج." },
        { title: "ذوق جمالي محافظ", text: "يركز الدكتور علي على النتائج الطبيعية ويتجنب المظهر السميك أو الأبيض المبالغ فيه." },
        { title: "تجربة مريض راقية", text: "يحصل المرضى من الأردن وأوروبا والخليج على تخطيط هادئ، تنسيق مواعيد، وتوقعات واقعية." }
      ]
    },
    cases: {
      en: [{ title: "Natural Veneer Smile", text: "Soft brightness with facial harmony." }, { title: "Zircon Veneer Result", text: "A stronger material direction when clinically suitable." }, { title: "Smile Shape Enhancement", text: "Edges, proportions, and symmetry refined together." }],
      ar: [{ title: "ابتسامة فينير طبيعية", text: "إشراقة ناعمة بتناسق مع الوجه." }, { title: "نتيجة فينير زيركون", text: "خيار مادة أقوى عندما يناسب الحالة." }, { title: "تحسين شكل الابتسامة", text: "تنسيق الحواف والنسب والتماثل معاً." }]
    },
    related: ["teeth-whitening-amman", "gummy-smile-treatment-jordan", "orthodontics-amman"],
    faqs: {
      en: [
        { question: "Are dental veneers painful?", answer: "Most veneer steps are managed with local anesthesia when needed. Some temporary sensitivity can occur, but the process is planned to be comfortable and controlled." },
        { question: "How long do veneers last?", answer: "Well-planned veneers can last many years with good hygiene, bite protection when advised, and regular reviews. Longevity depends on habits and clinical condition." },
        { question: "Can veneers look natural?", answer: "Yes. Natural veneers depend on proportion, texture, translucency, edge design, and choosing a shade that suits the face rather than the brightest possible color." },
        { question: "Can veneers fix gaps or uneven teeth?", answer: "Veneers can improve small gaps, uneven shapes, worn edges, and selected alignment concerns. Larger bite or crowding issues may need orthodontics first." },
        { question: "What is the difference between veneers and zircon veneers?", answer: "Traditional porcelain or Emax-style veneers are often selected for lifelike translucency. Zircon options may be useful when strength or masking darker teeth is important." },
        { question: "Can veneers be whitened later?", answer: "No. Ceramic veneers do not whiten like natural teeth, so shade planning should be done carefully before bonding." },
        { question: "How much do dental veneers cost in Jordan?", answer: "Cost depends on the number of teeth, material, gum condition, old restorations, bite needs, and lab planning. A consultation is needed for a responsible estimate." }
      ],
      ar: [
        { question: "هل فينير الأسنان مؤلم؟", answer: "تتم أغلب خطوات الفينير بتخدير موضعي عند الحاجة. قد تحدث حساسية مؤقتة، لكن الخطة تهدف إلى تجربة مريحة ومسيطر عليها." },
        { question: "كم يدوم الفينير؟", answer: "يمكن أن يدوم الفينير المخطط جيداً لسنوات طويلة مع العناية، وحماية العضة عند الحاجة، والمتابعة المنتظمة. يعتمد العمر على العادات وحالة الفم." },
        { question: "هل يمكن أن يبدو الفينير طبيعياً؟", answer: "نعم. يعتمد الفينير الطبيعي على النسب والملمس والشفافية وتصميم الحواف واختيار لون يناسب الوجه وليس فقط اللون الأفتح." },
        { question: "هل يعالج الفينير الفراغات أو عدم انتظام الأسنان؟", answer: "يمكن للفينير تحسين الفراغات الصغيرة، اختلاف الشكل، الحواف المتآكلة وبعض مشاكل الاصطفاف البسيطة. أما الحالات الأكبر فقد تحتاج تقويماً أولاً." },
        { question: "ما الفرق بين الفينير وفينير الزيركون؟", answer: "غالباً تستخدم أنواع خزفية مثل إيماكس للشفافية الطبيعية، بينما قد يناسب الزيركون الحالات التي تحتاج متانة أو قدرة أعلى على إخفاء لون الأسنان." },
        { question: "هل يمكن تبييض الفينير لاحقاً؟", answer: "لا. الخزف لا يتبيّض مثل الأسنان الطبيعية، لذلك يجب اختيار اللون بعناية قبل التثبيت." },
        { question: "كم تكلفة فينير الأسنان في الأردن؟", answer: "تختلف التكلفة حسب عدد الأسنان، المادة، حالة اللثة، التركيبات القديمة، العضة، ومستوى التخطيط المخبري. الاستشارة ضرورية لتقدير مسؤول." }
      ]
    }
  },
  {
    slug: "teeth-whitening-amman",
    title: { en: "Teeth Whitening in Amman", ar: "تبييض الأسنان في عمّان" },
    navTitle: { en: "Teeth Whitening", ar: "تبييض الأسنان" },
    description: { en: "A brighter smile refresh with professional guidance and a clean, natural looking result.", ar: "تجديد لإشراقة الابتسامة بإرشاد مهني ونتيجة نظيفة وطبيعية المظهر." },
    seoTitle: { en: "Teeth Whitening in Amman | Professional Whitening Jordan", ar: "تبييض الأسنان في عمّان | تبييض احترافي في الأردن" },
    metaDescription: { en: "Professional teeth whitening in Amman with Dr. Ali. Learn suitability, sensitivity checks, process, benefits, costs, FAQs, and when veneers may be a better option.", ar: "تبييض الأسنان الاحترافي في عمّان مع الدكتور علي. تعرف على الملاءمة، الحساسية، الخطوات، المزايا، التكلفة ومتى يكون الفينير خياراً أفضل." },
    heroEyebrow: { en: "Smile Refresh in Amman", ar: "تجديد الابتسامة في عمّان" },
    heroIntro: { en: "Professional whitening helps reduce stains and refresh your smile color while keeping the result clean, measured, and natural.", ar: "يساعد التبييض الاحترافي على تقليل التصبغات وتجديد لون الابتسامة مع نتيجة نظيفة ومتزنة وطبيعية." },
    trustPhrase: { en: "Professional whitening guidance in Amman, Jordan", ar: "توجيه احترافي للتبييض في عمّان، الأردن" },
    keywords: ["Teeth Whitening in Amman", "Teeth Whitening in Jordan", "Dental Clinic in Amman", "Cosmetic Dentistry in Jordan"],
    bullets: { en: ["Shade assessment", "Sensitivity-aware planning", "Professional whitening session", "Maintenance guidance"], ar: ["تقييم درجة اللون", "خطة تراعي الحساسية", "جلسة تبييض احترافية", "إرشادات للحفاظ على النتيجة"] },
    intro: {
      en: { heading: "A conservative way to brighten your smile.", body: ["Teeth whitening is a professional treatment designed to reduce stains and brighten natural teeth under clinical guidance.", "It can be ideal when the tooth shape is already pleasing and the main concern is dullness from coffee, tea, tobacco, age, or lifestyle staining."] },
      ar: { heading: "طريقة محافظة لإشراقة أكثر.", body: ["تبييض الأسنان علاج احترافي يهدف إلى تقليل التصبغات وتفتيح لون الأسنان الطبيعية تحت إشراف سريري.", "قد يكون مناسباً عندما يكون شكل الأسنان جيداً وتكون المشكلة الأساسية هي بهتان اللون بسبب القهوة أو الشاي أو التدخين أو العوامل اليومية."] }
    },
    candidates: { en: ["Stained or dull looking teeth", "Patients preparing for an event or photo session", "Patients wanting a quick smile refresh", "Coffee, tea, or tobacco staining", "Patients who want improvement without changing tooth shape", "Patients who need assessment before veneers"], ar: ["أسنان متصبغة أو باهتة", "التحضير لمناسبة أو جلسة تصوير", "من يرغبون بتجديد سريع للابتسامة", "تصبغات القهوة أو الشاي أو التدخين", "من يريدون تحسين اللون دون تغيير شكل الأسنان", "من يحتاجون تقييماً قبل الفينير"] },
    process: { en: [{ title: "Shade assessment", text: "Current shade, staining pattern, and smile goals are reviewed." }, { title: "Sensitivity check", text: "Gums, enamel, fillings, and sensitivity history are assessed before treatment." }, { title: "Whitening session", text: "Professional whitening is performed with controlled timing and monitoring." }, { title: "Result review", text: "The final shade direction is discussed realistically after the session." }, { title: "Maintenance advice", text: "You receive guidance on diet, habits, and follow-up whitening timing." }], ar: [{ title: "تقييم اللون", text: "تتم مراجعة درجة اللون الحالية ونمط التصبغ والهدف الجمالي." }, { title: "فحص الحساسية", text: "يتم تقييم اللثة والمينا والحشوات وتاريخ الحساسية قبل العلاج." }, { title: "جلسة التبييض", text: "يتم التبييض الاحترافي بتوقيت ومراقبة مناسبين." }, { title: "مراجعة النتيجة", text: "تتم مناقشة درجة اللون النهائية بتوقعات واقعية بعد الجلسة." }, { title: "إرشادات الحفاظ", text: "تحصل على نصائح حول الطعام والعادات وتوقيت التبييض لاحقاً." }] },
    benefits: { en: [{ icon: "spark", title: "Brighter appearance", text: "Refresh your smile color without changing tooth shape." }, { icon: "shade", title: "Professional guidance", text: "Shade goals are reviewed with clinical judgment." }, { icon: "clock", title: "Quick refresh", text: "Often suitable before events, photos, or smile planning." }, { icon: "leaf", title: "Conservative improvement", text: "A non-restorative option for natural teeth." }], ar: [{ icon: "spark", title: "مظهر أكثر إشراقاً", text: "تجديد لون الابتسامة دون تغيير شكل الأسنان." }, { icon: "shade", title: "توجيه مهني", text: "يتم تقييم هدف اللون برؤية سريرية." }, { icon: "clock", title: "تجديد سريع", text: "مناسب غالباً قبل المناسبات أو الصور أو تخطيط الابتسامة." }, { icon: "leaf", title: "تحسين محافظ", text: "خيار غير ترميمي للأسنان الطبيعية." }] },
    whyChoose: { en: [{ title: "Honest suitability check", text: "Dr. Ali helps you understand whether whitening is enough or whether veneers may better address shape, gaps, or old restorations." }, { title: "Natural shade philosophy", text: "The goal is a brighter smile that still suits your face and skin tone." }, { title: "Clear aftercare", text: "You leave with guidance to reduce sensitivity risk and maintain the result responsibly." }], ar: [{ title: "تقييم صادق للملاءمة", text: "يساعدك الدكتور علي على معرفة ما إذا كان التبييض كافياً أو أن الفينير أنسب لمشاكل الشكل أو الفراغات أو التركيبات القديمة." }, { title: "فلسفة لون طبيعية", text: "الهدف ابتسامة أكثر إشراقاً لكنها ما زالت مناسبة للوجه ولون البشرة." }, { title: "عناية واضحة بعد الجلسة", text: "تحصل على إرشادات لتقليل الحساسية والحفاظ على النتيجة بمسؤولية." }] },
    cases: { en: [{ title: "Brighter Smile Refresh", text: "A cleaner shade direction." }, { title: "Shade Improvement", text: "Visible color lift with restraint." }, { title: "Natural Whitening Result", text: "Brightness that still feels natural." }], ar: [{ title: "ابتسامة أكثر إشراقاً", text: "اتجاه لون أنظف." }, { title: "تحسين درجة اللون", text: "تفتيح واضح بدون مبالغة." }, { title: "نتيجة تبييض طبيعية", text: "إشراقة ما زالت تبدو طبيعية." }] },
    related: ["dental-veneers-jordan", "gummy-smile-treatment-jordan"],
    faqs: { en: [{ question: "Is teeth whitening safe?", answer: "Professional whitening is considered safe for suitable patients when gums, enamel, restorations, and sensitivity are assessed first." }, { question: "How long do whitening results last?", answer: "Results vary with diet, oral hygiene, smoking, and maintenance. Coffee, tea, and tobacco can shorten the result." }, { question: "Will teeth whitening cause sensitivity?", answer: "Some temporary sensitivity can occur. A professional assessment helps reduce risk and guide aftercare." }, { question: "Is professional whitening better than home whitening?", answer: "Professional whitening allows clinical supervision, controlled materials, and shade guidance. Home products may be slower or less predictable." }, { question: "Who is not suitable for teeth whitening?", answer: "Patients with active decay, gum inflammation, severe sensitivity, or visible restorations on front teeth may need another plan first." }, { question: "Can I whiten my teeth before veneers?", answer: "Yes, whitening may be recommended before veneers so the final shade can be planned around a brighter natural tooth color." }, { question: "How much does teeth whitening cost in Amman?", answer: "Cost depends on the whitening method, clinical needs, and whether preparatory cleaning or other care is required." }], ar: [{ question: "هل تبييض الأسنان آمن؟", answer: "يعد التبييض الاحترافي آمناً للحالات المناسبة عند تقييم اللثة والمينا والتركيبات والحساسية أولاً." }, { question: "كم تدوم نتيجة التبييض؟", answer: "تختلف النتيجة حسب الطعام والعناية والتدخين والمتابعة. القهوة والشاي والتدخين قد يقللون مدة النتيجة." }, { question: "هل يسبب التبييض حساسية؟", answer: "قد تحدث حساسية مؤقتة لدى بعض المرضى. التقييم المهني يساعد على تقليل الخطر وتوجيه العناية." }, { question: "هل التبييض الاحترافي أفضل من التبييض المنزلي؟", answer: "يتيح التبييض الاحترافي إشرافاً سريرياً ومواداً مضبوطة وتوجيهاً للون، بينما قد تكون المنتجات المنزلية أبطأ أو أقل توقعاً." }, { question: "من لا يناسبه تبييض الأسنان؟", answer: "قد يحتاج من لديهم تسوس نشط أو التهاب لثة أو حساسية شديدة أو تركيبات أمامية ظاهرة إلى خطة أخرى أولاً." }, { question: "هل يمكن تبييض الأسنان قبل الفينير؟", answer: "نعم، قد يُنصح بالتبييض قبل الفينير حتى يتم تخطيط اللون النهائي حول لون طبيعي أكثر إشراقاً." }, { question: "كم تكلفة تبييض الأسنان في عمّان؟", answer: "تعتمد التكلفة على طريقة التبييض واحتياجات الحالة وما إذا كان هناك تنظيف أو علاج تحضيري مطلوب." }] }
  },
  {
    slug: "dental-implants-amman",
    title: { en: "Dental Implants in Amman", ar: "زراعة الأسنان في عمّان" },
    navTitle: { en: "Dental Implants", ar: "زراعة الأسنان" },
    description: { en: "A stable, natural looking solution for replacing missing teeth with careful planning and doctor led guidance.", ar: "حل ثابت وطبيعي المظهر لتعويض الأسنان المفقودة بتخطيط دقيق وتوجيه بإشراف الطبيب." },
    seoTitle: { en: "Dental Implants in Amman | Teeth Implants Jordan", ar: "زراعة الأسنان في عمّان | زراعة الأسنان في الأردن" },
    metaDescription: { en: "Dental implants in Amman with Dr. Ali. Learn implant suitability, planning, process, benefits, cost factors, cases, FAQs, and consultation steps.", ar: "زراعة الأسنان في عمّان مع الدكتور علي. تعرف على الملاءمة، التخطيط، الخطوات، المزايا، عوامل التكلفة، الحالات والأسئلة الشائعة." },
    heroEyebrow: { en: "Restorative Dentistry in Amman", ar: "تعويض الأسنان في عمّان" },
    heroIntro: { en: "Implant planning should restore comfort, chewing confidence, and the final smile line while respecting bone, gum, and bite conditions.", ar: "يجب أن تعيد خطة الزراعة الراحة والثقة في المضغ وخط الابتسامة مع احترام حالة العظم واللثة والعضة." },
    trustPhrase: { en: "Dental implant assessment in Amman, Jordan", ar: "تقييم زراعة الأسنان في عمّان، الأردن" },
    keywords: ["Dental Implants in Amman", "Dental Implants in Jordan", "Teeth Implants in Jordan", "Dental Clinic in Amman"],
    bullets: { en: ["Single or multiple tooth replacement", "Digital planning guidance", "Implant crown aesthetics", "Long-term care planning"], ar: ["تعويض سن واحد أو عدة أسنان", "توجيه بالتخطيط الرقمي", "جمالية تاج الزراعة", "تخطيط عناية طويلة المدى"] },
    intro: { en: { heading: "Stable tooth replacement with careful diagnosis.", body: ["Dental implants are a long-term tooth replacement option designed to restore chewing comfort, stability, and smile confidence.", "A responsible implant plan considers bone volume, gum health, medical history, bite forces, and the final crown appearance before treatment begins."] }, ar: { heading: "تعويض ثابت للأسنان بتشخيص دقيق.", body: ["زراعة الأسنان خيار طويل المدى لتعويض الأسنان المفقودة بهدف استعادة راحة المضغ، الثبات، والثقة بالابتسامة.", "الخطة المسؤولة تراعي كمية العظم، صحة اللثة، التاريخ الطبي، قوى العضة، وشكل التاج النهائي قبل البدء."] } },
    candidates: { en: ["Missing one or more teeth", "Loose or uncomfortable dentures", "Difficulty chewing", "Desire for a stable tooth replacement", "Need for professional assessment of bone and gum condition"], ar: ["فقدان سن واحد أو أكثر", "أطقم متحركة غير مريحة أو غير ثابتة", "صعوبة في المضغ", "الرغبة بتعويض ثابت للأسنان", "الحاجة لتقييم مهني للعظم واللثة"] },
    process: { en: [{ title: "Consultation", text: "Dental, gum, bite, and medical factors are reviewed." }, { title: "Digital imaging", text: "Imaging and records help determine bone condition and treatment direction." }, { title: "Implant planning", text: "Placement, timing, restoration type, and visit sequence are discussed." }, { title: "Crown restoration", text: "The implant crown or prosthetic is planned to look and function naturally." }, { title: "Follow-up care", text: "Long-term cleaning, maintenance, and review expectations are explained." }], ar: [{ title: "الاستشارة", text: "تتم مراجعة الأسنان واللثة والعضة والعوامل الطبية." }, { title: "التصوير الرقمي", text: "تساعد الصور والسجلات على تقييم العظم واتجاه العلاج." }, { title: "تخطيط الزراعة", text: "تتم مناقشة مكان الزرعة والتوقيت ونوع التعويض وتسلسل الزيارات." }, { title: "ترميم التاج", text: "يتم تخطيط تاج الزراعة أو التعويض ليبدو ويعمل بشكل طبيعي." }, { title: "المتابعة", text: "تشرح تعليمات التنظيف والصيانة والمراجعات طويلة المدى." }] },
    benefits: { en: [{ icon: "anchor", title: "Stable replacement", text: "A fixed option for missing teeth when the case is suitable." }, { icon: "natural", title: "Natural restoration", text: "The crown is planned around neighboring teeth and smile line." }, { icon: "bite", title: "Chewing comfort", text: "Implants can improve confidence while eating." }, { icon: "calendar", title: "Long-term planning", text: "Treatment is staged with follow-up and maintenance in mind." }], ar: [{ icon: "anchor", title: "تعويض ثابت", text: "خيار ثابت للأسنان المفقودة عندما تكون الحالة مناسبة." }, { icon: "natural", title: "ترميم طبيعي", text: "يتم تخطيط التاج حول الأسنان المجاورة وخط الابتسامة." }, { icon: "bite", title: "راحة في المضغ", text: "قد تساعد الزراعة على تحسين الثقة أثناء الأكل." }, { icon: "calendar", title: "تخطيط طويل المدى", text: "يتم ترتيب العلاج مع مراعاة المتابعة والصيانة." }] },
    whyChoose: { en: [{ title: "Planning before treatment", text: "Dr. Ali emphasizes diagnosis and sequencing rather than rushing implant placement." }, { title: "Aesthetic final restoration", text: "The implant crown is planned with gum contour, shade, and smile harmony in mind." }, { title: "EU & GCC coordination", text: "Patients visiting Jordan receive clear timing guidance, staged expectations, and professional follow-up direction." }], ar: [{ title: "التخطيط قبل العلاج", text: "يركز الدكتور علي على التشخيص وترتيب المراحل بدلاً من التسرع في وضع الزرعة." }, { title: "تعويض نهائي جمالي", text: "يتم تخطيط تاج الزراعة مع مراعاة خط اللثة واللون وتناسق الابتسامة." }, { title: "تنسيق لمرضى أوروبا والخليج", text: "يحصل المرضى القادمون إلى الأردن على توجيه واضح حول المدة والمراحل والمتابعة." }] },
    cases: { en: [{ title: "Single Tooth Implant", text: "One missing tooth restored with a planned crown." }, { title: "Full Smile Restoration", text: "Implants integrated into a broader smile plan." }, { title: "Implant Crown Result", text: "A crown designed for shade and gum harmony." }], ar: [{ title: "زراعة سن واحد", text: "تعويض سن مفقود بتاج مخطط." }, { title: "ترميم الابتسامة", text: "دمج الزراعة ضمن خطة ابتسامة أوسع." }, { title: "نتيجة تاج الزراعة", text: "تاج مصمم ليناسب اللون واللثة." }] },
    related: ["orthodontics-amman", "dental-veneers-jordan"],
    faqs: { en: [{ question: "What are dental implants?", answer: "Dental implants are artificial tooth roots placed in the jawbone to support a crown, bridge, or prosthetic replacement." }, { question: "How long do dental implants last?", answer: "Implants can last many years with proper planning, hygiene, maintenance, and healthy gum and bone conditions. The crown may need future replacement." }, { question: "Is dental implant treatment painful?", answer: "Implant treatment is typically performed with local anesthesia. Some soreness can occur after treatment and is discussed during consultation." }, { question: "Who is a good candidate for dental implants?", answer: "Good candidates usually have healthy gums, suitable bone, controlled medical conditions, and realistic expectations after assessment." }, { question: "Can implants replace one or multiple teeth?", answer: "Yes. Implants can replace a single tooth, multiple teeth, or support larger prosthetic solutions depending on the case." }, { question: "How much do dental implants cost in Amman?", answer: "Cost depends on imaging, implant system, number of implants, bone or gum needs, crown type, and visit sequence." }, { question: "How long does the implant process take?", answer: "Timing varies by bone condition, healing needs, and restoration type. Some cases are staged over multiple visits." }], ar: [{ question: "ما هي زراعة الأسنان؟", answer: "زراعة الأسنان جذور صناعية توضع في عظم الفك لدعم تاج أو جسر أو تعويض سني." }, { question: "كم تدوم زراعة الأسنان؟", answer: "يمكن أن تدوم الزراعة لسنوات طويلة مع التخطيط والعناية والصيانة وصحة اللثة والعظم. قد يحتاج التاج إلى تغيير لاحقاً." }, { question: "هل زراعة الأسنان مؤلمة؟", answer: "تتم الزراعة غالباً بتخدير موضعي. قد يحدث انزعاج بسيط بعد العلاج ويتم شرحه أثناء الاستشارة." }, { question: "من هو المرشح المناسب للزراعة؟", answer: "عادة يحتاج المرشح إلى لثة صحية، عظم مناسب، حالات طبية مسيطر عليها، وتوقعات واقعية بعد التقييم." }, { question: "هل تعوض الزراعة سناً واحداً أو عدة أسنان؟", answer: "نعم، يمكن أن تعوض سناً واحداً أو عدة أسنان أو تدعم تعويضات أكبر حسب الحالة." }, { question: "كم تكلفة زراعة الأسنان في عمّان؟", answer: "تعتمد التكلفة على التصوير، نظام الزراعة، عدد الزرعات، حاجة العظم أو اللثة، نوع التاج، وتسلسل الزيارات." }, { question: "كم تستغرق عملية الزراعة؟", answer: "تختلف المدة حسب حالة العظم والحاجة للالتئام ونوع التعويض. بعض الحالات تتم على مراحل وزيارات متعددة." }] }
  },
  {
    slug: "orthodontics-amman",
    title: { en: "Orthodontics in Amman", ar: "تقويم الأسنان في عمّان" },
    navTitle: { en: "Orthodontics", ar: "تقويم الأسنان" },
    description: { en: "Improve alignment, bite balance, and smile harmony through a personalized orthodontic plan.", ar: "تحسين اصطفاف الأسنان وتوازن العضة وتناسق الابتسامة من خلال خطة تقويم شخصية." },
    seoTitle: { en: "Orthodontics in Amman | Braces & Aligners Jordan", ar: "تقويم الأسنان في عمّان | تقويم وشفاف في الأردن" },
    metaDescription: { en: "Orthodontics in Amman with Dr. Ali. Learn braces and aligner suitability, bite assessment, process, benefits, costs, FAQs, and cosmetic smile planning links.", ar: "تقويم الأسنان في عمّان مع الدكتور علي. تعرف على ملاءمة التقويم والشفاف، تقييم العضة، الخطوات، المزايا، التكلفة والأسئلة الشائعة." },
    heroEyebrow: { en: "Alignment & Bite Planning", ar: "تخطيط الاصطفاف والعضة" },
    heroIntro: { en: "Orthodontics can create a healthier foundation for your smile, whether the goal is alignment, bite balance, or preparation for future cosmetic treatment.", ar: "يمكن للتقويم أن يصنع أساساً أفضل للابتسامة سواء كان الهدف الاصطفاف أو توازن العضة أو التحضير لعلاج تجميلي لاحق." },
    trustPhrase: { en: "Personalized orthodontic assessment in Amman, Jordan", ar: "تقييم تقويم مخصص في عمّان، الأردن" },
    keywords: ["Orthodontics in Amman", "Orthodontics in Jordan", "braces Amman", "clear aligners Jordan", "Dental Clinic in Amman"],
    bullets: { en: ["Crowding and spacing assessment", "Bite balance planning", "Braces or aligner guidance", "Retention and progress reviews"], ar: ["تقييم التزاحم والفراغات", "تخطيط توازن العضة", "توجيه بين التقويم والشفاف", "متابعة وتثبيت النتيجة"] },
    intro: { en: { heading: "Alignment that supports beauty and function.", body: ["Orthodontics treats crowded teeth, spacing, bite issues, and alignment concerns using braces or aligner-based planning where suitable.", "For cosmetic dentistry, orthodontics can also prepare a stronger foundation before veneers, implants, or full smile design."] }, ar: { heading: "اصطفاف يدعم الجمال والوظيفة.", body: ["يعالج تقويم الأسنان التزاحم، الفراغات، مشاكل العضة، وعدم انتظام الاصطفاف باستخدام التقويم أو الشفاف عندما يكون مناسباً.", "في طب التجميل، قد يساعد التقويم أيضاً على تحضير أساس أقوى قبل الفينير أو الزراعة أو تصميم الابتسامة الكامل."] } },
    candidates: { en: ["Crowded teeth", "Gaps between teeth", "Bite alignment issues", "Adults or teens considering braces or clear aligners", "Patients preparing for veneers or smile design"], ar: ["تزاحم الأسنان", "فراغات بين الأسنان", "مشاكل في العضة", "البالغون أو المراهقون المهتمون بالتقويم أو الشفاف", "التحضير للفينير أو تصميم الابتسامة"] },
    process: { en: [{ title: "Smile and bite assessment", text: "Alignment, bite, facial smile line, and concerns are reviewed." }, { title: "Diagnostic records", text: "Scans, photos, or records support accurate planning." }, { title: "Plan selection", text: "Braces, aligners, or staged treatment are discussed based on suitability." }, { title: "Treatment journey", text: "Progress is followed through scheduled adjustments or aligner reviews." }, { title: "Retention guidance", text: "Retainers and maintenance protect the final alignment." }], ar: [{ title: "تقييم الابتسامة والعضة", text: "يتم فحص الاصطفاف والعضة وخط الابتسامة والملاحظات الأساسية." }, { title: "السجلات التشخيصية", text: "تدعم الصور أو المسح أو السجلات دقة التخطيط." }, { title: "اختيار الخطة", text: "تتم مناقشة التقويم أو الشفاف أو العلاج المرحلي حسب الملاءمة." }, { title: "رحلة العلاج", text: "تتم متابعة التقدم عبر مراجعات وتعديلات مجدولة." }, { title: "إرشادات التثبيت", text: "تساعد المثبتات والمتابعة على حماية الاصطفاف النهائي." }] },
    benefits: { en: [{ icon: "align", title: "Straighter alignment", text: "Improve crowding, spacing, and smile order." }, { icon: "bite", title: "Better bite balance", text: "Support comfort, function, and long-term planning." }, { icon: "foundation", title: "Smile design foundation", text: "Prepare teeth for veneers or aesthetic work when needed." }, { icon: "spark", title: "Confident appearance", text: "A more balanced smile can feel easier to show." }], ar: [{ icon: "align", title: "اصطفاف أكثر انتظاماً", text: "تحسين التزاحم والفراغات وترتيب الابتسامة." }, { icon: "bite", title: "توازن أفضل للعضة", text: "دعم الراحة والوظيفة والتخطيط طويل المدى." }, { icon: "foundation", title: "أساس لتصميم الابتسامة", text: "تحضير الأسنان للفينير أو العلاج الجمالي عند الحاجة." }, { icon: "spark", title: "مظهر أكثر ثقة", text: "ابتسامة أكثر توازناً وأسهل في الظهور." }] },
    whyChoose: { en: [{ title: "Cosmetic-aware planning", text: "Dr. Ali connects alignment decisions with the final smile goal, not just tooth movement." }, { title: "Clear guidance", text: "You receive an honest discussion of braces, aligner suitability, timing, and commitment." }, { title: "Conservative sequencing", text: "Orthodontics may reduce the amount of restorative work needed later." }], ar: [{ title: "تخطيط يراعي التجميل", text: "يربط الدكتور علي قرارات الاصطفاف بهدف الابتسامة النهائي وليس فقط حركة الأسنان." }, { title: "توجيه واضح", text: "تحصل على نقاش صريح حول التقويم والشفاف والمدة والالتزام المطلوب." }, { title: "تسلسل محافظ", text: "قد يقلل التقويم من الحاجة إلى تدخلات ترميمية أكبر لاحقاً." }] },
    cases: { en: [{ title: "Aligned Smile", text: "Cleaner tooth order and smile rhythm." }, { title: "Bite Balance Improvement", text: "A more stable functional foundation." }, { title: "Crowding Correction", text: "Spacing and crowding reviewed with care." }], ar: [{ title: "ابتسامة متناسقة", text: "ترتيب أنظف للأسنان وإيقاع أجمل للابتسامة." }, { title: "تحسين توازن العضة", text: "أساس وظيفي أكثر ثباتاً." }, { title: "تصحيح تزاحم الأسنان", text: "مراجعة التزاحم والفراغات بعناية." }] },
    related: ["dental-veneers-jordan", "gummy-smile-treatment-jordan", "dental-implants-amman"],
    faqs: { en: [{ question: "Do adults need braces or aligners?", answer: "Adults can benefit from orthodontics when alignment, spacing, bite, or cosmetic planning requires tooth movement." }, { question: "How long does orthodontic treatment take?", answer: "Timing depends on complexity, appliance type, compliance, and bite goals. A consultation is needed for a realistic estimate." }, { question: "Are clear aligners suitable for every case?", answer: "No. Clear aligners can work well for selected cases, but some bite or movement needs may be better managed with braces." }, { question: "How often are follow up visits needed?", answer: "Follow-up frequency depends on the treatment type and stage. Regular reviews help keep progress on track." }, { question: "What problems can orthodontics correct?", answer: "Orthodontics can improve crowding, spacing, rotated teeth, and many bite concerns including overbite, open bite, crossbite, or midline issues." }, { question: "How much does orthodontic treatment cost in Jordan?", answer: "Cost depends on complexity, appliance choice, records, treatment duration, and retention needs." }, { question: "Can orthodontics improve my smile before veneers?", answer: "Yes. Aligning teeth before veneers can sometimes create a more conservative and natural final veneer plan." }], ar: [{ question: "هل يحتاج البالغون إلى التقويم أو الشفاف؟", answer: "يمكن للبالغين الاستفادة من التقويم عندما يحتاج الاصطفاف أو الفراغات أو العضة أو التخطيط الجمالي إلى حركة أسنان." }, { question: "كم تستغرق مدة التقويم؟", answer: "تعتمد المدة على تعقيد الحالة ونوع الجهاز والالتزام وأهداف العضة. الاستشارة ضرورية لتقدير واقعي." }, { question: "هل الشفاف مناسب لكل الحالات؟", answer: "لا. قد يناسب الشفاف حالات محددة، بينما قد تحتاج بعض حركات الأسنان أو مشاكل العضة إلى تقويم ثابت." }, { question: "كم مرة أحتاج زيارات متابعة؟", answer: "تعتمد المتابعة على نوع العلاج ومرحلته. المراجعات المنتظمة تساعد على استمرار التقدم." }, { question: "ما المشاكل التي يعالجها التقويم؟", answer: "يمكن للتقويم تحسين التزاحم والفراغات ودوران الأسنان وكثير من مشاكل العضة مثل العضة العميقة أو المفتوحة أو المعكوسة أو انحراف الخط المتوسط." }, { question: "كم تكلفة تقويم الأسنان في الأردن؟", answer: "تعتمد التكلفة على تعقيد الحالة ونوع الجهاز والسجلات ومدة العلاج وحاجة التثبيت." }, { question: "هل يمكن للتقويم تحسين ابتسامتي قبل الفينير؟", answer: "نعم. قد يساعد اصطفاف الأسنان قبل الفينير على خطة أكثر محافظة وطبيعية." }] }
  },
  {
    slug: "gummy-smile-treatment-jordan",
    title: { en: "Gummy Smile Treatment in Jordan", ar: "علاج الابتسامة اللثوية في الأردن" },
    navTitle: { en: "Gummy Smile Treatment", ar: "علاج الابتسامة اللثوية" },
    description: { en: "Create a more balanced smile by improving the relationship between the teeth, gums, and facial expression.", ar: "ابتسامة أكثر توازناً عبر تحسين العلاقة بين الأسنان واللثة وتعابير الوجه." },
    seoTitle: { en: "Gummy Smile Treatment in Jordan | Amman Smile Balance", ar: "علاج الابتسامة اللثوية في الأردن | توازن الابتسامة في عمّان" },
    metaDescription: { en: "Gummy smile treatment in Jordan with Dr. Ali. Learn causes, Botox, laser gum contouring, orthodontic options, candidate assessment, FAQs, and consultation steps.", ar: "علاج الابتسامة اللثوية في الأردن مع الدكتور علي. تعرف على الأسباب، البوتوكس، تعديل اللثة بالليزر، التقويم، تقييم الحالة والأسئلة الشائعة." },
    heroEyebrow: { en: "Smile Balance in Jordan", ar: "توازن الابتسامة في الأردن" },
    heroIntro: { en: "A gummy smile is treated best when the real cause is identified first, then the most conservative suitable option is selected.", ar: "تُعالج الابتسامة اللثوية بشكل أفضل عندما يتم تحديد السبب الحقيقي أولاً ثم اختيار الخيار المحافظ المناسب." },
    trustPhrase: { en: "Gum-to-smile assessment in Amman, Jordan", ar: "تقييم علاقة اللثة بالابتسامة في عمّان، الأردن" },
    keywords: ["Gummy Smile Treatment in Jordan", "gummy smile Amman", "laser gum contouring Jordan", "gummy smile Botox Jordan", "Cosmetic Dentistry in Jordan"],
    bullets: { en: ["Cause-based diagnosis", "Gum-to-tooth balance", "Botox, laser, or orthodontic guidance", "Natural expression planning"], ar: ["تشخيص مبني على السبب", "توازن اللثة مع الأسنان", "توجيه بين البوتوكس أو الليزر أو التقويم", "تخطيط يحافظ على التعبير الطبيعي"] },
    intro: { en: { heading: "Treat the cause, not just the gum line.", body: ["Gummy smile treatment improves excessive gum display through the right treatment plan based on the cause.", "The cause may relate to gum tissue, tooth proportions, lip movement, tooth eruption, bite, or jaw position. The right choice may be Botox, laser gum contouring, orthodontics, restorative planning, or referral for a more advanced approach."] }, ar: { heading: "علاج السبب وليس خط اللثة فقط.", body: ["يعالج علاج الابتسامة اللثوية ظهور اللثة الزائد من خلال خطة مناسبة مبنية على السبب.", "قد يرتبط السبب بنسيج اللثة، نسب الأسنان، حركة الشفاه، بزوغ الأسنان، العضة، أو موضع الفك. قد يكون الخيار بوتوكس أو تعديل اللثة بالليزر أو تقويم أو تخطيط ترميمي أو إحالة لعلاج أكثر تقدماً."] } },
    candidates: { en: ["Excessive gum display when smiling", "Short looking teeth due to gum visibility", "Uneven gum line", "Smile imbalance caused by gum display", "Patients unsure whether they need Botox, laser gum contouring, orthodontics, or another option"], ar: ["ظهور زائد للثة عند الابتسام", "أسنان تبدو قصيرة بسبب ظهور اللثة", "خط لثة غير منتظم", "اختلال في الابتسامة بسبب ظهور اللثة", "من لا يعرفون هل يحتاجون بوتوكس أو ليزر لثة أو تقويم أو خياراً آخر"] },
    process: { en: [{ title: "Smile assessment", text: "Gum display, lip movement, tooth proportions, and facial expression are reviewed." }, { title: "Cause identification", text: "The main reason for the gummy smile is clarified before recommending treatment." }, { title: "Treatment selection", text: "Botox, laser gum contouring, orthodontics, restorative planning, or other options are discussed." }, { title: "Treatment execution", text: "The selected approach is performed with natural smile balance in mind." }, { title: "Review", text: "Healing, symmetry, and smile expression are reviewed after treatment." }], ar: [{ title: "تقييم الابتسامة", text: "تتم مراجعة ظهور اللثة وحركة الشفاه ونسب الأسنان وتعبير الوجه." }, { title: "تحديد السبب", text: "يتم توضيح السبب الأساسي قبل اقتراح العلاج." }, { title: "اختيار العلاج", text: "تتم مناقشة البوتوكس أو ليزر اللثة أو التقويم أو التخطيط الترميمي أو خيارات أخرى." }, { title: "تنفيذ العلاج", text: "يتم تنفيذ الخيار المناسب مع مراعاة توازن الابتسامة الطبيعي." }, { title: "المراجعة", text: "تتم مراجعة الالتئام والتماثل وتعبير الابتسامة بعد العلاج." }] },
    benefits: { en: [{ icon: "balance", title: "Better gum-to-tooth ratio", text: "A calmer relationship between visible gum and teeth." }, { icon: "smile", title: "Improved harmony", text: "The smile frame can feel more balanced." }, { icon: "natural", title: "Natural expression", text: "Planning aims to avoid a frozen or artificial look." }, { icon: "target", title: "Cause-based treatment", text: "The approach is selected after understanding why the gum shows." }], ar: [{ icon: "balance", title: "نسبة أفضل بين اللثة والأسنان", text: "علاقة أهدأ بين اللثة الظاهرة والأسنان." }, { icon: "smile", title: "تناسق أفضل", text: "إطار الابتسامة يصبح أكثر توازناً." }, { icon: "natural", title: "تعبير طبيعي", text: "التخطيط يهدف لتجنب مظهر متجمد أو صناعي." }, { icon: "target", title: "علاج مبني على السبب", text: "يتم اختيار الطريقة بعد فهم سبب ظهور اللثة." }] },
    whyChoose: { en: [{ title: "Cause-first consultation", text: "Dr. Ali explains whether your case is related to gum, lip, bite, tooth shape, or jaw proportions." }, { title: "Conservative aesthetic restraint", text: "Treatment is selected to improve balance without removing more tissue or changing expression unnecessarily." }, { title: "Connected smile planning", text: "Gummy smile treatment can be coordinated with veneers, whitening, or orthodontics when a complete smile plan is needed." }], ar: [{ title: "استشارة تبدأ بالسبب", text: "يوضح الدكتور علي ما إذا كانت الحالة مرتبطة باللثة أو الشفاه أو العضة أو شكل الأسنان أو نسب الفك." }, { title: "نهج جمالي محافظ", text: "يتم اختيار العلاج لتحسين التوازن دون إزالة نسيج أكثر من اللازم أو تغيير التعبير بلا حاجة." }, { title: "تخطيط ابتسامة مترابط", text: "يمكن تنسيق علاج الابتسامة اللثوية مع الفينير أو التبييض أو التقويم عند الحاجة لخطة كاملة." }] },
    cases: { en: [{ title: "Balanced Gum Line", text: "A cleaner frame around the teeth." }, { title: "Natural Smile Frame", text: "A more relaxed relationship between lip, teeth, and gums." }, { title: "Gum Display Improvement", text: "Reduced visual dominance of gum display." }], ar: [{ title: "خط لثة متوازن", text: "إطار أنظف حول الأسنان." }, { title: "إطار ابتسامة طبيعي", text: "علاقة أهدأ بين الشفاه والأسنان واللثة." }, { title: "تحسين ظهور اللثة", text: "تقليل سيطرة اللثة بصرياً على الابتسامة." }] },
    related: ["dental-veneers-jordan", "orthodontics-amman", "teeth-whitening-amman"],
    faqs: { en: [{ question: "What causes a gummy smile?", answer: "A gummy smile may be caused by excess gum tissue, short-looking teeth, lip movement, tooth eruption, bite issues, or jaw proportions." }, { question: "How is a gummy smile treated?", answer: "Treatment depends on the cause and may include Botox, laser gum contouring, orthodontics, restorative planning, or more advanced surgical options." }, { question: "Is gummy smile treatment painful?", answer: "Comfort depends on the selected treatment. Many options are performed with local measures or minimal discomfort, but the details are discussed during consultation." }, { question: "Can Botox help a gummy smile?", answer: "Botox may help when excessive gum display is mainly related to a hyperactive upper lip, but it is not suitable for every cause." }, { question: "Is laser gum contouring suitable for everyone?", answer: "No. Laser gum contouring is suitable only when gum tissue and tooth proportions allow it. Some cases need orthodontics or another plan." }, { question: "How much does gummy smile treatment cost in Jordan?", answer: "Cost depends on the cause and chosen treatment method, such as Botox, gum contouring, orthodontics, or combined planning." }, { question: "How do I know which treatment is right for my gummy smile?", answer: "A consultation with photos and examination is the best way to identify the cause and choose a safe, natural-looking approach." }], ar: [{ question: "ما سبب الابتسامة اللثوية؟", answer: "قد تنتج الابتسامة اللثوية عن زيادة نسيج اللثة، قصر مظهر الأسنان، حركة الشفاه، بزوغ الأسنان، مشاكل العضة أو نسب الفك." }, { question: "كيف يتم علاج الابتسامة اللثوية؟", answer: "يعتمد العلاج على السبب وقد يشمل البوتوكس أو تعديل اللثة بالليزر أو التقويم أو التخطيط الترميمي أو خيارات جراحية متقدمة." }, { question: "هل علاج الابتسامة اللثوية مؤلم؟", answer: "تعتمد الراحة على نوع العلاج المختار. كثير من الخيارات تتم بإجراءات مريحة أو انزعاج بسيط، ويتم شرح التفاصيل في الاستشارة." }, { question: "هل يساعد البوتوكس في علاج الابتسامة اللثوية؟", answer: "قد يساعد البوتوكس عندما يكون سبب ظهور اللثة الأساسي هو حركة زائدة في الشفة العلوية، لكنه لا يناسب كل الأسباب." }, { question: "هل ليزر اللثة مناسب للجميع؟", answer: "لا. يناسب تعديل اللثة بالليزر الحالات التي تسمح فيها كمية اللثة ونسب الأسنان بذلك. بعض الحالات تحتاج تقويماً أو خطة أخرى." }, { question: "كم تكلفة علاج الابتسامة اللثوية في الأردن؟", answer: "تعتمد التكلفة على السبب وطريقة العلاج المختارة مثل البوتوكس أو تعديل اللثة أو التقويم أو الخطة المشتركة." }, { question: "كيف أعرف العلاج المناسب لابتسامتي اللثوية؟", answer: "الاستشارة مع الصور والفحص هي أفضل طريقة لتحديد السبب واختيار نهج آمن وطبيعي المظهر." }] }
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
    relatedService: "dental-veneers-jordan",
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
    relatedService: "dental-veneers-jordan",
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
    relatedService: "dental-veneers-jordan",
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
    relatedService: "dental-veneers-jordan",
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

export const serviceSlugAliases: Record<string, string> = {
  "dental-veneers-in-jordan": "dental-veneers-jordan",
  "veneers-in-amman": "dental-veneers-jordan",
  "veneers-in-jordan": "dental-veneers-jordan",
  veneers: "dental-veneers-jordan",
  "zircon-veneers-amman": "dental-veneers-jordan",
  "zircon-veneers-jordan": "dental-veneers-jordan",
  "zircon-and-veneers": "dental-veneers-jordan",
  "facing-to-veneers-jordan": "dental-veneers-jordan",
  "teeth-whitening-jordan": "teeth-whitening-amman",
  "teeth-whitening-in-amman-jordan": "teeth-whitening-amman",
  "dental-implants-jordan": "dental-implants-amman",
  "dental-implants-in-amman-jordan": "dental-implants-amman",
  "teeth-implants": "dental-implants-amman",
  "teeth-implants-jordan": "dental-implants-amman",
  "orthodontics-jordan": "orthodontics-amman",
  "orthodontics-in-amman-jordan": "orthodontics-amman",
  "gummy-smile-treatment": "gummy-smile-treatment-jordan",
  "gummy-smile-jordan": "gummy-smile-treatment-jordan",
  "gummy-smile": "gummy-smile-treatment-jordan"
};

export function getCanonicalServiceSlug(slug: string) {
  return serviceSlugAliases[slug] ?? slug;
}

export function getService(slug: string) {
  const canonicalSlug = getCanonicalServiceSlug(slug);
  return services.find((service) => service.slug === canonicalSlug);
}

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
