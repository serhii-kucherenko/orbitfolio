"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const chapters = [
    { k: "01", title: cv.name, body: cv.title },
    { k: "02", title: "Signal", body: cv.summary },
    ...cv.experience.map((j, i) => ({
      k: String(i + 3).padStart(2, "0"),
      title: j.company,
      body: `${j.role} · ${j.period}\n\n${j.bullets[0]}`,
    })),
    {
      k: String(cv.experience.length + 3).padStart(2, "0"),
      title: "Toolkit",
      body: Object.values(cv.skills).flat().slice(0, 14).join(" · "),
    },
  ];

  return (
    <main className="h-[100svh] snap-y snap-mandatory overflow-y-auto bg-[#030712]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <Starfield density={140} color="#a5b4fc" speed={0.08} />
      </div>
      {chapters.map((c, i) => (
        <section
          key={c.k + c.title}
          className="relative z-10 flex h-[100svh] snap-start flex-col justify-center px-8"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.4em] text-indigo-300/70">
              {c.k}
            </p>
            <h2 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl sm:text-6xl">
              {c.title}
            </h2>
            <p className="mt-6 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-white/60 sm:text-base">
              {c.body}
            </p>
            {i === chapters.length - 1 && (
              <div className="mt-12 max-w-3xl space-y-10">
                <SkillsCloud />
                <ProjectLinks />
                <ContactRow />
              </div>
            )}
          </motion.div>
        </section>
      ))}
      {/* keep experience reachable for completeness without forcing scroll past snap */}
      <section className="relative z-10 snap-start bg-[#030712]/90 px-8 py-24 backdrop-blur">
        <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl">Full mission log</h2>
        <div className="mx-auto max-w-3xl">
          <ExperienceList tone="dark" />
        </div>
      </section>
    </main>
  );
}
