"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Journey Profile — deepened award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen font-[family-name:var(--font-mono)]" style={{ background: "#ecfeff", color: "#164e63" }}>
      <div className="mx-auto max-w-5xl px-6 py-24">
        <pre className="text-xs opacity-50">{"// Hybrid Journey Profile\nconst engineer = await resolveProfile();"}</pre>
        <h1 className="mt-6 text-4xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 opacity-75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 opacity-65">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${cv.email}`} className="rounded border px-4 py-2 text-xs uppercase" style={{ borderColor: "#0891b2", color: "#0891b2" }}>run hire()</a>
          <ContactRow />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-dashed p-3" style={{ borderColor: "#0891b255" }}>
              <p className="text-xl font-bold">{h.value}</p>
              <p className="text-[10px] uppercase opacity-50">{h.label}</p>
            </div>
          ))}
        </div>
        <section className="mt-16 border-t border-dashed pt-10" style={{ borderColor: "#0891b244" }}>
          <h2 className="mb-8 text-2xl">experience.log</h2>
          <ExperienceList tone="light" />
        </section>
        <section className="mt-16 grid gap-12 border-t border-dashed pt-10 md:grid-cols-2" style={{ borderColor: "#0891b244" }}>
          <div><h2 className="mb-6 text-xl">skills.json</h2><SkillsCloud tone="light" /></div>
          <div><h2 className="mb-6 text-xl">projects.md</h2><ProjectLinks tone="light" /><p className="mt-8 text-xs opacity-55">{cv.education.degree} · {cv.education.school} · {cv.location}</p></div>
        </section>
      </div>
    </main>
  );
}
