"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Solar Career Instrument — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#0a0612] text-violet-50">
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-violet-300/70">Solar instrument</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-violet-100/75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <svg viewBox="0 0 640 220" className="mt-10 w-full" aria-hidden>
          <circle cx="320" cy="110" r="28" fill="#fbbf24" />
          {cv.experience.map((_, i) => {
            const a = (i / cv.experience.length) * Math.PI * 2;
            const x = 320 + Math.cos(a) * (70 + i * 18);
            const y = 110 + Math.sin(a) * (40 + i * 10);
            return <g key={i}><line x1="320" y1="110" x2={x} y2={y} stroke="rgba(196,181,253,0.4)" /><circle cx={x} cy={y} r={8 + i} fill="#a78bfa" opacity={0.8} /></g>;
          })}
        </svg>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-violet-100/70" />
      </section>
    </main>
  );
}
