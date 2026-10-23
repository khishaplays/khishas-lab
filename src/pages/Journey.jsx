import { useState } from "react";
import { ArrowDown, ArrowUpRight, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";
import {
  editableJourneyDetails,
  journeyMilestones,
} from "../data/journey";
import "./Journey.css";

const stages = ["All", ...journeyMilestones.map((milestone) => milestone.stage)];

function JourneyProjectLink({ project }) {
  return (
    <article className="journey-project">
      <div>
        <h4>{project.name}</h4>
        {project.status && (
          <span className="journey-project-status">{project.status}</span>
        )}
      </div>
      <div className="journey-project-actions">
        <Link className="journey-detail-link" to="/projects">
          Project archive <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
        {project.github && (
          <a
            className="journey-detail-link"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository <ExternalLink size={13} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

function MilestoneDetails({ milestone, isOpen }) {
  const relatedProjects = milestone.projectIds
    .map((projectId) => projects.find((project) => project.id === projectId))
    .filter(Boolean);
  const education = milestone.id === "learning"
    ? editableJourneyDetails.education
    : null;

  return (
    <div
      className="journey-details"
      id={`journey-details-${milestone.id}`}
      hidden={!isOpen}
    >
      {education && (
        <div className="journey-education-note">
          <p className="journey-detail-label">
            TECHNICAL EDUCATION &amp; PROFESSIONAL DEVELOPMENT
          </p>
          <p className="journey-education-summary">{education.summary}</p>
          <div className="journey-education-records">
            {education.records.map((record) => (
              <article className="journey-education-record" key={record.id}>
                <h3>{record.programme}</h3>
                <p className="journey-education-institution">
                  {record.institution}
                </p>
                <p>{record.date}</p>
                {record.credential && <p>{record.credential}</p>}
                {record.learningAreas && (
                  <>
                    <p className="journey-learning-label">
                      RELEVANT LEARNING AREAS
                    </p>
                    <ul className="journey-learning-areas">
                      {record.learningAreas.map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                    </ul>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      )}

      <div className="journey-reflection">
        <p className="journey-detail-label">NOTEBOOK / REFLECTION</p>
        <p>{milestone.details}</p>
      </div>

      {milestone.liveUrl && (
        <a
          className="journey-live-link"
          href={milestone.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the live Wanderly deployment
          <ExternalLink size={15} aria-hidden="true" />
        </a>
      )}

      {relatedProjects.length > 0 && (
        <div className="journey-related-projects">
          <p className="journey-detail-label">RELATED PROJECT FILES</p>
          <div className="journey-project-list">
            {relatedProjects.map((project) => (
              <JourneyProjectLink key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {milestone.portfolioUrl && (
        <a
          className="journey-live-link journey-portfolio-link"
          href={milestone.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Khisha&apos;s Lab on GitHub
          <ExternalLink size={15} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

function Journey() {
  const [activeStage, setActiveStage] = useState("All");
  const [openMilestone, setOpenMilestone] = useState(null);
  const visibleMilestones =
    activeStage === "All"
      ? journeyMilestones
      : journeyMilestones.filter(
          (milestone) => milestone.stage === activeStage,
        );

  function toggleMilestone(id) {
    setOpenMilestone((current) => (current === id ? null : id));
  }

  return (
    <div className="journey-page">
      <header className="journey-intro">
        <div>
          <p className="journey-eyebrow">KHISHA'S LAB / ENGINEERING JOURNAL</p>
          <h1>
            The <em>Journey.</em>
          </h1>
          <p className="journey-subtitle">
            Every project has a beginning. So does every developer.
          </p>
        </div>
        <aside className="journey-stamp" aria-label="Journey notebook">
          <BookOpen size={29} strokeWidth={1.5} aria-hidden="true" />
          <span>In progress</span>
        </aside>
      </header>

      <section className="journey-content" aria-labelledby="journey-timeline-title">
        <div className="journey-section-heading">
          <div>
            <p className="journey-eyebrow">MILESTONES / NO DATES ASSUMED</p>
            <h2 id="journey-timeline-title">A practice in progress</h2>
          </div>
          <span className="journey-section-mark" aria-hidden="true">
            ↓
          </span>
        </div>

        <div className="journey-controls">
          <div
            className="journey-filters"
            role="group"
            aria-label="Filter journey milestones"
          >
            {stages.map((stage) => (
              <button
                className="journey-filter"
                key={stage}
                type="button"
                aria-pressed={activeStage === stage}
                onClick={() => {
                  setActiveStage(stage);
                  setOpenMilestone(null);
                }}
              >
                {stage}
              </button>
            ))}
          </div>
          <span className="journey-count" role="status" aria-live="polite">
            {String(visibleMilestones.length).padStart(2, "0")} MILESTONES
          </span>
        </div>

        <ol className="journey-timeline">
          {visibleMilestones.map((milestone) => {
            const isOpen = openMilestone === milestone.id;

            return (
              <li className="journey-milestone" key={milestone.id}>
                <span className="journey-marker" aria-hidden="true">
                  {milestone.number}
                </span>
                <article className="journey-card">
                  <button
                    className="journey-card-toggle"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`journey-details-${milestone.id}`}
                    onClick={() => toggleMilestone(milestone.id)}
                  >
                    <span className="journey-card-copy">
                      <span className="journey-card-meta">
                        <span>{milestone.eyebrow}</span>
                        {milestone.date && <span>{milestone.date}</span>}
                      </span>
                      <span className="journey-card-title">
                        {milestone.title}
                      </span>
                      <span className="journey-card-summary">
                        {milestone.summary}
                      </span>
                    </span>
                    <span className="journey-card-aside">
                      <span className="journey-status">
                        {milestone.status}
                      </span>
                      <span className="journey-toggle-icon" aria-hidden="true">
                        {isOpen ? (
                          <ArrowDown size={19} />
                        ) : (
                          <ArrowUpRight size={19} />
                        )}
                      </span>
                    </span>
                  </button>
                  <MilestoneDetails
                    milestone={milestone}
                    isOpen={isOpen}
                  />
                </article>
              </li>
            );
          })}
        </ol>
      </section>

      <footer className="journey-footer">
        <span>THE NEXT CHAPTER IS STILL BEING WRITTEN.</span>
        <Link to="/journal">
          Read the Engineering Journal <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </footer>
    </div>
  );
}

export default Journey;