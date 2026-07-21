"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Credit Roll Career — A reduced-motion-safe end-credit composition gives every contributor-era its full billing. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":26,"name":"Credit Roll Career","thesis":"A reduced-motion-safe end-credit composition gives every contributor-era its full billing.","layout":"credits","team":"Beta Editorial","accent":"#fbbf24","background":"#07111f","light":false}}
     
    />
  );
}
