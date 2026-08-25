"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES: { text: string; ms: number }[] = [
  { text: "ARYAN.OS — build 2026.08 · kernel: identity.sys", ms: 260 },
  { text: "mounting /experience ................ OK", ms: 220 },
  { text: "mounting /research ................... OK", ms: 220 },
  { text: "mounting /leadership ................. OK", ms: 220 },
  { text: "mounting /projects .................... OK", ms: 220 },
  { text: "resolving identity: Aryan Mathur", ms: 260 },
  { text: "role: engineer · operator · researcher · builder", ms: 320 },
  { text: "boot complete.", ms: 260 },
];

const STORAGE_KEY = "aryanos:booted";

export function BootSequence() {
  const [skipped, setSkipped] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [done, setDone] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    let already = false;
    try {
      already = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      already = false;
    }
    // One-time sync with browser-only state (session flag, motion preference) — legitimately
    // decided on mount, before which the boot UI intentionally stays visible.
    if (already || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSkipped(true);
      setDone(true);
      return;
    }
    setSkipped(false);

    const activeTimers = timers.current;
    let elapsed = 0;
    LINES.forEach((line, i) => {
      elapsed += line.ms;
      activeTimers.push(setTimeout(() => setLineIndex(i + 1), elapsed));
    });
    activeTimers.push(setTimeout(finish, elapsed + 500));

    return () => activeTimers.forEach(clearTimeout);
  }, []);

  function finish() {
    timers.current.forEach(clearTimeout);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setDone(true);
  }

  useEffect(() => {
    if (skipped) return;
    const handler = (e: KeyboardEvent | MouseEvent) => {
      if ("key" in e && e.key !== "Enter" && e.key !== "Escape" && e.key !== " ") return;
      finish();
    };
    window.addEventListener("keydown", handler);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("click", handler);
    };
  }, [skipped]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-bg px-6 py-10 sm:px-16 sm:py-14 crt-mask cursor-pointer"
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
        >
          <div className="mono-label text-[11px] text-ink-faint">SYSTEM BOOT</div>

          <div className="font-mono text-[13px] leading-relaxed text-ink-dim sm:text-sm">
            {LINES.slice(0, lineIndex).map((l, i) => (
              <div key={i} className={i === LINES.length - 1 ? "text-ink" : undefined}>
                <span className="text-signal">›</span> {l.text}
              </div>
            ))}
            {lineIndex < LINES.length && (
              <span className="inline-block h-[1em] w-[7px] translate-y-[2px] bg-ink animate-blink" />
            )}
          </div>

          <div className="mono-label flex items-center justify-between text-[11px] text-ink-faint">
            <span>press any key to skip</span>
            <span>ARYAN.OS</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
