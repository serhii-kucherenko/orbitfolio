"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Hybrid Journey Profile — Steals geographic narrative from #46 + recruiter profile clarity from #57. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":92,"name":"Hybrid Journey Profile","thesis":"Steals geographic narrative from #46 + recruiter profile clarity from #57.","layout":"journey","team":"Eta Hybrid","accent":"#f87171","background":"#101014","light":false}}
     
    />
  );
}
