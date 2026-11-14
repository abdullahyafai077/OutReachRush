import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Poppins } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const heroSerif = Instrument_Serif({
  variable: "--font-hero-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = buildPageMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${heroSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-or-canvas text-or-body font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
