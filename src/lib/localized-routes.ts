import type { Locale } from "./i18n";

export const sectionSegments = {
  services: { en: "services", ar: "الخدمات" },
  about: { en: "about", ar: "عن-الدكتور" },
  contact: { en: "contact", ar: "تواصل-معنا" },
  blog: { en: "blog", ar: "المدونة" },
  transformations: { en: "transformations", ar: "تحولات-الابتسامة" },
  testimonials: { en: "testimonials", ar: "تقييمات-المرضى" },
  faq: { en: "faq", ar: "الأسئلة-الشائعة" }
} as const;

export type SectionKey = keyof typeof sectionSegments;

export function sectionSegment(key: SectionKey, locale: Locale): string {
  return sectionSegments[key][locale];
}

export function sectionPath(key: SectionKey, locale: Locale): string {
  return `/${locale}/${sectionSegment(key, locale)}`;
}

export const serviceSlugs: Record<string, Record<Locale, string>> = {
  "dental-veneers-jordan": { en: "dental-veneers-jordan", ar: "فينير-الأسنان-في-الأردن" },
  "dental-veneer-jordan": { en: "dental-veneer-jordan", ar: "فينيرز-الأسنان-في-الأردن" },
  "teeth-whitening-amman": { en: "teeth-whitening-amman", ar: "تبييض-الأسنان-في-عمان" },
  "dental-implants-amman": { en: "dental-implants-amman", ar: "زراعة-الأسنان-في-عمان" },
  "orthodontics-amman": { en: "orthodontics-amman", ar: "تقويم-الأسنان-في-عمان" },
  "gummy-smile-treatment-jordan": { en: "gummy-smile-treatment-jordan", ar: "علاج-الابتسامة-اللثوية" }
};

export const postSlugs: Record<string, Record<Locale, string>> = {
  "hollywood-smile-in-jordan-cost-process-natural-results": { en: "hollywood-smile-in-jordan-cost-process-natural-results", ar: "ابتسامة-هوليود-في-الأردن" },
  "veneers-in-jordan-cost-natural-results": { en: "veneers-in-jordan-cost-natural-results", ar: "فينير-الأسنان-السعر-والمخاطر" },
  "veneers-vs-hollywood-smile": { en: "veneers-vs-hollywood-smile", ar: "الفينير-مقابل-ابتسامة-هوليود" },
  "dental-implants-amman-cost-pain-recovery": { en: "dental-implants-amman-cost-pain-recovery", ar: "زراعة-الأسنان-التكلفة-والألم-والشفاء" },
  "veneers-vs-dental-implants": { en: "veneers-vs-dental-implants", ar: "الفينير-مقابل-زراعة-الأسنان" },
  "hollywood-smile-guide": { en: "hollywood-smile-guide", ar: "دليل-ابتسامة-هوليود" },
  "why-veneers": { en: "why-veneers", ar: "لماذا-الفينير" },
  "veneers-dr-ali-jordan": { en: "best-veneers-doctor-amman-dr-ali-alheneiti", ar: "افضل-دكتور-فينير-عمان-علي-الحنيطي" },
  "dental-tourism-jordan": { en: "dental-tourism-jordan", ar: "السياحة-العلاجية-للأسنان-في-الأردن" }
};

export function getServiceSlug(legacy: string, locale: Locale): string {
  return serviceSlugs[legacy]?.[locale] ?? legacy;
}

export function getPostSlug(legacy: string, locale: Locale): string {
  return postSlugs[legacy]?.[locale] ?? legacy;
}

export function servicePath(legacy: string, locale: Locale): string {
  return `/${locale}/${sectionSegment("services", locale)}/${getServiceSlug(legacy, locale)}`;
}

export function postPath(legacy: string, locale: Locale): string {
  return `/${locale}/${getPostSlug(legacy, locale)}`;
}

function decodePath(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

const sectionKeys = Object.keys(sectionSegments) as SectionKey[];
function enSectionKey(seg: string): SectionKey | undefined {
  return sectionKeys.find((key) => sectionSegments[key].en === seg);
}
function arSectionKey(seg: string): SectionKey | undefined {
  return sectionKeys.find((key) => sectionSegments[key].ar === seg);
}

export type ArabicResolution = { type: "redirect" | "rewrite"; path: string } | null;

export function resolveArabicRoute(rawPathname: string): ArabicResolution {
  const pathname = decodePath(rawPathname);
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] !== "ar") return null;
  const rest = parts.slice(1);
  if (rest.length === 0) return null;
  const a = rest[0];
  const b = rest[1];

  if (a === "ksa") return null;

  const arKey = arSectionKey(a);
  if (arKey) {
    if (arKey === "services") {
      if (rest.length === 1) return { type: "rewrite", path: "/ar/services" };
      if (rest.length === 2) return { type: "rewrite", path: `/ar/services/${b}` };
      return null;
    }
    if (rest.length === 1) return { type: "rewrite", path: `/ar/${sectionSegments[arKey].en}` };
    return null;
  }

  const enKey = enSectionKey(a);
  if (enKey) {
    if (enKey === "services") {
      if (rest.length === 1) return { type: "redirect", path: `/ar/${sectionSegments.services.ar}` };
      if (rest.length === 2) {
        const ar = serviceSlugs[b]?.ar;
        if (ar) return { type: "redirect", path: `/ar/${sectionSegments.services.ar}/${ar}` };
      }
      return null;
    }
    if (enKey === "blog") {
      if (rest.length === 1) return { type: "redirect", path: `/ar/${sectionSegments.blog.ar}` };
      if (rest.length === 2) {
        const arFromLegacy = postSlugs[b]?.ar;
        if (arFromLegacy) return { type: "redirect", path: `/ar/${arFromLegacy}` };
        const isLocalized = Object.values(postSlugs).some((pair) => pair.ar === b);
        if (isLocalized) return { type: "redirect", path: `/ar/${b}` };
      }
      return null;
    }
    if (rest.length === 1) return { type: "redirect", path: `/ar/${sectionSegments[enKey].ar}` };
    return null;
  }

  if (rest.length === 1) {
    const ar = postSlugs[a]?.ar;
    if (ar && ar !== a) return { type: "redirect", path: `/ar/${ar}` };
  }
  return null;
}

export function translatePathSegments(segments: string[], fromLocale: Locale, toLocale: Locale): string[] {
  const decoded = segments.map((seg) => decodePath(seg));
  if (decoded.length === 0) return [];
  const first = decoded[0];
  if (first === "ksa") return decoded;
  const key = enSectionKey(first) ?? arSectionKey(first);
  if (key) {
    if (key === "services" && decoded.length === 2) {
      const legacy = Object.keys(serviceSlugs).find((k) => serviceSlugs[k][fromLocale] === decoded[1]) ?? decoded[1];
      return [sectionSegments.services[toLocale], serviceSlugs[legacy]?.[toLocale] ?? decoded[1]];
    }
    return [sectionSegments[key][toLocale], ...decoded.slice(1)];
  }
  if (decoded.length === 1) {
    const legacy = Object.keys(postSlugs).find((k) => postSlugs[k][fromLocale] === decoded[0]) ?? decoded[0];
    return [postSlugs[legacy]?.[toLocale] ?? decoded[0]];
  }
  return decoded;
}
