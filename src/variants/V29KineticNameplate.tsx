"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="overflow-hidden bg-[#071713] text-[#b9ffd5]">
      <header className="relative min-h-screen p-8 md:p-16">
        <motion.p animate={reduceMotion ? {} : { x: [0, 40, 0] }} transition={{ duration: 8, repeat: Infinity }} className="text-sm uppercase tracking-[.5em]">{cv.title}</motion.p>
        <h1 className="mt-20 text-[17vw] font-black uppercase leading-[.7] tracking-[-.09em]">{cv.name.split(" ").map((part) => <motion.span key={part} initial={reduceMotion ? false : { x: "-20vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="block">{part}</motion.span>)}</h1>
        <p className="ml-auto mt-16 max-w-2xl text-xl leading-8">{cv.summary}</p><ContactRow className="mt-10 justify-end" />
      </header>
      <section className="rotate-[-1deg] bg-[#b9ffd5] p-8 text-[#071713] md:p-16"><h2 className="mb-10 text-5xl font-black uppercase">Motion / impact</h2><ExperienceList tone="light" /></section>
      <section className="grid gap-16 p-8 md:grid-cols-2 md:p-16"><div><h2 className="mb-8 text-4xl font-black">STACK</h2><SkillsCloud /></div><div><h2 className="mb-8 text-4xl font-black">OUTPUT</h2><ProjectLinks /><p className="mt-16 text-sm">{cv.education.degree} · {cv.education.school}</p></div></section>
    </main>
  );
}
