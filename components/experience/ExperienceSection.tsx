import { findExperience } from "@/data/experience";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { FlowDiagram } from "./FlowDiagram";

const accentureCurrent = findExperience("accenture-current");
const accentureIntern = findExperience("accenture-intern");
const mercor = findExperience("mercor");
const easyAlgo = findExperience("easyalgo");

export function ExperienceSection() {
  return (
    <section id="experience" className="relative border-t border-line px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="WORK" title="Experience" />
        <p className="mt-4 max-w-2xl text-sm text-ink-dim">
          Paid engineering work, in order. Production systems, not just coursework.
        </p>

        <div className="mt-14 space-y-10">
          {/* Accenture: current role + nested internship */}
          <Reveal>
            <div className="glass-panel rounded-2xl">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line p-6">
                <div>
                  <div className="mono-label flex items-center gap-2 text-[10px] text-signal">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal animate-blink" />
                    current
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                    {accentureCurrent.role} <span className="text-ink-faint">— {accentureCurrent.company}</span>
                  </h3>
                </div>
                <div className="mono-label text-right text-[10px] text-ink-faint">
                  <div>{accentureCurrent.period}</div>
                  <div className="mt-0.5">{accentureCurrent.location}</div>
                </div>
              </div>

              <div className="space-y-5 p-6">
                <ul className="space-y-2">
                  {accentureCurrent.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink-dim">
                      <span className="text-ink-faint">—</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div>
                  <div className="mono-label mb-3 text-[9px] text-ink-faint">conceptual data → workflow pipeline</div>
                  <FlowDiagram stages={accentureCurrent.flow!} accent="signal" />
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {accentureCurrent.stack.map((s) => (
                    <span key={s} className="mono-label rounded-full border border-line-strong px-3 py-1 text-[9px] text-ink-faint">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nested: same company, earlier role */}
              <div className="border-t border-line bg-bg-inset/40 p-6">
                <div className="mono-label mb-3 text-[9px] text-ink-faint">same company — a year earlier</div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="font-display text-base font-semibold text-ink">
                      {accentureIntern.role}
                    </h4>
                    <div className="mono-label mt-1 text-[9px] text-ink-faint">
                      {accentureIntern.period} · {accentureIntern.location}
                    </div>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {accentureIntern.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink-dim">
                      <span className="text-ink-faint">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {accentureIntern.stack.map((s) => (
                    <span key={s} className="mono-label rounded-full border border-line-strong px-2.5 py-0.5 text-[8px] text-ink-faint">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Mercor */}
          <Reveal delay={0.05}>
            <div className="glass-panel rounded-2xl">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line p-6">
                <div>
                  <div className="mono-label text-[10px] text-build">{mercor.company}</div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{mercor.role}</h3>
                </div>
                <div className="mono-label text-right text-[10px] text-ink-faint">
                  <div>{mercor.period}</div>
                  <div className="mt-0.5">{mercor.location}</div>
                </div>
              </div>

              <div className="space-y-5 p-6">
                <ul className="space-y-2">
                  {mercor.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink-dim">
                      <span className="text-ink-faint">—</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div>
                  <div className="mono-label mb-3 text-[9px] text-ink-faint">conceptual production workflow</div>
                  <FlowDiagram stages={mercor.flow!} accent="build" />
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {mercor.stack.map((s) => (
                    <span key={s} className="mono-label rounded-full border border-line-strong px-3 py-1 text-[9px] text-ink-faint">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* EasyAlgo — compact */}
          <Reveal delay={0.1}>
            <div className="glass-panel rounded-2xl p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="mono-label text-[10px] text-ink-faint">{easyAlgo.company}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink">{easyAlgo.role}</h3>
                </div>
                <div className="mono-label text-right text-[9px] text-ink-faint">
                  <div>{easyAlgo.period}</div>
                  <div className="mt-0.5">{easyAlgo.location}</div>
                </div>
              </div>
              <ul className="mt-3 space-y-1.5">
                {easyAlgo.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink-dim">
                    <span className="text-ink-faint">—</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {easyAlgo.stack.map((s) => (
                  <span key={s} className="mono-label rounded-full border border-line-strong px-2.5 py-0.5 text-[8px] text-ink-faint">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
