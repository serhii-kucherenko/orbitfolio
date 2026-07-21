"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Telemetry Tape — A live-looking telemetry band carries skills and outcomes through a full technical record. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":52,"name":"Telemetry Tape","thesis":"A live-looking telemetry band carries skills and outcomes through a full technical record.","layout":"terminal","team":"Delta Systems","accent":"#f87171","background":"#101014","light":false}}
     
    />
  );
}
