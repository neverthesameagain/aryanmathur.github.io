import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function SkillsSection() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading
          eyebrow="TECHNICAL SKILLS"
          title="Backend & systems first."
          desc="A recruiter should immediately see systems + production capability—AI/ML shows up as an additional edge."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {site.skills.map((g, idx) => (
          <Reveal key={g.group} delay={idx * 0.04}>
            <Card>
              <div className="text-sm font-semibold text-white">{g.group}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

