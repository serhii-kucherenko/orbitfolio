"use client";

import { useEffect, useRef, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const railRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const stops = cv.experience.length + 2;

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = el.querySelectorAll("[data-rail-card]");
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((card, i) => {
        const r = card.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - window.innerWidth / 2);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setIndex(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const el = railRef.current;
      if (!el) return;
      const cards = el.querySelectorAll<HTMLElement>("[data-rail-card]");
      const next = e.key === "ArrowRight" ? Math.min(index + 1, cards.length - 1) : Math.max(index - 1, 0);
      cards[next]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <main className="relative min-h-screen bg-[#07041a] text-white">
      <Starfield density={180} color="#e9d5ff" speed={0.2} />
      <div className="relative z-10 pt-24">
        <div className="sticky top-20 z-20 px-6 backdrop-blur-sm">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
          <p className="mt-2 text-sm text-violet-200/70">{cv.title} — scroll sideways through the career rail</p>
          <div className="mt-4 flex items-center gap-2">
            {Array.from({ length: stops }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-fuchsia-300" : "w-1.5 bg-white/25"
                }`}
              />
            ))}
            <span className="ml-3 font-[family-name:var(--font-mono)] text-[10px] text-white/40">
              ← → keyboard
            </span>
          </div>
        </div>

        <p className="mt-6 max-w-xl px-6 text-sm text-white/55">{cv.summary}</p>

        <div
          ref={railRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8"
        >
          {cv.experience.map((job) => (
            <article
              key={job.company}
              data-rail-card
              className="w-[min(85vw,420px)] shrink-0 snap-center rounded-3xl border border-fuchsia-300/20 bg-fuchsia-950/20 p-6 backdrop-blur"
            >
              <p className="text-xs text-fuchsia-200/60">{job.period}</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl">{job.company}</h2>
              <p className="mt-1 text-sm text-white/70">{job.role}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 28)}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
          <article
            data-rail-card
            className="w-[min(85vw,420px)] shrink-0 snap-center rounded-3xl border border-white/15 bg-white/5 p-6"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl">Skills</h2>
            <div className="mt-4">
              <SkillsCloud />
            </div>
          </article>
          <article
            data-rail-card
            className="w-[min(85vw,420px)] shrink-0 snap-center rounded-3xl border border-white/15 bg-white/5 p-6"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl">Projects</h2>
            <div className="mt-4">
              <ProjectLinks />
              <ContactRow className="mt-8" />
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
