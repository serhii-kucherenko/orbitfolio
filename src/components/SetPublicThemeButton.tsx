"use client";

import { useEffect, useState } from "react";
import { getVariant } from "@/data/variants";

type Props = {
  variantId: number;
};

export function SetPublicThemeButton({ variantId }: Props) {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");
  const [publicId, setPublicId] = useState<number | null>(null);

  const meta = getVariant(variantId);
  const isCurrent = publicId === variantId;

  useEffect(() => {
    let cancelled = false;
    fetch("/api/public-theme")
      .then((res) => res.json())
      .then((data: { variantId?: number }) => {
        if (!cancelled && typeof data.variantId === "number") setPublicId(data.variantId);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [variantId]);

  async function publish() {
    setStatus("saving");
    setMessage("");
    try {
      const res = await fetch("/api/public-theme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, variantId }),
      });
      const data = (await res.json()) as { error?: string; note?: string; variantId?: number };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Could not publish");
        return;
      }
      setStatus("ok");
      setPublicId(typeof data.variantId === "number" ? data.variantId : variantId);
      setMessage(data.note ?? "Public homepage updated.");
      setPassword("");
      setOpen(false);
    } catch {
      setStatus("error");
      setMessage("Network error");
    }
  }

  return (
    <div className="pointer-events-auto relative">
      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v);
          setStatus("idle");
          setMessage("");
        }}
        className={`rounded-full border px-3 py-1.5 text-[11px] backdrop-blur-md transition ${
          isCurrent
            ? "border-emerald-300/50 bg-emerald-950/50 text-emerald-100"
            : "border-white/15 bg-black/50 text-white/80 hover:border-white/35"
        }`}
      >
        {isCurrent ? "Public home ✓" : "Use as public home"}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[110] mt-2 w-72 rounded-2xl border border-white/15 bg-[#0b1220]/95 p-4 shadow-xl backdrop-blur-xl">
          <p className="text-xs font-semibold text-white">Publish to public homepage</p>
          <p className="mt-1 text-[11px] leading-relaxed text-white/55">
            Sets <span className="text-teal-200">/</span> to{" "}
            <span className="text-teal-200">
              #{variantId} {meta?.name ?? "this design"}
            </span>
            . Password required.
          </p>
          <label className="mt-3 block text-[10px] uppercase tracking-wider text-white/40">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") void publish();
              }}
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm text-white outline-none focus:border-teal-400/50"
              autoComplete="current-password"
            />
          </label>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              disabled={status === "saving" || !password}
              onClick={() => void publish()}
              className="flex-1 rounded-full bg-teal-300 px-3 py-2 text-xs font-semibold text-black disabled:opacity-40"
            >
              {status === "saving" ? "Publishing…" : "Publish"}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/20 px-3 py-2 text-xs text-white/70"
            >
              Cancel
            </button>
          </div>
          {message && (
            <p className={`mt-2 text-[11px] ${status === "error" ? "text-red-300" : "text-emerald-200"}`}>
              {message}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
