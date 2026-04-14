"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

function RotatingTagline({ items }: { items: string[] }) {
  const list = items.slice(0, 5);
  return (
    <div className="mt-6 flex items-center gap-3">
      <Badge className="bg-white/4">Signal</Badge>
      <div className="relative h-7 overflow-hidden text-sm text-white/70">
        <span className="sr-only">{list.join(" • ")}</span>
        <motion.div
          className="absolute left-0 top-0"
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -28, -56, -84, -112, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            {list.map((t) => (
              <div key={t} className="h-7 leading-7">
                {t}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function StatCard({ k, v, i }: { k: string; v: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: "easeOut" }}
      className={cn(
        "glass rounded-2xl p-4 ring-1 ring-white/10",
        "hover:bg-white/[0.07] transition",
      )}
    >
      <div className="text-[11px] font-semibold tracking-[0.18em] text-white/50">
        {k}
      </div>
      <div className="mt-2 text-sm font-semibold text-white">{v}</div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="noise-overlay relative overflow-hidden pb-12 pt-16 sm:pb-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-40 -top-40 h-[460px] w-[460px] rounded-full bg-violet-600/25 blur-3xl"
          animate={{ x: [0, 18, -8, 0], y: [0, 12, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 top-8 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl"
          animate={{ x: [0, -12, 8, 0], y: [0, 14, -6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-gradient-to-r from-white/10 to-white/5">
                  Software engineer first
                </Badge>
                <Badge>Backend • systems • AI engineering</Badge>
                <Badge className="bg-white/4">
                  Mercor (Jan 2026–Present)
                </Badge>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {site.name}
              </h1>
              <p className="mt-3 text-sm font-medium tracking-tight text-white/70 sm:text-base">
                {site.headline}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-7 text-white/70 sm:text-base">
                <span className="text-white/90">{site.valueProp}</span>
                <span className="text-white/60"> {site.blurb}</span>
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <RotatingTagline items={site.taglines} />
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#work">View Projects</ButtonLink>
                <ButtonLink href={site.links.resume} variant="secondary">
                  Resume
                </ButtonLink>
                <ButtonLink href={site.links.github} variant="ghost" external>
                  <Github className="h-4 w-4" />
                  GitHub
                </ButtonLink>
                <ButtonLink href={site.links.linkedin} variant="ghost" external>
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </ButtonLink>
                <ButtonLink href="#contact" variant="ghost">
                  <Mail className="h-4 w-4" />
                  Contact
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-2">
                {site.achievementsBadges.map((b) => (
                  <Badge key={b.label} className="bg-white/4">
                    {b.label}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {site.heroStats.map((s, i) => (
                <StatCard key={s.k} k={s.k} v={s.v} i={i} />
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4 text-xs leading-6 text-white/60">
              <div className="font-semibold text-white/75">What I’m optimizing for</div>
              <div className="mt-2">
                <span className="text-white/80">Production engineering</span> (debugging, reliability, performance) +
                <span className="text-white/80"> clean system design</span>. AI/ML is a differentiator I use for better
                products and stronger evaluation—not the headline.
              </div>
              <div className="mt-3 text-white/55">
                Roles: backend / infra / systems / AI product engineering • New-grad 2026
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
