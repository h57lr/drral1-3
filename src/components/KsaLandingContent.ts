import type { Locale } from "@/lib/i18n";

export const ksaTreatments = ["veneers", "hollywood-smile"] as const;
export const ksaVariants = ["natural", "journey", "clarity"] as const;

export type KsaTreatment = (typeof ksaTreatments)[number];
export type KsaVariant = (typeof ksaVariants)[number];

export type KsaFaq = {
  question: string;
  answer: string;
};

type Localized<T> = Record<Locale, T>;

export function isKsaTreatment(value: string): value is KsaTreatment {
  return ksaTreatments.includes(value as KsaTreatment);
}

export function isKsaVariant(value: string): value is KsaVariant {
  return ksaVariants.includes(value as KsaVariant);
}

export const ksaSectionOrder: Record<KsaVariant, readonly string[]> = {
  natural: ["treatment", "trust", "stories", "process", "price", "travel", "faq", "conversion"],
  journey: ["travel", "process", "trust", "stories", "treatment", "price", "faq", "conversion"],
  clarity: ["price", "treatment", "trust", "process", "travel", "stories", "faq", "conversion"]
};

const shared = {
  ar: {
    direction: "rtl",
    brandLine: "تجميل الأسنان في عمّان",
    location: "العلاج في عمّان، الأردن",
    switchLanguage: "English",
    whatsapp: "واتساب",
    consult: "ابدأ استشارتك",
    quickFacts: ["عادةً ٢–٣ زيارات حسب الحالة", "إرشادات فندقية متاحة", "خامات سويسرية وألمانية راقية مختارة"],
    trustEyebrow: "ما الذي تعرفه قبل السفر؟",
    trustTitle: "معلومات واضحة، من البداية.",
    trustIntro: "خطتك النهائية وتكلفتها تُحددان بعد التقييم السريري في عمّان. ويمكن للفريق مساعدتك بإرشادات الفندق وترتيب الزيارات بحسب حالتك.",
    trustCards: [
      { title: "في عمّان", text: "يتم العلاج والتقييم السريري في عمّان، الأردن." },
      { title: "خامات مختارة", text: "خامات سويسرية وألمانية راقية تُختار بما يناسب الخطة السريرية." },
      { title: "تخطيط للزيارة", text: "غالباً ما يحتاج العلاج إلى ٢–٣ زيارات، وفق تفاصيل الحالة." },
      { title: "قبل وصولك", text: "ابدأ عبر واتساب وشارك توقيت سفرك والصور التي تختار إرسالها." }
    ],
    processEyebrow: "كيف تبدأ الرحلة؟",
    processTitle: "من الصور إلى الخطة السريرية.",
    processIntro: "خطوات عملية تساعدك على فهم ما يمكن ترتيبه قبل السفر وما لا يُحسم إلا بعد الفحص.",
    process: [
      { title: "ابدأ عبر واتساب", text: "أخبر الفريق بما ترغب في تحسينه وشارك الصور التي تختار إرسالها لبدء المراجعة الأولية." },
      { title: "رتّب توقيت الزيارة", text: "يستمع الفريق إلى احتياجك ويشاركك إرشادات الفندق المتاحة وتوقيت الحضور المناسب." },
      { title: "التقييم السريري في عمّان", text: "بعد الفحص تُحدد الخطة النهائية والتكلفة وفق حالتك." },
      { title: "زيارات العلاج", text: "يُنجز العلاج عادةً خلال ٢–٣ زيارات، وقد يختلف ذلك حسب الحالة." }
    ],
    travelEyebrow: "قادماً من السعودية",
    travelTitle: "خطّة زيارة أبسط إلى عمّان.",
    travelText: "أخبرنا بالمدينة التي ستنطلق منها والموعد التقريبي للسفر. يشاركك الفريق تسلسل الزيارات المتوقع وإرشادات فندقية متاحة، بينما تبقى الخطة النهائية مرتبطة بالتقييم السريري.",
    travelPoints: ["توقيت سفر مرن في الطلب", "إرشادات فندقية متاحة", "٢–٣ زيارات عادةً حسب الحالة"],
    storiesEyebrow: "تجارب موثقة",
    storiesTitle: "تجارب مرضى من أنحاء الخليج.",
    storiesText: "توجد شهادات وتجارب لمرضى من أنحاء دول مجلس التعاون الخليجي. نستعرضها دون وعود أو نتائج موحّدة؛ فكل خطة تعتمد على الحالة.",
    storiesCardTitle: "شاهد تجربة العلاج",
    priceEyebrow: "التكلفة بوضوح",
    finalCost: "الخطة والتكلفة النهائية بعد التقييم السريري",
    priceNotes: ["التقييم السريري في عمّان", "السعر النهائي مرتبط بعدد الأسنان والخطة", "لا تُحسم الخطة من الصور وحدها"],
    faqEyebrow: "أسئلة شائعة",
    faqTitle: "إجابات مباشرة قبل أن تقرر.",
    conversionEyebrow: "خطوتك الأولى",
    conversionTitle: "ابدأ محادثة واضحة عبر واتساب.",
    conversionText: "أخبر الفريق بمدينتك، وما ترغب في تحسينه، وموعد السفر المتوقع. يمكنك إرسال صور اختيارية عبر المحادثة لبدء مراجعة أولية؛ أما الخطة والتكلفة النهائية فتكون بعد التقييم السريري.",
    whatsappPrompt: "استشارة مباشرة عبر واتساب",
    whatsappCardTitle: "ماذا ترسل في الرسالة الأولى؟",
    whatsappCardText: "جهزنا لك رسالة مختصرة مسبقاً لتبدأ من دون كتابة التفاصيل من جديد.",
    whatsappSteps: ["مدينتك في السعودية", "موعد السفر المتوقع", "ما ترغب في تحسينه", "صور الابتسامة التي تختار إرسالها"],
    whatsappBenefits: ["رد مباشر من فريق العيادة", "توجيه أولي قبل السفر", "إرشادات فندقية عند التخطيط"],
    whatsappCta: "ابدأ الاستشارة عبر واتساب",
    whatsappNote: "المراجعة عبر الصور أولية ولا تستبدل الفحص السريري في عمّان.",
    footer: "استشارة واتساب لزوار السعودية • العلاج في عمّان، الأردن"
  },
  en: {
    direction: "ltr",
    brandLine: "Cosmetic dentistry in Amman",
    location: "Treatment in Amman, Jordan",
    switchLanguage: "العربية",
    whatsapp: "WhatsApp",
    consult: "Start your consultation",
    quickFacts: ["Typically 2–3 visits, depending on the case", "Hotel guidance available", "Selected high-end Swiss and German materials"],
    trustEyebrow: "Before you travel",
    trustTitle: "Clear information from the start.",
    trustIntro: "Your final plan and cost are confirmed after a clinical assessment in Amman. The team can also provide hotel guidance and help arrange visits around your case.",
    trustCards: [
      { title: "In Amman", text: "Treatment and clinical assessment take place in Amman, Jordan." },
      { title: "Selected materials", text: "Selected high-end Swiss and German materials are considered according to the clinical plan." },
      { title: "Visit planning", text: "Treatment typically takes 2–3 visits, depending on the case." },
      { title: "Before arrival", text: "Start on WhatsApp and share your travel window and any photos you choose to send." }
    ],
    processEyebrow: "How it begins",
    processTitle: "From photos to a clinical plan.",
    processIntro: "Practical steps clarify what can be arranged before travel and what must wait for an in-person assessment.",
    process: [
      { title: "Start on WhatsApp", text: "Tell the team what you would like to improve and share any photos you choose to send for an initial review." },
      { title: "Plan your visit window", text: "The team listens to your needs and shares available hotel guidance and suitable timing." },
      { title: "Clinical assessment in Amman", text: "After examination, your final treatment plan and cost are confirmed for your case." },
      { title: "Treatment visits", text: "Treatment is typically completed in 2–3 visits, although this varies by case." }
    ],
    travelEyebrow: "Travelling from Saudi Arabia",
    travelTitle: "A simpler visit plan for Amman.",
    travelText: "Tell us your Saudi city and approximate travel window. The team can outline the expected visit sequence and share available hotel guidance, while the final plan remains subject to clinical assessment.",
    travelPoints: ["Flexible travel window", "Hotel guidance available", "Typically 2–3 visits, case-dependent"],
    storiesEyebrow: "Documented experiences",
    storiesTitle: "Patient experiences from across the GCC.",
    storiesText: "Patient testimonials exist from across the GCC. They are shared without promises or uniform outcomes; every treatment plan depends on the individual case.",
    storiesCardTitle: "View a treatment experience",
    priceEyebrow: "Cost, clearly explained",
    finalCost: "Final plan and cost follow clinical assessment",
    priceNotes: ["Clinical assessment in Amman", "Final price depends on the teeth and plan involved", "Photos alone do not determine the final plan"],
    faqEyebrow: "Frequently asked",
    faqTitle: "Direct answers before you decide.",
    conversionEyebrow: "Your first step",
    conversionTitle: "Start a clear WhatsApp conversation.",
    conversionText: "Tell the team your city, what you would like to improve, and when you may travel. You can share optional photos in the conversation for an initial review; the final plan and cost follow clinical assessment.",
    whatsappPrompt: "Direct WhatsApp consultation",
    whatsappCardTitle: "What should your first message include?",
    whatsappCardText: "A short message is prepared for you so you can start without retyping the important details.",
    whatsappSteps: ["Your city in Saudi Arabia", "Expected travel date", "What you would like to improve", "Any smile photos you choose to send"],
    whatsappBenefits: ["Direct clinic-team conversation", "Initial guidance before travel", "Hotel guidance when planning"],
    whatsappCta: "Start your WhatsApp consultation",
    whatsappNote: "Photo review is preliminary and does not replace a clinical examination in Amman.",
    footer: "WhatsApp consultation for Saudi visitors • Treatment in Amman, Jordan"
  }
} as const;

