"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="bg-[#f7fafc] text-[#163047]">
      <header className="border-b bg-white p-6 md:p-12"><div className="mx-auto max-w-6xl"><div className="flex flex-wrap items-center gap-8"><div className={`grid size-24 place-items-center rounded-full bg-[#d8eef0] text-3xl font-bold ${reduceMotion ? "" : "transition-transform hover:rotate-3"}`}>SK</div><div className="flex-1"><p className="font-semibold text-[#187b7b]">Available for founding engineer roles</p><h1 className="text-5xl font-bold">{cv.name}</h1><p className="mt-2 text-xl">{cv.title}</p></div></div><p className="mt-8 max-w-4xl leading-7 text-slate-600">{cv.summary}</p><ContactRow className="mt-6 text-[#187b7b]" /></div></header>
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 p-6 md:grid-cols-4 md:p-12">{cv.highlights.map((item) => <div key={item.label} className="rounded-xl border bg-white p-5"><strong className="text-3xl">{item.value}</strong><p className="text-sm text-slate-500">{item.label}</p></div>)}</section>
      <div className="mx-auto grid max-w-6xl gap-10 p-6 md:grid-cols-[1.5fr_1fr] md:p-12"><section><h2 className="mb-8 text-3xl font-bold">Experience</h2><ExperienceList tone="light" /></section><aside className="space-y-12"><div><h2 className="mb-6 text-2xl font-bold">Skills</h2><SkillsCloud tone="light" /></div><div><h2 className="mb-6 text-2xl font-bold">Projects</h2><ProjectLinks tone="light" /></div><p className="text-sm">{cv.education.degree}<br />{cv.education.school}</p></aside></div>
    </main>
  );
}
