import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neverthesameagain.github.io/aryanmathur.github.io/"),
  title: "ARYAN.OS — Aryan Mathur",
  description:
    "Aryan Mathur — engineer, operator, researcher, builder. IIT Palakkad. Backend systems, applied ML research, and technical program leadership at scale.",
  openGraph: {
    title: "ARYAN.OS — Aryan Mathur",
    description:
      "Engineer. Operator. Researcher. Builder. Backend systems, applied ML research, and technical program leadership at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <div className="noise-veil" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
