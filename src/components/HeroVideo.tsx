"use client";

import { useEffect, useRef, useState } from "react";

const heroVideos = [
  {
    src: "/media/reels/reel-01.mp4",
    poster: "/media/posters/reel-01.jpg",
    startAt: 0,
    duration: 4.8
  },
  {
    src: "/media/reel-02.mp4",
    poster: "/media/posters/reel-02.jpg",
    startAt: 7,
    duration: 2.5
  },
  {
    src: "/media/reel-06.mp4",
    poster: "/media/posters/reel-06.jpg",
    startAt: 7.5,
    duration: 4
  },
  {
    src: "/media/reel-04.mp4",
    poster: "/media/posters/reel-04.jpg",
    startAt: 7,
    duration: 2.5
  },
  {
    src: "/media/reel-05.mp4",
    poster: "/media/posters/reel-05.jpg",
    startAt: 3.5,
    duration: 4
  }
];

export function HeroVideo() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const currentVideo = heroVideos[active];
    const video = videoRefs.current[active];
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
      }
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
    <div className="hero-video-slider" aria-hidden="true">
      {heroVideos.map((item, index) => (
        <video
          className={`hero-video-slide${index === active ? " active" : ""}`}
          key={item.src}
          ref={(node) => { videoRefs.current[index] = node; }}
          poster={item.poster}
          muted
          playsInline
          preload="metadata"
          onEnded={() => setActive((current) => (current + 1) % heroVideos.length)}
        >
          <source src={item.src} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}
