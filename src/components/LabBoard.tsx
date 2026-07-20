"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { composite, variants, type VariantMeta } from "@/data/variants";

type SortKey = "composite" | "coolness" | "uniqueness" | "hireability" | "id";

function scoreOf(v: VariantMeta, key: SortKey): number {
  if (!v.scores) return -1;
  if (key === "composite") return composite(v.scores);
  if (key === "id") return v.id;
  return v.scores[key];
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2 text-[10px]">
      <span className="w-16 shrink-0 text-white/40">{label}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-teal-400" style={{ width: `${value * 10}%` }} />
      </div>
      <span className="w-6 text-right text-white/60">{value}</span>
    </div>
  );
}

function Card({ v, rank }: { v: VariantMeta; rank?: number }) {
  const scores = v.scores;
  const comp = scores ? composite(scores) : null;
  return (
    <Link
      href={`/test/${v.id}`}
      className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-teal-400/40 hover:bg-white/[0.06]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[11px] text-teal-300/80">
            {rank != null ? `#${rank}` : ""} /test/{v.id}
          </p>
          <h2 className="mt-1 font-[family-name:var(--font-display)] text-xl group-hover:text-teal-100">{v.name}</h2>
        </div>
        {comp != null && (
          <p className="font-[family-name:var(--font-display)] text-2xl text-teal-300">{comp.toFixed(2)}</p>
        )}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-white/55">{v.thesis}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {v.stack.map((s) => (
          <span key={s} className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/45">
            {s}
          </span>
        ))}
      </div>
      {scores && (
        <div className="mt-4 space-y-1.5">
          <ScoreBar label="Cool" value={scores.coolness} />
          <ScoreBar label="Complete" value={scores.comprehensiveness} />
          <ScoreBar label="Unique" value={scores.uniqueness} />
          <ScoreBar label="Motion" value={scores.motion} />
          <ScoreBar label="Hire" value={scores.hireability} />
        </div>
      )}
    </Link>
  );
}

export function LabBoard() {
  const [sort, setSort] = useState<SortKey>("composite");
  const [query, setQuery] = useState("");
  const [stack, setStack] = useState<string | null>(null);
  const stackTags = useMemo(() => {
    const s = new Set<string>();
    variants.forEach((v) => v.stack.forEach((t) => s.add(t)));
    return [...s].sort();
  }, []);
  const ranked = useMemo(() => {
    const q = query.trim().toLowerCase();
    const scored = variants.filter((v) => {
      if (!v.scores) return false;
      if (stack && !v.stack.includes(stack)) return false;
      if (!q) return true;
      return (
        v.name.toLowerCase().includes(q) ||
        v.thesis.toLowerCase().includes(q) ||
        v.slug.includes(q) ||
        v.stack.some((t) => t.toLowerCase().includes(q)) ||
        String(v.id) === q
      );
    });
    return [...scored].sort((a, b) => {
      if (sort === "id") return a.id - b.id;
      return scoreOf(b, sort) - scoreOf(a, sort);
    });
  }, [query, sort, stack]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Leaderboard</h2>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, stack, #…"
            className="w-44 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-white/90 outline-none placeholder:text-white/35 focus:border-teal-400/50 sm:w-56"
            aria-label="Search experiments"
          />
          <label className="flex items-center gap-2 text-xs text-white/55">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-white/90 outline-none focus:border-teal-400/50"
            >
              <option value="composite">Composite</option>
              <option value="coolness">Coolness</option>
              <option value="uniqueness">Uniqueness</option>
              <option value="hireability">Hireability</option>
              <option value="id">Test number</option>
            </select>
          </label>
        </div>
      </div>
      <div className="mb-6 flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setStack(null)}
          className={`rounded-full border px-2.5 py-1 text-[10px] ${
            stack == null ? "border-teal-400/50 bg-teal-950/40 text-teal-100" : "border-white/10 text-white/45 hover:border-white/25"
          }`}
        >
          all stacks
        </button>
        {stackTags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setStack(stack === t ? null : t)}
            className={`rounded-full border px-2.5 py-1 text-[10px] ${
              stack === t ? "border-cyan-400/50 bg-cyan-950/40 text-cyan-100" : "border-white/10 text-white/45 hover:border-white/25"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      {ranked.length === 0 ? (
        <p className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-sm text-white/50">
          No experiments match{query ? ` “${query}”` : ""}
          {stack ? ` in stack “${stack}”` : ""}.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ranked.map((v, i) => (
            <Card key={v.id} v={v} rank={sort === "id" ? undefined : i + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
