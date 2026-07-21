"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Hybrid Liquid Brief — Steals liquid headline craft from #72 + hiring-manager brevity from #66. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":97,"name":"Hybrid Liquid Brief","thesis":"Steals liquid headline craft from #72 + hiring-manager brevity from #66.","layout":"liquid","team":"Eta Hybrid","accent":"#67e8f9","background":"#030712","light":false}}
     
    />
  );
}
