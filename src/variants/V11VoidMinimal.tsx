"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

/** Void Minimal */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Starfield density={28} color="#f8fafc" speed={0.015} interactive={false} />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-8 pt-24">
        <motion.h1 initial={reduce?false:{opacity:0}} animate={{opacity:1}} transition={{duration:1.4}} className="font-[family-name:var(--font-serif)] text-5xl font-normal tracking-tight sm:text-7xl">{cv.name}</motion.h1>
        <motion.p initial={reduce?false:{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,duration:1}} className="mt-8 text-sm text-white/40">{cv.title}</motion.p>
        <motion.p initial={reduce?false:{opacity:0}} animate={{opacity:1}} transition={{delay:0.7,duration:1}} className="mt-12 max-w-md text-sm leading-8 text-white/55">{cv.summary}</motion.p>
      </div>
      <section className="relative z-10 mx-auto max-w-3xl space-y-20 px-8 pb-32">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-white/50" />
      </section>
    </main>
  );
}
