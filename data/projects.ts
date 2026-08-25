export type FeaturedProject = {
  id: string;
  name: string;
  tagline: string;
  stack: string[];
  repo?: string;
  live?: string;
  /** In-page section id to scroll to instead of an external link (used for VartalApp). */
  anchor?: string;
};

// Curated, not exhaustive — the full account lives in `archiveProjects` below.
export const featuredProjects: FeaturedProject[] = [
  {
    id: "vartalapp",
    name: "VartalApp",
    tagline: "Full-stack collaborative classroom platform — I ran it as Project Manager.",
    stack: ["Java", "Spring Boot", "Swing", "SQLite"],
    anchor: "vartalapp",
  },
  {
    id: "splitzy-pay",
    name: "Splitzy Pay",
    tagline: "Full-stack financial management application.",
    stack: ["SQL", "JavaScript", "Statistical analysis"],
    repo: "https://github.com/neverthesameagain/Splitzy-Pay",
    live: "https://splitzy-pay-backend.vercel.app",
  },
  {
    id: "ai-image-detection",
    name: "AI-Generated Image Detection",
    tagline: "Explainable image-authenticity detector — CNN + VLM pipeline, 96.5% accuracy at 175ms on CPU.",
    stack: ["Python", "CNN", "Qwen2-VL"],
    repo: "https://github.com/neverthesameagain/AI-Image-Detection-and-Reasoning---Adobe",
  },
  {
    id: "violence-detection",
    name: "Violence Detection & Highlight Generation",
    tagline: "Real-time violent-event detection and highlight-reel generation from video, 93.5% accuracy.",
    stack: ["Python", "PyTorch", "BiLSTM"],
    repo: "https://github.com/neverthesameagain/Voilence-Detection-and-Highlight-Generation-using-BiLSTM",
  },
];

// Everything else in the GitHub account. Real GitHub metadata only (name, language, and a
// tagline only where a real description exists) — no invented detail. Ordered by
// last-updated, most recent first. Excludes: this portfolio repo, the GitHub profile-config
// repo, and the repos already covered above/as research publications.
export type ArchiveProject = {
  name: string;
  repo: string;
  language: string | null;
  tagline?: string;
};

export const archiveProjects: ArchiveProject[] = [
  { name: "CleaRAG", repo: "CleaRAG", language: "Jupyter Notebook", tagline: "A transparent retrieval-augmented question-answering system." },
  { name: "SpectrumHarmony", repo: "SpectrumHarmony---RadioResource-Management-for-Arista-Netwrorks", language: "Python", tagline: "AI-driven radio resource management for multi-floor Wi-Fi networks." },
  { name: "Modest", repo: "modest", language: "Python", tagline: "Adaptive content moderation under uncertainty." },
  { name: "isitevenhuman?", repo: "isitevenhuman-", language: "Jupyter Notebook", tagline: "AI text detection engine with per-sentence, color-coded breakdowns." },
  { name: "RecurLens", repo: "RecurLens", language: "TypeScript", tagline: "A recursive, multimodal reasoning system built on Gemini." },
  { name: "LossLess", repo: "LossLess---Amazon-ML-Challenge-2025", language: "Python", tagline: "Amazon ML Challenge 2025 — top 0.9% of 27,600+ teams." },
  { name: "whatsapp-archive-viewer", repo: "whatsapp-archive-viewer", language: "JavaScript" },
  { name: "Arithmetic-Coding", repo: "Arithmetic-Coding", language: "Python" },
  { name: "EIE-Economic-Intelligence-Engine", repo: "EIE-Economic-Intelligence-Engine", language: "Jupyter Notebook" },
  { name: "Multivariate-custom-Dataset-for-Human-AI-Text", repo: "Multivariate-custom-Dataset-for-Human-AI-Text", language: "Python", tagline: "Multivariate custom Dataset for Human/AI Text" },
  { name: "ConnectFour", repo: "ConnectFour", language: "Python" },
  { name: "Autonomous-Ackermann-Explorer", repo: "Autonomous-Ackermann-Explorer", language: "Python" },
  { name: "3D-Human-Motion-Capture-and-Animation", repo: "3D-Human-Motion-Capture-and-Animation", language: "MATLAB" },
  { name: "Debris-Detection-Realtime", repo: "Debris-Detection-Realtime", language: "HTML" },
  { name: "Personalised-MCP-server", repo: "Personalised-MCP-server", language: "Python" },
  { name: "PizzaBuilder-SWE-2025", repo: "PizzaBuilder-SWE-2025", language: "Java" },
  { name: "All-You-Need", repo: "All-You-Need", language: "HTML" },
  { name: "AYCI-The-Project", repo: "AYCI-The-Project", language: "Python" },
  { name: "PanEvaporiMeter", repo: "PanEvaporiMeter", language: "C++" },
  { name: "iac", repo: "iac", language: "HTML" },
  { name: "Automated-Data-Extraction-from-Gov-Websites", repo: "Automated-Data-Extraction-from-Gov-Websites", language: null },
  { name: "What-ya-Wearing", repo: "What-ya-Wearing", language: "Jupyter Notebook" },
  { name: "DSA-that-is-actually-interesting", repo: "DSA-that-is-actually-interesting", language: null },
  { name: "Behaviour-Simulation-Challenge-by-Adobe", repo: "Behaviour-Simulation-Challenge-by-Adobe", language: "Jupyter Notebook" },
  { name: "Parameter-Extraction-of-Diodes-and-MOSFETS", repo: "Parameter-Extraction-of-Diodes-and-MOSFETS", language: "Jupyter Notebook" },
  { name: "KLM52Z-Microprocessor-Projects", repo: "KLM52Z-Microprocessor-Projects", language: "C" },
  { name: "Analysis-in-MATLAB-", repo: "Analysis-in-MATLAB-", language: "MATLAB" },
  { name: "AYCI", repo: "AYCI", language: "Python", tagline: "This is our project repository." },
];

export const githubProfile = "https://github.com/neverthesameagain";
