"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="grid border-b border-black md:grid-cols-12">
        <div className="bg-[#ff342b] p-8 md:col-span-4"><span className="text-8xl font-black">20</span></div>
        <div className="p-8 md:col-span-8"><p className="text-xs uppercase tracking-[.4em]">{cv.title}</p><h1 className="mt-10 text-6xl font-bold leading-[.85] md:text-8xl">{cv.name}</h1><p className="mt-8 max-w-3xl text-lg">{cv.summary}</p><ContactRow className="mt-8" /></div>
      </header>
      <section className="grid border-b border-black md:grid-cols-4">
        {cv.highlights.map((item, index) => <div key={item.label} className={`border-black p-7 md:border-r ${reduceMotion ? "" : "transition-colors hover:bg-[#d9ff43]"}`}><span className="text-4xl font-black">{item.value}</span><p className="text-xs uppercase">{index + 1}. {item.label}</p></div>)}
      </section>
      <div className="grid md:grid-cols-12"><section className="border-black p-8 md:col-span-7 md:border-r"><h2 className="mb-10 text-sm font-bold uppercase tracking-[.3em]">01 / Experience</h2><ExperienceList tone="light" /></section><aside className="space-y-12 p-8 md:col-span-5"><div><h2 className="mb-6 text-sm font-bold uppercase">02 / Skills</h2><SkillsCloud tone="light" /></div><div><h2 className="mb-6 text-sm font-bold uppercase">03 / Projects</h2><ProjectLinks tone="light" /></div><p>{cv.education.degree} — {cv.education.school}</p></aside></div>
    </main>
  );
}
