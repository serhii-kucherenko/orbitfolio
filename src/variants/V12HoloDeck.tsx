"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

/** Holo Deck */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030b12] text-cyan-50">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{backgroundImage:"repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.06) 3px)"}} />
      <Starfield density={100} color="#22d3ee" speed={0.1} />
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-28 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] text-cyan-400">HOLO // PROJECT</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-6xl" style={{textShadow:"0 0 24px rgba(34,211,238,0.45)"}}>{cv.name}</h1>
        <p className="mt-3 text-cyan-200/70">{cv.title}</p>
        <p className="mt-8 max-w-2xl text-sm text-cyan-50/60">{cv.summary}</p>
        <div className="mt-14 space-y-6">
          {cv.experience.map((job,i)=>(
            <motion.div key={job.company} initial={reduce?false:{opacity:0,x:i%2?-40:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="border border-cyan-400/30 bg-cyan-950/20 p-6 backdrop-blur-md" style={{clipPath:"polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)"}}>
              <p className="text-xs text-cyan-400/70">{job.period}</p>
              <h3 className="mt-1 text-xl">{job.role} · {job.company}</h3>
              <ul className="mt-3 space-y-1 text-sm text-cyan-50/70">{job.bullets.map(b=><li key={b.slice(0,24)}>{b}</li>)}</ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-16"><SkillsCloud /><div className="mt-10"><ProjectLinks /><ContactRow className="mt-8 text-cyan-200" /></div></div>
      </div>
    </main>
  );
}
