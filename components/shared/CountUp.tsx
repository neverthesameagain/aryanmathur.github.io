"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function splitMetric(value: string) {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", number: null, suffix: value };
  const [, prefix, number, suffix] = match;
  return { prefix, number: parseFloat(number), suffix };
}

export function CountUp({ value, duration = 1.1 }: { value: string; duration?: number }) {
  const { prefix, number, suffix } = splitMetric(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || number === null) return;
    const start = performance.now();
    let frame: number;
    function tick(now: number) {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(number! * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, number, duration]);

  if (number === null) {
    return <span ref={ref}>{suffix}</span>;
  }

  const isInt = Number.isInteger(number);
  return (
    <span ref={ref}>
      {prefix}
      {isInt ? Math.round(display) : display.toFixed(1)}
      {suffix}
    </span>
  );
}
