import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5", className)}>
      {children}
    </div>
  );
}

