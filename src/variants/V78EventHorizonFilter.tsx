"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Event Horizon Filter — accretion-disk portrait: name as the singularity, metrics as orbiting filter rings */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 20%, #1a0a08 0%, #050508 55%, #000 100%)",
        color: "#f5e6d3",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-conic-gradient(from 0deg at 50% 35%, transparent 0deg 8deg, #ff6b3522 8deg 9deg)",
        }}
      />

      <section className="relative mx-auto flex min-h-[90vh] max-w-5xl flex-col items-center justify-center px-6 pb-16 pt-24 text-center">
        <motion.div
          initial={reduce ? false : { scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex h-64 w-64 items-center justify-center rounded-full sm:h-80 sm:w-80"
          style={{
            boxShadow: "0 0 0 1px #ff6b3544, 0 0 80px #ff6b3533, inset 0 0 60px #000",
            background: "radial-gradient(circle, #0a0404 40%, #1a0804 100%)",
          }}
        >
          {!reduce && (
            <motion.span
              aria-hidden
              className="absolute inset-3 rounded-full border border-dashed"
              style={{ borderColor: "#ff9f6b55" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
            />
          )}
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#ff9f6b]">
              Event horizon
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight sm:text-4xl">
              {cv.name}
            </h1>
          </div>
        </motion.div>

        <p className="mt-10 text-lg text-[#ff9f6b]">{cv.title}</p>
        <p className="mt-4 max-w-lg text-sm leading-7 text-[#f5e6d3]/90">{cv.summary}</p>
        <a
          href={`mailto:${cv.email}`}
          className="mt-8 inline-flex px-6 py-3 text-sm font-semibold tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6b35]"
          style={{ background: "#ff6b35", color: "#0a0404" }}
        >
          Cross the horizon
        </a>
        <ContactRow className="mt-6 justify-center text-[#f5e6d3]/70" />
      </section>

      <section className="relative mx-auto max-w-4xl px-6 pb-12">
        <div className="grid grid-cols-2 gap-px sm:grid-cols-4" style={{ background: "#ff6b3522" }}>
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.1 * i }}
              className="bg-[#050508] p-5 text-center"
            >
              <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#ff6b35]">
                {h.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] opacity-50">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-4xl space-y-20 px-6 pb-28">
        <div>
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
            Captured trajectories
          </h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Filter bands</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Transmissions</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm opacity-50">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
