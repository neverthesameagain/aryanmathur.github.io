// Mirrors next.config.ts — see the comment there for why this exists.
export const basePath = "/aryanmathur.github.io";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