const treatmentContent: Record<KsaTreatment, Localized<{
  name: string;
  shortName: string;
  distinctionEyebrow: string;
  distinctionTitle: string;
  distinctionText: string;
  priceTitle: string;
  priceValue: string;
  priceUnit: string;
  priceText: string;
  faqs: KsaFaq[];
}>> = {
  veneers: {
    ar: {
      name: "قشور الأسنان (الفينير)",
      shortName: "الفينير",
      distinctionEyebrow: "هل الفينير هو هوليود سمايل؟",
      distinctionTitle: "الفينير علاج محدد، وليس اسماً لكل خطة ابتسامة.",
      distinctionText: "يركّز الفينير على الأسنان التي تشملها الخطة. أما «هوليود سمايل» فهو تخطيط أشمل لمظهر الابتسامة وقد يتضمن الفينير عندما يكون مناسباً. يحدد التقييم السريري الخيار وعدد الأسنان والتكلفة النهائية.",
      priceTitle: "يبدأ سعر الفينير",
      priceValue: "١٣٠",
      priceUnit: "ديناراً أردنياً للسن",
      priceText: "هذا سعر بداية للسن الواحد، وليس عرضاً نهائياً للحالة. تُحدد الخطة والتكلفة النهائية بعد التقييم السريري.",
      faqs: [
        { question: "أين يتم علاج الفينير؟", answer: "يتم العلاج والتقييم السريري في عمّان، الأردن." },
        { question: "كم يبدأ سعر الفينير؟", answer: "يبدأ سعر الفينير من ١٣٠ ديناراً أردنياً للسن. تُحدد التكلفة النهائية بعد التقييم السريري وفق الحالة والخطة." },
        { question: "كم زيارة يحتاج العلاج؟", answer: "عادةً ما يحتاج العلاج إلى ٢–٣ زيارات، وقد يختلف العدد حسب الحالة." },
        { question: "هل الفينير هو نفسه هوليود سمايل؟", answer: "لا. الفينير علاج محدد للأسنان التي تشملها الخطة، بينما هوليود سمايل تخطيط أوسع لمظهر الابتسامة وقد يتضمن الفينير إذا كان مناسباً." },
        { question: "هل يمكن إرسال الصور قبل السفر؟", answer: "نعم، يمكنك بدء المحادثة عبر واتساب وإرسال الصور التي تختار مشاركتها للمراجعة الأولية. الصور لا تستبدل التقييم السريري." },
        { question: "هل تتوفر مساعدة بشأن الفندق؟", answer: "تتوفر إرشادات فندقية للمساعدة في ترتيب زيارتك إلى عمّان." }
      ]
    },
    en: {
      name: "Dental veneers",
      shortName: "Veneers",
      distinctionEyebrow: "Are veneers a Hollywood Smile?",
      distinctionTitle: "Veneers are a specific treatment, not the name for every smile plan.",
      distinctionText: "Veneers focus on the teeth included in the treatment plan. A ‘Hollywood Smile’ is broader smile-appearance planning and may include veneers when suitable. Clinical assessment determines the option, number of teeth, and final cost.",
      priceTitle: "Veneers start at",
      priceValue: "130",
      priceUnit: "JOD per tooth",
      priceText: "This is a starting price per tooth, not a final case quote. The final plan and cost are confirmed after clinical assessment.",
      faqs: [
        { question: "Where does veneer treatment take place?", answer: "Treatment and clinical assessment take place in Amman, Jordan." },
        { question: "What is the starting veneer price?", answer: "Veneers start at 130 JOD per tooth. Final cost is determined after clinical assessment according to the case and plan." },
        { question: "How many visits are usually needed?", answer: "Treatment typically takes 2–3 visits, although the number may vary by case." },
        { question: "Are veneers the same as a Hollywood Smile?", answer: "No. Veneers are a specific treatment for the teeth included in a plan, while a Hollywood Smile is broader smile-appearance planning that may include veneers when suitable." },
        { question: "Can I send photos before travelling?", answer: "Yes. You can start on WhatsApp and send any photos you choose to share for an initial review. Photos do not replace clinical assessment." },
        { question: "Is hotel help available?", answer: "Hotel guidance is available to help you plan your visit to Amman." }
      ]
    }
  },
  "hollywood-smile": {
    ar: {
      name: "تخطيط هوليود سمايل",
      shortName: "هوليود سمايل",
      distinctionEyebrow: "ما المقصود بهوليود سمايل؟",
      distinctionTitle: "خطة أوسع لمظهر الابتسامة، وليست مرادفاً للفينير.",
      distinctionText: "هوليود سمايل تصف تخطيطاً أشمل لمظهر الابتسامة. قد تتضمن الخطة الفينير عندما يكون مناسباً، لكنها لا تعني أن كل حالة تحتاج العلاج نفسه. يحدد التقييم السريري تفاصيل الخطة وتكلفتها.",
      priceTitle: "تكلفة الخطة",
      priceValue: "بعد التقييم",
      priceUnit: "السريري في عمّان",
      priceText: "لا يوجد سعر موحد لخطة هوليود سمايل. إذا تضمنت الخطة فينير، يبدأ سعر الفينير من ١٣٠ ديناراً أردنياً للسن. تُحدد التكلفة النهائية بعد التقييم السريري.",
      faqs: [
        { question: "أين يتم تخطيط وعلاج هوليود سمايل؟", answer: "يتم التقييم السريري والعلاج في عمّان، الأردن." },
        { question: "كم تكلفة هوليود سمايل؟", answer: "لا يوجد سعر موحد لأنها خطة تعتمد على الحالة. إذا تضمنت فينير، يبدأ سعر الفينير من ١٣٠ ديناراً أردنياً للسن، وتُحدد التكلفة النهائية بعد التقييم السريري." },
        { question: "هل هوليود سمايل تعني الفينير دائماً؟", answer: "لا. هي تخطيط أوسع لمظهر الابتسامة، وقد تتضمن الفينير عندما يكون مناسباً. يحدد التقييم السريري تفاصيل كل حالة." },
        { question: "كم زيارة يحتاج العلاج؟", answer: "عادةً ما يحتاج العلاج إلى ٢–٣ زيارات، وقد يختلف ذلك حسب الخطة والحالة." },
        { question: "هل يمكنني إرسال صور قبل حجز السفر؟", answer: "نعم، يمكنك بدء المحادثة عبر واتساب وإرسال الصور التي تختار مشاركتها للمراجعة الأولية. تبقى الخطة النهائية مرتبطة بالتقييم السريري." },
        { question: "هل تتوفر إرشادات للفندق؟", answer: "نعم، تتوفر إرشادات فندقية للمساعدة في ترتيب الزيارة إلى عمّان." }
      ]
    },
    en: {
      name: "Hollywood Smile planning",
      shortName: "Hollywood Smile",
      distinctionEyebrow: "What does Hollywood Smile mean?",
      distinctionTitle: "Broader smile-appearance planning, not another word for veneers.",
      distinctionText: "A Hollywood Smile describes broader planning for the smile’s appearance. The plan may include veneers when suitable, but it does not mean every case requires the same treatment. Clinical assessment determines the plan and cost.",
      priceTitle: "Plan cost",
      priceValue: "After clinical",
      priceUnit: "assessment in Amman",
      priceText: "There is no single Hollywood Smile price because the plan depends on the case. If veneers are included, veneers start at 130 JOD per tooth. Final cost follows clinical assessment.",
      faqs: [
        { question: "Where does Hollywood Smile planning and treatment take place?", answer: "Clinical assessment and treatment take place in Amman, Jordan." },
        { question: "How much does a Hollywood Smile cost?", answer: "There is no single price because the plan depends on the case. If veneers are included, they start at 130 JOD per tooth, with final cost confirmed after clinical assessment." },
        { question: "Does a Hollywood Smile always mean veneers?", answer: "No. It is broader smile-appearance planning and may include veneers when suitable. Clinical assessment determines each case." },
        { question: "How many visits does treatment take?", answer: "Treatment typically takes 2–3 visits, although this varies according to the plan and case." },
        { question: "Can I send photos before booking travel?", answer: "Yes. You can start on WhatsApp and send any photos you choose to share for an initial review. The final plan still depends on clinical assessment." },
        { question: "Is hotel guidance available?", answer: "Yes. Hotel guidance is available to help plan your visit to Amman." }
      ]
    }
  }
};

