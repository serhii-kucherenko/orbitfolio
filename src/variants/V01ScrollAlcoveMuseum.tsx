"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="bg-[#070b0f] text-slate-100">
      <header className="grid min-h-screen place-items-center border-b border-cyan-300/20 p-8 text-center">
        <div className={reduceMotion ? "" : "animate-pulse"}>
          <p className="text-xs uppercase tracking-[.5em] text-cyan-300">Scroll alcove 01</p>
          <h1 className="mt-5 text-6xl font-black uppercase md:text-9xl">{cv.name}</h1>
          <p className="mt-4 text-xl text-cyan-100">{cv.title}</p>
          <p className="mx-auto mt-8 max-w-3xl leading-8 text-slate-300">{cv.summary}</p>
          <ContactRow className="mt-8 justify-center" />
        </div>
      </header>
      <div className="mx-auto max-w-6xl space-y-24 p-6 py-24 md:p-16">
        <section className="rounded-[3rem] border border-white/10 bg-white/5 p-8"><h2 className="mb-10 text-3xl">Career gallery</h2><ExperienceList tone="dark" /></section>
        <section className="grid gap-10 md:grid-cols-2"><div><h2 className="mb-8 text-3xl">Tool archive</h2><SkillsCloud /></div><div><h2 className="mb-8 text-3xl">Selected work</h2><ProjectLinks /></div></section>
        <footer className="border-t border-white/15 pt-8 text-sm text-slate-400">{cv.education.degree} · {cv.education.school}</footer>
      </div>
    </main>
  );
}
