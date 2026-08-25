"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { systemNodes, type SystemNode } from "@/data/nav";
import { scrollToId } from "@/components/providers/SmoothScroll";
import { CompilingModal } from "@/components/system/CompilingModal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const ACCENT_TEXT: Record<SystemNode["accent"], string> = {
  signal: "text-signal",
  build: "text-build",
  lab: "text-lab",
};
const ACCENT_BORDER: Record<SystemNode["accent"], string> = {
  signal: "group-hover:border-signal",
  build: "group-hover:border-build",
  lab: "group-hover:border-lab",
};
const ACCENT_STROKE: Record<SystemNode["accent"], string> = {
  signal: "#ff5a36",
  build: "#7691ff",
  lab: "#49e0c8",
};

const RADIUS = 37;

export function SystemMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<SystemNode | null>(null);
  const [modalNode, setModalNode] = useState<SystemNode | null>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 18 });
  const sry = useSpring(ry, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(srx, (v) => `${v}deg`);
  const rotateY = useTransform(sry, (v) => `${v}deg`);

  function onMove(e: React.MouseEvent) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 10);
    rx.set(py * -10);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  function handleActivate(node: SystemNode) {
    if (node.status === "online") {
      scrollToId(node.id);
    } else {
      setModalNode(node);
    }
  }

  return (
    <section id="system-map" className="relative overflow-hidden px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="NAVIGATION" title="System map" />
        <p className="mt-4 max-w-lg text-sm text-ink-dim">
          Six modules make up the system. Click a node to jump straight in.
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ perspective: 1200 }}
        className="relative mx-auto mt-16 aspect-square w-full max-w-[640px]"
      >
        <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative h-full w-full">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
            {systemNodes.map((node, i) => {
              const angle = (i / systemNodes.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(angle) * RADIUS;
              const y = 50 + Math.sin(angle) * RADIUS;
              const isActive = active?.id === node.id;
              return (
                <line
                  key={node.id}
                  x1={50}
                  y1={50}
                  x2={x}
                  y2={y}
                  stroke={isActive ? ACCENT_STROKE[node.accent] : "rgba(245,244,238,0.14)"}
                  strokeWidth={isActive ? 0.5 : 0.25}
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>

          {/* core */}
          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-line-strong bg-bg-raised text-center">
            <span className="pointer-events-none absolute inset-0 animate-ping rounded-full border border-signal/30" />
            <span className="font-display text-sm font-semibold text-ink">ARYAN</span>
            <span className="mono-label text-[8px] text-ink-faint">.OS</span>
          </div>

          {systemNodes.map((node, i) => {
            const angle = (i / systemNodes.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * RADIUS;
            const y = 50 + Math.sin(angle) * RADIUS;
            return (
              <button
                key={node.id}
                onClick={() => handleActivate(node)}
                onMouseEnter={() => setActive(node)}
                onMouseLeave={() => setActive((a) => (a?.id === node.id ? null : a))}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  className={`glass-panel flex h-20 w-20 flex-col items-center justify-center rounded-2xl border transition sm:h-24 sm:w-24 ${ACCENT_BORDER[node.accent]}`}
                >
                  <span className={`font-display text-sm font-medium ${ACCENT_TEXT[node.accent]}`}>{node.label}</span>
                  <span className="mono-label mt-1 text-[8px] text-ink-faint">
                    {node.status === "online" ? node.code : "compiling"}
                  </span>
                </div>
              </button>
            );
          })}
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 -bottom-4 mx-auto max-w-sm text-center">
          {active && (
            <p className="mono-label text-[10px] text-ink-faint">{active.description}</p>
          )}
        </div>
      </div>

      <CompilingModal
        open={!!modalNode}
        onClose={() => setModalNode(null)}
        title={`${modalNode?.label}.module — not yet compiled.`}
        note={modalNode?.description}
      />
    </section>
  );
}
