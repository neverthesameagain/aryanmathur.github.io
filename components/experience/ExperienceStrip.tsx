"use client";

import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function ExperienceStrip() {
  return (
    <section id="experience" className="relative border-t border-line px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="WORK" title="Experience" />

        <div className="mt-14 space-y-0">
          {experience.map((e, i) => (
            <Reveal key={`${e.company}-${e.period}`} delay={i * 0.05}>
              <div className="grid gap-4 border-t border-line py-8 sm:grid-cols-[200px_1fr]">
                <div>
                  <div className="mono-label text-[10px] text-ink-faint">{e.period}</div>
                  <div className="mt-1 text-xs text-ink-faint">{e.location}</div>
                  {e.status === "current" && (
                    <span className="mono-label mt-2 inline-flex items-center gap-1.5 text-[9px] text-signal">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal animate-blink" /> current
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {e.role} <span className="text-ink-faint">— {e.company}</span>
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {e.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2 text-sm text-ink-dim">
                        <span className="text-ink-faint">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.stack.map((s) => (
                      <span key={s} className="mono-label rounded-full border border-line-strong px-3 py-1 text-[9px] text-ink-dim">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
