"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Constellation Command — star chart linking skills, companies, and shipped products. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const nodes = [
    ...cv.experience.map((j, i) => ({
      id: `c-${i}`,
      label: j.company.split(" ")[0],
      x: 18 + (i % 2) * 28 + i * 8,
      y: 22 + i * 14,
    })),
    ...cv.projects.slice(0, 4).map((p, i) => ({
      id: `p-${i}`,
      label: p.name.split(" ")[0],
      x: 58 + (i % 2) * 18,
      y: 28 + i * 16,
    })),
  ];

  return (
    <main className="min-h-screen bg-[#04060f] text-[#dce6ff]">
      <header className="mx-auto max-w-6xl px-6 pb-6 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-indigo-300/60">
          Constellation command
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-lg text-indigo-100/70">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-indigo-50/55">{cv.summary}</p>
        <a
          href={`mailto:${cv.email}`}
          className="mt-8 inline-block border border-indigo-300/40 px-5 py-2.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
        >
          Plot a course
        </a>
      </header>

      <section className="mx-auto max-w-6xl px-6">
        <svg viewBox="0 0 100 100" className="h-56 w-full text-indigo-200 sm:h-72" role="img" aria-label="Career constellation chart">
          {nodes.map((n, i) => {
            const next = nodes[(i + 1) % nodes.length];
            return (
              <g key={n.id}>
                <motion.line
                  x1={n.x}
                  y1={n.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="currentColor"
                  strokeOpacity="0.25"
                  strokeWidth="0.3"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: reduce ? 0 : 1.2, delay: reduce ? 0 : i * 0.05 }}
                />
                <circle cx={n.x} cy={n.y} r="1.2" fill="#c7d2fe" />
                <text x={n.x + 2} y={n.y + 1} fill="#a5b4fc" fontSize="3">
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>
      </section>

      <section className="mx-auto grid max-w-5xl gap-3 px-6 py-8 sm:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border border-indigo-400/20 px-4 py-5">
            <p className="text-2xl font-bold text-indigo-100">{h.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-indigo-200/45">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-indigo-100/65" />
        <p className="text-xs text-indigo-200/35">
          {cv.education.degree} · {cv.education.school}
        </p>
      </section>
    </main>
  );
}
