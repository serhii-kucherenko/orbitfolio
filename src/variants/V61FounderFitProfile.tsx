"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Founder Fit Profile — deepened award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen" style={{ background: "#030712", color: "#e0f2fe" }}>
      <header className="mx-auto max-w-4xl px-6 pb-10 pt-28">
        <motion.h1 initial={reduce ? false : { y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-[family-name:var(--font-display)] text-5xl font-extrabold sm:text-7xl">{cv.name}</motion.h1>
        <p className="mt-4 text-xl opacity-80">{cv.title}</p>
        <p className="mt-6 text-sm leading-7 opacity-70">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${cv.email}`} className="rounded-full px-5 py-2.5 text-sm font-semibold" style={{ background: "#38bdf8", color: "#041016"}}>Start hiring thread</a>
          <ContactRow className="text-white/70" />
        </div>
      </header>
      <section className="border-y px-6 py-10" style={{ borderColor: "#38bdf833", background: "#ffffff08" }}>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label}><p className="text-3xl font-bold" style={{ color: "#38bdf8" }}>{h.value}</p><p className="text-xs opacity-55">{h.label}</p></div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-16 px-6 py-20">
        <div><h2 className="mb-8 text-3xl font-bold">Founder Fit Profile · roles</h2><ExperienceList tone="dark" /></div>
        <div className="grid gap-12 md:grid-cols-2">
          <div><h2 className="mb-6 text-2xl font-bold">Skills</h2><SkillsCloud /></div>
          <div><h2 className="mb-6 text-2xl font-bold">Projects</h2><ProjectLinks /><p className="mt-10 text-sm opacity-55">{cv.education.degree} · {cv.education.school} · {cv.location}</p></div>
        </div>
      </section>
    
      <footer className="mx-auto max-w-6xl px-6 pb-16 text-sm opacity-55">
        {/* Education footer */}
        <p>
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </footer>
    </main>
  );
}
