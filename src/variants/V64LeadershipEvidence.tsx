"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Leadership Evidence — Team outcomes and delivery ownership become the primary navigation spine. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":64,"name":"Leadership Evidence","thesis":"Team outcomes and delivery ownership become the primary navigation spine.","layout":"journey","team":"Epsilon Hire","accent":"#fdba74","background":"#111827","light":false}}
     
    />
  );
}
