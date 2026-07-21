"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="overflow-hidden bg-[#07111f] text-white">
      <header className="mx-auto max-w-6xl p-8 py-20 text-center"><p className="text-amber-300">{cv.title}</p><h1 className="mt-5 text-7xl font-black">{cv.name}</h1><p className="mx-auto mt-7 max-w-3xl text-slate-300">{cv.summary}</p><ContactRow className="mt-8 justify-center" /></header>
      <div className={`mx-auto grid max-w-6xl gap-12 p-8 md:grid-cols-2 ${reduceMotion ? "" : "[perspective:1200px]"}`}>
        <section className="border border-amber-300/30 bg-[#12243a] p-8 md:[transform:rotateY(8deg)_rotateX(3deg)]"><h2 className="mb-8 text-3xl text-amber-300">Room 01 / career</h2><ExperienceList tone="dark" /></section>
        <div className="space-y-12 md:pt-28"><section className="border border-cyan-300/30 bg-[#0c2931] p-8 md:[transform:rotateY(-8deg)_rotateX(3deg)]"><h2 className="mb-7 text-3xl text-cyan-300">Room 02 / systems</h2><SkillsCloud /></section><section className="border border-rose-300/30 bg-[#2d1825] p-8 md:[transform:rotateY(-8deg)_rotateX(3deg)]"><h2 className="mb-7 text-3xl text-rose-300">Room 03 / prototypes</h2><ProjectLinks /></section></div>
      </div>
      <footer className="mx-auto max-w-6xl p-8 py-20 text-center text-slate-400">{cv.education.degree} · {cv.education.school}</footer>
    </main>
  );
}
