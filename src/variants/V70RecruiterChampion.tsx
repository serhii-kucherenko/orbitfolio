"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="bg-[#111820] text-white">
      <header className="mx-auto max-w-6xl px-6 py-20"><div className="flex flex-wrap justify-between gap-8"><div><span className="rounded-full bg-cyan-300 px-4 py-2 text-xs font-bold text-[#111820]">FOUNDING ENGINEER</span><h1 className="mt-8 text-7xl font-black">{cv.name}</h1><p className="mt-4 text-2xl text-cyan-200">{cv.title}</p></div><a href={`mailto:${cv.email}`} className={`self-start rounded-full border border-cyan-300 px-6 py-3 ${reduceMotion ? "" : "transition-colors hover:bg-cyan-300 hover:text-black"}`}>Start a conversation</a></div><p className="mt-10 max-w-4xl text-xl leading-8 text-slate-300">{cv.summary}</p><ContactRow className="mt-8" /></header>
      <section className="bg-cyan-300 p-6 text-[#111820] md:p-12"><div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">{cv.highlights.map((item) => <div key={item.label}><strong className="text-5xl">{item.value}</strong><p>{item.label}</p></div>)}</div></section>
      <div className="mx-auto max-w-6xl p-6 py-20"><h2 className="mb-12 text-4xl font-black">Full experience</h2><ExperienceList tone="dark" /><div className="mt-20 grid gap-16 border-t border-white/20 pt-16 md:grid-cols-2"><div><h2 className="mb-8 text-3xl font-black">Skills</h2><SkillsCloud /></div><div><h2 className="mb-8 text-3xl font-black">Projects</h2><ProjectLinks /><p className="mt-12 text-slate-400">{cv.education.degree} · {cv.education.school}</p></div></div></div>
    </main>
  );
}
