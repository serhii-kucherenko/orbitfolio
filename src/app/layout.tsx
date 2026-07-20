import { Space_Grotesk, Instrument_Serif, JetBrains_Mono, Syne } from "next/font/google";
import type { Metadata } from "next";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orbitfolio-kohl.vercel.app"),
  title: {
    default: "Serhii Kucherenko — Founding Full-Stack Engineer",
    template: "%s · Serhii Kucherenko",
  },
  description:
    "Founding Full-Stack Engineer specializing in applied AI — agents, RAG, and production systems. Vancouver, Canada.",
  openGraph: {
    title: "Serhii Kucherenko — Orbitfolio",
    description: "Portfolio design lab: 50 space-grade experiments. Applied AI engineer.",
    type: "website",
    url: "https://orbitfolio-kohl.vercel.app",
    siteName: "Orbitfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serhii Kucherenko — Orbitfolio",
    description: "Founding Full-Stack Engineer · applied AI · Vancouver",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${serif.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full bg-[#03050c] font-[family-name:var(--font-sans)] text-white antialiased">
        <PersonJsonLd />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-teal-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#042f2e]"
        >
          Skip to content
        </a>
        <div id="content">{children}</div>
      </body>
    </html>
  );
}
