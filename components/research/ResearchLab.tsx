"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { papers } from "@/data/research";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function ResearchLab() {
  const [openId, setOpenId] = useState<string | null>(papers[0].id);

  return (
    <section id="research" className="relative border-t border-line px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="RESEARCH" title="Lab notes" accent="text-lab" />
        <p className="mt-4 max-w-2xl text-sm text-ink-dim">
          Three publications spanning computer vision, reinforcement learning, and explainable AI. Real metrics,
          no rounding up.
        </p>

        <div className="mt-14 space-y-3">
          {papers.map((paper, i) => {
            const open = openId === paper.id;
            return (
              <Reveal key={paper.id} delay={i * 0.05}>
                <div className="glass-panel overflow-hidden rounded-2xl">
                  <button
                    onClick={() => setOpenId(open ? null : paper.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div>
                      <div className="mono-label text-[10px] text-lab">{paper.domain}</div>
                      <h3 className="mt-1 font-display text-lg font-semibold text-ink sm:text-xl">{paper.title}</h3>
                    </div>
                    <div className="flex shrink-0 items-center gap-4">
                      <div className="hidden gap-4 sm:flex">
                        {paper.metrics.map((m) => (
                          <div key={m.label} className="text-right">
                            <div className="font-display text-lg text-ink">{m.value}</div>
                            <div className="mono-label text-[8px] text-ink-faint">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <span className={`mono-label text-lg text-ink-faint transition-transform ${open ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.7, 0, 0.2, 1] }}
                        className="border-t border-line px-6 pb-6"
                      >
                        <div className="grid gap-6 pt-6 lg:grid-cols-3">
                          <div>
                            <div className="mono-label text-[9px] text-ink-faint">problem</div>
                            <p className="mt-2 text-sm text-ink-dim">{paper.problem}</p>
                          </div>
                          <div>
                            <div className="mono-label text-[9px] text-ink-faint">approach</div>
                            <p className="mt-2 text-sm text-ink-dim">{paper.approach}</p>
                          </div>
                          <div>
                            <div className="mono-label text-[9px] text-ink-faint">architecture</div>
                            <div className="mt-2 flex flex-wrap items-center gap-2">
                              {paper.architecture.map((step, idx) => (
                                <span key={step} className="flex items-center gap-2">
                                  <span className="rounded-full border border-lab/40 px-3 py-1 text-xs text-ink-dim">
                                    {step}
                                  </span>
                                  {idx < paper.architecture.length - 1 && (
                                    <span className="text-lab/60">→</span>
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-3 sm:hidden">
                          {paper.metrics.map((m) => (
                            <div key={m.label} className="rounded-full border border-line-strong px-3 py-1 text-xs">
                              <span className="text-ink">{m.value}</span>{" "}
                              <span className="text-ink-faint">{m.label}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 flex gap-4 font-mono text-xs">
                          <a href={paper.repo} target="_blank" rel="noreferrer" className="text-ink-dim underline underline-offset-4 hover:text-lab">
                            repository
                          </a>
                          {paper.paper && (
                            <a href={paper.paper} target="_blank" rel="noreferrer" className="text-ink-dim underline underline-offset-4 hover:text-lab">
                              paper
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
