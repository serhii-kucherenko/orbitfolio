"use client";

import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const tape = [...cv.skills.ai, ...cv.skills.infra, ...cv.highlights.map((h) => `${h.value} ${h.label}`)].join(
    "   ·   ",
  );
  return (
    <main className="min-h-screen bg-[#020617] text-sky-100">
      <div className="fixed top-16 z-20 w-full overflow-hidden border-y border-sky-400/30 bg-sky-950/50 py-2 font-[family-name:var(--font-mono)] text-xs text-sky-300">
        <div className="animate-[marquee_40s_linear_infinite] whitespace-nowrap pl-[100%]">
          {tape}   {tape}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <Starfield density={110} color="#7dd3fc" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-36">
        <p className="font-[family-name:var(--font-mono)] text-xs text-sky-400">SAT-01 // UPLINK OK</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl">{cv.name}</h1>
        <p className="mt-3">{cv.title}</p>
        <p className="mt-6 text-sm text-white/60">{cv.summary}</p>
        <div className="mt-12 space-y-4 font-[family-name:var(--font-mono)] text-xs">
          {cv.experience.map((j) => (
            <div key={j.company} className="rounded border border-sky-500/20 bg-black/40 p-4">
              <p className="text-sky-400">
                [{j.period}] {j.company}
              </p>
              <p className="mt-1 text-white/80">{j.role}</p>
              <p className="mt-2 text-white/50">{j.bullets[0]}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <SkillsCloud />
          <div className="mt-8">
            <ProjectLinks />
            <ContactRow className="mt-8" />
          </div>
        </div>
      </div>
    </main>
  );
}
