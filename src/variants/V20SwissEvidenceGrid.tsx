"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Swiss Evidence Grid — modular 12-unit grid, hairline rules, signal-red accents, zero ornament. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <SmoothScroll>
    <main className="min-h-screen bg-[#e8e8e4] text-[#111111]">
      <header className="mx-auto grid max-w-6xl grid-cols-12 gap-0 border-x border-black/15 px-0 pt-16">
        <div className="col-span-12 border-b border-black/15 px-4 py-3 md:col-span-3 md:border-b-0 md:border-r">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em]">
            Grid 20 / A · Form
          </p>
          <p className="mt-8 text-xs leading-5 text-black/55">{cv.location}</p>
          <a
            href="/resume"
            className="mt-6 inline-block text-[10px] font-bold uppercase tracking-wider text-[#e11d48] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e11d48]"
          >
            Form PDF →
          </a>
        </div>
        <div className="col-span-12 border-b border-black/15 px-4 py-6 md:col-span-6 md:border-b-0 md:border-r">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-3 text-sm font-medium text-[#e11d48]">{cv.title}</p>
        </div>
        <div className="col-span-12 flex flex-col justify-between px-4 py-6 md:col-span-3">
          <a
            href={`mailto:${cv.email}`}
            className="inline-flex w-fit items-center bg-[#e11d48] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e11d48]"
          >
            Hire
          </a>
          <ContactRow className="mt-6 text-black/55" />
        </div>
      </header>

      <section className="mx-auto max-w-6xl border-x border-b border-black/15">
        <p className="border-b border-black/15 px-4 py-6 text-sm leading-7 text-black/70 md:columns-2 md:gap-8">
          {cv.summary}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.04 }}
              className={`border-black/15 px-4 py-6 ${i % 2 === 0 ? "border-r" : ""} md:border-r md:last:border-r-0`}
            >
              <p className="text-3xl font-bold tracking-tight">{h.value}</p>
              <p className="mt-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-black/45">
                {h.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-x border-b border-black/15 px-4 py-14">
        <div className="mb-8 flex items-baseline gap-4">
          <span className="font-[family-name:var(--font-mono)] text-xs text-[#e11d48]">02</span>
          <h2 className="text-2xl font-bold tracking-tight">Evidence</h2>
        </div>
        <ExperienceList tone="light" />
      </section>

      <section className="mx-auto grid max-w-6xl border-x border-b border-black/15 md:grid-cols-2">
        <div className="border-b border-black/15 px-4 py-12 md:border-b-0 md:border-r">
          <div className="mb-6 flex items-baseline gap-4">
            <span className="font-[family-name:var(--font-mono)] text-xs text-[#e11d48]">03</span>
            <h2 className="text-xl font-bold">Modules</h2>
          </div>
          <SkillsCloud tone="light" />
        </div>
        <div className="px-4 py-12">
          <div className="mb-6 flex items-baseline gap-4">
            <span className="font-[family-name:var(--font-mono)] text-xs text-[#e11d48]">04</span>
            <h2 className="text-xl font-bold">Artifacts</h2>
          </div>
          <ProjectLinks tone="light" />
          <p className="mt-10 font-[family-name:var(--font-mono)] text-xs text-black/45">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
      <footer className="mx-auto max-w-6xl border-x border-t border-black/15 px-4 py-8">
        <p className="max-w-2xl text-sm leading-7 text-black/55">
          International grid + Lenis: scan speed without jitter. Form, metrics, roles, artifacts — in that order.
        </p>
        <p className="mt-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#e11d48]">
          Grid 20 / colophon · {cv.location}
        </p>
      </footer>
    
      <footer className="border-t border-black/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-black/55">
          Editorial quiet needs enough copy density to feel published, not sparse.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-black/55">
          Lab floor rising — thin shells no longer pass as award craft.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-black/35">
          Lab · depth floor · 112
        </p>
      </footer>
</main>
    </SmoothScroll>
  );
}
