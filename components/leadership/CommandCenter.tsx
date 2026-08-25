"use client";

import { leadership } from "@/data/leadership";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { HUDFrame } from "@/components/shared/HUDFrame";
import { CountUp } from "@/components/shared/CountUp";

const ACCENT_TEXT = {
  signal: "text-signal",
  build: "text-build",
  lab: "text-lab",
};

const [petrichor, interIIT, ecell, placement] = leadership;

export function CommandCenter() {
  return (
    <section id="leadership" className="relative border-t border-line px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="PROGRAM MANAGEMENT" title="Command Center" />
        <p className="mt-4 max-w-2xl text-sm text-ink-dim">
          Two large-scale programs, two standing institutional roles. Not committee work — planning, budget
          ownership, and execution across teams I didn&apos;t get to hand-pick.
        </p>

        <div className="mt-8 flex items-center gap-1 font-mono text-xs text-ink-faint">
          <span className="text-signal">$</span>
          <span>status --all-programs</span>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <ProgramPanel entry={petrichor} />
          <ProgramPanel entry={interIIT} />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[ecell, placement].map((entry) => (
            <Reveal key={entry.id}>
              <div className="glass-panel h-full rounded-2xl p-6">
                <div className={`mono-label text-[10px] ${ACCENT_TEXT[entry.accent]}`}>{entry.role}</div>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{entry.org}</h3>
                <div className="mono-label mt-1 text-[10px] text-ink-faint">{entry.period}</div>
                <p className="mt-3 text-sm text-ink-dim">{entry.summary}</p>
                <ul className="mt-4 space-y-2 border-t border-line pt-4">
                  {entry.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink-dim">
                      <span className={ACCENT_TEXT[entry.accent]}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramPanel({ entry }: { entry: (typeof leadership)[number] }) {
  return (
    <Reveal>
      <div className="glass-panel flex h-full flex-col rounded-2xl">
        <div className="border-b border-line p-6">
          <div className={`mono-label text-[10px] ${ACCENT_TEXT[entry.accent]}`}>{entry.role}</div>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{entry.org}</h3>
          <div className="mono-label mt-1 text-[10px] text-ink-faint">
            {entry.period} · {entry.location}
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
          {entry.metrics.map((m) => (
            <HUDFrame key={m.label} accent={entry.accent} className="flex flex-col items-center justify-center py-6">
              <div className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                <CountUp value={m.value} />
              </div>
              <div className="mono-label mt-1 text-[9px] text-ink-faint">{m.label}</div>
            </HUDFrame>
          ))}
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <p className="text-sm text-ink-dim">{entry.summary}</p>
          <ul className="space-y-3">
            {entry.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm text-ink-dim">
                <span className={`mt-[2px] shrink-0 ${ACCENT_TEXT[entry.accent]}`}>▸</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
