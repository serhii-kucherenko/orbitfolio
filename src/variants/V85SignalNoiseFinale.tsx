"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Signal Noise Finale — Zeta ends by balancing visual noise against an exceptionally disciplined information hierarchy. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":85,"name":"Signal Noise Finale","thesis":"Zeta ends by balancing visual noise against an exceptionally disciplined information hierarchy.","layout":"terminal","team":"Zeta Experimental","accent":"#a7f3d0","background":"#071018","light":false}}
     
    />
  );
}
