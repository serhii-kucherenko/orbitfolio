"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="bg-[#f1f2ee] text-[#101010]">
      <div className="grid min-h-screen md:grid-cols-[280px_1fr]"><aside className="border-r-4 border-black bg-[#f2c94c] p-7"><div className={`size-24 rounded-full bg-[#e22d2d] ${reduceMotion ? "" : "transition-transform hover:translate-x-8"}`} /><h2 className="mt-10 text-2xl font-black uppercase">System manual 95</h2><nav className="mt-12 space-y-3 font-bold"><p>00 / Profile</p><p>01 / Roles</p><p>02 / Stack</p><p>03 / Work</p></nav><p className="mt-20 text-sm">{cv.location}</p></aside>
        <div><header className="border-b-4 border-black p-8 md:p-14"><p className="font-bold uppercase tracking-[.3em]">{cv.title}</p><h1 className="mt-7 text-7xl font-black uppercase leading-[.85]">{cv.name}</h1><p className="mt-8 max-w-4xl text-lg leading-8">{cv.summary}</p><ContactRow className="mt-7" /></header>
          <section className="border-b-4 border-black p-8 md:p-14"><div className="mb-10 flex items-center gap-5"><span className="grid size-14 place-items-center bg-[#2455a4] text-2xl font-black text-white">01</span><h2 className="text-4xl font-black">Experience specification</h2></div><ExperienceList tone="light" /></section>
          <section className="grid md:grid-cols-2"><div className="border-b-4 border-black p-8 md:border-b-0 md:border-r-4"><h2 className="mb-8 text-3xl font-black">02 / Capabilities</h2><SkillsCloud tone="light" /></div><div className="p-8"><h2 className="mb-8 text-3xl font-black">03 / Projects</h2><ProjectLinks tone="light" /><p className="mt-12 border-t-4 border-black pt-5">{cv.education.degree} · {cv.education.school}</p></div></section>
        </div></div>
    </main>
  );
}
