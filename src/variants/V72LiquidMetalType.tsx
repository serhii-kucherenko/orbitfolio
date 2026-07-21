"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Liquid Metal Type — Mercury-like headline treatment contrasts with stable, accessible career content. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":72,"name":"Liquid Metal Type","thesis":"Mercury-like headline treatment contrasts with stable, accessible career content.","layout":"liquid","team":"Zeta Experimental","accent":"#fdba74","background":"#111827","light":false}}
     
    />
  );
}
