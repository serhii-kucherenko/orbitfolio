"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#090c10] p-4 text-slate-200 md:p-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/15 bg-[#11161d] shadow-2xl">
        <header className="border-b border-white/10 p-5"><div className="rounded-lg border border-emerald-300/30 bg-black/40 px-5 py-4 font-mono text-emerald-300">⌘ K &nbsp; Search {cv.name}&apos;s career… <span className={reduceMotion ? "hidden" : "animate-pulse"}>▌</span></div></header>
        <div className="grid md:grid-cols-[240px_1fr]"><nav className="border-r border-white/10 p-5 font-mono text-sm"><p className="mb-4 text-white/40">COMMANDS</p>{["Identity","Experience","Capabilities","Projects","Contact"].map((item, i) => <a key={item} href={`#cmd-${i}`} className="block rounded px-3 py-3 hover:bg-emerald-300/10">› {item}</a>)}</nav>
          <div><section id="cmd-0" className="border-b border-white/10 p-8"><p className="font-mono text-emerald-300">{cv.title}</p><h1 className="mt-4 text-6xl font-bold">{cv.name}</h1><p className="mt-6 max-w-3xl leading-7 text-slate-400">{cv.summary}</p><ContactRow className="mt-7" /></section>
            <section id="cmd-1" className="border-b border-white/10 p-8"><h2 className="mb-8 font-mono text-emerald-300">run experience --all</h2><ExperienceList tone="dark" /></section>
            <section id="cmd-2" className="border-b border-white/10 p-8"><h2 className="mb-8 font-mono text-emerald-300">inspect skills</h2><SkillsCloud /></section>
            <section id="cmd-3" className="p-8"><h2 className="mb-8 font-mono text-emerald-300">open projects</h2><ProjectLinks /><p className="mt-12 text-sm text-white/50">{cv.education.degree} · {cv.education.school}</p></section></div></div>
      </div>
    </main>
  );
}
