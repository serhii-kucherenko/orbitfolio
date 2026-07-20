"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020408] text-white">
      <div
        className="pointer-events-none fixed inset-0 opacity-30"
        style={{
          background: "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(14,165,233,0.03) 80px, rgba(14,165,233,0.03) 81px)",
        }}
      />
      <Starfield density={160} color="#7dd3fc" speed={0.35} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-20 border-l-4 border-sky-400 pl-6"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-sky-400">warp rail · v34</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-xl text-sky-100/90">{cv.title}</p>
          <p className="mt-4 max-w-xl text-sm text-white/65">{cv.summary}</p>
        </motion.div>

        <div className="relative pl-8">
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-gradient-to-b from-sky-400 via-sky-400/40 to-transparent" />

          {cv.experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={reduce ? false : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1 }}
              className="relative mb-16 last:mb-0"
            >
              {!reduce && (
                <motion.div
                  className="absolute -left-8 top-6 h-px w-16 origin-left bg-gradient-to-r from-sky-400 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                />
              )}
              <div className="absolute -left-[19px] top-4 h-4 w-4 rounded-full border-2 border-sky-400 bg-[#020408] shadow-[0_0_20px_rgba(56,189,248,0.6)]" />

              <div className="rounded-2xl border border-sky-400/20 bg-sky-950/30 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-400/70">{job.period}</p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl">
                  {job.role} · {job.company}
                </h3>
                <p className="mt-1 text-sm text-white/50">{job.place}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 40)} className="flex gap-2">
                      <span className="text-sky-400">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-20 space-y-12 border-t border-white/10 pt-16">
          <SkillsCloud tone="dark" />
          <ProjectLinks tone="dark" />
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="rounded-full bg-sky-400 px-6 py-2.5 text-sm font-semibold text-black"
            >
              Email
            </a>
            <Link href="/goals" className="rounded-full border border-sky-400/40 px-6 py-2.5 text-sm text-sky-300">
              100 Goals
            </Link>
          </div>
          <ContactRow />
        </section>
      </div>
    </main>
  );
}
