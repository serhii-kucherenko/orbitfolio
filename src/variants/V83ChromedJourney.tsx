"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Chromed Journey — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#111113] text-zinc-100">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-400">Chromed journey</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold" style={{ backgroundImage: "linear-gradient(120deg,#e2e8f0,#94a3b8,#f8fafc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{cv.name}</h1>
        <p className="mt-3 text-zinc-300">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400">{cv.summary}</p>
        <svg viewBox="0 0 640 120" className="mt-10 w-full" aria-hidden><path d="M20 80 C120 20 220 100 320 50 S520 20 620 70" fill="none" stroke="#a1a1aa" strokeWidth="3" /><circle cx="20" cy="80" r="6" fill="#e4e4e7" /><circle cx="320" cy="50" r="6" fill="#e4e4e7" /><circle cx="620" cy="70" r="6" fill="#e4e4e7" /></svg>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="opacity-80" /></section>
    </main>
  );
}
