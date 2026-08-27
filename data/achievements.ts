export type Achievement = {
  competition: string;
  result: string;
  year?: string;
  /** In-page anchor to a fuller writeup, where one exists — never fabricated. */
  anchor?: string;
};

// Authoritative list — no links invented where none exist.
export const achievements: Achievement[] = [
  { competition: "Meta OpenEnv Hackathon", result: "Finalist", year: "2026", anchor: "hackathons" },
  { competition: "Paytm GeekRoom Grand Prix", result: "Finalist", year: "2026", anchor: "hackathons" },
  { competition: "Amazon ML Challenge", result: "Top 0.9% (251 / 27,600+)", year: "2025" },
  { competition: "Flipkart GRiD 7.0", result: "National Semi-Finalist", anchor: "hackathons" },
  { competition: "Adobe AI Challenge", result: "9th among all IITs", year: "2024" },
];
