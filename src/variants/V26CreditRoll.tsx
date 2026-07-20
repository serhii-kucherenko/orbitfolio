"use client";

import { useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-amber-50">
      <Starfield density={45} color="#fbbf24" speed={0.02} />
      <div
        className={`relative z-10 mx-auto max-w-lg px-6 pb-[40vh] pt-[35vh] text-center ${
          reduce ? "" : "animate-[credits_55s_linear_infinite]"
        }`}
      >
        <style>{`@keyframes credits { from { transform: translateY(0); } to { transform: translateY(-65%); } }`}</style>
        <p className="text-xs tracking-[0.4em] text-amber-200/60">A CAREER BY</p>
        <h1 className="mt-6 font-[family-name:var(--font-serif)] text-5xl">{cv.name}</h1>
        <p className="mt-4 text-amber-100/70">{cv.title}</p>
        <p className="mt-10 text-sm leading-relaxed text-white/55">{cv.summary}</p>
        {cv.highlights.map((h) => (
          <div key={h.label} className="mt-10">
            <p className="font-[family-name:var(--font-display)] text-3xl text-amber-200">{h.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/40">{h.label}</p>
          </div>
        ))}
        {cv.experience.map((j) => (
          <div key={j.company} className="mt-14">
            <p className="text-xs text-amber-200/50">{j.period}</p>
            <h2 className="mt-2 text-2xl">{j.company}</h2>
            <p className="mt-1 text-sm text-white/60">{j.role}</p>
            <p className="mt-3 text-sm text-white/45">{j.bullets[0]}</p>
          </div>
        ))}
        <div className="mt-16 text-left">
          <SkillsCloud />
          <div className="mt-8">
            <ProjectLinks />
            <ContactRow className="mt-8 justify-center" />
          </div>
        </div>
        <p className="mt-20 text-xs text-white/30">— end titles —</p>
      </div>
    </main>
  );
}
