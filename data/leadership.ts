export type LeadershipEntry = {
  id: string;
  org: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
  accent: "signal" | "build" | "lab";
};

export const leadership: LeadershipEntry[] = [
  {
    id: "petrichor",
    org: "Petrichor '24 — IIT Palakkad",
    role: "Assistant Fest Coordinator",
    period: "Mar 2023 — Feb 2024",
    location: "IIT Palakkad",
    summary:
      "Petrichor is IIT Palakkad's institute fest — technical teams and technical competitions ran alongside cultural and non-technical events. Coordinated a 200-member team across both tracks.",
    bullets: [
      "Coordinated a 200-member team across technical and non-technical competitions and events.",
      "Drove planning, resource allocation, stakeholder coordination, and execution across departments.",
      "Oversaw a ₹26,00,000 budget spanning procurement, vendor coordination, and operations.",
    ],
    metrics: [
      { label: "Team", value: "200" },
      { label: "Budget", value: "₹26L" },
      { label: "Duration", value: "11 mo" },
    ],
    accent: "signal",
  },
  {
    id: "interiit",
    org: "Inter IIT Tech Meet 13.0 — IIT Bombay",
    role: "Contingent Leader",
    period: "Jun 2024 — Dec 2024",
    location: "IIT Bombay",
    summary:
      "Led IIT Palakkad's 93-member technical contingent through project planning, execution, coordination, and delivery across multiple technical projects.",
    bullets: [
      "Led IIT Palakkad's technical contingent of 93 people across project planning, execution, coordination, and delivery.",
      "Coordinated technical projects and managed approximately ₹8,00,000 in combined project and Tech Meet expenditure across planning and execution.",
    ],
    metrics: [
      { label: "Contingent", value: "93" },
      { label: "Budget", value: "₹8L" },
      { label: "Duration", value: "7 mo" },
    ],
    accent: "build",
  },
  {
    id: "ecell",
    org: "Entrepreneurship Cell — IIT Palakkad",
    role: "Founder & President",
    period: "Aug 2024 — May 2025",
    location: "IIT Palakkad",
    summary:
      "Founded and led the student entrepreneurship organization from the ground up.",
    bullets: [
      "Led the student entrepreneurship organization, driving planning, execution, stakeholder coordination, and delivery of initiatives across the institute.",
    ],
    metrics: [
      { label: "Role", value: "Founder" },
      { label: "Duration", value: "9 mo" },
    ],
    accent: "lab",
  },
  {
    id: "placement",
    org: "Career Development Centre — IIT Palakkad",
    role: "Placement Coordinator",
    period: "May 2025 — May 2026",
    location: "IIT Palakkad",
    summary:
      "Coordinated placement activities across students, recruiters, and institute stakeholders — running multiple parallel processes at once.",
    bullets: [
      "Coordinated placement-related activities across students, recruiters, and institute stakeholders.",
      "Managed timelines, communication, and execution across multiple parallel processes.",
    ],
    metrics: [
      { label: "Stakeholders", value: "3 groups" },
      { label: "Duration", value: "12 mo" },
    ],
    accent: "signal",
  },
];
