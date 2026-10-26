import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight, X, Code2 } from "lucide-react";

import { projects } from "../data/projects";
import "./Projects.css";

const githubReposUrl =
  "https://api.github.com/users/khishaplays/repos?type=owner&sort=updated&per_page=100";
const filters = ["All", "Full Stack", "Python", "JavaScript"];

function getNextPage(linkHeader) {
  const nextLink = linkHeader
    ?.split(",")
    .find((link) => link.includes('rel="next"'));

  return nextLink?.match(/<([^>]+)>/)?.[1] ?? null;
}

function normalizeRepositoryKey(value) {
  try {
    return new URL(value).pathname.replace(/\/+$/, "").toLowerCase();
  } catch {
    return value.trim().toLowerCase();
  }
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [githubRepos, setGithubRepos] = useState([]);
  const [githubStatus, setGithubStatus] = useState("loading");
  const [githubError, setGithubError] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);
  const featuredProjects = visibleProjects.filter(
    (project) => project.group === "featured",
  );
  const playgroundProjects = visibleProjects.filter(
    (project) => project.group === "playground",
  );

  const featuredRepositoryKeys = new Set(
    projects.flatMap((project) =>
      [project.github, project.name]
        .filter(Boolean)
        .map(normalizeRepositoryKey),
    ),
  );
  const archiveRepos = githubRepos.filter((repo) => {
    const repositoryPath = normalizeRepositoryKey(repo.html_url);
    const repositoryName = normalizeRepositoryKey(repo.name);
    return (
      !featuredRepositoryKeys.has(repositoryPath) &&
      !featuredRepositoryKeys.has(repositoryName)
    );
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadPortfolioRepos() {
      setGithubStatus("loading");
      setGithubError("");

      try {
        const repos = [];
        let nextPage = githubReposUrl;

        while (nextPage) {
          const response = await fetch(nextPage, {
            headers: {
              Accept: "application/vnd.github+json",
              "X-GitHub-Api-Version": "2022-11-28",
            },
            signal: controller.signal,
          });

          if (!response.ok) {
            throw new Error(
              `GitHub returned ${response.status}${
                response.status === 403 || response.status === 429
                  ? ". The public API rate limit may have been reached."
                  : ""
              }.`,
            );
          }

          const pageRepos = await response.json();
          if (!Array.isArray(pageRepos)) {
            throw new Error("GitHub returned an unexpected repository list.");
          }

          repos.push(
            ...pageRepos.filter(
              (repo) =>
                !repo.fork &&
                !repo.archived &&
                Array.isArray(repo.topics) &&
                repo.topics.includes("portfolio"),
            ),
          );
          nextPage = getNextPage(response.headers.get("Link"));
        }

        setGithubRepos(repos);
        setGithubStatus("success");
      } catch (error) {
        if (error.name === "AbortError") return;
        setGithubError(error.message);
        setGithubStatus("error");
      }
    }

    loadPortfolioRepos();

    return () => controller.abort();
  }, [retryCount]);

  useLayoutEffect(() => {
    if (selected) {
      dialogRef.current?.focus();
    } else {
      openerRef.current?.focus();
    }
  }, [selected]);

  useEffect(() => {
    if (!selected) return;

    const handleDialogKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setSelected(null);
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusableElements = [
        ...dialog.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((element) => element.getClientRects().length > 0);

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const focusIsOutsideDialog = !dialog.contains(document.activeElement);

      if (
        event.shiftKey &&
        (document.activeElement === firstElement ||
          document.activeElement === dialog ||
          focusIsOutsideDialog)
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === lastElement || focusIsOutsideDialog)
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleDialogKeyDown);

    return () => {
      document.removeEventListener("keydown", handleDialogKeyDown);
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

      <div className="workbench-controls">
        <div
          className="workbench-filters"
          role="group"
          aria-label="Filter projects by type"
        >
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

        <span className="workbench-count" aria-live="polite">
          {String(visibleProjects.length).padStart(2, "0")} PROJECT FILES
        </span>
      </div>

      {featuredProjects.length > 0 && (
        <section
          className="workbench-featured"
          aria-labelledby="featured-title"
        >
          <div className="workbench-section-heading">
            <div>
              <p className="workbench-label">HAND-PICKED / IN PROGRESS</p>
              <h2 id="featured-title">Featured Builds</h2>
              <p className="workbench-section-subtitle">
                Projects where curiosity meets engineering.
              </p>
            </div>
          </div>

          <div className="workbench-grid">
            {featuredProjects.map((project) => (
              <article className="workbench-card" key={project.id}>
                {project.id === "wanderly" ? (
                  <div
                    className="workbench-card-art workbench-featured-art wanderly-preview"
                    role="img"
                    aria-label="Illustrative Wanderly travel-discovery preview showing 47 Kenyan counties and destination regions"
                  >
                    <div className="featured-preview-topline">
                      <span>PRODUCT PREVIEW · ILLUSTRATIVE</span>
                      <span className="wanderly-preview-mark">W</span>
                    </div>
                    <div className="wanderly-preview-heading">
                      <div>
                        <small>TRAVEL, YOUR WAY</small>
                        <h2>Wanderly</h2>
                      </div>
                      <span className="wanderly-county-count">
                        <strong>47</strong>
                        Counties
                      </span>
                    </div>
                    <div className="wanderly-discovery">
                      <span>EXPLORE KENYA</span>
                      <div className="wanderly-destinations">
                        <span>Nairobi</span>
                        <span>Coast</span>
                        <span>Highlands</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="workbench-card-art workbench-featured-art scribe-preview"
                    role="img"
                    aria-label="Illustrative Scribe terminal preview showing today's active coding activity for the Scribe project"
                  >
                    <div className="featured-preview-topline">
                      <span>ILLUSTRATIVE CLI PREVIEW</span>
                      <span className="scribe-terminal-dots" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </span>
                    </div>
                    <div className="scribe-preview-heading">
                      <small>DEVELOPER ACTIVITY TRACKER</small>
                      <h2>Scribe</h2>
                    </div>
                    <div className="scribe-terminal" aria-hidden="true">
                      <p>
                        <span>$</span> scribe today
                      </p>
                      <strong>TODAY&apos;S ACTIVITY</strong>
                      <div>
                        <span>Project:</span> Scribe
                      </div>
                      <div>
                        <span>Type:</span> coding
                      </div>
                      <div>
                        <span>Status:</span> <b>active</b>
                      </div>
                    </div>
                  </div>
                )}

                <div className="workbench-card-content">
                  <div className="workbench-card-meta">
                    <span>{project.type}</span>
                    <span>{project.status}</span>
                  </div>

                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  <div
                    className="workbench-highlights"
                    aria-label={`${project.name} engineering highlights`}
                  >
                    {project.highlights.map((highlight) => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>

                  <div className="workbench-tags">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <button
                    className="workbench-open"
                    type="button"
                    onClick={(event) => {
                      openerRef.current = event.currentTarget;
                      setSelected(project);
                    }}
                  >
                    Open project file
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {playgroundProjects.length > 0 && (
        <section
          className="workbench-playground"
          aria-labelledby="playground-title"
        >
          <div className="workbench-section-heading">
            <div>
              <p className="workbench-label">LEARNING / PRACTICE</p>
              <h2 id="playground-title">The Playground</h2>
              <p className="workbench-section-subtitle">
                Small experiments. Big lessons.
              </p>
            </div>
          </div>

          <div className="workbench-grid workbench-playground-grid">
            {playgroundProjects.map((project) => (
              <article
                className="workbench-card workbench-playground-card"
                key={project.id}
              >
                <div className="workbench-card-art">
                  <span>FILE NO. {project.number}</span>

                  <div className="workbench-art-title">
                    <small>LEARNING PROJECT</small>
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
                    onClick={(event) => {
                      openerRef.current = event.currentTarget;
                      setSelected(project);
                    }}
                  >
                    Open project file
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="workbench-archive" aria-labelledby="archive-title">
        <div className="workbench-section-heading">
          <div>
            <p className="workbench-label">FROM GITHUB / TOPIC: PORTFOLIO</p>
            <h2 id="archive-title">Portfolio Archive</h2>
          </div>
          {githubStatus === "success" && (
            <span className="workbench-count" aria-live="polite">
              {String(archiveRepos.length).padStart(2, "0")} REPOSITORIES
            </span>
          )}
        </div>

        {githubStatus === "loading" && (
          <p className="workbench-archive-message" role="status">
            Checking GitHub for portfolio-tagged projects…
          </p>
        )}

        {githubStatus === "error" && (
          <div className="workbench-archive-message workbench-archive-error" role="alert">
            <p>Couldn’t load the GitHub portfolio archive. {githubError}</p>
            <button
              className="workbench-retry"
              type="button"
              onClick={() => setRetryCount((count) => count + 1)}
            >
              Try again
            </button>
          </div>
        )}

        {githubStatus === "success" && archiveRepos.length === 0 && (
          <p className="workbench-archive-message">
            No additional repositories are tagged <code>portfolio</code> yet.
            Add that topic to a public, non-fork, non-archived repository to
            include it here.
          </p>
        )}

        {githubStatus === "success" && archiveRepos.length > 0 && (
          <div className="workbench-grid workbench-archive-grid">
            {archiveRepos.map((repo) => (
              <article
                className="workbench-card workbench-archive-card"
                key={repo.id}
              >
                <div className="workbench-card-art workbench-archive-art">
                  <span>GITHUB REPOSITORY</span>
                  <div className="workbench-art-title">
                    <small>PORTFOLIO ARCHIVE</small>
                    <h3>{repo.name}</h3>
                  </div>
                  <ArrowUpRight size={26} aria-hidden="true" />
                </div>

                <div className="workbench-card-content">
                  <div className="workbench-card-meta">
                    <span>Language</span>
                    <span>{repo.language || "Not specified"}</span>
                  </div>
                  <p>
                    {repo.description || "No description provided on GitHub."}
                  </p>
                  <div
                    className="workbench-tags"
                    aria-label={`${repo.name} technologies and topics`}
                  >
                    {[
                      ...new Set(
                        [...(repo.topics || []), repo.language].filter(Boolean),
                      ),
                    ].map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <a
                    className="workbench-github workbench-archive-link"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2 size={18} aria-hidden="true" />
                    View on GitHub
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* PROJECT DETAILS MODAL */}
      {selected && (
        <div
          className="workbench-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div
            ref={dialogRef}
            className="workbench-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="workbench-dialog-title"
            tabIndex={-1}
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

            <h3>Project Overview</h3>
            <p>{selected.description}</p>

            <h3>Engineering Challenge</h3>
            <p>{selected.challenge}</p>

            {selected.technicalHighlights?.length > 0 && (
              <>
                <h3>Technical Highlights</h3>
                <ul className="workbench-dialog-highlights">
                  {selected.technicalHighlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}

            {selected.inProgress && (
              <p className="workbench-dialog-note">
                <strong>In progress:</strong> {selected.inProgress}
              </p>
            )}

            <h3>Technology Stack</h3>
            <div className="workbench-tags">
              {selected.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            {(selected.github ||
              selected.liveUrl ||
              selected.demoVideoUrl) && (
              <>
                <h3>Project Links</h3>
                <div className="workbench-dialog-links">
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
                  {selected.liveUrl && (
                    <a
                      className="workbench-github workbench-live"
                      href={selected.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                  {selected.demoVideoUrl && (
                    <a
                      className="workbench-github workbench-live"
                      href={selected.demoVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Video Walkthrough
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
