export type Mission = {
  id: string;
  event: string;
  result: string;
  year?: string;
  project?: string;
  domain?: string;
  problem?: string;
  approach?: string;
  architecture?: string[];
  metrics?: { label: string; value: string }[];
  repo?: string;
  note?: string;
};

// Real projects, sourced from each repo's own README — no invented metrics or architecture.
export const missions: Mission[] = [
  {
    id: "meta-openenv",
    event: "Meta OpenEnv Hackathon",
    result: "Finalist",
    year: "2026",
    project: "EIE — Economic Intelligence Engine",
    domain: "Multi-Agent RL · Economic Simulation",
    problem:
      "Static economic models don't capture how real markets react to shocks in real time, or how agents adapt strategy as trust and alliances shift.",
    approach:
      "A live, OpenEnv-compatible multi-agent economic simulation where natural-language events reshape world state. Seven agents with independent beliefs, memory, and trust reason under uncertainty and adapt through lightweight Q-style learning — no heavy training loops.",
    architecture: ["Text-to-economy pipeline", "7 adaptive agents", "Agent-based RL", "LLM-based RL (Groq)"],
    metrics: [{ label: "Adaptive agents", value: "7" }],
    repo: "https://github.com/neverthesameagain/EIE-Economic-Intelligence-Engine",
  },
  {
    id: "paytm-geekroom",
    event: "Paytm GeekRoom Grand Prix",
    result: "Finalist",
    year: "2026",
    project: "CrowdShield",
    domain: "Multi-Agent Systems · Safety-Critical Simulation",
    problem:
      "Crowd crushes at large venues form in minutes with almost no warning — by the time density is visibly dangerous, it's often too late to safely redirect people.",
    approach:
      "A digital twin where zone, gate, and routing agents negotiate interventions through a coordinator, gated by a safety shield with absolute veto power. Every fix is tested on a simulated future before being applied, and the negotiation protocol is structurally unable to deadlock.",
    architecture: [
      "Physics-based flow predictor",
      "Zone / gate / routing agents",
      "Safety shield (absolute veto)",
      "Camera → digital-twin bridge",
    ],
    metrics: [
      { label: "Dangerous-density time", value: "−67%" },
      { label: "Alert lead time", value: "~17 min" },
    ],
    repo: "https://github.com/neverthesameagain/crowdshield",
    note: "Measured on a simulated 30k-seat stadium egress, evacuation throughput unaffected.",
  },
  {
    id: "flipkart-grid",
    event: "Flipkart GRiD 7.0",
    result: "National Semi-Finalist",
    note: "Pure algorithmic format — a DSA problem-solving round at every elimination stage, no build component.",
  },
];
