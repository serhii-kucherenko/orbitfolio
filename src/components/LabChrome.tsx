"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { VARIANT_COUNT } from "@/data/variants";
import { SurpriseButton } from "@/components/SurpriseButton";

export function LabChrome({
  variantId,
  name,
}: {
  variantId?: number;
  name?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isLab = pathname?.startsWith("/lab");
  const isGoals = pathname?.startsWith("/goals");
  const isTest = pathname?.startsWith("/test");

  useEffect(() => {
    if (!isTest || variantId == null) return;
    if (variantId > 1) router.prefetch(`/test/${variantId - 1}`);
    if (variantId < VARIANT_COUNT) router.prefetch(`/test/${variantId + 1}`);

    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable) {
        return;
      }
      if (e.key === "ArrowLeft" && variantId > 1) {
        e.preventDefault();
        router.push(`/test/${variantId - 1}`);
      }
      if (e.key === "ArrowRight" && variantId < VARIANT_COUNT) {
        e.preventDefault();
        router.push(`/test/${variantId + 1}`);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isTest, router, variantId]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[100] flex items-start justify-between gap-3 p-3 sm:p-4">
      <Link
        href="/"
        className="pointer-events-auto rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-[family-name:var(--font-display)] text-xs tracking-wide text-white/90 backdrop-blur-md transition hover:border-white/35 hover:bg-black/70"
      >
        Orbitfolio
      </Link>
      <div className="pointer-events-auto flex max-w-[75vw] flex-wrap items-center justify-end gap-2">
        {variantId != null && (
          <span className="hidden rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3 py-1.5 text-[11px] text-cyan-100/90 backdrop-blur-md sm:inline">
            Test {variantId}/50 · {name}
            <span className="ml-2 text-cyan-200/50">← →</span>
          </span>
        )}
        <Link
          href="/goals"
          className={`rounded-full border px-3 py-1.5 text-[11px] backdrop-blur-md transition ${
            isGoals
              ? "border-amber-300/50 bg-amber-950/50 text-amber-100"
              : "border-white/15 bg-black/50 text-white/80 hover:border-white/35"
          }`}
        >
          100 Goals
        </Link>
        <Link
          href="/lab"
          className={`rounded-full border px-3 py-1.5 text-[11px] backdrop-blur-md transition ${
            isLab
              ? "border-violet-300/50 bg-violet-950/50 text-violet-100"
              : "border-white/15 bg-black/50 text-white/80 hover:border-white/35"
          }`}
        >
          Lab
        </Link>
        {isLab && (
          <div className="scale-90 origin-right [&_button]:px-3 [&_button]:py-1.5 [&_button]:text-[11px]">
            <SurpriseButton />
          </div>
        )}
        {isTest && variantId != null && (
          <>
            <Link
              href={`/test/${Math.max(1, variantId - 1)}`}
              className="rounded-full border border-white/15 bg-black/50 px-2.5 py-1.5 text-[11px] text-white/80 backdrop-blur-md hover:border-white/35"
              aria-label="Previous variant"
            >
              ←
            </Link>
            <Link
              href={`/test/${Math.min(VARIANT_COUNT, variantId + 1)}`}
              className="rounded-full border border-white/15 bg-black/50 px-2.5 py-1.5 text-[11px] text-white/80 backdrop-blur-md hover:border-white/35"
              aria-label="Next variant"
            >
              →
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
