"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Hybrid Editorial Orbit — Steals editorial authority from #17 + spatial focus from #2. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":88,"name":"Hybrid Editorial Orbit","thesis":"Steals editorial authority from #17 + spatial focus from #2.","layout":"editorial","team":"Eta Hybrid","accent":"#fdba74","background":"#111827","light":false}}
     
    />
  );
}
