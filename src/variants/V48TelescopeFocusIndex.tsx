"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Telescope Focus Index — A scope mask focuses attention on one high-signal claim without trapping navigation. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":48,"name":"Telescope Focus Index","thesis":"A scope mask focuses attention on one high-signal claim without trapping navigation.","layout":"telescope","team":"Delta Systems","accent":"#fdba74","background":"#111827","light":false}}
     
    />
  );
}
