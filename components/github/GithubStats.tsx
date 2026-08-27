"use client";

import { useEffect, useState } from "react";
import { githubProfile } from "@/data/projects";

const USERNAME = "neverthesameagain";

type Stats = {
  publicRepos: number;
  followers: number;
  topLanguages: { name: string; count: number }[];
};

export function GithubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, { signal: controller.signal }),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("github api error");
        const user = await userRes.json();
        const repos: { language: string | null; fork: boolean }[] = await reposRes.json();

        const counts = new Map<string, number>();
        repos
          .filter((r) => !r.fork && r.language)
          .forEach((r) => counts.set(r.language!, (counts.get(r.language!) ?? 0) + 1));
        const topLanguages = [...counts.entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({ name, count }));

        if (!cancelled) {
          setStats({ publicRepos: user.public_repos, followers: user.followers, topLanguages });
        }
      } catch {
        if (!cancelled) setFailed(true);
      } finally {
        clearTimeout(timeout);
      }
    }
    load();
    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="mb-10 flex flex-col gap-4">
      <div className="mono-label flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] text-ink-faint">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-signal animate-blink" />
          live from github
        </span>
        {stats ? (
          <>
            <span>{stats.publicRepos} public repos</span>
            <span>{stats.followers} followers</span>
            {stats.topLanguages.length > 0 && (
              <span>top: {stats.topLanguages.map((l) => l.name).join(" · ")}</span>
            )}
          </>
        ) : failed ? (
          <a href={githubProfile} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-ink">
            live data unavailable — view profile directly →
          </a>
        ) : (
          <span>fetching …</span>
        )}
      </div>
    </div>
  );
}
