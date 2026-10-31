import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaotic Solutions - Order from the chaos",
  description:
    "Practical technology solutions for individuals, entrepreneurs, and businesses. Website build, maintenance, security audits, and fix-it support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
