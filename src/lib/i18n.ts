export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "NEXT_LOCALE";
export const localeCookieMaxAge = 60 * 60 * 24 * 365;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

export function localeLabel(locale: Locale) {
  return locale === "ar" ? "EN" : "AR";
}

export function getPreferredLocale(acceptLanguage?: string | null, cookieLocale?: string | null): Locale {
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  if (acceptLanguage) {
    for (const languagePreference of acceptLanguage.split(",")) {
      const language = languagePreference.trim().split(";")[0]?.toLowerCase();
      const baseLanguage = language?.split("-")[0];

      if (baseLanguage && isLocale(baseLanguage)) {
        return baseLanguage;
      }
    }
  }

  return defaultLocale;
}
