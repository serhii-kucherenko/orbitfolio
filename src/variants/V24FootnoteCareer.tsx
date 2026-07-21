"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Footnote Career — deepened award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen" style={{ background: "#0b1220", color: "white" }}>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-12 pt-28 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] uppercase tracking-[0.35em] opacity-60">Footnote Career</motion.p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-lg opacity-80">{cv.title}</p>
          <p className="mt-6 max-w-xl text-sm leading-7 opacity-70">{cv.summary}</p>
          <a href={`mailto:${cv.email}`} className="mt-8 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ background: "#67e8f9", color: "#041016"}}>Hire conversation</a>
          <ContactRow className="mt-6 text-white/70" />
        </div>
        <div className="grid grid-cols-2 gap-3 content-start">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border p-4" style={{ borderColor: "#67e8f955" }}>
              <p className="text-3xl font-bold" style={{ color: "#67e8f9" }}>{h.value}</p>
              <p className="mt-1 text-xs opacity-60">{h.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl space-y-16 px-6 pb-28">
        <div><h2 className="mb-8 text-3xl font-bold">Experience</h2><ExperienceList tone="dark" /></div>
        <div className="grid gap-12 md:grid-cols-2">
          <div><h2 className="mb-6 text-2xl font-bold">Skills</h2><SkillsCloud /></div>
          <div><h2 className="mb-6 text-2xl font-bold">Projects</h2><ProjectLinks /><p className="mt-10 text-sm opacity-55">{cv.education.degree} · {cv.education.school}</p></div>
        </div>
      </section>
    </main>
  );
}
