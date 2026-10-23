const education = {
  summary:
    "My background combines software engineering and software innovation, bringing together technical problem-solving, creative thinking, and a practical approach to building meaningful digital solutions.",
  records: [
    {
      id: "moringa",
      institution: "Moringa School",
      programme: "Software Engineering",
      date: "May 2026 – December 2026",
      learningAreas: [
        "Python",
        "JavaScript",
        "React",
        "APIs",
        "Databases",
        "Git/GitHub",
        "Collaborative software development",
      ],
    },
    {
      id: "strathmore",
      institution: "Strathmore University",
      programme: "Software Innovation",
      date: "2025 / 2026",
      credential: "Certificate",
    },
  ],
};

export const editableJourneyDetails = { education };

export const journeyMilestones = [
  {
    id: "learning",
    number: "01",
    stage: "Learning",
    eyebrow: "TECHNICAL EDUCATION & PROFESSIONAL DEVELOPMENT",
    title: "Software engineering at Moringa School",
    status: "Learning",
    date: "",
    summary: education.summary,
    details: education.summary,
    projectIds: ["wanderly", "scribe", "mocha-desk", "task-manager"],
  },
  {
    id: "building",
    number: "02",
    stage: "Building",
    eyebrow: "APPLICATIONS & DEVELOPER TOOLS",
    title: "Turning ideas into applications",
    status: "In progress",
    date: "",
    summary:
      "The featured work spans a developer activity tracker, a browser workspace, and a task-management CLI.",
    details:
      "Scribe is listed as Building, Mocha Desk as Testing, and Task Management System as Reviewing in the current project data. These are distinct project statuses, not claims that the projects are finished.",
    projectIds: ["scribe", "mocha-desk", "task-manager"],
  },
  {
    id: "shipping",
    number: "03",
    stage: "Shipping",
    eyebrow: "A VERIFIED LIVE PROJECT",
    title: "Wanderly is live",
    status: "Deployed",
    date: "",
    summary:
      "Wanderly has a public Vercel deployment linked from its GitHub repository.",
    details:
      "The deployment responded successfully when checked. The featured-project data still describes Wanderly as Evolving, so a live deployment is presented alongside its ongoing project status—not as a claim that development is complete.",
    projectIds: ["wanderly"],
    liveUrl: "https://wanderly-omega-ecru.vercel.app",
  },
  {
    id: "evolving",
    number: "04",
    stage: "Evolving",
    eyebrow: "ONGOING WORK & GROWTH",
    title: "Keeping the work in motion",
    status: "Ongoing",
    date: "",
    summary:
      "The project archive and this portfolio continue to develop alongside the featured projects.",
    details:
      "Current project data records Wanderly as Evolving, Scribe as Building, Mocha Desk as Testing, and Task Management System as Reviewing. The portfolio's Engineering Journal and Toolkit provide places to document technical notes and the technologies associated with this work.",
    projectIds: ["wanderly", "scribe", "mocha-desk", "task-manager"],
    portfolioUrl: "https://github.com/khishaplays/khishas-lab",
  },
];
