import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 grid gap-2 text-sm leading-6 text-white/65">
      {items.map((x) => (
        <li key={x} className="flex gap-2">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300/80" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}

export function FeaturedWorkSection() {
  return (
    <Section id="work">
      <Reveal>
        <SectionHeading
          eyebrow="FEATURED ENGINEERING WORK"
          title={
            <>
              Engineering stories — not a project list.
              <span className="text-white/55"> (Recruiter-friendly)</span>
            </>
          }
          desc="Each card is written like a debrief: the problem, the architecture, the hard parts, and the outcomes."
        />
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-8 flex flex-wrap gap-2 text-xs">
          {[
            "Backend services & APIs",
            "Real-time collaboration",
            "AI systems + evaluation",
            "Systems simulation",
            "Security-minded design",
            "Research → product translation",
          ].map((t) => (
            <Badge key={t} className="bg-white/4">
              {t}
            </Badge>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4">
        {site.featuredWork.map((p, idx) => (
          <Reveal key={p.title} delay={idx * 0.04}>
            <Card className="p-6">
              <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {p.title}
                    </h3>
                    {p.highlight ? (
                      <Badge className="bg-white/4">{p.highlight}</Badge>
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {p.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 flex-wrap gap-2">
                  {p.links.github ? (
                    <ButtonLink href={p.links.github} variant="secondary" external>
                      GitHub
                    </ButtonLink>
                  ) : null}
                  {p.links.demo ? (
                    <ButtonLink href={p.links.demo} variant="secondary" external>
                      Live demo
                    </ButtonLink>
                  ) : (
                    <span className="inline-flex h-11 items-center justify-center rounded-xl bg-white/5 px-4 text-sm font-medium text-white/40 ring-1 ring-white/10">
                      Live demo (soon)
                    </span>
                  )}
                  {p.links.writeup ? (
                    <ButtonLink href={p.links.writeup} variant="ghost" external>
                      Paper / writeup
                    </ButtonLink>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-4">
                <div className="lg:col-span-1">
                  <div className="text-xs font-semibold tracking-[0.18em] text-white/55">
                    PROBLEM
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {p.problem}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="text-xs font-semibold tracking-[0.18em] text-white/55">
                    ARCHITECTURE
                  </div>
                  <BulletList items={p.architecture} />
                </div>
                <div className="lg:col-span-1">
                  <div className="text-xs font-semibold tracking-[0.18em] text-white/55">
                    CHALLENGES
                  </div>
                  <BulletList items={p.challenges} />
                </div>
                <div className="lg:col-span-1">
                  <div className="text-xs font-semibold tracking-[0.18em] text-white/55">
                    OUTCOMES
                  </div>
                  <BulletList items={p.outcomes} />
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
