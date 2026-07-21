"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Bauhaus Systems — steals Bauhaus blocks + systems sidebar clarity */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <main className="bg-[#f1f2ee] text-[#101010]">
      <div className="grid min-h-screen md:grid-cols-[280px_1fr]">
        <aside className="border-r-4 border-black bg-[#f2c94c] p-7">
          <div
            className={`size-24 rounded-full bg-[#e22d2d] ${reduceMotion ? "" : "transition-transform hover:translate-x-8"}`}
            aria-hidden
          />
          <h2 className="mt-10 text-2xl font-black uppercase">System manual 95</h2>
          <nav className="mt-12 space-y-3 font-bold">
            <p>00 / Profile</p>
            <p>01 / Roles</p>
            <p>02 / Stack</p>
            <p>03 / Work</p>
          </nav>
          <a
            href={`mailto:${cv.email}`}
            className="mt-12 inline-block border-4 border-black bg-black px-4 py-2 text-xs font-black uppercase text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Hire signal
          </a>
          <p className="mt-10 text-sm">{cv.location}</p>
        </aside>
        <div>
          <header className="border-b-4 border-black p-8 md:p-14">
            <p className="font-bold uppercase tracking-[0.3em]">{cv.title}</p>
            <h1 className="mt-7 text-7xl font-black uppercase leading-[0.85]">{cv.name}</h1>
            <p className="mt-8 max-w-4xl text-lg leading-8">{cv.summary}</p>
            <ContactRow className="mt-7" />
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {cv.highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`border-4 border-black p-4 ${i === 1 ? "bg-[#2455a4] text-white" : i === 2 ? "bg-[#e22d2d] text-white" : "bg-white"}`}
                >
                  <p className="text-3xl font-black">{h.value}</p>
                  <p className="text-xs font-bold uppercase">{h.label}</p>
                </div>
              ))}
            </div>
          </header>
          <section className="border-b-4 border-black p-8 md:p-14">
            <div className="mb-10 flex items-center gap-5">
              <span className="grid size-14 place-items-center bg-[#2455a4] text-2xl font-black text-white">
                01
              </span>
              <h2 className="text-4xl font-black">Experience specification</h2>
            </div>
            <ExperienceList tone="light" />
          </section>
          <section className="grid md:grid-cols-2">
            <div className="border-b-4 border-black p-8 md:border-b-0 md:border-r-4">
              <h2 className="mb-8 text-3xl font-black">02 / Capabilities</h2>
              <SkillsCloud tone="light" />
            </div>
            <div className="p-8">
              <h2 className="mb-8 text-3xl font-black">03 / Projects</h2>
              <ProjectLinks tone="light" />
              <p className="mt-12 border-t-4 border-black pt-5">
                {cv.education.degree} · {cv.education.school}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
