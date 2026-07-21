"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Bilingual Signal — A bilingual-inspired split treats language as rhythm while retaining complete English proof. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":22,"name":"Bilingual Signal","thesis":"A bilingual-inspired split treats language as rhythm while retaining complete English proof.","layout":"split","team":"Beta Editorial","accent":"#e5e7eb","background":"#050505","light":false}}
     
    />
  );
}
