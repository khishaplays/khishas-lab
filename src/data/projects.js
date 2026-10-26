
export const projects = [
  {
    id: "wanderly",
    number: "001",
    group: "featured",
    name: "Wanderly",
    highlights: [
      "Full-stack React + FastAPI",
      "47-county discovery",
      "PostgreSQL-backed destinations",
    ],
    type: "Full Stack",
    description:
      "A full-stack travel discovery platform designed to make exploring Kenya more intuitive, bringing together destinations, county-based discovery, and an evolving trip-planning experience.",
    stack: [
      "React",
      "JavaScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
    ],
    challenge:
      "Designing a structured destination discovery system while integrating a responsive React frontend, FastAPI REST endpoints, PostgreSQL data models, and cloud deployment.",
    technicalHighlights: [
      "Implemented discovery across Kenya's 47 counties.",
      "Built destination and county API endpoints.",
      "Connected a React frontend to a FastAPI backend.",
      "Used PostgreSQL, SQLAlchemy, and Alembic for relational data and migrations.",
      "Deployed the frontend to Vercel and backend to Render.",
    ],
    inProgress:
      "The trip-planning experience is still being tested locally; saved trips and personalized itineraries are not presented as completed features.",
    github: "https://github.com/khishaplays/wanderly",
    liveUrl: "https://wanderly-omega-ecru.vercel.app",
    status: "Evolving",
  },
  {
    id: "scribe",
    number: "002",
    group: "featured",
    name: "Scribe",
    highlights: [
      "Python CLI",
      "Session timing + activity logs",
      "Daily activity summaries",
    ],
    type: "Python",
    description:
      "A Python command-line developer activity tracker that helps organize projects, record coding sessions, and make development work easier to reflect on.",
    stack: ["Python", "Typer", "Rich"],
    challenge:
      "Designing an intuitive terminal workflow for recording development activity while distinguishing personal projects from collaborative work.",
    technicalHighlights: [
      "Organizes projects through CLI commands.",
      "Tracks coding-session time.",
      "Records development activity logs.",
      "Generates daily activity summaries.",
    ],
    inProgress:
      "Distinguishing individual work from collaborative contributions is an evolving design goal; team-tracking features are not represented as complete.",
    github: "https://github.com/khishaplays/Scribe",
    status: "Building",
  },
  {
    id: "mocha-desk",
    number: "003",
    group: "playground",
    name: "Mocha Desk",
    type: "JavaScript",
    description:
      "A personalized Chrome new-tab workspace combining productivity tools with a warm interface.",
    stack: ["JavaScript", "HTML", "CSS", "Chrome APIs"],
    challenge:
      "Bringing useful everyday tools into one lightweight browser experience.",
    github: "https://github.com/khishaplays/MochaDesk",
    status: "Testing",
  },
  {
    id: "task-manager",
    number: "004",
    group: "playground",
    name: "Task Management System",
    type: "Python",
    description:
      "A Python command-line application for organizing tasks, tracking completion and reviewing progress.",
    stack: ["Python", "OOP", "CLI"],
    challenge:
      "Designing an organized task workflow using object-oriented programming.",
    github: "https://github.com/khishaplays/task-management-system",
    status: "Reviewing",
  },
];
