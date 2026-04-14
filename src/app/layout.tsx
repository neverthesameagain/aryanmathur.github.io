import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  "https://aryanmathur.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aryan Mathur — Software Engineer + AI Systems Builder",
    template: "%s — Aryan Mathur",
  },
  description:
    "Final-year IIT Palakkad engineer currently building production backend systems at Mercor. Focused on scalable backend systems, distributed systems, AI systems engineering, and product-scale development.",
  keywords: [
    "Aryan Mathur",
    "Software Engineer",
    "Backend",
    "Distributed Systems",
    "AI Systems",
    "Machine Learning",
    "Infrastructure",
    "Go",
    "Python",
    "IIT Palakkad",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aryan Mathur — Software Engineer + AI Systems Builder",
    description:
      "Backend systems engineer with AI systems depth. Mercor (Jan 2026–Present).",
    url: "/",
    siteName: "Aryan Mathur",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Mathur — Software Engineer + AI Systems Builder",
    description:
      "Building scalable software systems and intelligent products that ship.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-white/10 selection:text-white">
        {children}
      </body>
    </html>
  );
}
