export function FlowDiagram({ stages, accent = "signal" }: { stages: string[]; accent?: "signal" | "build" }) {
  const arrowColor = accent === "signal" ? "text-signal/60" : "text-build/60";
  return (
    <div className="flex flex-wrap items-center gap-2">
      {stages.map((stage, i) => (
        <span key={stage} className="flex items-center gap-2">
          <span className="rounded-full border border-line-strong px-3 py-1.5 text-xs text-ink-dim">{stage}</span>
          {i < stages.length - 1 && <span className={arrowColor}>→</span>}
        </span>
      ))}
    </div>
  );
}
