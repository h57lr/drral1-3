import type { Metadata } from "next";
import { Inter, Italianno, Manrope, Noto_Kufi_Arabic } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { gtmContainerId } from "@/lib/analytics";
import { getDirection, isLocale, type Locale } from "@/lib/i18n";
import "../globals.css";

export const viewport = { width: "device-width", initialScale: 1 };

const siteUrl = "https://www.dralialheneiti.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": `${siteUrl}/#dentist`,
      name: "Dr. Ali Alheneiti",
      url: siteUrl,
      logo: `${siteUrl}/icon-512.png`,
      image: `${siteUrl}/media/brand/dr-ali-alheneiti-logo.webp`,
      medicalSpecialty: "Cosmetic Dentistry",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4th Circle, next to the French Embassy",
        addressLocality: "Amman",
        addressCountry: "JO"
      },
      sameAs: [
        "https://www.instagram.com/ali_alheneiti/",
        "https://g.page/r/CQplNDBUe0xKEAE/review"
      ]
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#dr-ali-alheneiti`,
      name: "Dr. Ali Alheneiti",
      jobTitle: "Cosmetic Dentist",
      worksFor: { "@type": "Dentist", name: "Dr. Ali Alheneiti", url: siteUrl },
      sameAs: ["https://www.instagram.com/ali_alheneiti/"]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Dr. Ali Alheneiti",
      inLanguage: ["en", "ar"]
    }
  ]
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });
const italianno = Italianno({ subsets: ["latin"], weight: "400", variable: "--font-script" });
const arabic = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-arabic" });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: locale === "ar" ? "د. علي الحنيطي" : "Dr. Ali Alheneiti",
      template: locale === "ar" ? "%s - د. علي الحنيطي" : "%s | Dr. Ali Alheneiti"
    },
    description:
      "Premium cosmetic dentistry, Hollywood smile, veneers, zircon, and dental implants by Dr. Ali Alheneiti in Jordan.",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
        { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" }
      ],
      shortcut: ["/favicon.ico"],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
    },
    openGraph: {
      title: "Dr. Ali Alheneiti | Cosmetic Dentistry in Jordan",
      description: "Luxury smile transformations with natural results, precision, and trust.",
      type: "website",
      locale: locale === "ar" ? "ar_JO" : "en_US",
      images: [{ url: "/media/brand/dr-ali-alheneiti-logo.webp", alt: "Dr. Ali Alheneiti" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Dr. Ali Alheneiti | Cosmetic Dentistry in Jordan",
      description: "Luxury smile transformations with natural results, precision, and trust.",
      images: ["/media/brand/dr-ali-alheneiti-logo.webp"]
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

  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${manrope.variable} ${italianno.variable} ${arabic.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmContainerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Shell locale={locale as Locale}>{children}</Shell>
        <Suspense fallback={null}>
          <AnalyticsEvents />
        </Suspense>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmContainerId}');`}
        </Script>
      </body>
    </html>
  );
}
