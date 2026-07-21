"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Snap Impact Chapters — full-viewport snap chapters for recruiter speed */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  const snap = reduceMotion ? "" : "snap-y snap-mandatory scroll-smooth";

  return (
    <main className={`h-screen overflow-y-auto bg-[#101820] text-white ${snap}`}>
      <section className="grid min-h-screen snap-start place-items-center bg-[#f2aa4c] p-8 text-[#101820]">
        <div>
          <p className="uppercase tracking-[0.4em]">{cv.title}</p>
          <h1 className="mt-6 text-7xl font-black md:text-9xl">{cv.name}</h1>
          <p className="mt-8 max-w-3xl text-xl">{cv.summary}</p>
          <a
            href={`mailto:${cv.email}`}
            className="mt-8 inline-block rounded-full bg-[#101820] px-6 py-3 text-sm font-bold text-[#f2aa4c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101820]"
          >
            Email to hire
          </a>
          <ContactRow className="mt-8" />
        </div>
      </section>
      <section className="min-h-screen snap-start bg-[#101820] p-8 md:p-16">
        <h2 className="mb-8 text-5xl font-black">00 — IMPACT</h2>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-white/15 p-5">
              <p className="text-4xl font-black text-[#f2aa4c]">{h.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/50">{h.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="min-h-screen snap-start p-8 md:p-16">
        <h2 className="mb-12 text-5xl font-black">01 — CAREER</h2>
        <div className="mx-auto max-w-4xl">
          <ExperienceList tone="dark" />
        </div>
      </section>
      <section className="min-h-screen snap-start bg-[#e8edf2] p-8 text-[#101820] md:p-16">
        <h2 className="mb-12 text-5xl font-black">02 — SYSTEMS</h2>
        <SkillsCloud tone="light" />
      </section>
      <section className="min-h-screen snap-start p-8 md:p-16">
        <h2 className="mb-12 text-5xl font-black">03 — LAB</h2>
        <ProjectLinks />
        <footer className="mt-20 border-t border-white/20 pt-6">
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </footer>
      </section>
    </main>
  );
}
