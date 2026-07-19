"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { captureAttribution, pushDataLayerEvent } from "@/lib/analytics";

function getElementText(element: Element) {
  return (element.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 120);
}

function inferClickLocation(element: Element) {
  if (element.closest("header")) return "header";
  if (element.closest("footer")) return "footer";
  if (element.closest(".sticky-mobile-cta")) return "sticky_mobile_cta";
  if (element.closest(".hero")) return "hero";
  if (element.closest(".service-hero")) return "service_hero";
  if (element.closest(".contact-lead-section")) return "contact_form_section";
  if (element.closest(".service-final-cta")) return "service_final_cta";
  if (element.closest(".cta-panel")) return "final_cta";
  if (element.closest(".section")) return "page_section";

  return "unknown";
}

function isExternalUrl(url: URL) {
  return url.origin !== window.location.origin;
}

function isWhatsappUrl(url: URL) {
  return /(^|\.)wa\.me$/i.test(url.hostname) || url.hostname.toLowerCase().includes("whatsapp");
}

export function AnalyticsEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = useMemo(() => searchParams.toString(), [searchParams]);

  useEffect(() => {
    captureAttribution();

    pushDataLayerEvent("virtual_page_view", {
      page_referrer: document.referrer || undefined
    });
  }, [pathname, search]);

  useEffect(() => {
    const trackedVideos = new WeakSet<HTMLVideoElement>();

    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest("a, button") : null;
      if (!target) return;

      const anchor = target instanceof HTMLAnchorElement ? target : target.closest("a");
      const href = anchor?.href;
      const ctaText = getElementText(target);
      const ctaLocation = inferClickLocation(target);

      if (target.classList.contains("lang-switch") || anchor?.getAttribute("hrefLang")) {
        pushDataLayerEvent("language_switch", {
          cta_location: ctaLocation,
          cta_text: ctaText,
          destination_url: href,
          to_language: anchor?.getAttribute("hrefLang") ?? undefined
        });
      }

      if (target.classList.contains("button") || target.classList.contains("text-link") || target.classList.contains("read-more")) {
        pushDataLayerEvent("cta_click", {
          cta_location: ctaLocation,
          cta_text: ctaText,
          destination_url: href
        });
      }

      if (!href) return;

      const url = new URL(href);
      const isExternal = isExternalUrl(url);

      if (!isExternal) {
        const eventName = target.closest("nav, footer, header") ? "navigation_click" : "internal_link_click";

        pushDataLayerEvent(eventName, {
          cta_location: ctaLocation,
          cta_text: ctaText,
          destination_url: href,
          destination_path: url.pathname
        });
      }

      if (isWhatsappUrl(url)) {
        const payload = {
          cta_location: ctaLocation,
          cta_text: ctaText,
          destination_url: href,
          lead_type: "whatsapp_click",
          lead_source: "whatsapp"
        };

        pushDataLayerEvent("whatsapp_click", payload);
        pushDataLayerEvent("generate_lead", payload);
        return;
      }

      if (isExternal) {
        pushDataLayerEvent("external_link_click", {
          cta_location: ctaLocation,
          cta_text: ctaText,
          destination_url: href,
          outbound_domain: url.hostname
        });
      }
    }

    function handleVideoPlay(event: Event) {
      const video = event.target instanceof HTMLVideoElement ? event.target : null;
      if (!video || trackedVideos.has(video)) return;

      trackedVideos.add(video);

      pushDataLayerEvent("video_play", {
        video_title: video.getAttribute("aria-label") ?? undefined,
        video_url: video.currentSrc || video.querySelector("source")?.src || undefined,
        video_location: inferClickLocation(video),
        video_autoplay: video.autoplay
      });
    }

    document.addEventListener("click", handleClick, true);
    document.addEventListener("play", handleVideoPlay, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("play", handleVideoPlay, true);
    };
  }, []);

  return null;
}
