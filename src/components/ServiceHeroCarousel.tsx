"use client";

import { useEffect, useState } from "react";

type FadeCarouselImage = { src: string; label: string };

function ServiceFadeCarousel({ images, alt, className }: { images: FadeCarouselImage[]; alt: string; className: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className={className} aria-label={alt}>
      <div className={`${className}-track`}>
        {images.map((image, index) => (
          <figure className={`${className}-slide${active === index ? " active" : ""}`} key={image.src}>
            <img src={image.src} alt={`${alt} - ${image.label}`} />
            <figcaption>{image.label}</figcaption>
          </figure>
        ))}
      </div>
      <div className={`${className}-dots`} aria-hidden="true">
        {images.map((image, index) => <span className={active === index ? "active" : ""} key={image.src} />)}
      </div>
    </div>
  );
}

export function ServiceHeroCarousel({ images, alt }: { images: FadeCarouselImage[]; alt: string }) {
  return <ServiceFadeCarousel images={images} alt={alt} className="service-hero-carousel" />;
}

export function ServiceCaseCarousel({ images, alt }: { images: FadeCarouselImage[]; alt: string }) {
  return <ServiceFadeCarousel images={images} alt={alt} className="service-case-carousel" />;
}
