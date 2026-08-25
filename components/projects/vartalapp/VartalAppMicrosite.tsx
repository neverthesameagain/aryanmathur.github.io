"use client";

import { vartalapp } from "@/data/vartalapp";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function VartalAppMicrosite() {
  return (
    <section id="vartalapp" className="relative border-t border-line px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="PROJECT MICROSITE · 01" title={vartalapp.name} accent="text-build" />

        <Reveal className="mt-6 max-w-2xl">
          <p className="text-sm text-ink-dim">{vartalapp.overview}</p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mono-label rounded-full border border-build/40 px-3 py-1 text-[10px] text-build">
              role: {vartalapp.role}
            </span>
            {vartalapp.stack.map((s) => (
              <span key={s} className="mono-label rounded-full border border-line-strong px-3 py-1 text-[10px] text-ink-dim">
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Role & practice */}
        <Reveal delay={0.05} className="mt-14">
          <div className="mono-label text-[10px] text-ink-faint">role — what I actually did</div>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {vartalapp.roleBullets.map((b, i) => (
              <li key={i} className="glass-panel rounded-xl p-4 text-sm text-ink-dim">
                <span className="mb-2 block text-build">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Process stepper */}
        <Reveal delay={0.1} className="mt-16">
          <div className="mono-label text-[10px] text-ink-faint">project lifecycle</div>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {vartalapp.processStages.map((stage, i) => (
              <span key={stage} className="flex items-center gap-2">
                <span className="rounded-full border border-line-strong px-4 py-2 text-xs text-ink">{stage}</span>
                {i < vartalapp.processStages.length - 1 && <span className="text-build/60">→</span>}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Kanban-style board */}
        <Reveal delay={0.15} className="mt-16">
          <div className="mono-label mb-1 text-[10px] text-ink-faint">workspace — organized from real practices &amp; shipped features</div>
          <p className="mb-5 text-xs text-ink-faint">
            Not a reconstruction of the literal historical board — a structured view of the PM practices I applied and the features that shipped.
          </p>
          <div className="grid items-start gap-4 lg:grid-cols-3">
            {Object.entries(vartalapp.board).map(([column, cards]) => (
              <BoardColumn key={column} title={column} count={cards.length}>
                {cards.map((c) => (
                  <BoardCard key={c} label={c} />
                ))}
              </BoardColumn>
            ))}
            <BoardColumn title="Delivered" count={vartalapp.epics.length} accent>
              {vartalapp.epics.map((epic) => (
                <BoardCard key={epic.name} label={epic.name} note={epic.note} delivered />
              ))}
            </BoardColumn>
          </div>
        </Reveal>

        {/* Architecture */}
        <Reveal delay={0.2} className="mt-16">
          <div className="mono-label mb-5 text-[10px] text-ink-faint">technical architecture</div>
          <ArchitectureDiagram />
        </Reveal>
      </div>
    </section>
  );
}

function BoardColumn({
  title,
  count,
  children,
  accent,
}: {
  title: string;
  count: number;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div className={`glass-panel rounded-2xl p-4 ${accent ? "border-build/40" : ""}`}>
      <div className="mb-3 flex items-center justify-between">
        <span className="mono-label text-[10px] text-ink-dim">{title}</span>
        <span className="mono-label rounded-full border border-line-strong px-2 py-0.5 text-[9px] text-ink-faint">
          {count}
        </span>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function BoardCard({ label, note, delivered }: { label: string; note?: string; delivered?: boolean }) {
  return (
    <div className="rounded-lg border border-line bg-bg-inset/60 p-3 text-sm text-ink-dim">
      <div className="flex items-center justify-between gap-2">
        <span className="text-ink">{label}</span>
        {delivered && <span className="mono-label text-[8px] text-build">shipped</span>}
      </div>
      {note && <p className="mt-1 text-xs text-ink-faint">{note}</p>}
    </div>
  );
}
