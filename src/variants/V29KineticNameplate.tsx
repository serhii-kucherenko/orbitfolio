"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Kinetic Nameplate — oversized moving name settles into evidence */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <main className="overflow-hidden bg-[#071713] text-[#b9ffd5]">
      <header className="relative min-h-screen p-8 md:p-16">
        <motion.p
          animate={reduceMotion ? {} : { x: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="text-sm uppercase tracking-[0.5em]"
        >
          {cv.title}
        </motion.p>
        <h1 className="mt-20 text-[17vw] font-black uppercase leading-[0.7] tracking-[-0.09em]">
          {cv.name.split(" ").map((part) => (
            <motion.span
              key={part}
              initial={reduceMotion ? false : { x: "-20vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="block"
            >
              {part}
            </motion.span>
          ))}
        </h1>
        <p className="ml-auto mt-16 max-w-2xl text-xl leading-8">{cv.summary}</p>
        <div className="mt-10 flex flex-wrap justify-end gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="rounded-full bg-[#b9ffd5] px-5 py-2.5 text-sm font-bold text-[#071713] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b9ffd5]"
          >
            Start a conversation
          </a>
          <ContactRow className="justify-end" />
        </div>
        <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:ml-auto">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-xl border border-[#b9ffd5]/25 p-3">
              <p className="text-2xl font-black">{h.value}</p>
              <p className="text-[10px] uppercase opacity-60">{h.label}</p>
            </div>
          ))}
        </div>
      </header>
      <section className="rotate-[-1deg] bg-[#b9ffd5] p-8 text-[#071713] md:p-16">
        <h2 className="mb-10 text-5xl font-black uppercase">Motion / impact</h2>
        <ExperienceList tone="light" />
      </section>
      <section className="grid gap-16 p-8 md:grid-cols-2 md:p-16">
        <div>
          <h2 className="mb-8 text-4xl font-black">STACK</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-8 text-4xl font-black">OUTPUT</h2>
          <ProjectLinks />
          <p className="mt-16 text-sm">
            {cv.education.degree} · {cv.education.school}
          </p>
        </div>
      </section>
    </main>
  );
}
