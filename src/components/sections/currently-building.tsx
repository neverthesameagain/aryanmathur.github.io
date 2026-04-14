import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function CurrentlyBuildingSection() {
  return (
    <Section id="currently-building" className="pt-8">
      <Reveal>
        <SectionHeading
          eyebrow="CURRENTLY BUILDING"
          title={
            <>
              Production backend systems at{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Mercor
              </span>
              .
            </>
          }
          desc="I’m building in real codebases, at real scale: feature delivery, bug-fixing, performance, and reliability—while keeping AI systems depth as a differentiator."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Reveal delay={0.05}>
          <Card>
            <div className="text-sm font-semibold text-white">
              Backend engineering
            </div>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Working across Go + Python services: pragmatic APIs, service
              boundaries, and production debugging.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Go", "Python", "APIs", "Reliability"].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card>
            <div className="text-sm font-semibold text-white">
              Systems mindset
            </div>
            <p className="mt-2 text-sm leading-6 text-white/65">
              I care about failure modes: observability, performance profiling,
              clear ownership, and operational tradeoffs.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Distributed systems", "Latency", "Telemetry", "Design"].map(
                (t) => (
                  <Badge key={t}>{t}</Badge>
                ),
              )}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.11}>
          <Card>
            <div className="text-sm font-semibold text-white">
              AI systems depth
            </div>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Research experience in RL, CV, and VLMs—translating into evaluation,
              deployment constraints, and practical model behavior.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["VLMs", "RL", "CV", "Evaluation"].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>

      <div className="mt-8 text-sm text-white/55">
        <span className="text-white/75">Education:</span> Final-year B.Tech
        Electrical Engineering (Minor in Data Science), IIT Palakkad • CGPA 8.02.
        <span className="text-white/75"> Focus:</span> Software engineering,
        backend systems, distributed systems, AI systems.
      </div>

      <Reveal delay={0.14}>
        <div className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-white/65 lg:grid-cols-3">
          <div>
            <div className="text-xs font-semibold tracking-[0.18em] text-white/55">
              WHAT YOU GET
            </div>
            <div className="mt-3 text-sm leading-6">
              An engineer who can reason about architecture, ship features, and
              debug production systems—without losing product intuition.
            </div>
          </div>
          <ul className="grid gap-2 text-sm leading-6 lg:col-span-2">
            {[
              "Backend-first delivery: clean interfaces, pragmatic tradeoffs, strong defaults.",
              "Systems thinking: failure modes, performance, observability, and operational simplicity.",
              "AI depth as leverage: evaluation discipline, interpretability, and deployment constraints.",
            ].map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
