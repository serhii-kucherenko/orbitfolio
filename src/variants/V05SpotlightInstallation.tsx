"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Spotlight Installation — dark gallery; one moving spotlight stages claims in turn. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#080705] text-[#f4eee4]">
      <header className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between overflow-hidden px-6 py-24 md:px-10">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-40 h-[720px] w-[720px] rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(255,231,180,.3), transparent 68%)" }}
          animate={reduce ? undefined : { x: ["-25%", "55%", "-25%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative flex justify-between border-b border-[#f2c778]/25 pb-4 text-[10px] uppercase tracking-[0.4em] text-[#f2c778]">
          <span>Installation 05</span>
          <span>One claim at a time</span>
        </div>
        <div className="relative py-20">
          <p className="mb-5 text-sm text-[#f2c778]">{cv.title}</p>
          <h1 className="max-w-5xl font-[family-name:var(--font-serif)] text-6xl leading-[0.86] sm:text-8xl lg:text-[8.5rem]">
            {cv.name}
          </h1>
          <p className="mt-10 max-w-xl text-sm leading-7 text-white/55">{cv.summary}</p>
        </div>
        <div className="relative flex flex-wrap items-center justify-between gap-6">
          <ContactRow className="text-white/55" />
          <a
            href={`mailto:${cv.email}`}
            className="border border-[#f2c778] bg-[#f2c778] px-6 py-3 text-sm font-bold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2c778]"
          >
            Put my work in focus
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="mb-14 text-center text-[10px] uppercase tracking-[0.45em] text-[#f2c778]">
          Four illuminated claims
        </p>
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {cv.highlights.map((highlight, index) => (
            <motion.article
              key={highlight.label}
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              className={`flex min-h-64 flex-col justify-center border-t border-[#f2c778]/25 ${index % 2 ? "md:translate-y-20" : ""}`}
              style={{ background: "radial-gradient(circle at 50% 45%, rgba(242,199,120,.14), transparent 55%)" }}
            >
              <strong className="font-[family-name:var(--font-serif)] text-6xl text-[#f2c778] sm:text-8xl">
                {highlight.value}
              </strong>
              <span className="mt-4 text-xs uppercase tracking-[0.3em] opacity-55">{highlight.label}</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[0.28fr_0.72fr] md:px-10">
        <h2 className="font-[family-name:var(--font-serif)] text-4xl text-[#f2c778]">The exhibited record</h2>
        <ExperienceList tone="dark" />
      </section>

      <section className="border-t border-[#f2c778]/20 bg-[#100e0a] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-8 text-xs uppercase tracking-[0.35em] text-[#f2c778]">Materials</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-8 text-xs uppercase tracking-[0.35em] text-[#f2c778]">Editions</h2>
            <ProjectLinks />
            <p className="mt-10 text-xs text-white/35">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
