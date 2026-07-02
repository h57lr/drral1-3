"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeCookieMaxAge, localeCookieName, localeLabel, locales, otherLocale, type Locale } from "@/lib/i18n";

export function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const targetLocale = otherLocale(locale);
  const currentPathname = pathname ?? `/${locale}`;
  const segments = currentPathname.split("/").filter(Boolean);
  const pathSegments = locales.includes(segments[0] as Locale) ? segments.slice(1) : segments;
  const href = `/${[targetLocale, ...pathSegments].join("/")}`;

  function rememberLocale() {
    document.cookie = `${localeCookieName}=${targetLocale}; path=/; max-age=${localeCookieMaxAge}; samesite=lax`;
  }

  return (
    <Link
      className="lang-switch"
      href={href}
      hrefLang={targetLocale}
      aria-label={targetLocale === "ar" ? "Switch language to Arabic" : "Switch language to English"}
      onClick={rememberLocale}
    >
      {localeLabel(locale)}
    </Link>
  );
}
