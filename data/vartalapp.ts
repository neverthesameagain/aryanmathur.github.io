export const vartalapp = {
  name: "VartalApp",
  tagline: "Full-stack collaborative classroom platform — a software engineering course project.",
  role: "Project Manager",
  stack: ["Java", "Spring Boot", "Swing", "SQLite"],
  overview:
    "A cross-device collaborative classroom application supporting screen sharing, video sharing, chat, a collaborative canvas, AI assistance, cloud persistence, and file sharing. I served as Project Manager for the course team building it.",
  // Directly from resume bullets — not paraphrased into new claims.
  roleBullets: [
    "Led project planning, requirements organization, task allocation, milestone tracking, team coordination, and delivery.",
    "Applied software project management practices throughout development.",
    "Coordinated technical work across the team and managed progress against planned milestones.",
  ],
  // Real, disclosed feature set — treated as the project's epics.
  epics: [
    { name: "Screen Sharing", note: "Cross-device screen broadcast for lectures and walkthroughs." },
    { name: "Video Sharing", note: "Real-time video between participants." },
    { name: "Chat", note: "In-session messaging." },
    { name: "Collaborative Canvas", note: "Shared, multi-user drawing surface." },
    { name: "AI Assistance", note: "In-app AI support for the classroom session." },
    { name: "Cloud Persistence & File Sharing", note: "Session and file data persisted and shareable." },
  ],
  // Generic SE process stages consistent with the PM bullets — no invented dates or counts.
  processStages: ["Requirements", "Planning", "Development", "Milestone Review", "Delivery"],
  board: {
    Planning: ["Requirements organization", "Milestone & task planning"],
    Coordination: ["Task allocation", "Team coordination"],
  } as Record<string, string[]>,
  architecture: {
    client: "Swing Desktop Client",
    backend: "Spring Boot Backend (REST / real-time channels)",
    store: "SQLite Persistence",
  },
};
