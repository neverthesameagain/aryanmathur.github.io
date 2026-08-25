"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function splitMetric(value: string) {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", number: null as number | null, suffix: value };
  const [, prefix, number, suffix] = match;
  return { prefix, number: parseFloat(number), suffix };
}

// The real value is the initial render — server-rendered markup, no-JS, and reduced-motion
// all see the correct number immediately. The count-up is a pure visual replay on top of
// that, triggered once when the element enters view, never the source of truth.
export function CountUp({ value, duration = 1.1 }: { value: string; duration?: number }) {
  const { prefix, number, suffix } = splitMetric(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(number ?? 0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || number === null || hasAnimated.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    hasAnimated.current = true;

    // Resetting to 0 here is the deliberate start of a one-time replay animation triggered
    // by the IntersectionObserver (external system) firing, not a render-driven update.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplay(0);
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
