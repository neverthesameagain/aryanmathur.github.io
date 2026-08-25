export type ResearchPaper = {
  id: string;
  title: string;
  domain: string;
  problem: string;
  approach: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  repo: string;
  paper?: string;
};

export const papers: ResearchPaper[] = [
  {
    id: "violence-detection",
    title: "Fight Scene Detection & Violence Highlight Generation",
    domain: "Computer Vision · Sequence Modeling",
    problem:
      "Long-form video needs automatic detection of violent events and generation of concise highlight reels — manual review doesn't scale.",
    approach:
      "Designed a deep learning pipeline for large-scale video classification and temporal event detection, optimizing sequence modeling for long-form multimedia analytics.",
    architecture: ["Frame encoder (CNN)", "BiLSTM temporal head", "Attention pooling", "Highlight extraction"],
    metrics: [{ label: "Accuracy", value: "93.5%" }],
    repo: "https://github.com/neverthesameagain/Voilence-Detection-and-Highlight-Generation-using-BiLSTM",
    paper: "https://arxiv.org/abs/2406.05152",
  },
  {
    id: "babyai-ppo",
    title: "Interleaved Encoders with PPO for Language-Guided RL",
    domain: "Reinforcement Learning · Transformers",
    problem:
      "Language-guided agents in BabyAI need tighter coupling between perception and decision-making to converge reliably.",
    approach:
      "Developed multimodal reinforcement learning models using PPO and transformer-based interleaved encoder architectures, improving policy optimization stability.",
    architecture: ["Vision-language encoder", "Interleaved transformer blocks", "PPO policy head"],
    metrics: [
      { label: "Reward variance", value: "−42%" },
      { label: "Convergence speed", value: "+20%" },
    ],
    repo: "https://github.com/neverthesameagain/PDiT-Deep-Reinforcement-Learning",
    paper: "https://arxiv.org/abs/2510.23148",
  },
  {
    id: "ai-image-detection",
    title: "Explainable Detection of AI-Generated Images",
    domain: "Explainable AI · Vision-Language Models",
    problem:
      "Detecting AI-generated images isn't enough on its own — flagged content needs a human-readable, localized explanation to be trustworthy.",
    approach:
      "Proposed an explainable image authenticity detector combining a lightweight CNN (Faster-Than-Lies) with Qwen2-VL-7B for artifact localization and natural-language reasoning.",
    architecture: ["Lightweight CNN classifier", "Artifact localization map", "Qwen2-VL-7B reasoning layer"],
    metrics: [
      { label: "Accuracy", value: "96.5%" },
      { label: "CPU latency", value: "175ms" },
    ],
    repo: "https://github.com/neverthesameagain/AI-Image-Detection-and-Reasoning---Adobe",
    paper: "https://arxiv.org/abs/2510.23775",
  },
];
