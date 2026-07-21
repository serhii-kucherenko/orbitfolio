"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="bg-[#0a1017] bg-[radial-gradient(#294257_1px,transparent_1px)] [background-size:28px_28px] text-slate-100">
      <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-5 border-b border-sky-300/20 bg-[#0a1017]/90 p-5 backdrop-blur"><strong>{cv.name}</strong><ContactRow /><span className="text-xs text-sky-300">{reduceMotion ? "STATIC MAP" : "PAN THE EVIDENCE"}</span></header>
      <div className="p-8 md:p-20">
        <section className="mb-20 max-w-4xl rounded-3xl border border-sky-300/30 bg-[#102131] p-10 shadow-2xl"><p className="text-sky-300">{cv.title}</p><h1 className="my-6 text-6xl font-black">A career mapped as connected evidence.</h1><p className="text-lg leading-8 text-slate-300">{cv.summary}</p></section>
        <div className="grid items-start gap-10 xl:grid-cols-[1.4fr_.8fr]"><section className="rounded-3xl border border-white/10 bg-black/30 p-8"><h2 className="mb-10 text-3xl">Experience coordinates</h2><ExperienceList tone="dark" /></section><div className="space-y-10 xl:translate-y-32"><section className="rounded-3xl border border-sky-300/20 bg-[#101922] p-7"><h2 className="mb-6 text-2xl">Capability nodes</h2><SkillsCloud /></section><section className="rounded-3xl border border-sky-300/20 bg-[#101922] p-7"><h2 className="mb-6 text-2xl">Project beacons</h2><ProjectLinks /></section></div></div>
        <footer className="mt-28">{cv.education.degree} · {cv.education.school} · {cv.phone}</footer>
      </div>
    </main>
  );
}
