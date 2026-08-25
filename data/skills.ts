export type SkillGroup = {
  label: string;
  skills: { name: string; usedIn?: string }[];
};

// "usedIn" is a short, honest pointer to where this shows up elsewhere on the site —
// shown on hover, not a separate cross-linking system.
export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python", usedIn: "Research · EasyAlgo · Mercor" },
      { name: "SQL", usedIn: "Splitzy Pay · EasyAlgo" },
      { name: "Java", usedIn: "VartalApp" },
      { name: "Scala" },
      { name: "C++" },
      { name: "MATLAB" },
      { name: "Go", usedIn: "Mercor" },
    ],
  },
  {
    label: "AI / GenAI",
    skills: [
      { name: "Machine Learning", usedIn: "Research · EasyAlgo" },
      { name: "Deep Learning", usedIn: "Violence Detection · AI Image Detection" },
      { name: "LLMs", usedIn: "VartalApp AI assistance" },
      { name: "RAG", usedIn: "CleaRAG" },
      { name: "Transformers", usedIn: "BabyAI / PPO research" },
      { name: "Computer Vision", usedIn: "Violence Detection · AI Image Detection" },
      { name: "PyTorch", usedIn: "Research" },
      { name: "TensorFlow", usedIn: "EasyAlgo" },
    ],
  },
  {
    label: "Data / Backend",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Spark" },
      { name: "Hadoop" },
      { name: "REST APIs", usedIn: "Accenture" },
      { name: "Node.js" },
      { name: "ReactJS" },
    ],
  },
  {
    label: "Cloud / DevOps",
    skills: [
      { name: "AWS", usedIn: "Accenture internship" },
      { name: "Azure DevOps" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "CI/CD", usedIn: "Accenture" },
      { name: "Linux" },
      { name: "Git" },
    ],
  },
  {
    label: "Analytics",
    skills: [
      { name: "Statistical Modeling", usedIn: "EasyAlgo" },
      { name: "NLP", usedIn: "EasyAlgo" },
      { name: "Time-Series Forecasting", usedIn: "EasyAlgo" },
      { name: "Reinforcement Learning", usedIn: "BabyAI / PPO research" },
      { name: "Predictive Analytics" },
    ],
  },
];
