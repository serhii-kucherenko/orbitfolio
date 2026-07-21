"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Constellation Index — star-map index connecting career nodes with silver polylines */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const nodes = [
    { x: 12, y: 28, label: cv.experience[0]?.company ?? "A" },
    { x: 38, y: 14, label: cv.experience[1]?.company ?? "B" },
    { x: 62, y: 36, label: cv.experience[2]?.company ?? "C" },
    { x: 84, y: 18, label: cv.experience[3]?.company ?? "D" },
  ];

  return (
    <main className="min-h-screen bg-[#05081a] text-[#e8ecff]">
      <header className="relative overflow-hidden px-6 pb-8 pt-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.45em] text-slate-400">
            Star atlas · constellation index · {cv.location}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl leading-tight sm:text-7xl">{cv.name}</h1>
          <p className="mt-3 text-slate-300">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-white/60">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="border border-slate-300/40 bg-slate-200 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-[#05081a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200"
            >
              Chart a hire
            </a>
            <a
              href="/resume"
              className="border border-slate-400/40 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200"
            >
              Atlas / resume
            </a>
            <ContactRow className="text-slate-300/70" />
          </div>
        </div>

        <svg
          className="mx-auto mt-14 h-48 w-full max-w-6xl"
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.polyline
            fill="none"
            stroke="rgba(203,213,225,0.45)"
            strokeWidth="0.3"
            points={nodes.map((n) => `${n.x},${n.y}`).join(" ")}
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: reduce ? 0 : 2 }}
          />
          {nodes.map((n, i) => (
            <g key={n.label}>
              <motion.circle
                cx={n.x}
                cy={n.y}
                r="1.2"
                fill="#e2e8f0"
                animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5 + i * 0.4, repeat: Infinity }}
              />
              <text x={n.x} y={n.y + 5} textAnchor="middle" fill="#94a3b8" fontSize="2.2">
                {n.label.split(" ")[0]}
              </text>
            </g>
          ))}
        </svg>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-12">
        <div className="grid gap-4 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <div key={h.label} className="relative border border-slate-500/30 bg-slate-900/40 p-5">
              <span
                className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-slate-200"
                aria-hidden
              />
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-slate-500">
                ★ {String.fromCharCode(65 + i)}
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-100">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-12">
        <h2 className="mb-10 font-[family-name:var(--font-serif)] text-3xl">Named stars</h2>
        <ExperienceList tone="dark" />
        <div className="mt-20 grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl text-slate-200">Spectral classes</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl text-slate-200">Deep surveys</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-white/45">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
