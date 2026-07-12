"use client";

import { useEffect, useRef, useState } from "react";

type LazyAutoplayVideoProps = {
  src: string;
  poster: string;
  ariaLabel: string;
  className?: string;
};

export function LazyAutoplayVideo({ src, poster, ariaLabel, className }: LazyAutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || !isVisible) {
      video?.pause();
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
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      aria-label={ariaLabel}
      loop
      muted
      playsInline
      preload={shouldLoad ? "metadata" : "none"}
    >
      {shouldLoad ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
