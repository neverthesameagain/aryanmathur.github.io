import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export function Section({
  id,
  children,
  className,
}: PropsWithChildren<{ id: string; className?: string }>) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 py-20 sm:py-24",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
      <Container>{children}</Container>
    </section>
  );
}
