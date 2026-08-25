import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative border-t border-line px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div>
            <div className="font-display text-2xl font-semibold text-ink">
              Let&apos;s talk<span className="text-signal">.</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-ink-dim">
              Hiring for backend, AI product engineering, or technical program management? I&apos;m a high-leverage
              operator who ships.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <a href={`mailto:${profile.email}`} className="mono-label text-[11px] text-ink hover:text-signal">
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="mono-label text-[11px] text-ink-dim hover:text-signal">
              github ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="mono-label text-[11px] text-ink-dim hover:text-signal">
              linkedin ↗
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="mono-label text-[11px] text-ink-dim hover:text-signal">
              resume ↗
            </a>
          </div>
        </div>

        <div className="mono-label mt-16 flex flex-col gap-2 border-t border-line pt-6 text-[9px] text-ink-faint sm:flex-row sm:justify-between">
          <span>ARYAN.OS — phase 1 build. more modules compiling.</span>
          <span>© {new Date().getFullYear()} Aryan Mathur</span>
        </div>
      </div>
    </footer>
  );
}
