"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

const toc = [
  { id: "profile", label: "00 / Profile" },
  { id: "roles", label: "01 / Roles" },
  { id: "stack", label: "02 / Stack" },
  { id: "work", label: "03 / Work" },
] as const;

/** Hybrid Bauhaus Systems — geometric confidence + inspectable docs structure. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <SmoothScroll>
      <main className="min-h-screen overflow-x-hidden bg-[#e8ebe4] text-[#101010]">
        <header className="border-b-4 border-black">
          <div className="mx-auto grid max-w-6xl lg:grid-cols-[200px_1fr]">
            <div className="relative flex min-h-[200px] flex-col justify-between overflow-hidden border-b-4 border-black bg-[#f0c43a] p-6 lg:min-h-0 lg:border-b-0 lg:border-r-4">
              <motion.div
                aria-hidden
                className="size-16 rounded-full bg-[#d91f1f] sm:size-20"
                animate={reduce ? undefined : { x: [0, 18, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div>
                <p className="mt-8 text-[10px] font-black uppercase tracking-[0.28em]">System manual 95</p>
                <p className="mt-2 text-sm font-semibold">{cv.location}</p>
              </div>
              <motion.div
                aria-hidden
                className="absolute -bottom-6 -right-6 size-24 border-4 border-black bg-[#2455a4]"
                animate={reduce ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div id="profile" className="scroll-mt-24 p-6 sm:p-10">
              <p className="font-bold uppercase tracking-[0.3em]">{cv.title}</p>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-black uppercase leading-[0.92] sm:text-6xl lg:text-7xl">
                {cv.name}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-black/80">{cv.summary}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${cv.email}`}
                  className="inline-block border-4 border-black bg-black px-4 py-2 text-xs font-black uppercase text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Hire signal
                </a>
                <a
                  href="/resume"
                  className="inline-block border-4 border-black bg-white px-4 py-2 text-xs font-black uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Manual PDF
                </a>
              </div>
              <ContactRow className="mt-6" />
            </div>
          </div>

          <nav className="border-t-4 border-black bg-white">
            <div className="mx-auto flex max-w-6xl flex-wrap gap-1 p-2 sm:gap-2 sm:p-3">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="border-2 border-transparent px-3 py-2 text-xs font-black uppercase tracking-wide hover:border-black hover:bg-[#f0c43a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <section className="mx-auto grid max-w-6xl grid-cols-2 gap-0 border-b-4 border-black sm:grid-cols-4">
          {cv.highlights.map((h, i) => {
            const fills = ["bg-white", "bg-[#2455a4] text-white", "bg-[#d91f1f] text-white", "bg-[#f0c43a]"];
            return (
              <motion.div
                key={h.label}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduce ? 0 : i * 0.05 }}
                className={`border-black p-5 sm:p-6 ${fills[i]} ${i % 2 === 1 ? "border-l-4" : ""} ${i > 1 ? "border-t-4 sm:border-t-0" : ""} ${i === 2 ? "sm:border-l-4" : ""} ${i === 3 ? "border-l-4" : ""}`}
              >
                <p className="text-3xl font-black">{h.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider opacity-80">{h.label}</p>
              </motion.div>
            );
          })}
        </section>

        <section id="roles" className="scroll-mt-24 border-b-4 border-black">
          <div className="mx-auto max-w-6xl p-6 sm:p-10">
            <div className="mb-8 flex items-center gap-4">
              <span className="grid size-12 place-items-center bg-[#2455a4] text-xl font-black text-white sm:size-14 sm:text-2xl">
                01
              </span>
              <h2 className="text-2xl font-black sm:text-4xl">Experience specification</h2>
            </div>
            <ExperienceList tone="light" />
          </div>
        </section>

        <section className="border-b-4 border-black">
          <div className="mx-auto grid max-w-6xl md:grid-cols-2">
            <div id="stack" className="scroll-mt-24 border-b-4 border-black p-6 sm:p-10 md:border-b-0 md:border-r-4">
              <h2 className="mb-6 text-2xl font-black sm:text-3xl">02 / Capabilities</h2>
              <SkillsCloud tone="light" />
            </div>
            <div id="work" className="scroll-mt-24 p-6 sm:p-10">
              <h2 className="mb-6 text-2xl font-black sm:text-3xl">03 / Projects</h2>
              <ProjectLinks tone="light" />
              <p className="mt-10 border-t-4 border-black pt-5 text-sm font-semibold">
                {cv.education.degree} · {cv.education.school} · {cv.location}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b-4 border-black bg-white">
          <div className="mx-auto max-w-6xl p-6 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">Lesson</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-black/75">
              Geometry carries hierarchy; the TOC keeps recruiters oriented. Yellow is a hire signal in the
              header — never an empty wall beside the resume.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="border-4 border-black bg-[#d91f1f] px-4 py-2 text-xs font-black uppercase text-white">
                Form
              </span>
              <span className="border-4 border-black bg-[#2455a4] px-4 py-2 text-xs font-black uppercase text-white">
                Function
              </span>
              <span className="border-4 border-black bg-[#f0c43a] px-4 py-2 text-xs font-black uppercase">
                Proof
              </span>
            </div>
          </div>
        </section>

        <footer className="px-6 py-8">
          <p className="mx-auto max-w-6xl text-sm leading-7 text-black/55">
            Bauhaus systems hybrid — geometry classes map to proof, not decoration alone.
          </p>
          <p className="mx-auto mt-3 max-w-6xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-black/35">
            Eta · hybrid · craft depth 130
          </p>
        </footer>
      </main>
    </SmoothScroll>
  );
}
