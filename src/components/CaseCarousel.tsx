"use client";

import { useState } from "react";

export function CaseCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const showPrevious = () => setActive((current) => (current - 1 + images.length) % images.length);
  const showNext = () => setActive((current) => (current + 1) % images.length);

  return (
    <div className="case-carousel">
      <button aria-label="Show next case image" className="case-carousel-stage" onClick={showNext} type="button">
        <span className="case-carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {images.map((src) => (
            <span className="case-carousel-slide" key={src}>
              <img src={src} alt={alt} />
            </span>
          ))}
        </span>
      </button>
      <div className="case-carousel-arrows" aria-label="Case image navigation">
        <button aria-label="Show previous case image" onClick={showPrevious} type="button">‹</button>
        <button aria-label="Show next case image" onClick={showNext} type="button">›</button>
      </div>
      <div className="case-carousel-dots" aria-label="Case image carousel controls">
        {images.map((src, index) => (
          <button
            aria-label={`Show image ${index + 1}`}
            aria-pressed={active === index}
            className={active === index ? "active" : ""}
            key={src}
            onClick={() => setActive(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
