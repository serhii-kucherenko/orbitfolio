"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Hybrid Swiss Kinetic — Steals scan speed from #20 + oversized motion type from #41. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":91,"name":"Hybrid Swiss Kinetic","thesis":"Steals scan speed from #20 + oversized motion type from #41.","layout":"swiss","team":"Eta Hybrid","accent":"#5eead4","background":"#020b08","light":true}}
     
    />
  );
}
