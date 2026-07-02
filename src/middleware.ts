import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getPreferredLocale, isLocale, localeCookieMaxAge, localeCookieName } from "@/lib/i18n";

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

  const response = NextResponse.next();

  if (request.cookies.get(localeCookieName)?.value !== firstSegment) {
    response.cookies.set(localeCookieName, firstSegment, {
      path: "/",
      maxAge: localeCookieMaxAge,
      sameSite: "lax"
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"]
};
