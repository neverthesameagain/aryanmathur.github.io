"use client";

import { useState } from "react";
import { featuredProjects, archiveProjects, githubProfile } from "@/data/projects";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { scrollToId } from "@/components/providers/SmoothScroll";

export function ProjectsGrid() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="projects" className="relative border-t border-line px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="BUILD" title="Featured work" accent="text-build" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((p, i) => {
            const cardBody = (
              <>
                <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
                <p className="mt-1.5 text-sm text-ink-dim">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="mono-label rounded-full border border-line-strong px-2.5 py-0.5 text-[8px] text-ink-faint">
                      {s}
                    </span>
                  ))}
                </div>
                <span className="mono-label mt-auto pt-4 text-[9px] text-ink-faint group-hover:text-ink">
                  {p.anchor ? "open microsite →" : "view →"}
                </span>
              </>
            );
            return (
              <Reveal key={p.id} delay={(i % 2) * 0.05}>
                {p.anchor ? (
                  <button
                    onClick={() => scrollToId(p.anchor!)}
                    className="glass-panel group flex h-full w-full flex-col rounded-xl p-5 text-left transition hover:border-build/40"
                  >
                    {cardBody}
                  </button>
                ) : (
                  <a
                    href={p.live ?? p.repo ?? githubProfile}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-panel group flex h-full flex-col rounded-xl p-5 transition hover:border-line-strong"
                  >
                    {cardBody}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="mono-label flex items-center gap-2 text-[10px] text-ink-dim hover:text-ink"
          >
            <span className={`inline-block transition-transform ${expanded ? "rotate-90" : ""}`}>→</span>
            more from the lab — {archiveProjects.length} more repositories
          </button>

          {expanded && (
            <div className="mt-4 grid divide-y divide-line border-y border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
              {archiveProjects.map((r) => (
                <a
                  key={r.repo}
                  href={`${githubProfile}/${r.repo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-w-0 items-center justify-between gap-3 px-4 py-3 text-sm transition hover:bg-bg-raised"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-ink-dim group-hover:text-ink">{r.name.replace(/-/g, " ")}</span>
                    {r.tagline && (
                      <span className="block truncate text-xs text-ink-faint">{r.tagline}</span>
                    )}
                  </span>
                  <span className="mono-label shrink-0 text-[8px] text-ink-faint">
                    {r.language ?? "—"}
                  </span>
                </a>
              ))}
            </div>
          )}
        </Reveal>

        <a
          href={githubProfile}
          target="_blank"
          rel="noreferrer"
          className="mono-label mt-8 inline-block text-[10px] text-ink-dim underline underline-offset-4 hover:text-ink"
        >
          view full profile on github →
        </a>
      </div>
    </section>
  );
}
