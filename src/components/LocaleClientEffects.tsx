"use client";

import { useEffect } from "react";
import { getDirection, localeCookieMaxAge, localeCookieName, type Locale } from "@/lib/i18n";

export function LocaleClientEffects({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = getDirection(locale);
    document.cookie = `${localeCookieName}=${locale}; path=/; max-age=${localeCookieMaxAge}; samesite=lax`;
  }, [locale]);

  return null;
}
