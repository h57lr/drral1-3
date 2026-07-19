export const gtmContainerId = "GTM-WB2V7JJR";

type DataLayerValue = string | number | boolean | null | undefined;
export type DataLayerPayload = Record<string, DataLayerValue>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const attributionKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "ttclid"
] as const;

const attributionStorageKey = "dr_ali_attribution";

function cleanPayload(payload: DataLayerPayload) {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );
}

function readStoredAttribution(): DataLayerPayload {
  if (typeof window === "undefined") return {};

  try {
    const stored = window.sessionStorage.getItem(attributionStorageKey);
    return stored ? JSON.parse(stored) as DataLayerPayload : {};
  } catch {
    return {};
  }
}

export function captureAttribution() {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const current: DataLayerPayload = {};

  attributionKeys.forEach((key) => {
    const value = params.get(key);
    if (value) current[key] = value;
  });

  if (Object.keys(current).length === 0) {
    return readStoredAttribution();
  }

  const merged = { ...readStoredAttribution(), ...current };

  try {
    window.sessionStorage.setItem(attributionStorageKey, JSON.stringify(merged));
  } catch {
    // Ignore storage failures so analytics never affects UX.
  }

  return merged;
}

export function getPageContext(): DataLayerPayload {
  if (typeof window === "undefined") return {};

  const { pathname, href } = window.location;
  const [, language = ""] = pathname.split("/");
  const pathAfterLocale = pathname.split("/").slice(2);
  const topLevelPath = pathAfterLocale[0] || "home";

  return {
    page_location: href,
    page_path: pathname,
    page_title: document.title,
    language,
    page_type: topLevelPath,
    service_slug: topLevelPath === "services" ? pathAfterLocale[1] : undefined,
    article_slug: ["blog"].includes(topLevelPath) ? pathAfterLocale[1] : undefined
  };
}

export function pushDataLayerEvent(event: string, payload: DataLayerPayload = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(cleanPayload({
    event,
    ...getPageContext(),
    ...captureAttribution(),
    ...payload
  }));
}
