"use client";

import { projects, archiveRepos, githubProfile } from "@/data/projects";
import { Reveal } from "@/components/shared/Reveal";

export function ProjectsGrid() {
  const rest = projects.filter((p) => p.status !== "flagship");

  return (
    <section id="projects" className="relative px-6 pb-28 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mono-label text-[10px] text-ink-faint">more shipped work</div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.05}>
              <a
                href={p.live ?? p.repo ?? githubProfile}
                target="_blank"
                rel="noreferrer"
                className="glass-panel group flex h-full flex-col rounded-xl p-5 transition hover:border-line-strong"
              >
                <h3 className="font-display text-base font-semibold text-ink">{p.name}</h3>
                <p className="mt-1.5 text-sm text-ink-dim">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="mono-label rounded-full border border-line-strong px-2.5 py-0.5 text-[8px] text-ink-faint">
                      {s}
                    </span>
                  ))}
                </div>
                <span className="mono-label mt-auto pt-4 text-[9px] text-ink-faint group-hover:text-ink">
                  view →
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <div className="mono-label text-[10px] text-ink-faint">
            $ ls ~/github/neverthesameagain — {archiveRepos.length} more repositories
          </div>
          <div className="mt-4 grid divide-y divide-line border-y border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
            {archiveRepos.map((r) => (
              <a
                key={r.repo}
                href={`${githubProfile}/${r.repo}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 px-4 py-3 text-sm transition hover:bg-bg-raised"
              >
                <span className="truncate text-ink-dim group-hover:text-ink">
                  {r.name.replace(/-/g, " ")}
                </span>
                <span className="mono-label shrink-0 text-[8px] text-ink-faint">
                  {r.language ?? "—"}
                </span>
              </a>
            ))}
          </div>
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
