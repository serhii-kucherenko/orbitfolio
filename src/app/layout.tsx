import { Space_Grotesk, Instrument_Serif, JetBrains_Mono, Syne } from "next/font/google";
import type { Metadata } from "next";
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
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${serif.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full bg-[#03050c] font-[family-name:var(--font-sans)] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
