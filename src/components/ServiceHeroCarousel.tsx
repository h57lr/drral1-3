"use client";

import { useEffect, useState } from "react";

export function ServiceHeroCarousel({ images, alt }: { images: { src: string; label: string }[]; alt: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className="service-hero-carousel" aria-label={alt}>
      <div className="service-hero-carousel-track">
        {images.map((image, index) => (
          <figure className={`service-hero-carousel-slide${active === index ? " active" : ""}`} key={image.src}>
            <img src={image.src} alt={`${alt} - ${image.label}`} />
            <figcaption>{image.label}</figcaption>
          </figure>
        ))}
      </div>
      <div className="service-hero-carousel-dots" aria-hidden="true">
        {images.map((image, index) => <span className={active === index ? "active" : ""} key={image.src} />)}
      </div>
    </div>
  );
}
