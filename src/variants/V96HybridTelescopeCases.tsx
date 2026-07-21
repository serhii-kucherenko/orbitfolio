"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Hybrid Telescope Cases — Steals focus control from #48 + applied-AI case depth from #63. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":96,"name":"Hybrid Telescope Cases","thesis":"Steals focus control from #48 + applied-AI case depth from #63.","layout":"telescope","team":"Eta Hybrid","accent":"#fdba74","background":"#111827","light":false}}
     
    />
  );
}
