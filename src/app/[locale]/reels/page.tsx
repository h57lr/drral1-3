import type { Metadata } from "next";
import { FinalCta, ReelsShowcase } from "@/components/Sections";
import { isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = { title: "Instagram Reels Gallery", description: "Vertical Instagram-style cosmetic dentistry reel gallery." };

export default async function ReelsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  return (
    <main>
      <section className="page-hero"><div className="container"><p className="eyebrow">{locale === "ar" ? "ريلز" : "Reels"}</p><h1 className="display">{locale === "ar" ? "لقطات من تجربة الابتسامة" : "Moments from the smile experience"}</h1><p className="lead">{locale === "ar" ? "فيديوهات قصيرة تعرض التعليم، الحالات، ولحظات المرضى بطريقة قريبة وسهلة." : "Short videos showing education, cases, and patient moments in an approachable way."}</p></div></section>
      <ReelsShowcase locale={locale} full />
      <FinalCta locale={locale} />
    </main>
  );
}
