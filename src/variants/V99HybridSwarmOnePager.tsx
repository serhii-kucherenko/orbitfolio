"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="relative overflow-hidden bg-[#06100d] text-white">
      <div aria-hidden className="absolute inset-0">{Array.from({ length: 18 }, (_, i) => <span key={i} className={`absolute size-2 rounded-full bg-emerald-300 ${reduceMotion ? "" : "animate-pulse"}`} style={{ left: `${(i * 37) % 97}%`, top: `${(i * 61) % 91}%`, animationDelay: `${i * 120}ms` }} />)}</div>
      <div className="relative mx-auto max-w-7xl p-6 md:p-12"><header className="grid gap-10 border-b border-emerald-300/20 py-16 md:grid-cols-[2fr_1fr]"><div><p className="text-emerald-300">{cv.title}</p><h1 className="mt-5 text-7xl font-black">{cv.name}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{cv.summary}</p><ContactRow className="mt-7" /></div><div className="grid grid-cols-2 gap-3">{cv.highlights.map((item) => <div key={item.label} className="rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-5"><strong className="text-4xl text-emerald-300">{item.value}</strong><p className="text-sm">{item.label}</p></div>)}</div></header>
        <section className="py-16"><h2 className="mb-10 text-4xl font-black">One-page evidence stream</h2><ExperienceList tone="dark" /></section>
        <section className="grid gap-12 border-t border-emerald-300/20 py-16 md:grid-cols-2"><div><h2 className="mb-8 text-3xl font-black">Agent toolset</h2><SkillsCloud /></div><div><h2 className="mb-8 text-3xl font-black">Deployed experiments</h2><ProjectLinks /><p className="mt-12 text-slate-400">{cv.education.degree} · {cv.education.school} · {cv.location}</p></div></section></div>
    </main>
  );
}
