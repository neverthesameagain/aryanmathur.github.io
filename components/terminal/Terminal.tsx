"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";
import { scrollToId } from "@/components/providers/SmoothScroll";

type Line = { kind: "cmd" | "out"; text: string };

const NAV_COMMANDS: Record<string, string> = {
  experience: "experience",
  leadership: "leadership",
  projects: "vartalapp",
  vartalapp: "vartalapp",
  research: "research",
  skills: "skills",
  achievements: "achievements",
  map: "system-map",
};

const HELP_TEXT = [
  "available commands:",
  "  help                 show this list",
  "  whoami               who is Aryan",
  "  resume               open resume.pdf",
  "  experience           jump to experience",
  "  leadership           jump to leadership",
  "  projects             jump to projects",
  "  research             jump to research",
  "  skills               jump to skills",
  "  achievements         jump to achievements",
  "  contact              show contact info",
  "  github / linkedin    open external profile",
  "  clear                clear this terminal",
  "  exit                 close this terminal",
];

function runCommand(raw: string, close: () => void): string[] {
  const [cmd, ...rest] = raw.trim().toLowerCase().split(/\s+/);
  const arg = rest.join(" ");

  if (!cmd) return [];

  if (cmd === "help") return HELP_TEXT;

  if (cmd === "whoami" || cmd === "about") {
    return [profile.tagline, profile.subline];
  }

  if (cmd === "resume") {
    window.open(profile.resume, "_blank");
    return ["opening resume.pdf ..."];
  }

  if (cmd === "github") {
    window.open(profile.github, "_blank");
    return [`→ ${profile.github}`];
  }

  if (cmd === "linkedin") {
    window.open(profile.linkedin, "_blank");
    return [`→ ${profile.linkedin}`];
  }

  if (cmd === "contact") {
    return [profile.email, profile.github, profile.linkedin];
  }

  if (cmd in NAV_COMMANDS) {
    scrollToId(NAV_COMMANDS[cmd]);
    setTimeout(close, 500);
    return [`→ jumping to /${cmd} ...`];
  }

  if (cmd === "clear") return ["__CLEAR__"];

  if (cmd === "exit" || cmd === "quit" || cmd === "close") {
    setTimeout(close, 150);
    return ["closing terminal ..."];
  }

  if (cmd === "sudo") {
    return [`permission denied: ${arg || "that"} requires root. nice try.`];
  }

  if (cmd === "echo") return [arg];

  if (cmd === "date") return [new Date().toString()];

  return [`command not found: ${cmd} — type 'help'`];
}

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<Line[]>([
    { kind: "out", text: "ARYAN.OS terminal — type 'help' to get started." },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const close = () => setOpen(false);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      const el = e.target as HTMLElement;
      const typing = el.tagName === "INPUT" || el.tagName === "TEXTAREA";
      if (e.key === "`" && !typing) {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;
    const out = runCommand(cmd, close);
    setInput("");
    if (out[0] === "__CLEAR__") {
      setHistory([]);
      return;
    }
    setHistory((h) => [
      ...h,
      { kind: "cmd", text: cmd },
      ...out.map((text): Line => ({ kind: "out", text })),
    ]);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open terminal"
        className="mono-label fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-bg-raised text-ink-dim shadow-lg backdrop-blur transition hover:border-signal hover:text-signal"
      >
        &gt;_
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-end justify-center bg-black/60 px-4 pb-4 backdrop-blur-sm sm:items-center sm:pb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="glass-panel crt-mask flex h-[70vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl font-mono text-sm"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.7, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mono-label flex items-center justify-between border-b border-line px-4 py-2.5 text-[10px] text-ink-faint">
                <span>ARYAN.OS — terminal</span>
                <button onClick={close} className="hover:text-signal">
                  esc to close
                </button>
              </div>

              <div ref={scrollRef} className="flex-1 space-y-1 overflow-y-auto px-4 py-3">
                {history.map((l, i) =>
                  l.kind === "cmd" ? (
                    <div key={i} className="text-ink">
                      <span className="text-signal">›</span> {l.text}
                    </div>
                  ) : (
                    <div key={i} className="whitespace-pre-wrap text-ink-dim">
                      {l.text}
                    </div>
                  )
                )}
              </div>

              <form onSubmit={submit} className="flex items-center gap-2 border-t border-line px-4 py-3">
                <span className="text-signal">$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  spellCheck={false}
                  autoComplete="off"
                  className="flex-1 bg-transparent text-ink outline-none placeholder:text-ink-faint"
                  placeholder="type a command..."
                />
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
