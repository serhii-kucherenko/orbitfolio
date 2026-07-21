"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Particle Name Assembly — letters drift in as discrete particles, coalesce into identity, then unlock the dossier. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const letters = cv.name.replace(" ", "·").split("");

  return (
    <main className="min-h-screen bg-[#030712] text-[#f8fafc]">
      <header className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-4 pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, #1e293b88 0%, transparent 55%)",
          }}
        />
        {!reduce &&
          Array.from({ length: 24 }).map((_, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="absolute h-1 w-1 rounded-full bg-sky-300/70"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
              }}
              animate={{
                y: [0, -30, 10, 0],
                opacity: [0.2, 0.9, 0.3, 0.2],
                scale: [1, 1.6, 0.8, 1],
              }}
              transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.12 }}
            />
          ))}
        <p className="relative z-10 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.45em] text-sky-300/70">
          Assembly sequence
        </p>
        <h1 className="relative z-10 mt-8 flex flex-wrap justify-center gap-x-1 gap-y-2 font-[family-name:var(--font-display)] text-4xl font-black sm:text-6xl md:text-7xl">
          {letters.map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              initial={
                reduce
                  ? false
                  : {
                      opacity: 0,
                      y: (i % 2 === 0 ? -1 : 1) * 48,
                      x: ((i * 17) % 40) - 20,
                      filter: "blur(6px)",
                    }
              }
              animate={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
              transition={{ delay: reduce ? 0 : 0.04 * i, duration: 0.55, type: "spring" }}
              className={ch === "·" ? "mx-2 text-sky-400/40" : "inline-block"}
            >
              {ch === "·" ? " " : ch}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 0.9 }}
          className="relative z-10 mt-6 text-sky-300"
        >
          {cv.title}
        </motion.p>
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 1.05 }}
          className="relative z-10 mt-6 max-w-xl text-center text-sm leading-7 text-white/55"
        >
          {cv.summary}
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 1.2 }}
          className="relative z-10 mt-10 flex flex-wrap justify-center gap-3"
        >
          <a
            href={`mailto:${cv.email}`}
            className="rounded-full bg-sky-300 px-6 py-2.5 text-sm font-bold text-[#030712] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            Assemble a hire
          </a>
          <ContactRow className="justify-center text-white/55" />
        </motion.div>
      </header>

      <section className="mx-auto grid max-w-4xl grid-cols-2 gap-3 px-6 py-12 sm:grid-cols-4">
        {cv.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : i * 0.06 }}
            className="rounded-2xl border border-sky-300/20 bg-sky-300/5 px-4 py-5"
          >
            <p className="text-2xl font-bold text-sky-300">{h.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider opacity-45">{h.label}</p>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl space-y-16 px-6 py-16">
        <div>
          <h2 className="mb-8 text-center text-xs font-bold uppercase tracking-[0.35em] text-sky-300/80">
            Coalesced roles
          </h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Particle cloud</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Bound projects</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm opacity-45">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
