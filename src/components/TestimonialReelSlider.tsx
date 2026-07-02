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
    id: "testimonial-reel-04",
    videoSrc: "/media/reels/reel-04.mp4",
    posterSrc: "/media/posters/reel-04.jpg",
    title: { en: "A Smile That Feels Like You", ar: "ابتسامة تشبهك" },
    quote: {
      en: "A real patient moment showing the confidence that follows careful smile-design planning.",
      ar: "لحظة مريض حقيقية تُظهر الثقة بعد تخطيط دقيق لتصميم الابتسامة."
    },
    meta: { en: "Patient experience · Veneers", ar: "تجربة مريض · فينير" }
  },
  {
    id: "testimonial-reel-08",
    videoSrc: "/media/reels/reel-08.mp4",
    posterSrc: "/media/posters/reel-08.jpg",
    title: { en: "From Consultation to Confidence", ar: "من الاستشارة إلى الثقة" },
    quote: {
      en: "Short, authentic reels from the clinic experience and final smile transformation.",
      ar: "ريلز قصيرة وحقيقية من تجربة العيادة وتحول الابتسامة النهائي."
    },
    meta: { en: "Smile transformation · Patient story", ar: "تحول ابتسامة · قصة مريض" }
  },
  {
    id: "testimonial-reel-05",
    videoSrc: "/media/reels/reel-05.mp4",
    posterSrc: "/media/posters/reel-05.jpg",
    title: { en: "A New Smile Moment", ar: "لحظة ابتسامة جديدة" },
    quote: {
      en: "A warm patient reel highlighting the emotional side of a refined smile transformation.",
      ar: "ريل دافئ يبرز الجانب الإنساني والعاطفي لتحول ابتسامة راقٍ."
    },
    meta: { en: "Patient moment · Smile reveal", ar: "لحظة مريض · كشف الابتسامة" }
  },
  {
    id: "testimonial-reel-10",
    videoSrc: "/media/reels/reel-10.mp4",
    posterSrc: "/media/posters/reel-10.jpg",
    title: { en: "Confidence in Motion", ar: "ثقة تتحرك" },
    quote: {
      en: "A short testimonial reel that reflects the confidence patients feel after thoughtful smile design.",
      ar: "شهادة قصيرة تعكس الثقة التي يشعر بها المرضى بعد تصميم ابتسامة مدروس."
    },
    meta: { en: "Testimonial reel · Cosmetic dentistry", ar: "شهادة مريض · تجميل الأسنان" }
  },
  {
    id: "testimonial-reel-11",
    videoSrc: "/media/reels/reel-11.mp4",
    posterSrc: "/media/posters/reel-11.jpg",
    title: { en: "Trust the Transformation", ar: "ثقة في التحول" },
    quote: {
      en: "An authentic patient experience reel designed to feel premium, trustworthy, and personal.",
      ar: "ريل تجربة مريض حقيقية بطابع راقٍ وموثوق وشخصي."
    },
    meta: { en: "Real patient story", ar: "قصة مريض حقيقية" }
  },
  {
    id: "testimonial-reel-04-refined",
    videoSrc: "/media/reels/reel-04.mp4",
    posterSrc: "/media/posters/reel-04.jpg",
    title: { en: "Natural, Bright, Confident", ar: "طبيعية، مشرقة، واثقة" },
    quote: {
      en: "The best smile transformations look polished, personal, and comfortable in real life.",
      ar: "أفضل تحولات الابتسامة تبدو راقية، شخصية، ومريحة في الحياة اليومية."
    },
    meta: { en: "Real smile-design result", ar: "نتيجة تصميم ابتسامة حقيقية" }
  }
];

export function TestimonialReelSlider({ locale }: { locale: Locale }) {
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