const variants: Record<KsaVariant, Localized<{
  eyebrow: string;
  title: string;
  lead: string;
  heroNote: string;
  seoTitle: string;
  seoDescription: string;
}>> = {
  natural: {
    ar: {
      eyebrow: "ابتسامة هادئة ومدروسة",
      title: "ملامحك أولاً، ثم خطة ابتسامتك.",
      lead: "للباحثين في السعودية عن مظهر ابتسامة متوازن وخطة واضحة للعلاج في عمّان، مع تقييم سريري يحدد التفاصيل والتكلفة.",
      heroNote: "نبدأ بفهم ما يناسب ملامحك، لا بنسخ ابتسامة واحدة للجميع.",
      seoTitle: "ابتسامة طبيعية في عمّان لزوار السعودية",
      seoDescription: "خطط الفينير وهوليود سمايل في عمّان لزوار السعودية، مع تكلفة نهائية بعد التقييم السريري وبدء الاستشارة عبر واتساب."
    },
    en: {
      eyebrow: "A considered smile",
      title: "Your features first. Then your smile plan.",
      lead: "For people in Saudi Arabia seeking a balanced smile appearance and a clear treatment plan in Amman, with clinical assessment determining the details and cost.",
      heroNote: "Planning begins with your features—not one smile copied for everyone.",
      seoTitle: "Natural smile planning in Amman for Saudi visitors",
      seoDescription: "Veneer and Hollywood Smile planning in Amman for Saudi visitors, with final cost after clinical assessment and a WhatsApp consultation."
    }
  },
  journey: {
    ar: {
      eyebrow: "من السعودية إلى عمّان",
      title: "اعرف خطوات الزيارة قبل أن ترتّب سفرك.",
      lead: "شاركنا توقيتك وصوراً اختيارية، ثم تعرّف إلى تسلسل الزيارات المتوقع. عادةً ما يحتاج العلاج إلى ٢–٣ زيارات حسب الحالة.",
      heroNote: "إرشادات فندقية متاحة، والخطة النهائية بعد التقييم السريري في عمّان.",
      seoTitle: "رحلة علاج الابتسامة من السعودية إلى عمّان",
      seoDescription: "رتّب رحلة الفينير أو هوليود سمايل من السعودية إلى عمّان: عادةً ٢–٣ زيارات حسب الحالة، وإرشادات فندقية متاحة."
    },
    en: {
      eyebrow: "From Saudi Arabia to Amman",
      title: "Understand the visit sequence before planning your trip.",
      lead: "Share your timing and optional photos, then learn the expected visit sequence. Treatment typically takes 2–3 visits, depending on the case.",
      heroNote: "Hotel guidance is available; the final plan follows clinical assessment in Amman.",
      seoTitle: "Smile treatment journey from Saudi Arabia to Amman",
      seoDescription: "Plan a veneer or Hollywood Smile journey from Saudi Arabia to Amman: typically 2–3 visits depending on the case, with hotel guidance available."
    }
  },
  clarity: {
    ar: {
      eyebrow: "الخطة والتكلفة بلا غموض",
      title: "ما نعرفه الآن، وما يحدده الفحص.",
      lead: "نوضح سعر البداية المعلن للفينير، وعدد الزيارات المعتاد، ولماذا لا تصبح أي تكلفة نهائية قبل التقييم السريري في عمّان.",
      heroNote: "وضوح قبل السفر، من دون تحويل الصور إلى تشخيص أو سعر نهائي.",
      seoTitle: "تكلفة الفينير وتخطيط هوليود سمايل في عمّان",
      seoDescription: "الفينير يبدأ من ١٣٠ ديناراً أردنياً للسن، والخطة والتكلفة النهائية بعد التقييم السريري في عمّان."
    },
    en: {
      eyebrow: "Plan and cost, without ambiguity",
      title: "What is known now—and what assessment determines.",
      lead: "See the stated veneer starting price, the typical visit count, and why no cost becomes final before clinical assessment in Amman.",
      heroNote: "Clarity before travel, without turning photos into a diagnosis or final quote.",
      seoTitle: "Veneer cost and Hollywood Smile planning in Amman",
      seoDescription: "Veneers start at 130 JOD per tooth, with the final plan and cost confirmed after clinical assessment in Amman."
    }
  }
};

