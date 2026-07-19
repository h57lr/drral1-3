import Link from "next/link";
import { LocaleClientEffects } from "@/components/LocaleClientEffects";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { ScrollTextReveal } from "@/components/ScrollTextReveal";
import { dictionary, services, site } from "@/lib/content";
import { getDirection, type Locale } from "@/lib/i18n";

export function Shell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const dict = dictionary[locale];
  const nav = dict.nav;

  return (
    <div className="site-shell" dir={getDirection(locale)}>
      <LocaleClientEffects locale={locale} />
      <ScrollTextReveal />
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href={`/${locale}`} aria-label={site.brand[locale]}>
            <img className="brand-logo" src="/media/brand/dr-ali-alheneiti-logo.webp" alt={site.brand[locale]} />
            <span>Cosmetic Dentistry</span>
          </Link>
          <nav className="nav" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
            <Link href={`/${locale}/services`}>{nav.services}</Link>
            <Link href={`/${locale}/transformations`}>{nav.transformations}</Link>
            <Link href={`/${locale}/testimonials`}>{nav.testimonials}</Link>
            <Link href={`/${locale}/blog`}>{nav.blog}</Link>
            <Link href={`/${locale}/about`}>{nav.about}</Link>
            <Link href={`/${locale}/contact`}>{nav.contact}</Link>
          </nav>
          <div className="header-actions">
            <LocaleSwitch locale={locale} />
            <a className="button" href={site.whatsapp} target="_blank" rel="noopener noreferrer">{dict.cta}</a>
            <details className="mobile-menu">
              <summary aria-label={locale === "ar" ? "فتح القائمة" : "Open menu"}>{locale === "ar" ? "القائمة" : "Menu"}</summary>
              <nav className="mobile-nav" aria-label={locale === "ar" ? "تنقل الهاتف" : "Mobile navigation"}>
                <Link href={`/${locale}/services`}>{nav.services}</Link>
                <Link href={`/${locale}/transformations`}>{nav.transformations}</Link>
                <Link href={`/${locale}/testimonials`}>{nav.testimonials}</Link>
                <Link href={`/${locale}/blog`}>{nav.blog}</Link>
                <Link href={`/${locale}/about`}>{nav.about}</Link>
                <Link href={`/${locale}/contact`}>{nav.contact}</Link>
              </nav>
            </details>
          </div>
        </div>
      </header>
      {children}
      <a className="button pistachio sticky-mobile-cta" href={site.whatsapp} target="_blank" rel="noopener noreferrer">{dict.cta}</a>
      <Footer locale={locale} />
    </div>
  );
}

function Footer({ locale }: { locale: Locale }) {
  const dict = dictionary[locale];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img className="footer-logo" src="/media/brand/dr-ali-alheneiti-logo.webp" alt={site.brand[locale]} />
            <p>{locale === "ar" ? "ابتسامات طبيعية مصممة بدقة وذوق جمالي راقٍ في عمان، الأردن." : "Natural smile transformations designed with precision and luxury aesthetics in Amman, Jordan."}</p>
          </div>
          <div>
            <h4>{dict.nav.services}</h4>
            {services.map((service) => (
              <Link key={service.slug} href={`/${locale}/services/${service.slug}`}>{service.navTitle[locale]}</Link>
            ))}
          </div>
          <div>
            <h4>{locale === "ar" ? "روابط" : "Explore"}</h4>
            <Link href={`/${locale}/transformations`}>{dict.nav.transformations}</Link>
            <Link href={`/${locale}/blog`}>{dict.nav.blog}</Link>
            <Link href={`/${locale}/contact`}>{dict.nav.contact}</Link>
          </div>
          <div>
            <h4>{locale === "ar" ? "تواصل" : "Contact"}</h4>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">{locale === "ar" ? "تواصل معنا عبر واتساب" : "WhatsApp Us"}</a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={site.googleReview} target="_blank" rel="noopener noreferrer">Google Reviews</a>
            <p>{site.address[locale]}</p>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} {site.brand[locale]}. {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}</div>
      </div>
    </footer>
  );
}
