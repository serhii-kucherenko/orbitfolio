"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Experimental Cover Lab — A restless cover stack explores composition while a stable archive guarantees completeness. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":84,"name":"Experimental Cover Lab","thesis":"A restless cover stack explores composition while a stable archive guarantees completeness.","layout":"covers","team":"Zeta Experimental","accent":"#f87171","background":"#101014","light":false}}
     
    />
  );
}
