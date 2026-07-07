"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

export type TransformationReelSlide = {
  id: string;
  title: Record<Locale, string>;
  caption: Record<Locale, string>;
  src: string;
  poster: string;
  alt: Record<Locale, string>;
};

const slideDuration = 8500;

export function TransformationReelsSlider({ locale, reels }: { locale: Locale; reels: TransformationReelSlide[] }) {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % reels.length);
    }, slideDuration);

    return () => window.clearInterval(timer);
  }, [reels.length]);

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
    <div className="transformation-reels-slider" aria-roledescription="carousel" aria-label={locale === "ar" ? "فيديوهات تحولات الابتسامة" : "Smile transformation reels"}>
      <div className="transformation-reels-stage">
        {reels.map((item, index) => (
          <article className={`transformation-reels-slide ${index === active ? "active" : ""}`} key={item.id} aria-hidden={index !== active}>
            <div className="transformation-reels-video-shell">
              <video
                ref={(node) => { videoRefs.current[index] = node; }}
                aria-label={item.alt[locale]}
                muted
                playsInline
                preload={index === active ? "metadata" : "none"}
                poster={item.poster}
                loop
              >
                <source src={item.src} type="video/mp4" />
              </video>
            </div>
            <div className="transformation-reels-copy-card">
              <span className="pill">{locale === "ar" ? "فيديو حالة" : "Case Reel"}</span>
              <h3>{item.title[locale]}</h3>
              <p>{item.caption[locale]}</p>
              <span className="transformation-reels-timing">{locale === "ar" ? "يتغير الفيديو كل ٨.٥ ثوانٍ" : "Slides every 8.5 seconds"}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="transformation-reels-dots" aria-label={locale === "ar" ? "اختيار فيديو" : "Choose reel"}>
        {reels.map((item, index) => (
          <button
            key={`${item.id}-dot`}
            className={index === active ? "active" : ""}
            type="button"
            aria-label={locale === "ar" ? `الفيديو ${index + 1}` : `Reel ${index + 1}`}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
}
