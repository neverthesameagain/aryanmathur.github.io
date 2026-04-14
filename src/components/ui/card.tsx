import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "fancy-card rounded-2xl p-5 transition will-change-transform hover:-translate-y-0.5 hover:brightness-[1.05]",
        className,
      )}
    >
      {children}
    </div>
  );
}
