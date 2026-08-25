export function SectionHeading({
  kicker,
  title,
  accent = "text-ink",
}: {
  kicker: string;
  title: string;
  accent?: string;
}) {
  return (
    <div>
      <div className={`mono-label text-[11px] ${accent === "text-ink" ? "text-ink-faint" : accent}`}>{kicker}</div>
      <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h2>
    </div>
  );
}
