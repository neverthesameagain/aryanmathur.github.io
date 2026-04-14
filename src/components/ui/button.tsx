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
        "inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        variant === "primary" &&
          "bg-gradient-to-b from-white/12 to-white/6 text-white ring-1 ring-white/12 hover:from-white/16 hover:to-white/8",
        variant === "secondary" &&
          "bg-white/5 text-white/90 ring-1 ring-white/10 hover:bg-white/8",
        variant === "ghost" &&
          "text-white/80 hover:bg-white/5 hover:text-white",
        className,
      )}
    >
      {children}
      {isExternal ? <ArrowUpRight className="h-4 w-4 text-white/55" /> : null}
    </a>
  );
}

