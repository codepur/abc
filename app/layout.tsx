import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The ABC Summit 2026 — Arth | Neeti | Dharma",
  description:
    "The most powerful business summit for Agrawal entrepreneurs. 20 June 2026 at Sheraton Grand, Indore. 350+ curated attendees.",
  keywords: ["ABC Summit", "Agrawal Business Community", "Indore", "Business Summit 2026"],
  openGraph: {
    title: "The ABC Summit 2026",
    description: "Arth · Neeti · Dharma — 20 June 2026, Sheraton Grand, Indore",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={libreBaskerville.variable}>
      <body>{children}</body>
    </html>
  );
}
