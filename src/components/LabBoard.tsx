"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { composite, variants, type VariantMeta } from "@/data/variants";

type SortKey = "composite" | "coolness" | "uniqueness" | "hireability" | "id";
type Axis = "coolness" | "comprehensiveness" | "uniqueness" | "motion" | "hireability";

const AXES: { key: Axis; label: string }[] = [
  { key: "coolness", label: "Cool" },
  { key: "comprehensiveness", label: "Complete" },
  { key: "uniqueness", label: "Unique" },
  { key: "motion", label: "Motion" },
  { key: "hireability", label: "Hire" },
];

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

function Card({
  v,
  rank,
  compareMode,
  selected,
  onToggle,
}: {
  v: VariantMeta;
  rank?: number;
  compareMode: boolean;
  selected: boolean;
  onToggle: () => void;
}) {
  const scores = v.scores;
  const comp = scores ? composite(scores) : null;
  const body = (
    <>
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
      {v.team && (
        <p className="mt-2 text-[10px] uppercase tracking-wider text-white/35">{v.team}</p>
      )}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {v.stack.map((s) => (
          <span key={s} className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/45">
            {s}
          </span>
        ))}
      </div>
      {scores && (
        <div className="mt-4 space-y-1.5">
          {AXES.map((a) => (
            <ScoreBar key={a.key} label={a.label} value={scores[a.key]} />
          ))}
        </div>
      )}
    </>
  );

  if (compareMode) {
    return (
      <button
        type="button"
        onClick={onToggle}
        className={`group block w-full rounded-2xl border p-5 text-left transition ${
          selected
            ? "border-amber-400/50 bg-amber-950/25"
            : "border-white/10 bg-white/[0.03] hover:border-teal-400/40 hover:bg-white/[0.06]"
        }`}
      >
        {selected && <p className="mb-2 text-[10px] uppercase tracking-wider text-amber-300">Selected for compare</p>}
        {body}
      </button>
    );
  }

  return (
    <Link
      href={`/test/${v.id}`}
      className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-teal-400/40 hover:bg-white/[0.06]"
    >
      {body}
    </Link>
  );
}

function ComparePanel({ a, b, onClear }: { a: VariantMeta; b: VariantMeta; onClear: () => void }) {
  if (!a.scores || !b.scores) return null;
  return (
    <div className="mb-8 rounded-3xl border border-amber-400/30 bg-amber-950/20 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-[family-name:var(--font-display)] text-xl text-amber-50">Compare</h3>
        <button
          type="button"
          onClick={onClear}
          className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70 hover:border-white/40"
        >
          Clear
        </button>
      </div>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {[a, b].map((v) => (
          <div key={v.id}>
            <p className="font-[family-name:var(--font-mono)] text-xs text-amber-300/80">/test/{v.id}</p>
            <p className="font-[family-name:var(--font-display)] text-2xl">{v.name}</p>
            <p className="mt-1 text-sm text-teal-300">{composite(v.scores!).toFixed(2)} composite</p>
            <Link href={`/test/${v.id}`} className="mt-2 inline-block text-xs text-amber-200 underline">
              Open experiment →
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        {AXES.map(({ key, label }) => {
          const left = a.scores![key];
          const right = b.scores![key];
          const winner = left === right ? null : left > right ? "a" : "b";
          return (
            <div key={key}>
              <div className="mb-1 flex justify-between text-[10px] text-white/50">
                <span className={winner === "a" ? "text-teal-300" : ""}>
                  {left.toFixed(1)} {winner === "a" ? "▲" : ""}
                </span>
                <span>{label}</span>
                <span className={winner === "b" ? "text-teal-300" : ""}>
                  {winner === "b" ? "▲ " : ""}
                  {right.toFixed(1)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-teal-400" style={{ width: `${left * 10}%` }} />
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-cyan-400" style={{ width: `${right * 10}%` }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function LabBoard() {
  const [sort, setSort] = useState<SortKey>("composite");
  const [query, setQuery] = useState("");
  const [stack, setStack] = useState<string | null>(null);
  const [team, setTeam] = useState<string | null>(null);
  const [compareMode, setCompareMode] = useState(false);
  const [picked, setPicked] = useState<number[]>([]);
  const stackTags = useMemo(() => {
    const s = new Set<string>();
    variants.forEach((v) => v.stack.forEach((t) => s.add(t)));
    return [...s].sort();
  }, []);
  const teamTags = useMemo(() => {
    const s = new Set<string>();
    variants.forEach((v) => {
      if (v.team) s.add(v.team);
    });
    return [...s];
  }, []);
  const ranked = useMemo(() => {
    const q = query.trim().toLowerCase();
    const scored = variants.filter((v) => {
      if (!v.scores) return false;
      if (stack && !v.stack.includes(stack)) return false;
      if (team && v.team !== team) return false;
      if (!q) return true;
      return (
        v.name.toLowerCase().includes(q) ||
        v.thesis.toLowerCase().includes(q) ||
        v.slug.includes(q) ||
        v.stack.some((t) => t.toLowerCase().includes(q)) ||
        (v.team?.toLowerCase().includes(q) ?? false) ||
        String(v.id) === q
      );
    });
    return [...scored].sort((a, b) => {
      if (sort === "id") return a.id - b.id;
      return scoreOf(b, sort) - scoreOf(a, sort);
    });
  }, [query, sort, stack, team]);

  const pair = picked.length === 2 ? ([variants.find((v) => v.id === picked[0]), variants.find((v) => v.id === picked[1])] as const) : null;

  function togglePick(id: number) {
    setPicked((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 2) return [prev[1], id];
      return [...prev, id];
    });
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Leaderboard</h2>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setCompareMode((m) => !m);
              setPicked([]);
            }}
            className={`rounded-full border px-3 py-1.5 text-xs ${
              compareMode
                ? "border-amber-400/50 bg-amber-950/40 text-amber-100"
                : "border-white/15 text-white/70 hover:border-white/30"
            }`}
          >
            {compareMode ? "Comparing…" : "Compare two"}
          </button>
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
      {compareMode && (
        <p className="mb-4 text-xs text-amber-200/70">
          Pick two experiments to compare scores side by side
          {picked.length ? ` (${picked.length}/2)` : ""}.
        </p>
      )}
      {pair?.[0] && pair[1] && (
        <ComparePanel a={pair[0]} b={pair[1]} onClear={() => setPicked([])} />
      )}
      <div className="mb-6 flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setTeam(null)}
          className={`rounded-full border px-2.5 py-1 text-[10px] ${
            team == null ? "border-violet-400/50 bg-violet-950/40 text-violet-100" : "border-white/10 text-white/45 hover:border-white/25"
          }`}
        >
          all teams
        </button>
        {teamTags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTeam(team === t ? null : t)}
            className={`rounded-full border px-2.5 py-1 text-[10px] ${
              team === t ? "border-violet-400/50 bg-violet-950/40 text-violet-100" : "border-white/10 text-white/45 hover:border-white/25"
            }`}
          >
            {t}
          </button>
        ))}
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
          {team ? ` on team “${team}”` : ""}
          {stack ? ` in stack “${stack}”` : ""}.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ranked.map((v, i) => (
            <Card
              key={v.id}
              v={v}
              rank={sort === "id" ? undefined : i + 1}
              compareMode={compareMode}
              selected={picked.includes(v.id)}
              onToggle={() => togglePick(v.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
