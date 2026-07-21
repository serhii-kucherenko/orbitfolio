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
      <main className="min-h-screen bg-[#e8ebe4] text-[#101010]">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-b-4 border-black bg-[#f0c43a] p-7 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r-4">
          <motion.div
            aria-hidden
            className="size-20 rounded-full bg-[#d91f1f]"
            animate={reduce ? undefined : { x: [0, 28, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <h2 className="mt-10 text-xl font-black uppercase tracking-tight">System manual 95 · {cv.location}</h2>
          <nav className="mt-10 space-y-2 font-bold">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-12 flex flex-col gap-2">
            <a
              href={`mailto:${cv.email}`}
              className="inline-block border-4 border-black bg-black px-4 py-2 text-xs font-black uppercase text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Hire signal
            </a>
            <a
              href="/resume"
              className="inline-block border-4 border-black px-4 py-2 text-xs font-black uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Manual PDF
            </a>
          </div>
          <p className="mt-8 text-sm font-semibold">{cv.location}</p>
        </aside>

        <div>
          <header id="profile" className="scroll-mt-4 border-b-4 border-black p-8 md:p-12">
            <p className="font-bold uppercase tracking-[0.3em]">{cv.title}</p>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-black uppercase leading-[0.9] sm:text-7xl">
              {cv.name}
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-8">{cv.summary}</p>
            <ContactRow className="mt-7" />
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {cv.highlights.map((h, i) => {
                const fills = ["bg-white", "bg-[#2455a4] text-white", "bg-[#d91f1f] text-white", "bg-white"];
                return (
                  <div key={h.label} className={`border-4 border-black p-4 ${fills[i]}`}>
                    <p className="text-3xl font-black">{h.value}</p>
                    <p className="text-xs font-bold uppercase">{h.label}</p>
                  </div>
                );
              })}
            </div>
          </header>

          <section id="roles" className="scroll-mt-4 border-b-4 border-black p-8 md:p-12">
            <div className="mb-10 flex items-center gap-5">
              <span className="grid size-14 place-items-center bg-[#2455a4] text-2xl font-black text-white">01</span>
              <h2 className="text-3xl font-black sm:text-4xl">Experience specification</h2>
            </div>
            <ExperienceList tone="light" />
          </section>

          <section className="grid md:grid-cols-2">
            <div id="stack" className="scroll-mt-4 border-b-4 border-black p-8 md:border-b-0 md:border-r-4">
              <h2 className="mb-8 text-2xl font-black sm:text-3xl">02 / Capabilities</h2>
              <SkillsCloud tone="light" />
            </div>
            <div id="work" className="scroll-mt-4 p-8">
              <h2 className="mb-8 text-2xl font-black sm:text-3xl">03 / Projects</h2>
              <ProjectLinks tone="light" />
              <p className="mt-12 border-t-4 border-black pt-5 font-semibold">
                {cv.education.degree} · {cv.education.school} · {cv.location}
              </p>
            </div>
          </section>
        </div>
      </div>
      </main>
    </SmoothScroll>
  );
}
