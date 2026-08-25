"use client";

import { useState } from "react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Skills() {
  const [hint, setHint] = useState<string | null>(null);

  return (
    <section id="skills" className="relative border-t border-line px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="STACK" title="Skills" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={(i % 3) * 0.05}>
              <div className="glass-panel h-full rounded-2xl p-5">
                <div className="mono-label text-[10px] text-ink-faint">{group.label}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.skills.map((s) => (
                    <span
                      key={s.name}
                      onMouseEnter={() =>
                        setHint(s.usedIn ? `${s.name} → ${s.usedIn}` : `${s.name} — core skill`)
                      }
                      onMouseLeave={() => setHint(null)}
                      onFocus={() =>
                        setHint(s.usedIn ? `${s.name} → ${s.usedIn}` : `${s.name} — core skill`)
                      }
                      onBlur={() => setHint(null)}
                      tabIndex={0}
                      className="cursor-default rounded-full border border-line-strong px-2.5 py-1 text-xs text-ink-dim transition hover:border-signal/50 hover:text-ink"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mono-label mt-6 flex items-center gap-2 text-[10px] text-ink-faint">
          <span className="text-signal">›</span>
          <span>{hint ?? "hover a skill to see where it shows up"}</span>
        </div>
      </div>
    </section>
  );
}
