"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Issue Stack — Each employer becomes a collectible cover while the archive remains continuously readable. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":23,"name":"Issue Stack","thesis":"Each employer becomes a collectible cover while the archive remains continuously readable.","layout":"covers","team":"Beta Editorial","accent":"#7dd3fc","background":"#0b1220","light":false}}
     
    />
  );
}
