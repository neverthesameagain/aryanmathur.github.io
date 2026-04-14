import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function LeadershipSection() {
  return (
    <Section id="leadership">
      <Reveal>
        <SectionHeading
          eyebrow="LEADERSHIP + OPEN SOURCE"
          title="I can ship, and I can lead."
          desc="Strong engineering is leverage. I’ve led teams, managed stakeholders, and built communities—without compromising technical depth."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {site.leadership.map((l, idx) => (
          <Reveal key={l.title} delay={idx * 0.05}>
            <Card className="h-full">
              <div className="text-base font-semibold text-white">{l.title}</div>
              <div className="mt-1 text-sm text-white/55">{l.org}</div>
              <div className="mt-2 text-sm text-white/55">{l.period}</div>
              <p className="mt-4 text-sm leading-6 text-white/65">{l.impact}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.18}>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="text-xs font-semibold tracking-[0.18em] text-white/55">
              OPEN SOURCE (CURATED)
            </div>
            <p className="mt-3 text-sm leading-6 text-white/65">
              A few repos that best represent my backend + systems + AI
              engineering mix.
            </p>
          </div>
          <div className="lg:col-span-2 grid gap-3">
            {site.openSource.map((r) => (
              <Card key={r.name} className="p-4">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <div className="text-sm font-semibold text-white">{r.name}</div>
                    <div className="mt-1 text-sm text-white/65">{r.desc}</div>
                  </div>
                  <ButtonLink href={r.href} variant="secondary" external>
                    GitHub
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
