"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile, liveStats } from "@/data/profile";
import { scrollToId } from "@/components/providers/SmoothScroll";

const NeuralField = dynamic(() => import("./NeuralField").then((m) => m.NeuralField), {
  ssr: false,
});

export function Hero() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRole((r) => (r + 1) % profile.roles.length);
    }, 1900);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pt-28 pb-10 sm:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <NeuralField />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/10 via-transparent to-bg" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center gap-3">
        <span className="mono-label text-[11px] text-ink-faint">running</span>
        <div className="relative h-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={profile.roles[role]}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.7, 0, 0.2, 1] }}
              className="mono-label block text-[11px] text-signal"
            >
              {profile.roles[role]}.sys
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
        <div className="mono-label mb-6 text-[11px] text-ink-faint">ARYAN.OS · v2026.08</div>
        <h1 className="font-display text-balance text-[15vw] font-semibold leading-[0.92] tracking-tight text-ink sm:text-[9vw] lg:text-[7.2rem]">
          Aryan Mathur
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg text-ink-dim sm:text-xl">{profile.tagline}</p>
        <p className="mt-2 max-w-xl text-sm text-ink-faint">{profile.subline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            onClick={() => scrollToId("system-map")}
            className="mono-label rounded-full bg-ink px-6 py-3 text-[11px] text-bg transition hover:bg-signal hover:text-ink"
          >
            View System
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="mono-label rounded-full border border-line-strong px-6 py-3 text-[11px] text-ink transition hover:border-signal hover:text-signal"
          >
            Resume
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mono-label rounded-full border border-line-strong px-6 py-3 text-[11px] text-ink transition hover:border-signal hover:text-signal"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mono-label rounded-full border border-line-strong px-6 py-3 text-[11px] text-ink transition hover:border-signal hover:text-signal"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-3 gap-x-6 gap-y-4 border-t border-line pt-6">
        {liveStats.map((s) => {
          const content = (
            <>
              <div className="font-display text-2xl text-ink sm:text-3xl">{s.value}</div>
              <div className="mono-label text-[10px] text-ink-dim">
                {s.label} <span className="text-ink-faint">{s.unit}</span>
              </div>
            </>
          );
          if ("anchor" in s && s.anchor) {
            return (
              <button
                key={s.label}
                onClick={() => scrollToId(s.anchor)}
                className="group text-left"
              >
                {content}
                <div className="mono-label mt-0.5 text-[8px] text-ink-faint opacity-0 transition group-hover:opacity-100">
                  view →
                </div>
              </button>
            );
          }
          return <div key={s.label}>{content}</div>;
        })}
      </div>
    </section>
  );
}
