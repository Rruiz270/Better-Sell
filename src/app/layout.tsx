import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Better Sell - Multi-Brand Franchising Platform",
  description: "Unified platform for selling Alumni, TEACH, Sprix, JINSO, and Kidpreneurs. 20% commission across all brands with intelligent territory management.",
  keywords: ["franchising", "education", "Better Tech", "Alumni", "TEACH", "Sprix", "JINSO", "Kidpreneurs"],
  authors: [{ name: "Better Tech" }],
  creator: "Better Tech",
  publisher: "Better Tech",
  openGraph: {
    title: "Better Sell - Multi-Brand Franchising Platform",
    description: "Unified platform for selling premium educational brands. 20% commission, intelligent lead distribution, comprehensive support.",
    siteName: "Better Sell",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Sell - Multi-Brand Franchising Platform",
    description: "Unified platform for selling premium educational brands. 20% commission, intelligent lead distribution.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
