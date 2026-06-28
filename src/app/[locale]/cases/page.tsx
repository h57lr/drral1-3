import type { Metadata } from "next";
import { CaseShowcase, FinalCta } from "@/components/Sections";
import { isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = { title: "Before and After Cases", description: "Before and after cosmetic dentistry cases for Dr. Ali Alheneiti." };

export default async function CasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  return (
    <main>
      <section className="page-hero"><div className="container"><p className="eyebrow">{locale === "ar" ? "الحالات" : "Cases"}</p><h1 className="display">{locale === "ar" ? "قبل وبعد" : "Before and after"}</h1><p className="lead">{locale === "ar" ? "صفحة مخصصة للنتائج المرئية والحالات الحقيقية عند إضافة الأصول." : "A dedicated page for visual proof and real transformations once assets are added."}</p></div></section>
      <CaseShowcase locale={locale} full />
      <FinalCta locale={locale} />
    </main>
  );
}
