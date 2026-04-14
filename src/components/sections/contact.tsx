import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function ContactSection() {
  return (
    <Section id="contact">
      <Reveal>
        <SectionHeading
          eyebrow="CONTACT"
          title="Let’s build something real."
          desc="If you're hiring for backend / infra / AI product engineering roles, I’ll be a high-leverage engineer who ships."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Reveal delay={0.05}>
          <Card className="h-full">
            <div className="text-sm font-semibold text-white">Email</div>
            <div className="mt-2 text-sm text-white/65">
              aryannmathur@gmail.com
            </div>
            <div className="mt-5">
              <ButtonLink href={site.links.email} variant="secondary">
                <Mail className="h-4 w-4" />
                Send email
              </ButtonLink>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="h-full">
            <div className="text-sm font-semibold text-white">Links</div>
            <div className="mt-5 flex flex-col gap-2">
              <ButtonLink href={site.links.github} variant="secondary" external>
                <Github className="h-4 w-4" />
                GitHub
              </ButtonLink>
              <ButtonLink href={site.links.linkedin} variant="secondary" external>
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </ButtonLink>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.11}>
          <Card className="h-full">
            <div className="text-sm font-semibold text-white">Resume</div>
            <div className="mt-2 text-sm text-white/65">
              One-click PDF resume for recruiters.
            </div>
            <div className="mt-5">
              <ButtonLink href={site.links.resume} variant="secondary">
                View resume
              </ButtonLink>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

