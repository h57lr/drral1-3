"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

type TestimonialSlide = {
  id: string;
  videoSrc: string;
  posterSrc: string;
  title: Record<Locale, string>;
  quote: Record<Locale, string>;
  meta: Record<Locale, string>;
};

const testimonialSlides: TestimonialSlide[] = [
  {
    id: "testimonial-smile-design-veneers-jordan",
    videoSrc: "/media/smile-transformation-videos/smile-design-veneers-jordan.mp4",
    posterSrc: "/media/video-posters/smile-design-veneers-jordan-poster.jpg",
    title: { en: "A Smile That Feels Like You", ar: "ابتسامة تشبهك" },
    quote: {
      en: "A real patient moment showing the confidence that follows careful smile-design planning.",
      ar: "لحظة مريض حقيقية تُظهر الثقة بعد تخطيط دقيق لتصميم الابتسامة."
    },
    meta: { en: "Patient experience · Veneers", ar: "تجربة مريض · فينير" }
  },
  {
    id: "testimonial-confident-hollywood-smile-patient-story",
    videoSrc: "/media/smile-transformation-videos/confident-hollywood-smile-patient-story.mp4",
    posterSrc: "/media/video-posters/confident-hollywood-smile-patient-story-poster.jpg",
    title: { en: "From Consultation to Confidence", ar: "من الاستشارة إلى الثقة" },
    quote: {
      en: "Every new smile I design is not just a change in appearance; it is the rewriting of an entire life story in front of my eyes. Seeing a patient’s confidence return fills my heart with unmatched joy — this is my true purpose.",
      ar: "كل ابتسامة جديدة أرسمها ليست مجرد تغيير في المظهر، بل هي إعادة كتابة لقصة حياة كاملة أمام عيني. لحظة رؤيتي لثقة المريض وقد عادت إليه تجعل قلبي يمتلئ بفرح لا يضاهيه فرح، فهذه هي رسالتي الحقيقية."
    },
    meta: { en: "Smile transformation · Patient story", ar: "تحول ابتسامة · قصة مريض" }
  },
  {
    id: "testimonial-veneers-smile-reveal-patient-moment",
    videoSrc: "/media/smile-transformation-videos/veneers-smile-reveal-patient-moment.mp4",
    posterSrc: "/media/video-posters/veneers-smile-reveal-patient-moment-poster.jpg",
    title: { en: "A New Smile Moment", ar: "لحظة ابتسامة جديدة" },
    quote: {
      en: "A warm patient moment highlighting the emotional side of a refined smile transformation.",
      ar: "لحظة مريض دافئة تبرز الجانب الإنساني والعاطفي لتحول ابتسامة راقٍ."
    },
    meta: { en: "Patient moment · Smile reveal", ar: "لحظة مريض · كشف الابتسامة" }
  },
  {
    id: "testimonial-dental-veneers-patient-testimonial-jordan",
    videoSrc: "/media/smile-transformation-videos/dental-veneers-patient-testimonial-jordan.mp4",
    posterSrc: "/media/video-posters/dental-veneers-patient-testimonial-poster.jpg",
    title: { en: "Confidence in Motion", ar: "ثقة تتحرك" },
    quote: {
      en: "A short patient testimonial that reflects the confidence patients feel after thoughtful smile design.",
      ar: "شهادة قصيرة تعكس الثقة التي يشعر بها المرضى بعد تصميم ابتسامة مدروس."
    },
    meta: { en: "Patient testimonial · Cosmetic dentistry", ar: "شهادة مريض · تجميل الأسنان" }
  },
  {
    id: "testimonial-smile-transformation-patient-review-jordan",
    videoSrc: "/media/smile-transformation-videos/smile-transformation-patient-review-jordan.mp4",
    posterSrc: "/media/video-posters/smile-transformation-patient-review-poster.jpg",
    title: { en: "Trust the Transformation", ar: "ثقة في التحول" },
    quote: {
      en: "Seeing my new smile in the mirror felt like getting back a part of my spirit that had been missing for years. It was one of the happiest moments of my life.",
      ar: "لما شفت ابتسامتي الجديدة في المرآة كانت كفيلة بإعادة روحي التي ضاعت سنين وكانت من أكبر الفرحات في حياتي."
    },
    meta: { en: "Real patient story", ar: "قصة مريض حقيقية" }
  },
  {
    id: "testimonial-smile-design-veneers-refined",
    videoSrc: "/media/smile-transformation-videos/smile-design-veneers-jordan.mp4",
    posterSrc: "/media/video-posters/smile-design-veneers-jordan-poster.jpg",
    title: { en: "Natural, Bright, Confident", ar: "طبيعية، مشرقة، واثقة" },
    quote: {
      en: "The best smile transformations look polished, personal, and comfortable in real life.",
      ar: "أفضل تحولات الابتسامة تبدو راقية، شخصية، ومريحة في الحياة اليومية."
    },
    meta: { en: "Real smile-design result", ar: "نتيجة تصميم ابتسامة حقيقية" }
  }
];

export function TestimonialVideoSlider({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonialSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === active) {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [active]);

  return (
    <div className="testimonial-slider" aria-roledescription="carousel" aria-label={locale === "ar" ? "شهادات المرضى" : "Patient testimonials"}>
      <div className="testimonial-stage">
        {testimonialSlides.map((slide, index) => (
          <article className={`testimonial-slide ${index === active ? "active" : ""}`} key={slide.id} aria-hidden={index !== active}>
            <div className="testimonial-video-shell">
              <video
                ref={(node) => { videoRefs.current[index] = node; }}
                src={slide.videoSrc}
                poster={slide.posterSrc}
                aria-label={`${slide.title[locale]} - ${slide.meta[locale]}`}
                muted
                playsInline
                preload="metadata"
                loop
              />
            </div>
            <div className="testimonial-copy-card">
              <span className="pill">{slide.meta[locale]}</span>
              <h3>{slide.title[locale]}</h3>
              <p>{slide.quote[locale]}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="testimonial-dots" aria-label={locale === "ar" ? "اختيار شهادة" : "Choose testimonial"}>
        {testimonialSlides.map((slide, index) => (
          <button
            key={`${slide.id}-dot`}
            className={index === active ? "active" : ""}
            type="button"
            aria-label={locale === "ar" ? `الشهادة ${index + 1}` : `Testimonial ${index + 1}`}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
}
