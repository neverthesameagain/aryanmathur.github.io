import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  desc,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-4 text-pretty text-[15px] leading-7 text-white/65">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

