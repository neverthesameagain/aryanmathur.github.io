"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { scrollToId } from "@/components/providers/SmoothScroll";

const LINKS = [
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "system-map", label: "Map" },
  { id: "experience", label: "Experience" },
  { id: "leadership", label: "Leadership" },
  { id: "vartalapp", label: "Projects" },
  { id: "research", label: "Research" },
];

export function Dock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: visible ? 0 : -80 }}
      transition={{ duration: 0.4, ease: [0.7, 0, 0.2, 1] }}
      className="glass-panel fixed inset-x-0 top-0 z-50 border-x-0 border-t-0"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-12">
        <a href="#hero" className="font-display text-sm font-semibold tracking-tight text-ink">
          ARYAN<span className="text-signal">.OS</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(l.id);
                }}
                className="mono-label text-[10px] text-ink-dim transition hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="mono-label rounded-full border border-line-strong px-4 py-2 text-[10px] text-ink transition hover:border-signal hover:text-signal"
        >
          Resume
        </a>
      </nav>
    </motion.header>
  );
}
