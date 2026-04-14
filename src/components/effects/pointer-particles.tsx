"use client";

import { useEffect, useMemo, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  r: number;
  hue: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function PointerParticles({
  enabled = true,
}: {
  enabled?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const rafRef = useRef<number | null>(null);
  const lastSpawnRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (!enabled || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const onPointerMove = (e: PointerEvent) => {
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
      pointerRef.current.active = true;
    };

    const onPointerLeave = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });

    const tick = (t: number) => {
      rafRef.current = window.requestAnimationFrame(tick);

      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const p = pointerRef.current;

      // Spawn a small burst around the pointer with time-based throttling.
      if (p.active) {
        const since = t - lastSpawnRef.current;
        if (since > 12) {
          lastSpawnRef.current = t;
          const spawnCount = 2 + (since > 40 ? 2 : 0);
          for (let i = 0; i < spawnCount; i++) {
            if (particles.length > 240) break;
            const angle = Math.random() * Math.PI * 2;
            const radius = 6 + Math.random() * 18;
            const speed = 0.25 + Math.random() * 0.85;
            const life = 700 + Math.random() * 650;
            particles.push({
              x: p.x + Math.cos(angle) * radius,
              y: p.y + Math.sin(angle) * radius,
              vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.25,
              vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 0.25,
              life,
              maxLife: life,
              r: 1.2 + Math.random() * 2.2,
              hue: 185 + Math.random() * 95, // cyan -> violet
            });
          }
        }
      }

      // Soft glow near pointer.
      if (p.active) {
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 140);
        grd.addColorStop(0, "rgba(34, 211, 238, 0.08)");
        grd.addColorStop(0.45, "rgba(124, 58, 237, 0.06)");
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 140, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update + draw particles.
      const dt = 16.6;
      for (let i = particles.length - 1; i >= 0; i--) {
        const part = particles[i]!;
        part.life -= dt;
        if (part.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        part.vx *= 0.985;
        part.vy *= 0.985;
        part.x += part.vx * (dt / 16.6);
        part.y += part.vy * (dt / 16.6);

        // Keep within bounds softly.
        part.x = clamp(part.x, -20, w + 20);
        part.y = clamp(part.y, -20, h + 20);

        const a = clamp(part.life / part.maxLife, 0, 1);
        ctx.fillStyle = `hsla(${part.hue}, 95%, 70%, ${0.55 * a})`;
        ctx.beginPath();
        ctx.arc(part.x, part.y, part.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      particlesRef.current = [];
    };
  }, [enabled, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[5] opacity-90"
      aria-hidden="true"
    />
  );
}

