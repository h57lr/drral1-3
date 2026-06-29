"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    void video.play().catch(() => undefined);
  }, []);

  return (
    <video
      ref={videoRef}
      poster="/media/posters/reel-01.jpg"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      onCanPlay={() => void videoRef.current?.play().catch(() => undefined)}
    >
      <source src="/media/reels/reel-01.mp4" type="video/mp4" />
    </video>
  );
}
