import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Achievements() {
  return (
    <section id="achievements" className="relative border-t border-line px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker="VERIFIED RESULTS" title="Achievements" />

        <Reveal delay={0.05} className="mt-10 glass-panel rounded-2xl px-6 py-2 sm:px-8">
          {achievements.map((a, i) => (
            <div
              key={a.competition}
              className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 py-4 ${
                i !== achievements.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <span className="font-display text-base text-ink sm:text-lg">{a.competition}</span>
              <span className="hidden h-px flex-1 border-b border-dotted border-line-strong sm:block" />
              <span className="mono-label text-[11px] text-signal">{a.result}</span>
              {a.year && <span className="mono-label w-10 shrink-0 text-right text-[10px] text-ink-faint">{a.year}</span>}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
