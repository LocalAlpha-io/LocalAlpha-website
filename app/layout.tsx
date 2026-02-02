import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
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
  title: "LocalAlpha - The Local Backtest Intelligence Dashboard",
  description: "Visualize backtests, debug logs, and analyze trade performance locally. The privacy-first frontend for LEAN. No cloud uploads.",
  keywords: ["QuantConnect", "LEAN Engine", "Backtesting", "Algorithmic Trading", "Python", "Local Analytics"],
  openGraph: {
    title: "LocalAlpha",
    description: "The privacy-first frontend for your local algorithmic trading backtests.",
    url: "https://localalpha.io",
    siteName: "LocalAlpha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LocalAlpha - Local Backtest Analytics",
    description: "Privacy-first dashboard for LEAN backtests.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}