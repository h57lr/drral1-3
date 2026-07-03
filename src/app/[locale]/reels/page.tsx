import type { Metadata } from "next";
import { FinalCta, ReelsShowcase } from "@/components/Sections";
import { isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = { title: "Patient Testimonial Reels", description: "Premium patient experience and smile transformation reels from Dr. Ali's clinic." };

export default async function ReelsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  return (
    <main>
      <section className="page-hero"><div className="container"><p className="eyebrow">{locale === "ar" ? "ريلز" : "Reels"}</p><h1 className="display">{locale === "ar" ? "ابتسامة واثقة. ثقة عالية" : "Moments from the smile experience"}</h1><p className="lead">{locale === "ar" ? "لحظات تحوّل حقيقية. فيديوهات قصيرة توثق خطوات العلاج، حالات المرضى، وفرحتهم بالابتسامة التي منحتهم ثقة لا توصف" : "Short videos showing education, cases, and patient moments in an approachable way."}</p></div></section>
      <ReelsShowcase locale={locale} full />
      <FinalCta locale={locale} />
    </main>
  );
}
