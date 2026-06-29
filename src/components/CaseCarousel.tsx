"use client";

import { useEffect, useState } from "react";

export function CaseCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className="case-carousel">
      <div className="case-carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {images.map((src) => (
          <div className="case-carousel-slide" key={src}>
            <img src={src} alt={alt} />
          </div>
        ))}
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
