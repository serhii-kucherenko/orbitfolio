"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Constellation Index — deepened award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen md:grid md:grid-cols-[280px_1fr]" style={{ background: "#faf7f2", color: "#1c1917" }}>
      <aside className="border-r p-8 md:sticky md:top-0 md:h-screen" style={{ borderColor: "#0f766e33", background: "#ffffff80" }}>
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-60">Constellation Index</p>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold">{cv.name}</h1>
        <p className="mt-2 text-sm opacity-70">{cv.title}</p>
        <a href={`mailto:${cv.email}`} className="mt-8 inline-block rounded-full px-4 py-2 text-xs font-bold" style={{ background: "#0f766e", color: "#fff"}}>Email</a>
        <ContactRow className="mt-6" />
        <p className="mt-10 text-xs opacity-50">{cv.location}</p>
      </aside>
      <div className="px-6 py-16 md:px-12">
        <p className="max-w-2xl text-sm leading-7 opacity-70">{cv.summary}</p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-xl border p-4" style={{ borderColor: "#0f766e44" }}>
              <p className="text-2xl font-bold">{h.value}</p>
              <p className="text-[10px] uppercase opacity-50">{h.label}</p>
            </div>
          ))}
        </div>
        <section className="mt-16"><h2 className="mb-8 text-3xl font-bold">Career</h2><ExperienceList tone="light" /></section>
        <section className="mt-16 grid gap-12 md:grid-cols-2">
          <div><h2 className="mb-6 text-2xl font-bold">Toolkit</h2><SkillsCloud tone="light" /></div>
          <div><h2 className="mb-6 text-2xl font-bold">Shipped</h2><ProjectLinks tone="light" /><p className="mt-8 text-sm opacity-55">{cv.education.degree} · {cv.education.school}</p></div>
        </section>
      </div>
    
      <footer className="mx-auto max-w-6xl px-6 pb-16 text-sm opacity-55">
        {/* Education footer */}
        <p>
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </footer>
    </main>
  );
}
