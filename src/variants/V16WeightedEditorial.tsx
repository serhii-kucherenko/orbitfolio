"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="bg-[#f2f5f7] text-[#111820]">
      <header className="border-b-[12px] border-[#d12d25] px-6 py-10 md:px-14">
        <div className="flex justify-between text-xs font-bold uppercase tracking-[.25em]"><span>Career edition</span><span>{cv.location}</span></div>
        <h1 className={`my-8 border-y-4 border-black py-5 text-center text-6xl font-black uppercase leading-none md:text-9xl ${reduceMotion ? "" : "transition-transform hover:scale-[1.01]"}`}>{cv.name}</h1>
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><h2 className="text-3xl font-black">{cv.title}</h2><p className="columns-1 text-lg leading-8 md:columns-2">{cv.summary}</p></div>
        <ContactRow className="mt-8 border-t border-black pt-4" />
      </header>
      <div className="grid gap-0 md:grid-cols-[2fr_1fr]">
        <section className="border-r-2 border-black p-8 md:p-14"><h2 className="mb-10 text-5xl font-black uppercase">The record</h2><ExperienceList tone="light" /></section>
        <aside className="space-y-14 p-8 md:p-10"><div><h2 className="mb-6 text-2xl font-black uppercase">Capabilities</h2><SkillsCloud tone="light" /></div><div><h2 className="mb-6 text-2xl font-black uppercase">Projects</h2><ProjectLinks tone="light" /></div><p className="border-t-4 border-black pt-5 font-bold">{cv.education.degree}<br />{cv.education.school}</p></aside>
      </div>
    </main>
  );
}
