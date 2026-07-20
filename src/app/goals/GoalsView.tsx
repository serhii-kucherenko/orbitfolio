"use client";

import Link from "next/link";
import { LabChrome } from "@/components/LabChrome";
import { goals } from "@/data/goals";
import { Starfield } from "@/components/Starfield";

const statusStyle: Record<string, string> = {
  dream: "border-sky-400/30 bg-sky-950/30 text-sky-100",
  active: "border-teal-400/30 bg-teal-950/40 text-teal-100",
  done: "border-emerald-400/30 bg-emerald-950/40 text-emerald-100",
  paused: "border-white/15 bg-white/5 text-white/60",
};

export function GoalsView() {
  const byCat = goals.reduce<Record<string, typeof goals>>((acc, g) => {
    (acc[g.category] ??= []).push(g);
    return acc;
  }, {});

  return (
    <>
      <LabChrome />
      <main className="relative min-h-screen">
        <div className="nebula-glow absolute inset-0 opacity-80" />
        <div className="pointer-events-none absolute inset-0 z-0">
          <Starfield density={140} color="#fde68a" speed={0.06} />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-28 pt-28">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Living artifact</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-6xl">100 Goals</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65">
            Seeded from career themes and public GitHub work. Statuses evolve — dream, active, done, paused.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {(["active", "done", "dream", "paused"] as const).map((s) => (
              <span key={s} className={`rounded-full border px-3 py-1 capitalize ${statusStyle[s]}`}>
                {s} · {goals.filter((g) => g.status === s).length}
              </span>
            ))}
          </div>
          <div className="mt-14 space-y-14">
            {Object.entries(byCat).map(([cat, items]) => (
              <section key={cat}>
                <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl text-amber-100">{cat}</h2>
                <ol className="space-y-3">
                  {items.map((g) => (
                    <li
                      key={g.id}
                      className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <span className="mr-2 font-[family-name:var(--font-mono)] text-xs text-white/40">
                          #{String(g.id).padStart(3, "0")}
                        </span>
                        <span className="text-sm text-white/90">{g.title}</span>
                        {g.note && <p className="mt-1 text-xs text-white/45">{g.note}</p>}
                      </div>
                      <span
                        className={`mt-2 w-fit rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-wider sm:mt-0 ${statusStyle[g.status]}`}
                      >
                        {g.status}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
          <p className="mt-16 text-sm text-white/50">
            <Link href="/" className="text-teal-300 hover:underline">
              ← Champion
            </Link>
            {" · "}
            <Link href="/lab" className="text-teal-300 hover:underline">
              Design lab
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
