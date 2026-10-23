export const toolkitCategories = [
  "All",
  "Frontend",
  "Backend",
  "Databases",
  "Developer Tools",
  "CLI Development",
];

export const toolkitTechnologies = [
  {
    id: "react",
    name: "React",
    category: "Frontend",
    summary: "A JavaScript library for building component-based user interfaces.",
    details:
      "React is listed in Wanderly's project stack and is also used by Khisha's Lab, the React application this toolkit belongs to.",
    projectIds: ["wanderly"],
    includesPortfolio: true,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    summary: "The language used to build interactive web experiences.",
    details:
      "JavaScript is listed in the Mocha Desk stack, a browser new-tab workspace.",
    projectIds: ["mocha-desk"],
  },
  {
    id: "html",
    name: "HTML",
    category: "Frontend",
    summary: "The markup language that structures web content.",
    details: "HTML is listed in the Mocha Desk project stack.",
    projectIds: ["mocha-desk"],
  },
  {
    id: "css",
    name: "CSS",
    category: "Frontend",
    summary: "Stylesheets for layout, presentation, and responsive interfaces.",
    details:
      "CSS is listed in the Mocha Desk stack and is used throughout Khisha's Lab.",
    projectIds: ["mocha-desk"],
    includesPortfolio: true,
  },
  {
    id: "python",
    name: "Python",
    category: "Backend",
    summary: "A general-purpose language used across backend and CLI projects.",
    details:
      "Python is listed in the stacks for Wanderly, Scribe CLI, and Task Management System.",
    projectIds: ["wanderly", "scribe", "task-manager"],
  },
  {
    id: "flask",
    name: "Flask",
    category: "Backend",
    summary: "A Python web framework for building backend applications and APIs.",
    details: "Flask is listed in Wanderly's full-stack project data.",
    projectIds: ["wanderly"],
  },
  {
    id: "sqlalchemy",
    name: "SQLAlchemy",
    category: "Databases",
    summary: "A Python SQL toolkit and object-relational mapper.",
    details:
      "SQLAlchemy is listed in Wanderly's stack. The project data does not specify a database engine.",
    projectIds: ["wanderly"],
  },
  {
    id: "git",
    name: "Git",
    category: "Developer Tools",
    summary: "Version control for tracking project changes.",
    details:
      "The portfolio and featured project repositories are maintained as Git repositories.",
    projectIds: ["wanderly", "scribe", "mocha-desk", "task-manager"],
    includesPortfolio: true,
  },
  {
    id: "github",
    name: "GitHub",
    category: "Developer Tools",
    summary: "A platform hosting the portfolio's public project repositories.",
    details:
      "The featured projects include public GitHub repository links in the project archive.",
    projectIds: ["wanderly", "scribe", "mocha-desk", "task-manager"],
    includesPortfolio: true,
  },
  {
    id: "vs-code",
    name: "VS Code",
    category: "Developer Tools",
    summary: "A code editor with workspace settings that can be kept local.",
    details:
      "The portfolio repository ignores local .vscode workspace files so editor-specific settings are not committed.",
    includesPortfolio: true,
  },
  {
    id: "typer",
    name: "Typer",
    category: "CLI Development",
    summary: "A Python library for building command-line interfaces.",
    details: "Typer is listed in the Scribe CLI project stack.",
    projectIds: ["scribe"],
  },
  {
    id: "rich",
    name: "Rich",
    category: "CLI Development",
    summary: "A Python library for formatting terminal output.",
    details: "Rich is listed in the Scribe CLI project stack.",
    projectIds: ["scribe"],
  },
];

export const exploringTechnologies = [];
