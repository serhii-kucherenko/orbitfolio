"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="bg-[#eef7f3] text-[#092d27]">
      <header className="mx-auto max-w-7xl p-6 py-16 md:p-14"><div className="grid gap-10 md:grid-cols-[2fr_1fr]"><div><p className="text-sm font-bold uppercase tracking-[.3em]">{cv.title}</p><h1 className="mt-4 text-7xl font-black leading-none">{cv.name}</h1><p className="mt-7 max-w-3xl text-lg leading-8">{cv.summary}</p><ContactRow className="mt-7" /></div><div className="grid grid-cols-2 gap-3">{cv.highlights.map((item) => <div key={item.label} className={`rounded-2xl bg-[#0d5b4d] p-5 text-white ${reduceMotion ? "" : "transition-transform hover:-translate-y-1"}`}><strong className="text-4xl">{item.value}</strong><p className="text-xs uppercase">{item.label}</p></div>)}</div></div></header>
      <section className="bg-[#092d27] p-6 text-white md:p-14"><div className="mx-auto max-w-7xl"><h2 className="mb-10 text-4xl font-black">Proof in under ten seconds</h2><ExperienceList tone="dark" /></div></section>
      <section className="mx-auto grid max-w-7xl gap-12 p-6 py-16 md:grid-cols-2 md:p-14"><div><h2 className="mb-8 text-3xl font-black">Complete toolkit</h2><SkillsCloud tone="light" /></div><div><h2 className="mb-8 text-3xl font-black">Open work</h2><ProjectLinks tone="light" /><p className="mt-12 border-t pt-5">{cv.education.degree} · {cv.education.school} · {cv.location}</p></div></section>
    </main>
  );
}
