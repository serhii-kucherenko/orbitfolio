"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Hybrid Museum Metrics — Steals alcove storytelling from #1 + outcome hierarchy from #60. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":87,"name":"Hybrid Museum Metrics","thesis":"Steals alcove storytelling from #1 + outcome hierarchy from #60.","layout":"museum","team":"Eta Hybrid","accent":"#7dd3fc","background":"#0b1220","light":false}}
     
    />
  );
}
