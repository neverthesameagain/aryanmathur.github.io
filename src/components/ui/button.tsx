import type { PropsWithChildren } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className,
}: PropsWithChildren<{
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
}>) {
  const isExternal = external ?? href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        variant === "primary" &&
          "bg-gradient-to-b from-white/14 to-white/8 text-white/95 ring-1 ring-white/14 hover:from-white/18 hover:to-white/10",
        variant === "secondary" &&
          "bg-white/7 text-white/95 ring-1 ring-white/14 hover:bg-white/10",
        variant === "ghost" &&
          "text-white/90 hover:bg-white/7 hover:text-white/95",
        className,
      )}
    >
      {children}
      {isExternal ? <ArrowUpRight className="h-4 w-4 text-white/55" /> : null}
    </a>
  );
}

