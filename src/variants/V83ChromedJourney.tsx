"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Chromed Journey — A metallic journey line reflects career stages while preserving readable contrast. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":83,"name":"Chromed Journey","thesis":"A metallic journey line reflects career stages while preserving readable contrast.","layout":"liquid","team":"Zeta Experimental","accent":"#5eead4","background":"#020b08","light":false}}
     
    />
  );
}
