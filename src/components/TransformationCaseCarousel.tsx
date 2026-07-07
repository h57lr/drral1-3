"use client";

import { useRef, useState, type PointerEvent } from "react";
import type { Locale } from "@/lib/i18n";

type TransformationCaseCarouselProps = {
  images: string[];
  alt: string;
  locale: Locale;
};

export function TransformationCaseCarousel({ images, alt, locale }: TransformationCaseCarouselProps) {
  const [active, setActive] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const isRtl = locale === "ar";

  const showPrevious = () => setActive((current) => (current - 1 + images.length) % images.length);
  const showNext = () => setActive((current) => (current + 1) % images.length);

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    pointerStart.current = event.clientX;
    didSwipe.current = false;
  };

  const handlePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    if (pointerStart.current === null) return;

    const deltaX = event.clientX - pointerStart.current;
    pointerStart.current = null;

    if (Math.abs(deltaX) < 42) return;

    didSwipe.current = true;
    if (isRtl) {
      deltaX < 0 ? showPrevious() : showNext();
    } else {
      deltaX < 0 ? showNext() : showPrevious();
    }
  };

  const handleStageClick = () => {
    if (didSwipe.current) {
      didSwipe.current = false;
      return;
    }
    showNext();
  };

  return (
    <div className="transformation-case-carousel" dir="ltr">
      <button
        aria-label={locale === "ar" ? "عرض الصورة التالية للحالة" : "Show next case image"}
        className="transformation-case-stage"
        onClick={handleStageClick}
        onPointerCancel={() => { pointerStart.current = null; }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        type="button"
      >
        <span className="transformation-case-track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {images.map((src, index) => (
            <span className="transformation-case-slide" key={src}>
              <img
                src={src}
                alt={`${alt} ${index + 1}`}
                loading="lazy"
                decoding="async"
              />
            </span>
          ))}
        </span>
      </button>

      {images.length > 1 ? (
        <>
          <div className="transformation-case-arrows" aria-label={locale === "ar" ? "تنقل صور الحالة" : "Case image navigation"}>
            <button aria-label={locale === "ar" ? "الصورة السابقة" : "Show previous case image"} onClick={showPrevious} type="button">{isRtl ? "›" : "‹"}</button>
            <button aria-label={locale === "ar" ? "الصورة التالية" : "Show next case image"} onClick={showNext} type="button">{isRtl ? "‹" : "›"}</button>
          </div>
          <div className="transformation-case-dots" aria-label={locale === "ar" ? "اختيار صورة الحالة" : "Case image carousel controls"}>
            {images.map((src, index) => (
              <button
                aria-label={locale === "ar" ? `عرض الصورة ${index + 1}` : `Show image ${index + 1}`}
                aria-pressed={active === index}
                className={active === index ? "active" : ""}
                key={src}
                onClick={() => setActive(index)}
                type="button"
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
