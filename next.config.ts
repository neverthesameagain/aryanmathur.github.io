import type { NextConfig } from "next";

// This repo (aryanmathur.github.io) is owned by the GitHub account "neverthesameagain",
// so it does not get GitHub's automatic root-domain user-page treatment — it deploys as
// a project page at neverthesameagain.github.io/aryanmathur.github.io/. Remove basePath/
// assetPrefix if the account is later renamed to "aryanmathur" or a custom domain is set.
const repoName = "aryanmathur.github.io";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  // Don't auto-generate AGENTS.md / CLAUDE.md on `next dev`.
  agentRules: false,
};

export default nextConfig;
