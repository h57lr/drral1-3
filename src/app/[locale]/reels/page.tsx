import type { Metadata } from "next";
import { FinalCta, ReelsShowcase } from "@/components/Sections";
import { isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = { title: "Instagram Reels Gallery", description: "Vertical Instagram-style cosmetic dentistry reel gallery." };

export default async function ReelsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  return (
    <main>
      <section className="page-hero"><div className="container"><p className="eyebrow">{locale === "ar" ? "ريلز" : "Reels"}</p><h1 className="display">{locale === "ar" ? "معرض إنستغرام" : "Instagram-style gallery"}</h1><p className="lead">{locale === "ar" ? "جاهز لآخر 30 ريل بعد تصديرها وإضافتها كملفات MP4 محلية." : "Ready for the latest 30 reels after exporting them and adding local MP4 files."}</p></div></section>
      <ReelsShowcase locale={locale} full />
      <FinalCta locale={locale} />
    </main>
  );
}
