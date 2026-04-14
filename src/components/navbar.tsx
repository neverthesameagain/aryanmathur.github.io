"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.05, 0.2, 0.4] },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [sectionIds]);

  return active;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(
    () => site.nav.map((l) => l.href.replace("#", "")),
    [],
  );
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = () => setOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-3">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:rounded-lg focus:bg-white/10 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <a
          href="#home"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-white"
          aria-label="Go to top"
        >
          <span className="text-[15px]">
            Aryan{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Mathur
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {site.nav.slice(1).map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative text-sm text-white/70 transition hover:text-white",
                  isActive && "text-white",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "pointer-events-none absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-cyan-300/0 via-cyan-300/70 to-violet-300/0 opacity-0 transition",
                    isActive && "opacity-100",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={site.links.resume} variant="secondary">
            Resume
          </ButtonLink>
          <ButtonLink href={site.links.github} external>
            GitHub
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "lg:hidden",
          open ? "block border-t border-white/10" : "hidden",
        )}
      >
        <Container className="py-3">
          <div className="grid gap-1">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <ButtonLink href={site.links.resume} variant="secondary">
                Resume
              </ButtonLink>
              <ButtonLink href={site.links.github} external>
                GitHub
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
