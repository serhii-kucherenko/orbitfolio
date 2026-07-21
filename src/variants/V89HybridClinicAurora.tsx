"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Clinic Aurora — deepened award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen" style={{ background: "#111827", color: "#f9fafb" }}>
      <header className="border-b px-6 py-20 md:px-12" style={{ borderColor: "#fbbf2444" }}>
        <div className="mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.35em] opacity-55">Hybrid Clinic Aurora issue</p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-6xl font-black leading-[0.9] sm:text-8xl">{cv.name}</h1>
          <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <p className="text-sm leading-8 opacity-75">{cv.summary}</p>
            <div>
              <p className="text-lg font-semibold" style={{ color: "#fbbf24" }}>{cv.title}</p>
              <a href={`mailto:${cv.email}`} className="mt-4 inline-block text-sm underline">Write the editor</a>
              <ContactRow className="mt-4 text-white/70" />
            </div>
          </div>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-12 md:grid-cols-4 md:px-12">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border-t-4 pt-4" style={{ borderColor: "#fbbf24" }}>
            <p className="text-3xl font-black">{h.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wider opacity-55">{h.label}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-12">
        <h2 className="mb-10 text-4xl font-black">Feature</h2>
        <ExperienceList tone="dark" />
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div><h2 className="mb-6 text-2xl font-bold">Index</h2><SkillsCloud /></div>
          <div><h2 className="mb-6 text-2xl font-bold">Links</h2><ProjectLinks /><p className="mt-10 text-sm opacity-55">{cv.education.degree} · {cv.education.school}</p></div>
        </div>
      </section>
    </main>
  );
}
