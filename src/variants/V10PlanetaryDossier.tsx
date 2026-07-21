"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Planetary Dossier — brief planet stage, then evidence-first technical dossier. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#060b16] text-[#e8eef8]">
      <section className="relative flex min-h-[48vh] items-end overflow-hidden px-6 pb-10 pt-28">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[-12%] top-6 h-[min(72vw,440px)] w-[min(72vw,440px)] rounded-full"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #7dd3fc 0%, #0369a1 35%, #0c4a6e 55%, transparent 70%)",
            opacity: 0.55,
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-cyan-300/60">
            Planet stage → dossier · {cv.location}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-cyan-100/70">{cv.title}</p>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-2 max-w-5xl border border-white/10 border-b-0 bg-[#0d1422] px-6 py-12 sm:px-10">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-cyan-300/50">
              Classified · technical dossier · OF-010
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{cv.summary}</p>
            <ContactRow className="mt-5 text-cyan-100/55" />
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={`mailto:${cv.email}`}
              className="bg-cyan-400 px-4 py-2 text-sm font-semibold text-[#060b16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              Request clearance
            </a>
            <a
              href="/resume"
              className="border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              Dossier PDF
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
              className="border-l border-cyan-400/35 pl-4"
            >
              <p className="font-[family-name:var(--font-mono)] text-xl text-cyan-200">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-cyan-100/40">{h.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 space-y-14">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/50">
              Service record
            </h2>
            <ExperienceList tone="dark" />
          </div>
          <div className="grid gap-12 border-t border-white/10 pt-14 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/50">
                Capabilities
              </h2>
              <SkillsCloud />
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/50">Exhibits</h2>
              <ProjectLinks />
            </div>
          </div>
          <p className="text-xs text-white/35">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
  );
}
