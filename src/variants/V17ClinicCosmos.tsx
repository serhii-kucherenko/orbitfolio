"use client";

import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

/** Clinic Cosmos */
export function Variant() {

  return (
    <main className="min-h-screen bg-[#071416] text-[#e7fbf7]">
      <Starfield density={80} color="#5eead4" speed={0.05} />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 pb-28 pt-28 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs uppercase tracking-[0.3em] text-teal-400/80">Healthcare AI · calm systems</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
          <p className="mt-3 text-teal-100/70">{cv.title}</p>
          <p className="mt-6 text-sm leading-relaxed text-white/60">{cv.summary}</p>
          <ContactRow className="mt-8 text-teal-200" />
        </aside>
        <div className="space-y-12 rounded-[2rem] border border-teal-500/20 bg-teal-950/20 p-8 backdrop-blur">
          <ExperienceList tone="dark" />
          <SkillsCloud />
          <ProjectLinks />
        </div>
      </div>
    </main>
  );
}
