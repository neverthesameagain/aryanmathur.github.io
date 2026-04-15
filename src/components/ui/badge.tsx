import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/7 px-3 py-1 text-xs font-semibold text-white/95 ring-1 ring-white/14",
        className,
      )}
    >
      {children}
    </span>
  );
}

