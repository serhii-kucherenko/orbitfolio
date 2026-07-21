"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Dual Narrative Console — Recruiter clarity and engineering depth run as synchronized parallel narratives. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":55,"name":"Dual Narrative Console","thesis":"Recruiter clarity and engineering depth run as synchronized parallel narratives.","layout":"split","team":"Delta Systems","accent":"#7dd3fc","background":"#0b1220","light":false}}
     
    />
  );
}
