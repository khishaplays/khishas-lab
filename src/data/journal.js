export const journalEntries = [
  {
    id: "wanderly",
    number: "001",
    project: "Wanderly",
    title: "Tracing destination data across the stack",
    category: "Full Stack",
    summary:
      "A closer look at how a travel discovery interface can stay connected to a clear Flask API and structured destination data.",
    tags: ["React", "Flask", "SQLAlchemy", "API Design"],
    problem:
      "Destination information crosses several boundaries: it is presented in React, exchanged through HTTP, and represented in persistent data. If those boundaries disagree, frontend assumptions and backend data can drift apart.",
    solution:
      "Think about the flow as separate responsibilities: React renders the destination experience, Flask defines the request and response contract, and SQLAlchemy maps application data to persistence. Keep the destination shape explicit at each boundary and trace how a representative record would move through the system.",
    takeaway:
      "A clear data contract makes full-stack work easier to reason about. Confirm the actual models and API responses before assuming a field or behavior is already implemented.",
  },
  {
    id: "scribe",
    number: "002",
    project: "Scribe",
    title: "Designing a developer activity tracker for the terminal",
    category: "Developer Tools",
    summary:
      "Exploring a command-line workflow for recording and reviewing development activity with Python, Typer, and Rich.",
    tags: ["Python", "Typer", "Rich", "CLI"],
    problem:
      "A developer activity tracker needs to make its commands understandable and its output useful in a terminal, while keeping command-line details from taking over the underlying activity logic.",
    solution:
      "Use Typer to express command names, options, and arguments, and Rich to present terminal output. Keep parsing and presentation at the CLI boundary so activity handling can be reasoned about separately. Consider normal, missing-input, and invalid-input paths when shaping the interaction.",
    takeaway:
      "A CLI is an interface with its own usability needs. Predictable commands, helpful feedback, and a clear separation between behavior and display make it easier to extend and test.",
  },
  {
    id: "flask-crud-api-lab",
    number: "003",
    project: "Flask CRUD API Lab",
    title: "Making HTTP responses part of the API design",
    category: "Backend",
    summary:
      "A focused study of how REST resource operations and HTTP status codes communicate the result of an API request.",
    tags: ["Python", "Flask", "REST APIs", "HTTP"],
    problem:
      "An endpoint can return data and still leave clients guessing whether a request succeeded, created a resource, lacked valid input, or referred to something that does not exist.",
    solution:
      "Start from the resource and the intent of each HTTP method, then choose a response shape and status code for success and failure cases. For example, distinguish a successful read from a resource creation, and make validation and not-found responses consistent across routes.",
    takeaway:
      "Status codes are part of the API contract, not decoration. Consistent responses help clients handle outcomes without relying on route-specific guesswork.",
  },
  {
    id: "react-development",
    number: "004",
    project: "React Development",
    title: "Choosing component boundaries and state ownership",
    category: "Frontend",
    summary:
      "Notes on breaking an interface into reusable React components and keeping interactive state close to where it is needed.",
    tags: ["React", "JavaScript", "Components", "State"],
    problem:
      "As an interface grows, duplicated markup and state stored in the wrong place can make updates harder to follow and interactions less predictable.",
    solution:
      "Look for UI pieces with a clear responsibility that can be expressed through props. Keep state with the component that owns the interaction, and lift it to a shared parent only when multiple parts of the interface need the same value. Derive display values from state where possible.",
    takeaway:
      "Reusable components are most useful when their boundaries clarify the interface. Deliberate state ownership reduces synchronization work and makes behavior easier to inspect.",
  },
];