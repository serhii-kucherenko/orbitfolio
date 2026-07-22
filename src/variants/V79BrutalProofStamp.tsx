"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Brutal Proof Stamp — black-and-white blocks + hire stamp; physical and direct. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#d4cfc4] p-3 text-black sm:p-6 md:p-8">
      <header className="relative border-[5px] border-black bg-[#f4f2eb] p-6 sm:p-10 md:p-12">
        <div className="flex flex-wrap justify-between gap-3 font-black uppercase tracking-wide">
          <span>Proof file 079</span>
          <span className="text-sm">{cv.location}</span>
        </div>
        <motion.h1
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="my-8 break-words font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.8] sm:text-8xl md:my-10 md:text-[8.5rem]"
        >
          {cv.name}
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">{cv.title}</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${cv.email}`}
                className="inline-block border-[5px] border-black bg-black px-5 py-3 text-sm font-black uppercase text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Stamp approved — email
              </a>
              <a
                href="/resume"
                className="inline-block border-[5px] border-black px-5 py-3 text-sm font-black uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Print stamp
              </a>
            </div>
            <ContactRow className="mt-6" />
          </div>
          <p className="text-base leading-7 sm:text-lg">{cv.summary}</p>
        </div>

        <div className="mt-10 flex flex-wrap items-end gap-6">
          <motion.div
            aria-hidden
            animate={reduce ? undefined : { rotate: [-7, -1, -7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block border-[6px] border-[#c4121a] px-5 py-3 text-2xl font-black uppercase tracking-wide text-[#c4121a] sm:text-3xl"
          >
            Hire-ready evidence
          </motion.div>
          <p className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-black/50">
            Ink date · verified · forwardable
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
              className="border-[5px] border-black bg-white p-4"
            >
              <p className="text-3xl font-black">{h.value}</p>
              <p className="mt-1 text-xs font-bold uppercase">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </header>

      <section className="mt-3 border-[5px] border-black bg-[#f4f2eb] p-6 sm:p-10 md:p-12">
        <h2 className="mb-10 bg-black p-4 text-3xl font-black uppercase text-white sm:text-4xl">Work / no spin</h2>
        <ExperienceList tone="light" />
      </section>

      <section className="mt-3 grid gap-3 md:grid-cols-2">
        <div className="border-[5px] border-black bg-[#f4f2eb] p-6">
          <h2 className="mb-7 text-2xl font-black uppercase sm:text-3xl">Tools</h2>
          <SkillsCloud tone="light" />
        </div>
        <div className="border-[5px] border-black bg-[#f4f2eb] p-6">
          <h2 className="mb-7 text-2xl font-black uppercase sm:text-3xl">Built</h2>
          <ProjectLinks tone="light" />
          <p className="mt-10 border-t-[5px] border-black pt-4 font-black">
            {cv.education.degree}
            <br />
            {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>

      <footer className="mt-3 border-[5px] border-black bg-black p-5 text-sm font-bold uppercase tracking-wide text-[#f4f2eb]">
        No soft edges. Stamp says hire-ready — email is the only next step that matters.
      </footer>
      <p className="mt-3 px-1 text-sm leading-6 text-black/55">
        Thick borders replace soft cards. If the stamp is readable in five seconds, the hire path is done.
      </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-black/55">
          Brutal stamp ink over vibe — the footer seals the hire path.
        </p>
      <p className="mt-2 px-1 font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-[0.3em] text-black/45">
        Zeta · brutal stamp · ink over vibe
      </p>
    </main>
  );
}
