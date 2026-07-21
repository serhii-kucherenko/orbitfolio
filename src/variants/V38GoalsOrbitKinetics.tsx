"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Goals Orbit Kinetics — concentric orbital rings with career bodies and a goals satellite */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#050914] text-[#eef2ff]">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-sky-300/70">
            Orbital kinetics · goals gravity
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-black leading-[0.9] sm:text-7xl">
            {cv.name}
          </h1>
          <p className="mt-4 text-lg text-sky-200">{cv.title}</p>
          <p className="mt-6 max-w-xl text-sm leading-8 text-white/65">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="rounded-full bg-sky-300 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#050914] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
            >
              Pull into orbit
            </a>
            <Link
              href="/goals"
              className="rounded-full border border-sky-300/40 px-6 py-3 text-xs font-bold uppercase tracking-widest text-sky-200"
            >
              100 Goals
            </Link>
            <Link
              href="/resume"
              className="rounded-full border border-sky-300/25 px-6 py-3 text-xs font-bold uppercase tracking-widest text-sky-200/70"
            >
              Ephemeris PDF
            </Link>
          </div>
          <ContactRow className="mt-6 text-sky-100/60" />
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          {[0.55, 0.75, 0.95].map((scale, i) => (
            <motion.div
              key={scale}
              className="absolute inset-0 rounded-full border border-sky-400/25"
              style={{ transform: `scale(${scale})` }}
              animate={reduce ? undefined : { rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 40 + i * 20, repeat: Infinity, ease: "linear" }}
            >
              <span
                className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300"
                aria-hidden
              />
            </motion.div>
          ))}
          <div className="absolute inset-[22%] flex flex-col items-center justify-center rounded-full border border-sky-300/40 bg-[#0a1228] text-center shadow-[0_0_60px_rgba(56,189,248,0.15)]">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-sky-300/60">
              Core mass
            </p>
            <p className="mt-2 text-3xl font-black text-sky-100">{cv.highlights[0]?.value}</p>
            <p className="mt-1 text-xs text-white/50">{cv.highlights[0]?.label}</p>
          </div>
        </div>
      </div>

      <section className="border-t border-sky-400/15 bg-[#080e20] px-6 py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-sky-400/20 bg-sky-400/5 p-5">
              <p className="text-3xl font-black text-sky-200">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-12">
        <h2 className="mb-10 text-3xl font-bold text-sky-100">Trajectory history</h2>
        <ExperienceList tone="dark" />
        <div className="mt-20 grid gap-14 border-t border-sky-400/15 pt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl text-sky-200">Payload skills</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl text-sky-200">Mission links</h2>
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
