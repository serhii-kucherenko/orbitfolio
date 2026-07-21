"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Constellation Command — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  const stars = Object.entries(cv.skills).flatMap(([group, items], gi) =>
    items.slice(0, 3).map((skill, si) => ({ skill, group, x: 10 + ((gi * 3 + si) * 13) % 80, y: 15 + ((gi * 5 + si * 7) * 11) % 70 })),
  );
  return (
    <main className="min-h-screen bg-[#020617] text-sky-50">
      <section className="relative mx-auto min-h-[70vh] max-w-5xl px-6 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Constellation command</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-sky-100/75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="relative mt-10 h-64 rounded-3xl border border-sky-400/20 bg-sky-950/20">
          {stars.map((s) => (
            <span key={s.skill} className="absolute text-[10px] text-sky-100/80" style={{ left: `${s.x}%`, top: `${s.y}%` }}>
              <i className="mb-1 block h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden />
              {s.skill}
            </span>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-sky-200/70" />
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
