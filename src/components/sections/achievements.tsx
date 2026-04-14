import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function AchievementsSection() {
  return (
    <Section id="achievements">
      <Reveal>
        <SectionHeading
          eyebrow="ACHIEVEMENTS"
          title="Signals recruiters recognize."
          desc="High-signal wins near the top of the funnel: hackathons, rankings, scholarships, and Olympiad performance."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {site.achievements.map((a, idx) => (
          <Reveal key={a.title} delay={idx * 0.04}>
            <Card className="h-full">
              <div className="text-sm font-semibold text-white">{a.title}</div>
              <p className="mt-3 text-sm leading-6 text-white/65">{a.detail}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {a.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
