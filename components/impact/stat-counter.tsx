"use client";

import * as React from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function formatValue(value: number, unit: string) {
  if (unit === "rupiah") {
    return `Rp ${(value / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} jt`;
  }
  if (unit === "liter") {
    return `${(value / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} juta L`;
  }
  return value.toLocaleString("id-ID");
}

export function StatCounter({ value, unit }: { value: number; unit: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = React.useState("0");
  const reduceMotion = React.useRef(false);

  React.useEffect(() => {
    reduceMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  React.useEffect(() => {
    if (!inView) return;
    if (reduceMotion.current) {
      setDisplay(formatValue(value, unit));
      return;
    }
    motionValue.set(value);
  }, [inView, value, unit, motionValue]);

  React.useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(formatValue(Math.round(latest), unit));
    });
  }, [spring, unit]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
