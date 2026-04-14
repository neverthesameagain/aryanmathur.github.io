import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function ResearchSection() {
  return (
    <Section id="research">
      <Reveal>
        <SectionHeading
          eyebrow="RESEARCH"
          title="Research depth, with engineering intent."
          desc="I’m software-engineering-first. Research is how I build better systems: careful evaluation, principled design, and interpretability."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {site.research.map((r, idx) => (
          <Reveal key={r.title} delay={idx * 0.05}>
            <Card className="h-full">
              <div className="text-base font-semibold text-white">{r.title}</div>
              <div className="mt-1 text-sm text-white/55">{r.area}</div>
              <p className="mt-3 text-sm leading-6 text-white/65">{r.summary}</p>

              <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/65">
                {r.contributions.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {r.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {r.links.paper ? (
                  <ButtonLink href={r.links.paper} variant="secondary" external>
                    arXiv
                  </ButtonLink>
                ) : null}
                {r.links.code ? (
                  <ButtonLink href={r.links.code} variant="ghost" external>
                    Code
                  </ButtonLink>
                ) : null}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

