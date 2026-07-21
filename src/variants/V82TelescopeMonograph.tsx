"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Telescope Monograph — A circular reveal meets long-form monograph typography and complete proof. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":82,"name":"Telescope Monograph","thesis":"A circular reveal meets long-form monograph typography and complete proof.","layout":"telescope","team":"Zeta Experimental","accent":"#fbbf24","background":"#07111f","light":false}}
     
    />
  );
}
