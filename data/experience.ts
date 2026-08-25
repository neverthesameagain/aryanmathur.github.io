export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
  status: "current" | "past";
  /** Conceptual process stages for the flagship flow diagram — not real internal architecture. */
  flow?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "accenture-current",
    company: "Accenture",
    role: "AI Native Software Engineer",
    period: "Jul 2026 — Present",
    location: "Gurgaon, Haryana",
    status: "current",
    bullets: [
      "Developing scalable backend services and data pipelines that automate enterprise workflows and generate actionable insights from large-scale datasets.",
      "Automating engineering and data workflows using cloud-native services to improve deployment efficiency, reliability, and engineering productivity.",
      "Collaborating with cross-functional Cloud, Data, and Engineering teams to design, build, debug, and maintain scalable production systems.",
    ],
    stack: ["Cloud-native services", "Data pipelines", "CI/CD"],
    flow: ["Raw data", "Processing pipeline", "AI / LLM layer", "Backend services", "Enterprise workflow"],
  },
  {
    id: "accenture-intern",
    company: "Accenture",
    role: "Advanced Application Engineering Intern",
    period: "May 2025 — Jul 2025",
    location: "Mumbai, India",
    status: "past",
    bullets: [
      "Developed cloud-native services and REST APIs for scalable data processing and AI-powered enterprise applications.",
      "Contributed to machine learning initiatives spanning data preparation, model experimentation, and deployment.",
      "Designed and deployed AWS-based pipelines using SageMaker, S3, EC2, and Lambda, applying DevOps practices to automate data workflows.",
    ],
    stack: ["SageMaker", "S3", "EC2", "Lambda", "REST APIs"],
  },
  {
    id: "mercor",
    company: "Mercor",
    role: "Software Engineering Expert",
    period: "Jan 2026 — Jul 2026",
    location: "San Francisco, USA (Remote)",
    status: "past",
    bullets: [
      "Contributed to production backend systems across large and complex Go and Python codebases, working within fast-paced engineering workflows.",
      "Implemented features and debugged issues across service boundaries while collaborating on maintainable production solutions.",
    ],
    stack: ["Go", "Python", "Production backend systems"],
    flow: ["Production services", "Cross-service dependencies", "Issue surfaces", "Investigation", "Fix implemented", "Deployed"],
  },
  {
    id: "easyalgo",
    company: "EasyAlgo",
    role: "AI/ML Intern",
    period: "May 2024 — Aug 2024",
    location: "New Delhi, India",
    status: "past",
    bullets: [
      "Built statistical and machine learning models on financial time-series data to improve predictive accuracy and support data-driven investment decisions.",
      "Developed NLP-based sentiment analytics pipelines combining financial news and structured market data using Python and SQL.",
    ],
    stack: ["Python", "SQL", "Time-series modeling", "NLP"],
  },
];

export function findExperience(id: string): ExperienceEntry {
  const entry = experience.find((e) => e.id === id);
  if (!entry) throw new Error(`Missing experience entry: ${id}`);
  return entry;
}
