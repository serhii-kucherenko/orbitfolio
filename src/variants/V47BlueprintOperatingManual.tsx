"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Blueprint Operating Manual — schematics for architecture, leadership, skills, shipped work. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main
      className="min-h-screen bg-[#07141f] font-[family-name:var(--font-mono)] text-sky-100"
      style={{
        backgroundImage:
          "linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <section className="mx-auto max-w-5xl px-6 pb-6 pt-20">
        <div className="border border-sky-400/35 bg-[#07141f]/92">
          <div className="grid gap-4 border-b border-sky-400/25 p-4 sm:grid-cols-3 sm:p-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-sky-400">Title</p>
              <p className="mt-1 text-xs">Founding engineer career · operating manual</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-sky-400">Drawing no.</p>
              <p className="mt-1 text-xs">OF-047 · Rev A</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-sky-400">Scale</p>
              <p className="mt-1 text-xs">Hire-ready · {cv.location}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-6 p-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-sky-400">DWG · sheet 1 of 4</p>
              <motion.h1
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-4xl font-bold sm:text-5xl"
              >
                {cv.name}
              </motion.h1>
              <p className="mt-3 text-sky-200/80">{cv.title}</p>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-sky-100/60">{cv.summary}</p>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${cv.email}`}
                className="rounded border border-sky-300 bg-sky-300 px-4 py-2 text-xs uppercase tracking-wider text-[#07141f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Request review
              </a>
              <a
                href="/resume"
                className="rounded border border-sky-300/50 px-4 py-2 text-xs uppercase tracking-wider text-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Sheet set PDF
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px border-t border-sky-400/25 bg-sky-400/25 sm:grid-cols-4">
            {cv.highlights.map((h) => (
              <div key={h.label} className="bg-[#07141f] p-4">
                <p className="text-2xl font-bold text-sky-200">{h.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-sky-400/70">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
        <ContactRow className="mt-6 text-sky-200/70" />
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-6 pb-28">
        <div className="border border-sky-400/25 bg-[#07141f]/85 p-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-sky-400">01 · Assembly history</p>
          <div className="mt-8">
            <ExperienceList tone="dark" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-sky-400/25 bg-[#07141f]/85 p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-sky-400">02 · Part catalog</p>
            <div className="mt-8">
              <SkillsCloud />
            </div>
          </div>
          <div className="border border-sky-400/25 bg-[#07141f]/85 p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-sky-400">03 · Reference builds</p>
            <div className="mt-8">
              <ProjectLinks />
            </div>
            <p className="mt-10 text-xs text-sky-400/60">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
        <p className="mt-10 max-w-2xl border border-sky-400/20 bg-[#07141f]/70 px-4 py-3 text-sm leading-7 text-sky-200/55">
          Operating manual tone stays systems-clear: specs first, hire path never buried in blueprint chrome.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Blueprint manual tone stays systems-clear with full specs.
        </p>
        <p className="mx-auto mt-2 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Lab · depth floor · 115
        </p>
        <p className="mt-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-sky-500/50">
          Delta · blueprint · proof over ornament
        </p>
      </section>
    </main>
  );
}
