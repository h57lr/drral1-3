import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";

  return {
    title: {
      default: locale === "ar" ? "د. علي الحنيطي" : "Dr. Ali Alheneiti",
      template: locale === "ar" ? "%s - د. علي الحنيطي" : "%s | Dr. Ali Alheneiti"
    },
    openGraph: {
      locale: locale === "ar" ? "ar_JO" : "en_US"
    }
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <Shell locale={locale as Locale}>{children}</Shell>;
}
