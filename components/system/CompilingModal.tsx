"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export function CompilingModal({
  open,
  onClose,
  title,
  note,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  note?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glass-panel w-full max-w-sm rounded-2xl p-6 font-mono text-sm"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.7, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mono-label mb-3 flex items-center gap-2 text-[10px] text-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-blink" />
              module status
            </div>
            <p className="text-ink">{title}</p>
            <p className="mt-2 text-ink-faint">{note ?? "Scheduled for the next build pass. Come back soon."}</p>
            <button
              onClick={onClose}
              className="mono-label mt-5 text-[10px] text-ink-dim underline underline-offset-4 hover:text-ink"
            >
              close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
