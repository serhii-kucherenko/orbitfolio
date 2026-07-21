"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Clinic SaaS Engineer — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#f0fdfa] text-teal-950">
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-teal-600">Clinical product · outcomes</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{cv.name}</h1>
        <p className="mt-3 text-lg text-teal-800/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-teal-900/70">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${cv.email}`} className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white">Book a conversation</a>
          <a href={cv.linkedin} className="rounded-full border border-teal-300 px-5 py-2.5 text-sm text-teal-800">LinkedIn</a>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-teal-100 bg-white p-4">
              <p className="text-2xl font-semibold text-teal-700">{h.value}</p>
              <p className="mt-1 text-xs text-teal-700/60">{h.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-5xl space-y-14 px-6 pb-28">
        <ExperienceList tone="light" />
        <SkillsCloud tone="light" />
        <ProjectLinks tone="light" />
        <ContactRow />
      </section>
    </main>
  );
}
