"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="bg-[#f4f4f0] p-3 text-black md:p-8">
      <header className="border-4 border-black p-6 md:p-12"><div className="flex justify-between font-black uppercase"><span>Proof file 079</span><span>{cv.location}</span></div><h1 className="my-10 break-words text-7xl font-black uppercase leading-[.75] md:text-[10rem]">{cv.name}</h1><div className="grid gap-8 md:grid-cols-2"><div><h2 className="text-4xl font-black">{cv.title}</h2><ContactRow className="mt-7" /></div><p className="text-lg leading-7">{cv.summary}</p></div><div className={`mt-8 inline-block rotate-[-4deg] border-8 border-[#d71920] p-4 text-3xl font-black uppercase text-[#d71920] ${reduceMotion ? "" : "transition-transform hover:rotate-0"}`}>Hire-ready evidence</div></header>
      <section className="mt-3 border-4 border-black p-6 md:p-12"><h2 className="mb-10 bg-black p-4 text-4xl font-black uppercase text-white">Work / no spin</h2><ExperienceList tone="light" /></section>
      <section className="mt-3 grid gap-3 md:grid-cols-2"><div className="border-4 border-black p-6"><h2 className="mb-7 text-3xl font-black uppercase">Tools</h2><SkillsCloud tone="light" /></div><div className="border-4 border-black p-6"><h2 className="mb-7 text-3xl font-black uppercase">Built</h2><ProjectLinks tone="light" /><p className="mt-10 border-t-4 border-black pt-4 font-black">{cv.education.degree}<br />{cv.education.school}</p></div></section>
    </main>
  );
}
