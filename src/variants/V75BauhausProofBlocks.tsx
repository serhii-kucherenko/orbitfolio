"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Bauhaus Proof Blocks — primary geometric blocks for each evidence class. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#e4dfd4] text-[#1a1a1a]">
      <header className="mx-auto grid max-w-6xl gap-5 px-6 pb-6 pt-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-10">
        <div className="relative overflow-hidden border-4 border-black bg-[#e31c23] p-8 text-white sm:p-12">
          <motion.div
            aria-hidden
            className="absolute -right-10 -top-10 size-40 bg-[#f5d76e]"
            style={{ borderRadius: "50%" }}
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-6 right-8 size-16 border-4 border-black bg-[#2b6cb0]"
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <p className="relative text-[10px] font-bold uppercase tracking-[0.35em]">
            Bauhaus · proof · {cv.location}
          </p>
          <h1 className="relative mt-4 font-[family-name:var(--font-display)] text-5xl font-black leading-none sm:text-6xl">
            {cv.name}
          </h1>
          <p className="relative mt-4 text-lg">{cv.title}</p>
        </div>
        <div className="flex flex-col justify-between border-4 border-black bg-[#1a1a1a] p-8 text-[#e8e4da]">
          <p className="text-sm leading-7 text-white/70">{cv.summary}</p>
          <div className="mt-8 space-y-4">
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${cv.email}`}
                className="inline-block self-start bg-[#f5d76e] px-5 py-2.5 text-sm font-bold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5d76e]"
              >
                Commission work
              </a>
              <a
                href="/resume"
                className="inline-block self-start border-2 border-[#f5d76e] px-5 py-2.5 text-sm font-bold text-[#f5d76e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5d76e]"
              >
                Flat plan PDF
              </a>
            </div>
            <ContactRow className="text-white/55" />
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 pb-8 sm:grid-cols-4 lg:px-10">
        {cv.highlights.map((h, i) => {
          const fills = ["#1a1a1a", "#e31c23", "#f5d76e", "#2b6cb0"];
          const text = i === 2 ? "text-black" : "text-white";
          return (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
              className={`border-4 border-black p-5 ${text}`}
              style={{ background: fills[i] }}
            >
              <p className="text-3xl font-black">{h.value}</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wider opacity-80">{h.label}</p>
            </motion.div>
          );
        })}
      </section>

      <section className="mx-auto max-w-6xl space-y-5 px-6 pb-28 lg:px-10">
        <div className="border-4 border-black bg-white p-6 sm:p-10">
          <h2 className="mb-8 text-3xl font-black uppercase tracking-tight">Experience block</h2>
          <ExperienceList tone="light" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="border-4 border-black bg-[#2b6cb0] p-6 text-white">
            <h2 className="mb-6 text-xl font-black uppercase">Skills block</h2>
            <SkillsCloud />
          </div>
          <div className="border-4 border-black bg-[#f5d76e] p-6 text-black">
            <h2 className="mb-6 text-xl font-black uppercase">Projects block</h2>
            <ProjectLinks tone="light" />
          </div>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-black/50">
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </section>
    </main>
  );
}
