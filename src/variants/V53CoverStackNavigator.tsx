"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Cover Stack Navigator — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#0c0a09] text-amber-50">
      <section className="px-6 pb-8 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold">{cv.name}</h1>
        <p className="mt-3 text-amber-100/70">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm text-white/55">{cv.summary}</p>
      </section>
      <div className="flex gap-4 overflow-x-auto px-6 pb-12">
        {cv.experience.map((job, i) => (
          <article key={job.company} className="w-[260px] shrink-0 rounded-2xl border border-amber-200/20 p-5" style={{ background: i % 2 ? "#1c1917" : "#292524", transform: reduce ? undefined : `rotate(${(i - 1) * 2}deg)` }}>
            <p className="text-[10px] uppercase tracking-wider text-amber-200/50">Issue 0{i + 1}</p>
            <h2 className="mt-3 text-xl font-semibold">{job.company}</h2>
            <p className="mt-2 text-xs text-white/50">{job.period}</p>
            <p className="mt-4 text-sm text-white/70">{job.role}</p>
          </article>
        ))}
      </div>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-amber-100/70" />
      </section>
    </main>
  );
}
