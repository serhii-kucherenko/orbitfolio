"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Brutal Proof Stamp — hard borders, rubber-stamp hire signal, zero spin */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="bg-[#f4f4f0] p-3 text-black md:p-8">
      <header className="border-4 border-black p-6 md:p-12">
        <div className="flex justify-between font-black uppercase">
          <span>Proof file 079</span>
          <span>{cv.location}</span>
        </div>
        <motion.h1
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="my-10 break-words text-7xl font-black uppercase leading-[0.75] md:text-[10rem]"
        >
          {cv.name}
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black">{cv.title}</h2>
            <a
              href={`mailto:${cv.email}`}
              className="mt-6 inline-block border-4 border-black bg-black px-5 py-3 text-sm font-black uppercase text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Stamp approved — email
            </a>
            <ContactRow className="mt-7" />
          </div>
          <p className="text-lg leading-7">{cv.summary}</p>
        </div>
        <div
          className={`mt-8 inline-block rotate-[-4deg] border-8 border-[#d71920] p-4 text-3xl font-black uppercase text-[#d71920] ${reduce ? "" : "transition-transform hover:rotate-0"}`}
        >
          Hire-ready evidence
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border-4 border-black bg-white p-4">
              <p className="text-3xl font-black">{h.value}</p>
              <p className="mt-1 text-xs font-bold uppercase">{h.label}</p>
            </div>
          ))}
        </div>
      </header>
      <section className="mt-3 border-4 border-black p-6 md:p-12">
        <h2 className="mb-10 bg-black p-4 text-4xl font-black uppercase text-white">Work / no spin</h2>
        <ExperienceList tone="light" />
      </section>
      <section className="mt-3 grid gap-3 md:grid-cols-2">
        <div className="border-4 border-black p-6">
          <h2 className="mb-7 text-3xl font-black uppercase">Tools</h2>
          <SkillsCloud tone="light" />
        </div>
        <div className="border-4 border-black p-6">
          <h2 className="mb-7 text-3xl font-black uppercase">Built</h2>
          <ProjectLinks tone="light" />
          <p className="mt-10 border-t-4 border-black pt-4 font-black">
            {cv.education.degree}
            <br />
            {cv.education.school}
          </p>
        </div>
      </section>
    </main>
  );
}
