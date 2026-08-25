import { cn } from "@/lib/utils";

const ACCENT_BORDER = {
  signal: "border-signal/60",
  build: "border-build/60",
  lab: "border-lab/60",
};

export function HUDFrame({
  children,
  accent = "signal",
  className,
}: {
  children: React.ReactNode;
  accent?: "signal" | "build" | "lab";
  className?: string;
}) {
  const border = ACCENT_BORDER[accent];
  return (
    <div className={cn("relative p-5", className)}>
      <span className={cn("absolute left-0 top-0 h-3 w-3 border-l border-t", border)} />
      <span className={cn("absolute right-0 top-0 h-3 w-3 border-r border-t", border)} />
      <span className={cn("absolute bottom-0 left-0 h-3 w-3 border-b border-l", border)} />
      <span className={cn("absolute bottom-0 right-0 h-3 w-3 border-b border-r", border)} />
      {children}
    </div>
  );
}
