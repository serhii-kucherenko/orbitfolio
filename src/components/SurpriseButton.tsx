"use client";

import { useRouter } from "next/navigation";
import { VARIANT_COUNT } from "@/data/variants";

export function SurpriseButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        const n = 1 + Math.floor(Math.random() * VARIANT_COUNT);
        router.push(`/test/${n}`);
      }}
      className="rounded-full border border-cyan-400/40 bg-cyan-950/40 px-5 py-2.5 text-sm text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-900/50"
    >
      Surprise me
    </button>
  );
}
