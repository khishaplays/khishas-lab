import { useState } from "react";
import { ArrowUpRight, BookOpen, Code2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";
import {
  exploringTechnologies,
  toolkitCategories,
  toolkitTechnologies,
} from "../data/toolkit";
import "./Skills.css";

const portfolioRepository = {
  name: "Khisha's Lab",
  github: "https://github.com/khishaplays/khishas-lab",
};

function ToolkitSectionHeading({ index, eyebrow, title, id }) {
  return (
    <div className="toolkit-section-heading">
      <span className="toolkit-section-index">{index}</span>
      <div>
        <p className="toolkit-eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
    </div>
  );
}

function TechnologyButton({ technology, selected, onSelect }) {
  return (
    <li>
      <button
        className="toolkit-technology-button"
        type="button"
        aria-pressed={selected}
        onClick={() => onSelect(technology.id)}
      >
        <span className="toolkit-technology-name">{technology.name}</span>
        <span className="toolkit-technology-category">
          {technology.category}
        </span>
      </button>
    </li>
  );
}

function ProjectReference({ project }) {
  return (
    <div className="toolkit-project-reference">
      <span>{project.name}</span>
      <div>
        <Link className="toolkit-project-link" to="/projects">
          Project archive <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
        {project.github && (
          <a
            className="toolkit-project-link"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository <ExternalLink size={13} aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}

function TechnologyDetails({ technology }) {
  const relatedProjects = (technology.projectIds || [])
    .map((projectId) => projects.find((project) => project.id === projectId))
    .filter(Boolean);

  if (technology.includesPortfolio) {
    relatedProjects.push(portfolioRepository);
  }

  return (
    <section
      className="toolkit-detail"
      aria-labelledby="toolkit-detail-title"
      aria-live="polite"
    >
      <div className="toolkit-detail-topline">
        <p className="toolkit-eyebrow">TECHNOLOGY NOTE</p>
        <span>{technology.category.toUpperCase()}</span>
      </div>
      <h3 id="toolkit-detail-title">{technology.name}</h3>
      <p className="toolkit-detail-summary">{technology.summary}</p>
      <p className="toolkit-detail-copy">{technology.details}</p>

      <div className="toolkit-related-projects">
        <h4>RELATED PROJECTS / SOURCE</h4>
        {relatedProjects.length > 0 ? (
          <div className="toolkit-project-references">
            {relatedProjects.map((project) => (
              <ProjectReference key={project.id || project.name} project={project} />
            ))}
          </div>
        ) : (
          <p className="toolkit-no-projects">
            No related project is listed in the current project data.
          </p>
        )}
      </div>
    </section>
  );
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedTechnologyId, setSelectedTechnologyId] = useState(
    toolkitTechnologies[0]?.id ?? null,
  );

  const visibleTechnologies =
    activeCategory === "All"
      ? toolkitTechnologies
      : toolkitTechnologies.filter(
          (technology) => technology.category === activeCategory,
        );
  const selectedTechnology =
    visibleTechnologies.find(
      (technology) => technology.id === selectedTechnologyId,
    ) ?? visibleTechnologies[0];

  function selectCategory(category) {
    setActiveCategory(category);
    const technologies =
      category === "All"
        ? toolkitTechnologies
        : toolkitTechnologies.filter(
            (technology) => technology.category === category,
          );

    if (!technologies.some(({ id }) => id === selectedTechnologyId)) {
      setSelectedTechnologyId(technologies[0]?.id ?? null);
    }
  }

  return (
    <div className="toolkit-page">
      <header className="toolkit-intro">
        <div className="toolkit-intro-copy">
          <p className="toolkit-eyebrow">KHISHA'S LAB / THE TOOLKIT</p>
          <h1>
            Tools of <em>the trade.</em>
          </h1>
          <p>
            Technologies connected to the projects in my workbench. Select a
            note to see where each one appears.
          </p>
        </div>
        <div className="toolkit-stamp" aria-hidden="true">
          <BookOpen size={29} strokeWidth={1.5} />
          <span>Tools &amp; notes</span>
        </div>
      </header>

      <section
        className="toolkit-section"
        aria-labelledby="toolkit-skills-title"
      >
        <ToolkitSectionHeading
          index="01"
          eyebrow="A WORKING COLLECTION"
          title="Technology index"
          id="toolkit-skills-title"
        />

        <div className="toolkit-controls">
          <div
            className="toolkit-filters"
            role="group"
            aria-label="Filter technologies by category"
          >
            {toolkitCategories.map((category) => (
              <button
                className="toolkit-filter"
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => selectCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <span className="toolkit-count" role="status" aria-live="polite">
            {String(visibleTechnologies.length).padStart(2, "0")} TECHNOLOGIES
          </span>
        </div>

        <div className="toolkit-browser">
          <ul className="toolkit-technology-list" aria-label="Technologies">
            {visibleTechnologies.map((technology) => (
              <TechnologyButton
                key={technology.id}
                technology={technology}
                selected={selectedTechnology?.id === technology.id}
                onSelect={setSelectedTechnologyId}
              />
            ))}
          </ul>
          {selectedTechnology && (
            <TechnologyDetails technology={selectedTechnology} />
          )}
        </div>
      </section>

      <section className="toolkit-section" aria-labelledby="exploring-title">
        <ToolkitSectionHeading
          index="02"
          eyebrow="OPEN NOTEBOOK"
          title="Currently exploring"
          id="exploring-title"
        />
        <div className="toolkit-exploring">
          <p className="toolkit-eyebrow">
            ROOM FOR WHAT'S NEXT
          </p>
          {exploringTechnologies.length > 0 ? (
            <ul className="toolkit-exploring-list">
              {exploringTechnologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          ) : (
            <p>
              No technologies are listed here yet. This section is ready for
              items when there’s something specific to add.
            </p>
          )}
        </div>
      </section>

      <footer className="toolkit-footer">
        <span>TOOLS ARE PART OF THE PRACTICE.</span>
        <span>
          <Code2 size={14} aria-hidden="true" /> Built one project at a time
        </span>
      </footer>
    </div>
  );
}

export default Skills;
