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
      en: "I used to hide my smile in every photo, after getting veneers, I honestly feel like myself again. My smile looks natural, clean, and gave me back so much confidence.",
      ar: "كنت دايمًا أخبي ضحكتي بالصور. بعد الفينير حسّيت بثقة غير، ابتسامتي صارت طبيعية ومرتبة ورجّعتلي ثقتي بنفسي."
    },
    meta: { en: "Patient experience · Veneers", ar: "تجربة مريض · فينير" }
  },
  {
    id: "testimonial-confident-hollywood-smile-patient-story",
    videoSrc: "/media/smile-transformation-videos/confident-hollywood-smile-patient-story.mp4",
    posterSrc: "/media/video-posters/confident-hollywood-smile-patient-story-poster.jpg",
    title: { en: "From Consultation to Confidence", ar: "من الاستشارة إلى الثقة" },
    quote: {
      en: "For years, I never felt comfortable with my smile. After the veneers, I looked in the mirror and finally felt like my smile matched how I wanted to feel.",
      ar: "سنين وانا مش مرتاح بابتسامتي. بعد الفينير، طلّعت بالمراية وحسيت لأول مرة إن ابتسامتي صارت تشبه الإحساس اللي كنت بدي أوصله الحمدلله وشكرا لدكتور علي من القلب"
    },
    meta: { en: "Smile transformation · Patient story", ar: "تحول ابتسامة · قصة مريض" }
  },
  {
    id: "testimonial-veneers-smile-reveal-patient-moment",
    videoSrc: "/media/smile-transformation-videos/veneers-smile-reveal-patient-moment.mp4",
    posterSrc: "/media/video-posters/veneers-smile-reveal-patient-moment-poster.jpg",
    title: { en: "A New Smile Moment", ar: "لحظة ابتسامة جديدة" },
    quote: {
      en: "I always wanted a softer, more feminine smile that felt like me. After the treatment, I started smiling more in photos and felt a quiet confidence I hadn’t felt in years.",
      ar: "كنت دايما بدي ابتسامة انعم وانثوية وتشبهني. بعد العلاج صرت ابتسم بالصور اكثر، وحسيت بثقة هادية ما كنت حاسيتها من زمان."
    },
    meta: { en: "Patient moment · Smile reveal", ar: "لحظة مريض · كشف الابتسامة" }
  },
  {
    id: "testimonial-dental-veneers-patient-testimonial-jordan",
    videoSrc: "/media/smile-transformation-videos/dental-veneers-patient-testimonial-jordan.mp4",
    posterSrc: "/media/video-posters/dental-veneers-patient-testimonial-poster.jpg",
    title: { en: "Confidence in Motion", ar: "ثقة تتحرك" },
    quote: {
      en: "I didn’t want a smile that looked too perfect or fake. I wanted something soft, feminine, and natural. After the treatment, I felt my whole face looked brighter, and I started smiling in photos without overthinking it. It gave me a kind of confidence that feels calm and real.",
      ar: "ما كنت بدي ابتسامة تبين مثالية زيادة او مصطنعة. كنت بدي اشي ناعم، أنثوي، وطبيعي. بعد العلاج حسّيت وجهي كله صار افتح، وصرت أبتسم بالصور بدون ما أفكر كثير. رجعتلي ثقة هادية وحقيقية بنفسي."
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
      en: "I never realized how much my smile affected the way I carried myself. After the treatment, everything felt different. I became more comfortable meeting people, taking photos, and speaking without holding back. It honestly changed my daily life, and now I can’t wait for every reason to smile.",
      ar: "ما كنت متخيل قديش ابتسامتي مأثرة على طريقتي وثقتي بنفسي. بعد العلاج حسيت كل إشي تغير. صرت أرتاح أكثر لما أقابل ناس، أتصور، وأحكي بدون ما أضل أحسبها. بصراحة غيّر حياتي اليومية، والان بستنى اي سبب عشان أبتسم."
    },
    meta: { en: "Real smile-design result", ar: "نتيجة تصميم ابتسامة حقيقية" }
  }
];

export function TestimonialVideoSlider({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [loadedIndexes, setLoadedIndexes] = useState<Set<number>>(() => new Set([0]));
  const [readyVideoIndexes, setReadyVideoIndexes] = useState<Set<number>>(() => new Set());
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(Boolean(entry?.isIntersecting));
      },
      {
        rootMargin: "360px 0px",
        threshold: 0.01
      }
    );

    observer.observe(slider);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonialSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isInView]);

  useEffect(() => {
    if (isInView) {
      setLoadedIndexes((current) => current.has(active) ? current : new Set(current).add(active));
      setReadyVideoIndexes((current) => {
        if (!current.has(active)) return current;
        const next = new Set(current);
        next.delete(active);
        return next;
      });
    }

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === active && isInView) {
        const playFromStart = () => {
          video.currentTime = 0;
          void video.play().catch(() => undefined);
        };

        if (video.readyState >= 1) {
          playFromStart();
        } else {
          video.addEventListener("loadedmetadata", playFromStart, { once: true });
          video.load();
        }
      } else {
        video.pause();
      }
    });
  }, [active, isInView]);

  return (
    <div ref={sliderRef} className="testimonial-slider" aria-roledescription="carousel" aria-label={locale === "ar" ? "شهادات المرضى" : "Patient testimonials"}>
      <div className="testimonial-stage">
        {testimonialSlides.map((slide, index) => (
          <article className={`testimonial-slide ${index === active ? "active" : ""}`} key={slide.id} aria-hidden={index !== active}>
            <div className="testimonial-video-shell">
              <img className="testimonial-video-poster" src={slide.posterSrc} alt="" aria-hidden="true" decoding="async" loading="lazy" />
              <video
                ref={(node) => { videoRefs.current[index] = node; }}
                className={readyVideoIndexes.has(index) && index === active && isInView ? "is-ready" : ""}
                aria-label={`${slide.title[locale]} - ${slide.meta[locale]}`}
                autoPlay={index === active && isInView}
                muted
                playsInline
                preload={index === active && isInView ? "metadata" : "none"}
                loop
                onPlaying={() => {
                  setReadyVideoIndexes((current) => current.has(index) ? current : new Set(current).add(index));
                }}
              >
                {isInView && (index === active || loadedIndexes.has(index)) ? <source src={slide.videoSrc} type="video/mp4" /> : null}
              </video>
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