const heroMedia: Record<KsaTreatment, Record<KsaVariant, { src: string; position?: string }>> = {
  veneers: {
    natural: { src: "/media/video-posters/natural-dental-veneers-before-after-poster.jpg", position: "50% 45%" },
    journey: { src: "/media/video-posters/smile-makeover-consultation-preview-poster.jpg", position: "50% 35%" },
    clarity: { src: "/media/video-posters/male-veneer-texture-detail-poster.jpg", position: "50% 50%" }
  },
  "hollywood-smile": {
    natural: { src: "/media/video-posters/soft-hollywood-smile-reveal-poster.jpg", position: "50% 45%" },
    journey: { src: "/media/video-posters/hollywood-smile-veneers-result-poster.jpg", position: "50% 40%" },
    clarity: { src: "/media/video-posters/facing-to-veneers-smile-design-result-poster.jpg", position: "50% 45%" }
  }
};

export function getKsaLandingContent(locale: Locale, treatment: KsaTreatment, variant: KsaVariant) {
  const media = locale === "ar" && treatment === "hollywood-smile" && variant === "natural"
    ? { src: "/media/smile-case-images/natural-veneers-before-after-comparison-front.webp", position: "50% 50%" }
    : heroMedia[treatment][variant];

  return {
    shared: shared[locale],
    treatment: treatmentContent[treatment][locale],
    variant: variants[variant][locale],
    media
  };
}
