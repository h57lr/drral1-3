"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

export type TransformationReelSlide = {
  id: string;
  badge: Record<Locale, string>;
  title: Record<Locale, string>;
  caption: Record<Locale, string>;
  src: string;
  poster: string;
  alt: Record<Locale, string>;
  startAtSeconds?: number;
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
        const startAt = reels[index]?.startAtSeconds ?? 0;
        const playFromStartPoint = () => {
          if (Math.abs(video.currentTime - startAt) > 0.25) {
            video.currentTime = startAt;
          }
          void video.play().catch(() => undefined);
        };

        if (video.readyState >= 1) {
          playFromStartPoint();
        } else {
          video.addEventListener("loadedmetadata", playFromStartPoint, { once: true });
          video.load();
        }
      } else {
        video.pause();
      }
    });
  }, [active, reels]);

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
              <span className="pill">{item.badge[locale]}</span>
              <h3>{item.title[locale]}</h3>
              <p>{item.caption[locale]}</p>
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
