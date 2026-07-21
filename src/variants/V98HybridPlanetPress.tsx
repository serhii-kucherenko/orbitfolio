"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Hybrid Planet Press — Steals spatial stagecraft from #10 + press hierarchy from #16. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":98,"name":"Hybrid Planet Press","thesis":"Steals spatial stagecraft from #10 + press hierarchy from #16.","layout":"planet","team":"Eta Hybrid","accent":"#fbbf24","background":"#07111f","light":false}}
     
    />
  );
}
