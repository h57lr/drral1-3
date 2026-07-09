"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  "main h1",
  "main h2",
  "main h3",
  "main .eyebrow",
  "main .display",
  "main .section-title",
  "main .lead",
  "main .button-row",
  "main .cta-note",
  "main .journal-cta",
  "main .contact-lead-helper",
  ".site-footer .footer-grid > div:first-child p",
  ".site-footer h4"
].join(", ");

const ignoredSelector = [
  "header",
  "nav",
  "form",
  "[aria-hidden='true']",
  "[data-text-reveal-ignore]"
].join(", ");

function getRevealElements() {
  return Array.from(document.querySelectorAll<HTMLElement>(revealSelector)).filter((element) => {
    if (element.closest(ignoredSelector)) {
      return false;
    }

    return Boolean(element.textContent?.trim());
  });
}

export function ScrollTextReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      document.documentElement.classList.remove("text-reveal-ready");
      document.querySelectorAll<HTMLElement>("[data-text-reveal]").forEach((element) => {
        element.removeAttribute("data-text-reveal");
        element.classList.remove("is-text-revealed");
      });
      return;
    }

    const elements = getRevealElements();

    elements.forEach((element, index) => {
      element.dataset.textReveal = "";
      element.style.setProperty("--text-reveal-delay", `${Math.min(index % 4, 3) * 60}ms`);
    });

    document.documentElement.classList.add("text-reveal-ready");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-text-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          element.classList.add("is-text-revealed");
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12
      }
    );

    elements.forEach((element) => {
      if (element.classList.contains("is-text-revealed")) {
        return;
      }

      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
