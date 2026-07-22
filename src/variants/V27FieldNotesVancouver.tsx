"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Field Notes Vancouver — daylight journal with Lenis for notebook-length reading. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <SmoothScroll>
    <main
      className="min-h-screen bg-[#eaf4ef] text-[#0f2a22] overflow-x-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,42,34,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,42,34,0.04) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-24">
        <div className="border border-emerald-900/10 bg-[#f7fcf9]/95 p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-800/65">
                Field notes · Lenis · {cv.location}
              </p>
              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-6xl"
              >
                {cv.name}
              </motion.h1>
              <p className="mt-3 text-emerald-900/70">{cv.title}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${cv.email}`}
                className="bg-emerald-900 px-5 py-2.5 text-sm font-medium text-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900"
              >
                Write back
              </a>
              <a
                href="/resume"
                className="border border-emerald-800/40 px-5 py-2.5 text-sm text-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900"
              >
                Field notes / resume
              </a>
            </div>
          </div>
          <p className="mt-8 border-l-4 border-emerald-700/40 pl-5 text-sm leading-8 text-emerald-950/75">
            {cv.summary}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-4">
            {cv.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : i * 0.05 }}
                className="border border-emerald-900/10 bg-[#dff1ea] p-4"
              >
                <p className="text-2xl font-semibold text-emerald-950">{h.value}</p>
                <p className="mt-1 text-xs text-emerald-800/55">{h.label}</p>
              </motion.div>
            ))}
          </div>
          <ContactRow className="mt-8 text-emerald-800" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="border border-emerald-900/10 bg-white/80 p-6 sm:p-10">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl">Trail log</h2>
          <p className="mt-2 text-sm text-emerald-800/55">Career stops in order of arrival.</p>
          <div className="mt-8 space-y-8">
            {cv.experience.map((job, i) => (
              <article key={`${job.company}-${job.period}`} className="border-b border-emerald-900/10 pb-8 last:border-0">
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-emerald-700/60">
                  Entry {String(i + 1).padStart(2, "0")} · {job.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  {job.role} · {job.company}
                </h3>
                <p className="text-sm text-emerald-800/55">{job.place}</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-emerald-950/80">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 28)}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-6 px-6 pb-24 md:grid-cols-2">
        <div className="border border-emerald-900/10 bg-white/80 p-6">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl">Kit list</h2>
          <div className="mt-6">
            <SkillsCloud tone="light" />
          </div>
        </div>
        <div className="border border-emerald-900/10 bg-white/80 p-6">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl">Specimens</h2>
          <div className="mt-6">
            <ProjectLinks tone="light" />
          </div>
          <p className="mt-10 text-sm text-emerald-800/50">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
    </SmoothScroll>
  );
}
