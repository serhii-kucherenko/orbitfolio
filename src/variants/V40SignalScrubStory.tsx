"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Signal Scrub Story — deepened award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen p-3 md:p-8" style={{ background: "#faf7f2", color: "#1c1917" }}>
      <div className="mx-auto max-w-5xl rounded-[2rem] border p-6 md:p-12" style={{ borderColor: "#0f766e66", background: "#ffffffcc" }}>
        <p className="text-[10px] uppercase tracking-[0.4em] opacity-55">Signal Scrub Story</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 opacity-75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 opacity-70">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${cv.email}`} className="rounded-full border px-5 py-2.5 text-sm font-semibold" style={{ borderColor: "#0f766e", color: "#0f766e" }}>Book a chat</a>
          <ContactRow />
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border p-4" style={{ borderColor: "#0f766e40" }}>
              <p className="text-2xl font-bold">{h.value}</p>
              <p className="text-xs opacity-55">{h.label}</p>
            </div>
          ))}
        </div>
        <section className="mt-16"><h2 className="mb-8 text-3xl font-bold">Evidence</h2><ExperienceList tone="light" /></section>
        <section className="mt-16 grid gap-12 md:grid-cols-2">
          <div><h2 className="mb-6 text-2xl font-bold">Systems</h2><SkillsCloud tone="light" /></div>
          <div><h2 className="mb-6 text-2xl font-bold">Work</h2><ProjectLinks tone="light" /><p className="mt-8 text-sm opacity-55">{cv.education.degree} · {cv.education.school}</p></div>
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
