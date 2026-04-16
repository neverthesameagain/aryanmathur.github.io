export type LinkItem = { label: string; href: string };

export type Experience = {
  company: string;
  role: string;
  location?: string;
  period: string;
  highlights: string[];
  tech?: string[];
};

export type Project = {
  title: string;
  highlight?: string;
  summary: string;
  problem: string;
  architecture: string[];
  challenges: string[];
  outcomes: string[];
  stack: string[];
  links: {
    github?: string;
    demo?: string;
    writeup?: string;
  };
};

export type ResearchItem = {
  title: string;
  area: string;
  summary: string;
  contributions: string[];
  links: { paper?: string; code?: string };
  tags: string[];
};

export const site = {
  name: "Aryan Mathur",
  headline: "Software Engineer • AI Systems Builder • Researcher",
  valueProp: "Building scalable software systems and intelligent products that ship.",
  blurb:
    "Final-year IIT Palakkad engineer currently building production backend systems at Mercor, with deep experience across AI, distributed systems, and full-stack product engineering.",
  taglines: [
    "I ship code, not slide decks.",
    "Yes, I read logs. Voluntarily.",
    "Latency is a feature (when it’s low).",
    "If it breaks in prod, I want to know why.",
    "Backend first. AI as leverage.",
  ],
  links: {
    email: "mailto:aryannmathur@gmail.com",
    github: "https://github.com/neverthesameagain",
    linkedin: "https://linkedin.com/in/aryannmathur",
    resume:
      (typeof window !== "undefined" && window.__NEXT_DATA__?.assetPrefix
        ? window.__NEXT_DATA__.assetPrefix
        : (process.env.NEXT_PUBLIC_BASE_PATH || "")) + "/resume.pdf",
  },
  heroStats: [
    { k: "Role", v: "Software Engineer @ Mercor" },
    { k: "Meta", v: "OpenEnv Finalist" },
    { k: "Research", v: "3 Publications" },
    { k: "Build", v: "15+ Projects" },
    { k: "Amazon ML", v: "Top 0.9%" },
    { k: "IIT", v: "Palakkad" },
  ],
  achievementsBadges: [
    { label: "Meta OpenEnv Hackathon Finalist" },
    { label: "Amazon ML Challenge 2025 — Top 0.9% (251/27,600+)" },
    { label: "Adobe AI Challenge — Rank 9" },
    { label: "AWS AI/ML Scholar" },
    { label: "National Physics Olympiad — AIR 433" },
    { label: "Inter IIT Leadership" },
  ],
  achievements: [
    {
      title: "Meta OpenEnv Hackathon — Finalist",
      detail:
        "Built and shipped an end-to-end product prototype under real constraints (integration + latency + demo reliability).",
      tags: ["Hackathon", "Product + systems"],
    },
    {
      title: "Amazon ML Challenge 2025 — Top 0.9% (251/27,600+)",
      detail:
        "Ranked globally in a large-scale competition; engineered multimodal modeling + evaluation discipline.",
      tags: ["Ranking", "ML systems"],
    },
    {
      title: "Adobe AI Challenge — Rank 9",
      detail:
        "Explainable AI-image detection with evidence-grounded reasoning; strong accuracy with production-minded latency.",
      tags: ["XAI", "VLMs"],
    },
    {
      title: "AWS AI/ML Scholar",
      detail:
        "Recognized for applied ML depth and consistent execution across projects and research.",
      tags: ["Scholarship", "Signal"],
    },
    {
      title: "National Physics Olympiad — AIR 433",
      detail:
        "Top 0.2% nationally; strong analytical problem-solving foundation that shows up in systems thinking.",
      tags: ["Olympiad", "Math"],
    },
    {
      title: "Inter IIT Leadership",
      detail:
        "Led a 63-member delegation; managed stakeholders, logistics, and team execution across domains.",
      tags: ["Leadership", "Execution"],
    },
  ],
  nav: [
    { label: "Home", href: "#home" },
    { label: "Currently Building", href: "#currently-building" },
    { label: "Experience", href: "#experience" },
    { label: "Featured Work", href: "#work" },
    { label: "Research", href: "#research" },
    { label: "Skills", href: "#skills" },
    { label: "Leadership", href: "#leadership" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ] satisfies LinkItem[],
  experience: [
    {
      company: "Mercor",
      role: "Software Engineer",
      location: "Remote (SF, USA)",
      period: "Jan 2026 – Present",
      highlights: [
        "Contributing to large-scale backend systems inside complex, production-grade codebases.",
        "Implementing features and resolving reliability/performance bugs across services written in Go and Python.",
        "Building with an engineering-first mindset: observability, correctness, and pragmatic design tradeoffs.",
      ],
      tech: ["Go", "Python", "Backend Systems", "Production Engineering"],
    },
    {
      company: "Accenture",
      role: "Advanced Application Engineering Intern",
      location: "Mumbai, India",
      period: "May 2025 – Jul 2025",
      highlights: [
        "Built cloud-native Java applications with scalable REST APIs and integrated NLP services into existing systems.",
        "Designed end-to-end pipelines on AWS using SageMaker, Lambda, and S3; automated DevOps workflows for data/ML.",
        "Improved deployment reliability via CI/CD automation and environment hardening.",
      ],
      tech: ["Java", "AWS", "REST", "CI/CD"],
    },
    {
      company: "EasyAlgo",
      role: "AI/ML Intern",
      location: "New Delhi, India",
      period: "May 2024 – Aug 2024",
      highlights: [
        "Engineered predictive time-series models and NLP-driven sentiment pipelines to generate trading signals.",
        "Optimized data workflows with SQL, efficient data structures, and production-oriented pipelines.",
      ],
      tech: ["Python", "TensorFlow", "SQL", "NLP", "Time Series"],
    },
  ] satisfies Experience[],
  featuredWork: [
    {
      title: "Meta OpenEnv — Finalist Project",
      highlight: "Hackathon finalist • product + systems engineering",
      summary:
        "Built a high-impact prototype that earned finalist recognition at Meta OpenEnv—designed to ship fast without sacrificing engineering rigor.",
      problem:
        "A fast-moving hackathon environment demands rapid iteration, clean architecture, and reliable demos under real constraints (latency, integration, UX).",
      architecture: [
        "Clean modular service boundaries for fast iteration and parallel workstreams.",
        "Structured data flow with clear interfaces so demos remain stable even as features evolve.",
        "Performance-first defaults: caching, batching, and safe fallbacks where needed.",
      ],
      challenges: [
        "Integrating multiple components while keeping the system demo-stable.",
        "Designing for low-latency interactions and predictable behavior under load.",
        "Balancing speed vs. correctness vs. scope in a tight timeline.",
      ],
      outcomes: [
        "Finalist at Meta OpenEnv Hackathon.",
        "Shipped an end-to-end demo with a production-style architecture and clear ownership boundaries.",
      ],
      stack: ["Systems Design", "Backend", "Product Engineering"],
      links: {
        // TODO: Add the real repo/demo link.
        github: undefined,
        demo: undefined,
        writeup: undefined,
      },
    },
    {
      title: "VartalApp",
      highlight: "Full-stack collaborative platform",
      summary:
        "A cross-device classroom collaboration platform: screen share, video share, chat, collaborative canvas, AI assistance, cloud persistence, and file sharing.",
      problem:
        "Most collaboration tools are either too heavy for classrooms or lack real-time multi-surface workflows. The goal was a cohesive 'room OS' built for education.",
      architecture: [
        "Real-time layer for presence + collaboration primitives (chat, canvas, room state).",
        "Server-backed persistence for files/session state with reliable auth and access control.",
        "Separation of real-time signaling and durable storage to keep UX snappy.",
      ],
      challenges: [
        "Designing real-time synchronization without making state management brittle.",
        "Keeping latency low across multi-user sessions while preserving consistency.",
        "Building a cohesive product surface with multiple interaction modes.",
      ],
      outcomes: [
        "Delivered a multi-feature product surface spanning real-time + persistence.",
        "Designed for cross-device workflows and classroom-scale collaboration.",
      ],
      stack: ["Full-stack", "Real-time Systems", "Product Engineering"],
      links: {
        github: "https://github.com/neverthesameagain/VartalApp-Core-Fork",
        demo: undefined,
        writeup: undefined,
      },
    },
    {
      title: "Explainable Detection of AI-Generated Images",
      highlight: "XAI + production-minded inference",
      summary:
        "An explainable image authenticity detector combining a lightweight CNN and a vision-language model for artifact localization and natural-language explanations.",
      problem:
        "Binary classification isn't enough—users need trustworthy explanations. The aim was real-time-friendly detection with interpretable outputs.",
      architecture: [
        "Lightweight detector for fast, reliable signals on CPUs.",
        "VLM-based reasoning layer for artifact localization and explanation generation.",
        "Evaluation harness for accuracy + latency tradeoffs.",
      ],
      challenges: [
        "Avoiding brittle shortcuts and maintaining generalization across datasets.",
        "Designing explanations that reflect model evidence (not hallucination).",
        "Optimizing inference latency without sacrificing interpretability.",
      ],
      outcomes: [
        "96.5% accuracy on extended CiFAKE with ~175ms CPU inference (8-core), enabling edge-real-time workflows.",
        "Adobe AI Challenge — Rank 9.",
      ],
      stack: ["PyTorch", "Vision-Language Models", "XAI"],
      links: {
        github: "https://github.com/neverthesameagain/AI-Image-Detection-and-Reasoning---Adobe",
        demo: undefined,
        writeup: "https://arxiv.org/abs/2510.23775",
      },
    },
    {
      title: "PDiT — Perception–Decision Interleaving Transformers",
      highlight: "Deep RL + transformer systems",
      summary:
        "A dual-transformer RL agent designed to learn synchrony between perception and decision modules for language-guided tasks in BabyAI.",
      problem:
        "Typical agents entangle perception and action too early. The goal was to explicitly model interleaving to improve stability and sample efficiency.",
      architecture: [
        "Perception encoder and decision encoder interleaved for controlled information flow.",
        "PPO training loop with careful logging and reproducibility defaults.",
        "Interpretability hooks for attention inspection and failure analysis.",
      ],
      challenges: [
        "Reducing reward variance and improving convergence stability.",
        "Engineering experiments to be reproducible and comparable across runs.",
        "Analyzing failure modes beyond aggregate metrics.",
      ],
      outcomes: [
        "42% lower reward variance and faster convergence (160k steps vs 200k baseline).",
        "arXiv:2510.23148.",
      ],
      stack: ["Python", "PPO", "Transformers", "BabyAI"],
      links: {
        github: "https://github.com/neverthesameagain/PDiT-Deep-Reinforcement-Learning",
        demo: undefined,
        writeup: "https://arxiv.org/abs/2510.23148",
      },
    },
    {
      title: "Personalised MCP Server",
      highlight: "Developer tooling + secure APIs",
      summary:
        "A secure Model Context Protocol (MCP) server for resume/prompt personalization with Bearer auth and clean API boundaries.",
      problem:
        "Personalization workflows often devolve into ad-hoc scripts. The goal was a reusable service with authentication, observability hooks, and clear contracts.",
      architecture: [
        "FastAPI service with typed request/response models and auth middleware.",
        "Separation of core personalization logic from transport concerns.",
        "Local-first developer experience for iteration and testing.",
      ],
      challenges: [
        "Maintaining safe defaults with auth while keeping DX smooth.",
        "Designing stable contracts so clients can evolve independently.",
      ],
      outcomes: ["Shipped a reusable service layer for personalization workflows."],
      stack: ["Python", "FastAPI", "APIs", "Security"],
      links: {
        github: "https://github.com/neverthesameagain/Personalised-MCP-server",
        demo: undefined,
        writeup: undefined,
      },
    },
    {
      title: "SpectrumHarmony (Arista RRM Simulation)",
      highlight: "Systems simulation + optimization",
      summary:
        "A simulation/control framework to model, analyze, and optimize Wi‑Fi networks across complex multi-floor environments for AI-driven Radio Resource Management.",
      problem:
        "Network performance tuning is hard to test in real environments. The goal was a controllable simulation loop for analysis and optimization research.",
      architecture: [
        "Simulation core for multi-floor environments and interference modeling.",
        "Pluggable optimization layer to evaluate control strategies.",
        "Data collection for experiment repeatability and benchmarking.",
      ],
      challenges: [
        "Balancing simulation fidelity with tractable runtime.",
        "Designing abstractions that support multiple optimization strategies.",
      ],
      outcomes: ["Enabled repeatable experiments for RRM research and evaluation."],
      stack: ["Python", "Simulation", "Optimization", "Systems"],
      links: {
        github:
          "https://github.com/neverthesameagain/SpectrumHarmony---RadioResource-Management-for-Arista-Netwrorks",
        demo: undefined,
        writeup: undefined,
      },
    },
  ] satisfies Project[],
  research: [
    {
      title: "Fight Scene Detection & Violence Highlight Generation",
      area: "Computer Vision • Sequence Learning",
      summary:
        "A CNN–BiLSTM pipeline for temporal violence detection in videos with highlight generation and attention-based explainability.",
      contributions: [
        "Architected a custom CNN–BiLSTM model achieving 93.5% accuracy.",
        "Built a temporal highlight pipeline to summarize long-form videos.",
      ],
      links: {
        paper: "https://arxiv.org/abs/2406.05152",
        code:
          "https://github.com/neverthesameagain/Voilence-Detection-and-Highlight-Generation-using-BiLSTM",
      },
      tags: ["PyTorch", "BiLSTM", "Attention", "Video"],
    },
    {
      title:
        "Adapting Interleaved Encoders with PPO for Language-Guided Reinforcement Learning in BabyAI",
      area: "Reinforcement Learning • Transformers",
      summary:
        "Perception–Decision Interleaving Transformers (PDiT) to improve grounding, stability, and interpretability for language-conditioned tasks.",
      contributions: [
        "Implemented PDiT with PPO for better synchronization between perception and decision making.",
        "Improved convergence stability with 42% lower reward variance.",
      ],
      links: { paper: "https://arxiv.org/abs/2510.23148", code: "https://github.com/neverthesameagain/PDiT-Deep-Reinforcement-Learning" },
      tags: ["PPO", "Transformers", "BabyAI", "Interpretability"],
    },
    {
      title: "Explainable Detection of AI-Generated Images",
      area: "XAI • Vision-Language Models",
      summary:
        "An explainable authenticity detector that localizes artifacts and generates evidence-grounded explanations with production-minded latency.",
      contributions: [
        "Combined a lightweight CNN (Faster-Than-Lies) with Qwen2‑VL for artifact localization.",
        "Achieved 96.5% accuracy with ~175ms CPU inference for real-time edge deployment.",
      ],
      links: { paper: "https://arxiv.org/abs/2510.23775", code: "https://github.com/neverthesameagain/AI-Image-Detection-and-Reasoning---Adobe" },
      tags: ["VLMs", "XAI", "Edge Inference", "Evaluation"],
    },
  ] satisfies ResearchItem[],
  skills: [
    {
      group: "Systems & Backend",
      items: [
        "API design",
        "Microservices",
        "PostgreSQL / SQL",
        "Distributed systems fundamentals",
        "Caching + performance",
        "Reliability mindset",
      ],
    },
    {
      group: "Languages",
      items: ["Go", "Python", "Java", "C++", "Scala", "TypeScript", "SQL"],
    },
    {
      group: "AI / ML (Differentiator)",
      items: [
        "LLMs + VLMs",
        "Computer Vision",
        "Reinforcement Learning (PPO)",
        "PyTorch / TensorFlow",
        "RAG / retrieval systems",
        "Evaluation & interpretability",
      ],
    },
    {
      group: "Cloud & DevOps",
      items: ["AWS (S3, Lambda, SageMaker)", "CI/CD", "Linux", "Docker", "Kubernetes"],
    },
    {
      group: "Product Engineering",
      items: ["Full-stack", "Real-time systems", "UX-minded delivery", "Experimentation"],
    },
  ],
  leadership: [
    {
      title: "Placement Coordinator",
      org: "Career Development Cell, IIT Palakkad",
      period: "May 2025 – Present",
      impact:
        "Coordinating institute placements, corporate outreach, and student training across multiple sectors.",
    },
    {
      title: "Founder & President",
      org: "Entrepreneurship Cell, IIT Palakkad",
      period: "Aug 2024 – May 2025",
      impact:
        "Established the institute’s first E‑Cell; hosted hackathons and startup mentorship sessions for 300+ participants.",
    },
    {
      title: "Contingent Leader",
      org: "Inter IIT Tech Meet 13.0 (IIT Bombay)",
      period: "Jun 2024 – Dec 2024",
      impact:
        "Led a 63‑member delegation; managed technical strategy, logistics, and inter-domain coordination.",
    },
  ],
  openSource: [
    {
      name: "CleaRAG",
      desc: "A transparent retrieval-augmented QA system focused on debuggability and grounding.",
      href: "https://github.com/neverthesameagain/CleaRAG",
    },
    {
      name: "RecurLens",
      desc: "A metaprompting engine that visualizes concept → execution and converges on best plans.",
      href: "https://github.com/neverthesameagain/RecurLens",
    },
    {
      name: "SpectrumHarmony",
      desc: "Systems simulation + optimization framework for radio resource management research.",
      href:
        "https://github.com/neverthesameagain/SpectrumHarmony---RadioResource-Management-for-Arista-Netwrorks",
    },
  ],
};
