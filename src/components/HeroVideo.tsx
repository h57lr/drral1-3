"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

const heroVideos = [
  {
    src: "/media/smile-transformation-videos/dr-ali-veneers-patient-result.mp4",
    poster: "/media/video-posters/dr-ali-veneers-patient-result-poster.jpg",
    label: { en: "Dr. Ali veneers patient smile result", ar: "نتيجة فينير لمريض مع الدكتور علي" },
    startAt: 0,
    duration: 4.8
  },
  {
    src: "/media/hero-videos/hollywood-smile-veneers-result-jordan.mp4",
    poster: "/media/video-posters/natural-dental-veneers-before-after-poster.jpg",
    label: { en: "Hollywood smile veneers result in Jordan", ar: "نتيجة هوليوود سمايل وفينير في الأردن" },
    startAt: 7,
    duration: 2.5
  },
  {
    src: "/media/hero-videos/dental-veneers-before-after-preview-jordan.mp4",
    poster: "/media/video-posters/dental-veneers-before-after-preview-poster.jpg",
    label: { en: "Dental veneers before and after preview", ar: "معاينة قبل وبعد لفينير الأسنان" },
    startAt: 7.5,
    duration: 4
  },
  {
    src: "/media/hero-videos/smile-design-veneers-treatment-preview.mp4",
    poster: "/media/video-posters/smile-design-veneers-jordan-poster.jpg",
    label: { en: "Smile design veneers treatment preview", ar: "معاينة تصميم ابتسامة وفينير" },
    startAt: 7,
    duration: 2.5
  },
  {
    src: "/media/hero-videos/natural-veneers-smile-reveal-jordan.mp4",
    poster: "/media/video-posters/veneers-smile-reveal-patient-moment-poster.jpg",
    label: { en: "Natural veneers smile reveal in Jordan", ar: "كشف ابتسامة فينير طبيعية في الأردن" },
    startAt: 5,
    duration: 4
  }
];

export function HeroVideo({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const [readyIndexes, setReadyIndexes] = useState<Set<number>>(() => new Set());
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    setReadyIndexes((current) => {
      if (!current.has(active)) return current;
      const next = new Set(current);
      next.delete(active);
      return next;
    });

    const currentVideo = heroVideos[active];
    const video = videoRefs.current[active];
    const nextVideo = videoRefs.current[(active + 1) % heroVideos.length];
    let metadataHandler: (() => void) | null = null;

    videoRefs.current.forEach((item, index) => {
      if (!item) return;
      if (index !== active) {
        item.pause();
      }
    });

    const playActiveVideo = () => {
      if (!video) return;
      video.muted = true;
      video.currentTime = currentVideo.startAt;
      void video.play().catch(() => undefined);
    };

    if (video) {
      if (video.readyState >= 1) {
        playActiveVideo();
      } else {
        metadataHandler = playActiveVideo;
        video.addEventListener("loadedmetadata", metadataHandler, { once: true });
        video.load();
      }
    }

    if (nextVideo && nextVideo.readyState < 1) {
      nextVideo.load();
    }

    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % heroVideos.length);
    }, currentVideo.duration * 1000);

    return () => {
      window.clearTimeout(timer);
      if (video && metadataHandler) {
        video.removeEventListener("loadedmetadata", metadataHandler);
      }
    };
  }, [active]);

  return (
    <div className="hero-video-slider" role="group" aria-label={locale === "ar" ? "فيديوهات تحولات ابتسامة تجميلية مع الدكتور علي" : "Cosmetic smile transformation videos by Dr. Ali"}>
      {heroVideos.map((item, index) => {
        const shouldPrepare = index === active || index === (active + 1) % heroVideos.length;

        return (
          <video
            className={`hero-video-slide${index === active ? " active" : ""}${readyIndexes.has(index) ? " is-ready" : ""}`}
            key={item.src}
            ref={(node) => { videoRefs.current[index] = node; }}
            aria-label={item.label[locale]}
            autoPlay={index === active}
            controls={false}
            controlsList="nodownload noplaybackrate noremoteplayback"
            disablePictureInPicture
            muted
            playsInline
            preload={shouldPrepare ? "auto" : "metadata"}
            onEnded={() => setActive((current) => (current + 1) % heroVideos.length)}
            onPlaying={() => setReadyIndexes((current) => current.has(index) ? current : new Set(current).add(index))}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        );
      })}
    </div>
  );
}
