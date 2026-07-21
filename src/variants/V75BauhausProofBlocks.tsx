"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Bauhaus Proof Blocks — primary geometric blocks give each evidence class distinct weight. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#f2efe6] text-[#1a1a1a]">
      <header className="mx-auto grid max-w-6xl gap-6 px-6 pb-8 pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div className="relative overflow-hidden border-4 border-black bg-[#e31c23] p-8 text-white sm:p-12">
          <motion.div
            aria-hidden
            className="absolute -right-10 -top-10 size-40 rounded-full bg-[#f5d76e]"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <p className="relative text-[10px] font-bold uppercase tracking-[0.35em]">Bauhaus · proof</p>
          <h1 className="relative mt-4 font-[family-name:var(--font-display)] text-5xl font-black leading-none sm:text-6xl">
            {cv.name}
          </h1>
          <p className="relative mt-4 text-lg">{cv.title}</p>
        </div>
        <div className="flex flex-col justify-between border-4 border-black bg-[#1a1a1a] p-8 text-[#f2efe6]">
          <p className="text-sm leading-7 text-white/70">{cv.summary}</p>
          <a
            href={`mailto:${cv.email}`}
            className="mt-8 inline-block self-start bg-[#f5d76e] px-5 py-2.5 text-sm font-bold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5d76e]"
          >
            Commission work
          </a>
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

      <section className="mx-auto max-w-6xl space-y-12 px-6 pb-28 lg:px-10">
        <div className="border-4 border-black bg-white p-6 sm:p-10">
          <h2 className="mb-8 text-3xl font-black uppercase tracking-tight">Experience block</h2>
          <ExperienceList tone="light" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border-4 border-black bg-[#2b6cb0] p-6 text-white">
            <h2 className="mb-6 text-xl font-black uppercase">Skills block</h2>
            <SkillsCloud />
          </div>
          <div className="border-4 border-black bg-[#f5d76e] p-6 text-black">
            <h2 className="mb-6 text-xl font-black uppercase">Projects block</h2>
            <ProjectLinks tone="light" />
          </div>
        </div>
        <ContactRow />
        <p className="text-xs font-bold uppercase tracking-widest text-black/50">
          {cv.education.degree} · {cv.education.school}
        </p>
      </section>
    </main>
  );
}
