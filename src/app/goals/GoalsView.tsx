"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { LabChrome } from "@/components/LabChrome";
import { goals, type Goal } from "@/data/goals";
import { Starfield } from "@/components/Starfield";

const statusStyle: Record<string, string> = {
  dream: "border-sky-400/30 bg-sky-950/30 text-sky-100",
  active: "border-teal-400/30 bg-teal-950/40 text-teal-100",
  done: "border-emerald-400/30 bg-emerald-950/40 text-emerald-100",
  paused: "border-white/15 bg-white/5 text-white/60",
};

type Status = Goal["status"] | "all";

export function GoalsView() {
  const [status, setStatus] = useState<Status>("all");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return goals.filter((g) => {
      if (status !== "all" && g.status !== status) return false;
      if (!q) return true;
      return (
        g.title.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q) ||
        (g.note?.toLowerCase().includes(q) ?? false) ||
        String(g.id) === q
      );
    });
  }, [status, query]);
  const byCat = filtered.reduce<Record<string, typeof goals>>((acc, g) => {
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
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search goals, categories, notes…"
            aria-label="Search goals"
            className="mt-6 w-full max-w-md rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/90 outline-none placeholder:text-white/35 focus:border-amber-300/40"
          />
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <button
              type="button"
              onClick={() => setStatus("all")}
              className={`rounded-full border px-3 py-1 capitalize transition ${
                status === "all"
                  ? "border-amber-300/50 bg-amber-950/50 text-amber-100"
                  : "border-white/15 bg-black/40 text-white/60 hover:border-white/30"
              }`}
            >
              all · {goals.length}
            </button>
            {(["active", "done", "dream", "paused"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatus(s)}
                className={`rounded-full border px-3 py-1 capitalize transition ${
                  status === s ? statusStyle[s] + " ring-1 ring-white/20" : statusStyle[s] + " opacity-70 hover:opacity-100"
                }`}
              >
                {s} · {goals.filter((g) => g.status === s).length}
              </button>
            ))}
          </div>

          <div className="mt-14 space-y-14">
            {Object.keys(byCat).length === 0 ? (
              <p className="text-sm text-white/50">
                No goals match{query ? ` “${query}”` : ""}
                {status !== "all" ? ` in status “${status}”` : ""}.
              </p>
            ) : (
              Object.entries(byCat).map(([cat, items]) => (
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
              ))
            )}
          </div>
          <p className="mt-16 text-sm text-white/50">
            <Link href="/" className="text-teal-300 hover:underline">
              ← Champion
            </Link>
            {" · "}
            <Link href="/lab" className="text-teal-300 hover:underline">
              Design lab
            </Link>
            {" · "}
            <Link href="/resume" className="text-teal-300 hover:underline">
              Resume
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
