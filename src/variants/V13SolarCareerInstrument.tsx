"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Solar Career Instrument — jobs as an orbital instrument, then a readable CV. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const jobs = cv.experience;
  const cx = 160;
  const cy = 160;
  const r = 118;

  return (
    <main className="min-h-screen bg-[#140f08] text-[#ffe9c2]">
      <header className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-28 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-amber-300/60">
            Solar instrument · careers in orbit
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-lg text-amber-100/70">{cv.title}</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-amber-50/55">{cv.summary}</p>
          <a
            href={`mailto:${cv.email}`}
            className="mt-8 inline-block bg-amber-300 px-5 py-2.5 text-sm font-semibold text-[#140f08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
          >
            Align a mission
          </a>
        </div>

        <motion.svg
          viewBox="0 0 320 320"
          className="mx-auto h-72 w-72"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          aria-hidden
        >
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(251,191,36,0.25)" strokeWidth="1" />
          <circle cx={cx} cy={cy} r="28" fill="#fbbf24" opacity="0.9" />
          {jobs.map((job, i) => {
            const a = (i / jobs.length) * Math.PI * 2 - Math.PI / 2;
            const x = cx + Math.cos(a) * r;
            const y = cy + Math.sin(a) * r;
            return (
              <g key={job.company}>
                <circle cx={x} cy={y} r="10" fill="#fde68a" />
                <text x={x} y={y + 28} textAnchor="middle" fill="#fde68a" fontSize="8">
                  {job.company.split(" ")[0]}
                </text>
              </g>
            );
          })}
        </motion.svg>
      </header>

      <section className="mx-auto grid max-w-5xl gap-3 px-6 pb-10 sm:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border border-amber-400/20 px-4 py-5">
            <p className="text-2xl font-bold text-amber-200">{h.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-amber-100/45">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-amber-100/65" />
        <p className="text-xs text-amber-100/35">
          {cv.education.degree} · {cv.education.school}
        </p>
      </section>
    </main>
  );
}
