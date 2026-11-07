"use client";

import { useRef, useState } from "react";

type KsaStoryVideoProps = {
  src: string;
  poster: string;
  caption: string;
  ariaLabel: string;
};

export function KsaStoryVideo({ src, poster, caption, ariaLabel }: KsaStoryVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    void video.play().catch(() => undefined);
  }

  return (
    <figure className="ksa-story-video">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={started}
        playsInline
        preload="metadata"
        aria-label={ariaLabel}
      />
      {!started ? (
        <button type="button" className="ksa-video-play" onClick={handlePlay} aria-label={ariaLabel}>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5.14v13.72c0 .78.85 1.26 1.52.85l10.66-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
          </svg>
        </button>
      ) : null}
      <figcaption><span aria-hidden="true">▶</span>{caption}</figcaption>
    </figure>
  );
}
