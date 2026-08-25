import { withBasePath } from "@/lib/paths";

export const profile = {
  name: "Aryan Mathur",
  roles: ["Engineer", "Operator", "Researcher", "Builder"],
  location: "Gurgaon, India",
  email: "aryannmathur@gmail.com",
  github: "https://github.com/neverthesameagain",
  linkedin: "https://linkedin.com/in/aryannmathur",
  resume: withBasePath("/assets/resume.pdf"),
  tagline: "I build systems, run programs, and ship under ambiguity.",
  subline:
    "B.Tech, Electrical Engineering + Minor in Data Science — IIT Palakkad. Currently at Accenture. Previously Mercor.",
} as const;

export const liveStats = [
  { label: "GPA", value: "8.01", unit: "/ 10" },
  { label: "Publications", value: "3", unit: "papers" },
  { label: "Budget managed", value: "₹34L", unit: "combined" },
  { label: "People led", value: "293", unit: "across 2 orgs" },
  { label: "Hackathon finals", value: "2", unit: "national" },
] as const;
