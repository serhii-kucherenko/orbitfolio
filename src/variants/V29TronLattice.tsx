"use client";

import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

/** Tron Lattice */
export function Variant() {

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000814] text-cyan-50">
      <div className="absolute inset-x-0 bottom-0 h-[50vh] opacity-80" style={{background:"linear-gradient(#00f0ff22,transparent), repeating-linear-gradient(90deg,#00f0ff33 0 1px,transparent 1px 48px), repeating-linear-gradient(#00f0ff33 0 1px,transparent 1px 48px)", transform:"perspective(600px) rotateX(60deg)", transformOrigin:"bottom"}} />
      <Starfield density={70} color="#00f0ff" speed={0.14} />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl" style={{textShadow:"0 0 20px #00f0ff"}}>{cv.name}</h1>
        <p className="mt-4 text-cyan-300">{cv.title}</p>
        <p className="mt-6 text-sm text-white/60">{cv.summary}</p>
        <section className="mt-14"><ExperienceList tone="dark" /></section>
        <section className="mt-14"><SkillsCloud /><div className="mt-8"><ProjectLinks /><ContactRow className="mt-8" /></div></section>
      </div>
    </main>
  );
}
