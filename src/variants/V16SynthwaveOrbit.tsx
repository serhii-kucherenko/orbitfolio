"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

/** Synthwave Orbit */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1a0533] text-white">
      <div className="absolute inset-x-0 bottom-0 h-[55vh]" style={{background:"linear-gradient(transparent,#ff006e33), repeating-linear-gradient(to right, transparent 0 39px, #ff006e55 39px 40px), repeating-linear-gradient(to top, transparent 0 39px, #00f5d455 39px 40px)", transform:"perspective(500px) rotateX(58deg)", transformOrigin:"bottom"}} />
      <Starfield density={90} color="#ff9eee" speed={0.12} />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl tracking-tight sm:text-7xl" style={{WebkitTextStroke:"1px #ff9eee", color:"transparent", textShadow:"0 0 30px #ff006e"}}>{cv.name}</h1>
        <p className="mt-4 text-lg text-pink-200">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm text-white/65">{cv.summary}</p>
        <section className="mt-16"><ExperienceList tone="dark" /></section>
        <section className="mt-16"><SkillsCloud /><div className="mt-10"><ProjectLinks /><ContactRow className="mt-8" /></div></section>
      </div>
    </main>
  );
}
