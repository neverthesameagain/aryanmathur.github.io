import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Operating in production codebases."
          desc="I’m optimizing for the work recruiters care about: owning backend features, debugging real systems, designing clean services, and shipping reliably."
        />
      </Reveal>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300/40 via-white/10 to-violet-300/40 sm:left-6" />
        <div className="grid gap-4">
          {site.experience.map((e, idx) => (
            <Reveal key={`${e.company}-${e.period}`} delay={idx * 0.05}>
              <div className="relative pl-12 sm:pl-16">
                <div className="absolute left-[10px] top-7 h-3 w-3 rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 shadow-[0_0_0_4px_rgba(255,255,255,0.06)] sm:left-[18px]" />
                <Card>
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <div className="text-base font-semibold text-white">
                        {e.role} — {e.company}
                      </div>
                      <div className="mt-1 text-sm text-white/55">
                        {e.period}
                        {e.location ? ` • ${e.location}` : ""}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {e.tech?.slice(0, 6).map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/65">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
