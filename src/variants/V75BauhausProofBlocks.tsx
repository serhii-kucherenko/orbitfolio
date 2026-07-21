"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Bauhaus Proof Blocks — primary color blocks, hard rules, evidence first */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="bg-[#ecebe5] text-black">
      <header className="relative overflow-hidden border-b-8 border-black p-8 md:p-16">
        <div
          className={`absolute right-8 top-8 size-40 rounded-full bg-[#e2382b] ${reduce ? "" : "transition-transform hover:scale-125"}`}
          aria-hidden
        />
        <p className="relative font-bold uppercase tracking-[0.4em]">{cv.title}</p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative mt-10 max-w-4xl text-7xl font-black uppercase leading-[0.8] md:text-9xl"
        >
          {cv.name}
        </motion.h1>
        <p className="relative mt-10 max-w-3xl text-xl leading-8">{cv.summary}</p>
        <div className="relative mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="border-4 border-black bg-black px-5 py-3 text-sm font-black uppercase text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact block
          </a>
          <ContactRow className="relative" />
        </div>
      </header>
      <section className="grid border-b-8 border-black md:grid-cols-4">
        {cv.highlights.map((item, i) => (
          <div
            key={item.label}
            className={`border-black p-8 md:border-r ${i === 1 ? "bg-[#1268b3] text-white" : i === 2 ? "bg-[#f2c230]" : ""}`}
          >
            <strong className="text-5xl">{item.value}</strong>
            <p className="font-bold uppercase">{item.label}</p>
          </div>
        ))}
      </section>
      <section className="border-b-8 border-black p-8 md:p-16">
        <h2 className="mb-10 text-5xl font-black uppercase">Experience block</h2>
        <ExperienceList tone="light" />
      </section>
      <section className="grid md:grid-cols-2">
        <div className="border-b-8 border-black bg-[#1268b3] p-8 text-white md:border-b-0 md:border-r-8 md:p-12">
          <h2 className="mb-8 text-4xl font-black uppercase">Skills</h2>
          <SkillsCloud />
        </div>
        <div className="p-8 md:p-12">
          <h2 className="mb-8 text-4xl font-black uppercase">Projects</h2>
          <ProjectLinks tone="light" />
          <p className="mt-10 font-bold">
            {cv.education.degree} · {cv.education.school}
          </p>
        </div>
      </section>
    </main>
  );
}
