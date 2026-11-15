import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getPreferredLocale, isLocale, localeCookieMaxAge, localeCookieName } from "@/lib/i18n";
import { resolveArabicRoute } from "@/lib/localized-routes";

function rememberLocale(request: NextRequest, response: NextResponse, locale: string) {
  if (request.cookies.get(localeCookieName)?.value !== locale) {
    response.cookies.set(localeCookieName, locale, {
      path: "/",
      maxAge: localeCookieMaxAge,
      sameSite: "lax"
    });
  }
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (!isLocale(firstSegment)) {
    const preferredLocale = getPreferredLocale(
      request.headers.get("accept-language"),
      request.cookies.get(localeCookieName)?.value
    );
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? `/${preferredLocale}` : `/${preferredLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  if (firstSegment === "ar") {
    const resolved = resolveArabicRoute(pathname);
    if (resolved) {
      const url = request.nextUrl.clone();
      url.pathname = resolved.path;
      if (resolved.type === "redirect") {
        return rememberLocale(request, NextResponse.redirect(url, 308), "ar");
      }
      return rememberLocale(request, NextResponse.rewrite(url), "ar");
    }
  }

  return rememberLocale(request, NextResponse.next(), firstSegment);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"]
};
