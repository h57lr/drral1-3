import type { Metadata } from "next";
import { Inter, Italianno, Manrope, Noto_Kufi_Arabic } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { gtmContainerId } from "@/lib/analytics";
import "./globals.css";

const siteUrl = "https://www.dralialheneiti.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr. Ali Alheneiti",
  url: siteUrl,
  logo: `${siteUrl}/icon-512.png`,
  image: `${siteUrl}/media/brand/dr-ali-alheneiti-logo.webp`,
  sameAs: ["https://www.instagram.com/ali_alheneiti/"]
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });
const italianno = Italianno({ subsets: ["latin"], weight: "400", variable: "--font-script" });
const arabic = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-arabic" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dr. Ali Alheneiti | Cosmetic Dentistry in Jordan",
  description: "Premium cosmetic dentistry, Hollywood smile, veneers, zircon, and dental implants by Dr. Ali Alheneiti in Jordan.",
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
    locale: "en_US"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${italianno.variable} ${arabic.variable}`}>
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
        {children}
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
