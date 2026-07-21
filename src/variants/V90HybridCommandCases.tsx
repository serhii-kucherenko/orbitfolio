"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="bg-[#111315] text-[#f5f0e8]">
      <header className="grid min-h-[75vh] border-b border-amber-300/30 md:grid-cols-[1fr_2fr]"><aside className="border-r border-amber-300/30 p-8 font-mono text-amber-300"><p>CASE INDEX / 90</p><p className="mt-8">{reduceMotion ? "AUTO: OFF" : "AUTO: READY"}</p>{cv.highlights.map((item) => <p key={item.label} className="mt-5">{item.value} :: {item.label}</p>)}</aside><div className="p-8 md:p-16"><p className="text-amber-300">{cv.title}</p><h1 className="mt-5 text-7xl font-black">{cv.name}</h1><p className="mt-8 max-w-3xl text-xl leading-8 text-stone-300">{cv.summary}</p><ContactRow className="mt-8" /></div></header>
      <div className="grid md:grid-cols-[260px_1fr]"><nav className="sticky top-0 h-fit p-8 font-mono text-sm text-amber-300"><p>01 IDENTITY</p><p>02 CASE HISTORY</p><p>03 SYSTEMS</p><p>04 OPEN SOURCE</p></nav><div className="border-l border-amber-300/30"><section className="p-8 md:p-14"><h2 className="mb-10 text-4xl font-black">Employer case history</h2><ExperienceList tone="dark" /></section><section className="grid gap-12 border-t border-amber-300/30 p-8 md:grid-cols-2 md:p-14"><div><h2 className="mb-8 text-3xl font-black">System inventory</h2><SkillsCloud /></div><div><h2 className="mb-8 text-3xl font-black">Project files</h2><ProjectLinks /><p className="mt-12">{cv.education.degree} · {cv.education.school}</p></div></section></div></div>
    </main>
  );
}
