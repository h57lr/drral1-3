import Link from "next/link";
import { dictionary, services, site } from "@/lib/content";
import { getDirection, localeLabel, otherLocale, type Locale } from "@/lib/i18n";

export function Shell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const dict = dictionary[locale];
  const nav = dict.nav;

  return (
    <div className="site-shell" dir={getDirection(locale)}>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href={`/${locale}`} aria-label={site.brand[locale]}>
            <strong>{site.brand[locale]}</strong>
            <span>{site.specialty[locale]}</span>
          </Link>
          <nav className="nav" aria-label="Primary navigation">
            <Link href={`/${locale}/services`}>{nav.services}</Link>
            <Link href={`/${locale}/cases`}>{nav.cases}</Link>
            <Link href={`/${locale}/reels`}>{nav.reels}</Link>
            <Link href={`/${locale}/testimonials`}>{nav.testimonials}</Link>
            <Link href={`/${locale}/blog`}>{nav.blog}</Link>
            <Link href={`/${locale}/about`}>{nav.about}</Link>
          </nav>
          <div className="header-actions">
            <Link className="lang-switch" href={`/${otherLocale(locale)}`}>
              {localeLabel(locale)}
            </Link>
            <Link className="button" href={site.whatsapp}>{dict.cta}</Link>
          </div>
        </div>
      </header>
      {children}
      <Link className="button pistachio sticky-mobile-cta" href={site.whatsapp}>{dict.cta}</Link>
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
            <h3>{site.brand[locale]}</h3>
            <p>{locale === "ar" ? "ابتسامات طبيعية مصممة بدقة وذوق جمالي راقٍ في عمان، الأردن." : "Natural smile transformations designed with precision and luxury aesthetics in Amman, Jordan."}</p>
          </div>
          <div>
            <h4>{dict.nav.services}</h4>
            {services.slice(0, 4).map((service) => (
              <Link key={service.slug} href={`/${locale}/services/${service.slug}`}>{service.navTitle[locale]}</Link>
            ))}
          </div>
          <div>
            <h4>{locale === "ar" ? "روابط" : "Explore"}</h4>
            <Link href={`/${locale}/cases`}>{dict.nav.cases}</Link>
            <Link href={`/${locale}/reels`}>{dict.nav.reels}</Link>
            <Link href={`/${locale}/blog`}>{dict.nav.blog}</Link>
            <Link href={`/${locale}/contact`}>{dict.nav.contact}</Link>
          </div>
          <div>
            <h4>{locale === "ar" ? "تواصل" : "Contact"}</h4>
            <Link href={site.whatsapp}>WhatsApp</Link>
            <Link href={site.instagram}>Instagram</Link>
            <Link href={site.googleReview}>Google Reviews</Link>
            <p>{site.address[locale]}</p>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} {site.brand[locale]}. {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}</div>
      </div>
    </footer>
  );
}
