import { vartalapp } from "@/data/vartalapp";

export function ArchitectureDiagram() {
  const { client, backend, store } = vartalapp.architecture;

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-10">
      <div className="mx-auto flex max-w-md flex-col items-center gap-0">
        <Node label={client} />
        <Connector />
        <Node label={backend} highlight />
        <Connector />
        <Node label={store} />
      </div>

      <div className="mt-10">
        <div className="mono-label mb-3 text-center text-[9px] text-ink-faint">feature modules served by the backend</div>
        <div className="mx-auto h-4 w-px bg-line-strong" />
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-line-strong pt-4">
          {vartalapp.epics.map((epic) => (
            <div key={epic.name} className="relative">
              <span className="absolute -top-4 left-1/2 h-4 w-px -translate-x-1/2 bg-line-strong" />
              <span className="mono-label rounded-full border border-build/40 px-3 py-1.5 text-[10px] text-build">
                {epic.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Node({ label, highlight }: { label: string; highlight?: boolean }) {
  return (
    <div
      className={`w-full rounded-xl border px-5 py-3 text-center text-sm ${
        highlight ? "border-build/50 text-ink" : "border-line-strong text-ink-dim"
      }`}
    >
      {label}
    </div>
  );
}

function Connector() {
  return <div className="h-6 w-px bg-line-strong" />;
}
