"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Solar Career Instrument — orbital job dial, then a complete readable CV. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const jobs = cv.experience;
  const cx = 160;
  const cy = 160;
  const r = 118;

  return (
    <main className="min-h-screen bg-[#120e08] text-[#ffe7bc]">
      <header className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-[1fr_340px] lg:py-28">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-amber-300/55">
            Solar instrument · careers in orbit
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-lg text-amber-100/70">{cv.title}</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-amber-50/55">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="bg-amber-300 px-5 py-2.5 text-sm font-semibold text-[#120e08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            >
              Align a mission
            </a>
            <ContactRow className="text-amber-100/60" />
          </div>
        </div>

        <div className="relative mx-auto">
          <motion.svg
            viewBox="0 0 320 320"
            className="h-72 w-72 sm:h-80 sm:w-80"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            role="img"
            aria-label="Career roles arranged on an orbital instrument"
          >
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(251,191,36,0.28)" strokeWidth="1" />
            <circle cx={cx} cy={cy} r="72" fill="none" stroke="rgba(251,191,36,0.12)" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx={cx} cy={cy} r="26" fill="#fbbf24" />
            <text x={cx} y={cy + 4} textAnchor="middle" fill="#120e08" fontSize="9" fontWeight="700">
              NOW
            </text>
            {jobs.map((job, i) => {
              const a = (i / jobs.length) * Math.PI * 2 - Math.PI / 2;
              const x = cx + Math.cos(a) * r;
              const y = cy + Math.sin(a) * r;
              return (
                <g key={job.company}>
                  <circle cx={x} cy={y} r="11" fill="#fde68a" />
                  <text x={x} y={y + 30} textAnchor="middle" fill="#fde68a" fontSize="8">
                    {job.company.split(" ")[0]}
                  </text>
                </g>
              );
            })}
          </motion.svg>
          <ol className="mt-4 space-y-1 font-[family-name:var(--font-mono)] text-[10px] text-amber-200/55">
            {jobs.map((job, i) => (
              <li key={job.company}>
                {String(i + 1).padStart(2, "0")} · {job.company} · {job.period}
              </li>
            ))}
          </ol>
        </div>
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
        <div>
          <h2 className="mb-8 font-[family-name:var(--font-serif)] text-3xl">Resolved ephemeris</h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl text-amber-200/80">Instruments</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl text-amber-200/80">Observations</h2>
            <ProjectLinks />
            <p className="mt-10 text-xs text-amber-100/35">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
