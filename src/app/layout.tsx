import type { Metadata } from "next";
import { Inter, Italianno, Manrope, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });
const italianno = Italianno({ subsets: ["latin"], weight: "400", variable: "--font-script" });
const arabic = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-arabic" });

export const metadata: Metadata = {
  metadataBase: new URL("https://alialheneiti.com"),
  title: {
    default: "Dr. Ali Alheneiti | Cosmetic Dentistry in Jordan",
    template: "%s | Dr. Ali Alheneiti"
  },
  description: "Premium cosmetic dentistry, Hollywood smile, veneers, zircon, and dental implants by Dr. Ali Alheneiti in Jordan.",
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
      <body>{children}</body>
    </html>
  );
}
