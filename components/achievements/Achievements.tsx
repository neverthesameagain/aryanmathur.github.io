"use client";

import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { scrollToId } from "@/components/providers/SmoothScroll";

export function Achievements() {
  return (
    <section id="achievements" className="relative border-t border-line px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker="VERIFIED RESULTS" title="Achievements" />

        <Reveal delay={0.05} className="mt-10 glass-panel rounded-2xl px-6 py-2 sm:px-8">
          {achievements.map((a, i) => {
            const row = (
              <>
                <span className="font-display text-base text-ink sm:text-lg">{a.competition}</span>
                <span className="hidden h-px flex-1 border-b border-dotted border-line-strong sm:block" />
                <span className="mono-label text-[11px] text-signal">{a.result}</span>
                {a.year && <span className="mono-label w-10 shrink-0 text-right text-[10px] text-ink-faint">{a.year}</span>}
              </>
            );
            const rowClass = `flex w-full flex-wrap items-baseline gap-x-3 gap-y-1 py-4 text-left ${
              i !== achievements.length - 1 ? "border-b border-line" : ""
            }`;
            return a.anchor ? (
              <button key={a.competition} onClick={() => scrollToId(a.anchor!)} className={`${rowClass} group`}>
                {row}
                <span className="mono-label w-full pt-0.5 text-[9px] text-ink-faint opacity-0 transition group-hover:opacity-100 sm:w-auto">
                  see writeup →
                </span>
              </button>
            ) : (
              <div key={a.competition} className={rowClass}>
                {row}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
