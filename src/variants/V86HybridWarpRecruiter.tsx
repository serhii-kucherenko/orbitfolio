"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Warp Recruiter — warp depth + ten-second hire clarity. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";

  return (
    <main className="overflow-hidden bg-[#010609] text-white [perspective:1100px]">
      <header className="relative grid min-h-[92vh] place-items-center px-6 py-24 text-center">
        <div
          className="absolute inset-0 bg-[repeating-radial-gradient(ellipse_at_center,transparent_0_26px,#1e6b89_28px_29px)] opacity-30"
          aria-hidden
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
          animate={reduce ? undefined : { scaleX: [0.4, 1, 0.4], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div
          className={`relative max-w-5xl ${reduce ? "" : "[transform:translateZ(80px)] transition-transform duration-700 hover:[transform:translateZ(120px)]"}`}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.5em] text-cyan-300">
            Hybrid 86 · warp + hire
          </p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-8 font-[family-name:var(--font-display)] text-6xl font-black sm:text-8xl md:text-9xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl">{cv.summary}</p>
          <p className="mt-4 text-cyan-200/80">{cv.title}</p>
          <ContactRow className="mt-8 justify-center text-cyan-100/70" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${cv.email}`}
              className={`rounded-full bg-cyan-300 px-6 py-3 font-bold text-black ${focus}`}
            >
              Recruit me
            </a>
            <a
              href={cv.github}
              target="_blank"
              rel="noreferrer"
              className={`rounded-full border border-white/40 px-6 py-3 ${focus}`}
            >
              View code
            </a>
            <Link href="/resume" className={`rounded-full border border-white/40 px-6 py-3 ${focus}`}>
              Printable resume
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {cv.highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
              className="rounded-2xl border border-cyan-300/25 bg-cyan-300/5 p-6"
            >
              <strong className="text-4xl text-cyan-300">{item.value}</strong>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
        <h2 className="mb-10 mt-16 text-4xl font-black">Experience trajectory</h2>
        <ExperienceList tone="dark" />
      </section>

      <section className="grid gap-12 border-t border-white/10 px-6 py-16 md:grid-cols-2 md:px-16">
        <div>
          <h2 className="mb-8 text-3xl font-black">Capability stack</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-8 text-3xl font-black">Shipped work</h2>
          <ProjectLinks />
          <p className="mt-12 text-slate-400">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
  );
}
