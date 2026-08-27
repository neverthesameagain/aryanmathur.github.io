"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { missions } from "@/data/hackathons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function HackathonWarRoom() {
  const [openId, setOpenId] = useState<string | null>(missions[0].id);
  const withProject = missions.filter((m) => m.project);
  const withoutProject = missions.filter((m) => !m.project);

  return (
    <section id="hackathons" className="relative border-t border-line px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="MISSIONS" title="Hackathon war room" />
        <p className="mt-4 max-w-2xl text-sm text-ink-dim">
          What actually got built, not just the leaderboard result. Full credential list lives in Achievements.
        </p>

        <div className="mt-14 space-y-3">
          {withProject.map((m, i) => {
            const open = openId === m.id;
            return (
              <Reveal key={m.id} delay={i * 0.05}>
                <div className="glass-panel overflow-hidden rounded-2xl">
                  <button
                    onClick={() => setOpenId(open ? null : m.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div>
                      <div className="mono-label text-[10px] text-signal">
                        {m.event} · {m.result}
                      </div>
                      <h3 className="mt-1 font-display text-lg font-semibold text-ink sm:text-xl">
                        {m.project}
                      </h3>
                    </div>
                    <div className="flex shrink-0 items-center gap-4">
                      {m.metrics && (
                        <div className="hidden gap-4 sm:flex">
                          {m.metrics.map((mt) => (
                            <div key={mt.label} className="text-right">
                              <div className="font-display text-lg text-ink">{mt.value}</div>
                              <div className="mono-label text-[8px] text-ink-faint">{mt.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
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
                            <p className="mt-2 text-sm text-ink-dim">{m.problem}</p>
                          </div>
                          <div>
                            <div className="mono-label text-[9px] text-ink-faint">approach</div>
                            <p className="mt-2 text-sm text-ink-dim">{m.approach}</p>
                          </div>
                          <div>
                            <div className="mono-label text-[9px] text-ink-faint">architecture</div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {m.architecture?.map((step) => (
                                <span key={step} className="rounded-full border border-signal/40 px-3 py-1 text-xs text-ink-dim">
                                  {step}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {m.note && <p className="mt-5 text-xs text-ink-faint">{m.note}</p>}

                        <div className="mt-5 flex gap-4 font-mono text-xs">
                          {m.repo && (
                            <a href={m.repo} target="_blank" rel="noreferrer" className="text-ink-dim underline underline-offset-4 hover:text-signal">
                              repository
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

          {withoutProject.map((m) => (
            <Reveal key={m.id}>
              <div className="glass-panel flex flex-wrap items-center justify-between gap-3 rounded-2xl px-6 py-5">
                <div>
                  <div className="mono-label text-[10px] text-ink-faint">
                    {m.event} · {m.result}
                  </div>
                  <p className="mt-1 text-sm text-ink-dim">{m.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
