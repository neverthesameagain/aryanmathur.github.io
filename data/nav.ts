export type SystemNode = {
  id: string;
  label: string;
  code: string;
  description: string;
  status: "online" | "compiling";
  accent: "signal" | "build" | "lab";
};

export const systemNodes: SystemNode[] = [
  {
    id: "leadership",
    label: "Leadership",
    code: "PM-CORE",
    description: "Program & people management — 293 people, ₹34L managed across two organizations.",
    status: "online",
    accent: "signal",
  },
  {
    id: "vartalapp",
    label: "Projects",
    code: "BUILD",
    description: "VartalApp and everything else that's shipped.",
    status: "online",
    accent: "build",
  },
  {
    id: "research",
    label: "Research",
    code: "LAB",
    description: "3 publications across vision, RL, and explainable AI.",
    status: "online",
    accent: "lab",
  },
  {
    id: "experience",
    label: "Experience",
    code: "WORK",
    description: "Accenture, Mercor, EasyAlgo.",
    status: "online",
    accent: "signal",
  },
  {
    id: "hackathons",
    label: "Hackathons",
    code: "MISSIONS",
    description: "Module scheduled for the next build.",
    status: "compiling",
    accent: "build",
  },
  {
    id: "ideas",
    label: "Ideas",
    code: "R&D",
    description: "Module scheduled for the next build.",
    status: "compiling",
    accent: "lab",
  },
];
