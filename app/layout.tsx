import type { Metadata } from "next";
import { Inter, Pirata_One } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const gothic = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pirata",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://solutions.chaoticmindscollective.com";
const SITE_TITLE = "Chaotic Minds Solutions - Order from the chaos";
const SITE_DESCRIPTION =
  "Practical technology solutions for individuals, entrepreneurs, and businesses. Website build, maintenance, security audits, and fix-it support.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: "/brand/favicon.ico" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Chaotic Minds Solutions",
    type: "website",
    images: [
      {
        url: "/brand/og-image-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Chaotic Minds Solutions - Order from the chaos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/brand/og-image-1200x630.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gothic.variable} ${sans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
