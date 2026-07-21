"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className={`h-screen overflow-y-auto bg-[#101820] text-white ${reduceMotion ? "" : "snap-y snap-mandatory scroll-smooth"}`}>
      <section className="grid min-h-screen snap-start place-items-center bg-[#f2aa4c] p-8 text-[#101820]"><div><p className="uppercase tracking-[.4em]">{cv.title}</p><h1 className="mt-6 text-7xl font-black md:text-9xl">{cv.name}</h1><p className="mt-8 max-w-3xl text-xl">{cv.summary}</p><ContactRow className="mt-8" /></div></section>
      <section className="min-h-screen snap-start p-8 md:p-16"><h2 className="mb-12 text-5xl font-black">01 — CAREER</h2><div className="mx-auto max-w-4xl"><ExperienceList tone="dark" /></div></section>
      <section className="min-h-screen snap-start bg-[#e8edf2] p-8 text-[#101820] md:p-16"><h2 className="mb-12 text-5xl font-black">02 — SYSTEMS</h2><SkillsCloud tone="light" /></section>
      <section className="min-h-screen snap-start p-8 md:p-16"><h2 className="mb-12 text-5xl font-black">03 — LAB</h2><ProjectLinks /><footer className="mt-20 border-t border-white/20 pt-6">{cv.education.degree} · {cv.education.school} · {cv.location}</footer></section>
    </main>
  );
}
