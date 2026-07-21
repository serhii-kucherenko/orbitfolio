"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Holographic Record — Scanlines and projected planes turn a complete CV into a legible future archive. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":49,"name":"Holographic Record","thesis":"Scanlines and projected planes turn a complete CV into a legible future archive.","layout":"holo","team":"Delta Systems","accent":"#67e8f9","background":"#030712","light":false}}
     
    />
  );
}
