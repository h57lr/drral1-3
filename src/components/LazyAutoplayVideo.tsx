"use client";

import { useEffect, useRef, useState } from "react";

type LazyAutoplayVideoProps = {
  src: string;
  poster: string;
  ariaLabel: string;
  className?: string;
};

export function LazyAutoplayVideo({ src, poster, ariaLabel, className }: LazyAutoplayVideoProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          setShouldLoad(true);
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        rootMargin: "360px 0px",
        threshold: 0.01
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || !isVisible) {
      video?.pause();
      setHasStarted(false);
      return;
    }

    const playVideo = () => {
      void video.play().catch(() => undefined);
    };

    if (video.readyState >= 1) {
      playVideo();
    } else {
      video.addEventListener("loadedmetadata", playVideo, { once: true });
      video.load();
    }

    return () => {
      video.removeEventListener("loadedmetadata", playVideo);
    };
  }, [isVisible, shouldLoad]);

  return (
    <span ref={containerRef} className="lazy-autoplay-video">
      <img src={poster} alt="" aria-hidden="true" decoding="async" loading="lazy" />
      {shouldLoad ? (
        <video
          ref={videoRef}
          className={`${className ?? ""}${hasStarted ? " is-ready" : ""}`.trim()}
          aria-label={ariaLabel}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onPlaying={() => setHasStarted(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </span>
  );
}
