import { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight, X, Code2 } from "lucide-react";

import { projects } from "../data/projects";
import "./Projects.css";

const filters = ["All", "Full Stack", "Python", "JavaScript"];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);

  useEffect(() => {
    if (!selected) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selected]);

  return (
    <section className="workbench">
      {/* PAGE INTRODUCTION */}
      <div className="workbench-intro">
        <p className="workbench-label">KHISHA'S LAB / THE PROJECT ARCHIVE</p>

        <h1>
          The <em>Workbench.</em>
        </h1>

        <p>
          Some ideas begin as a question. Others start with a problem worth
          solving. Here's where mine become code.
        </p>
      </div>

      {/* PROJECT FILTERS */}
      <div className="workbench-controls">
        <div className="workbench-filters" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className={filter === item ? "selected" : ""}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <span className="workbench-count">
          {String(visibleProjects.length).padStart(2, "0")} PROJECT FILES
        </span>
      </div>

      {/* PROJECT CARDS */}
      <div className="workbench-grid">
        {visibleProjects.map((project) => (
          <article className="workbench-card" key={project.id}>
            <div className="workbench-card-art">
              <span>FILE NO. {project.number}</span>

              <div className="workbench-art-title">
                <small>KHISHA'S LAB ORIGINAL</small>
                <h2>{project.name}</h2>
              </div>

              <ArrowUpRight size={26} aria-hidden="true" />
            </div>

            <div className="workbench-card-content">
              <div className="workbench-card-meta">
                <span>{project.type}</span>
                <span>{project.status}</span>
              </div>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="workbench-tags">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <button
                className="workbench-open"
                type="button"
                onClick={() => setSelected(project)}
              >
                Open project file
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* PROJECT DETAILS MODAL */}
      {selected && (
        <div className="workbench-overlay" onClick={() => setSelected(null)}>
          <div
            className="workbench-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="workbench-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="workbench-close"
              type="button"
              aria-label="Close project details"
              onClick={() => setSelected(null)}
            >
              <X size={22} />
            </button>

            <p className="workbench-label">PROJECT FILE / {selected.number}</p>

            <h2 id="workbench-dialog-title">{selected.name}</h2>

            <p>{selected.description}</p>

            <h3>The Challenge</h3>
            <p>{selected.challenge}</p>

            <h3>Built With</h3>

            <div className="workbench-tags">
              {selected.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            {selected.github && (
              <a
                className="workbench-github"
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={18} aria-hidden="true" />
                View Source Code
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
