import { useEffect, useRef } from "react";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";
import "../App.css";

const featuredProjects = projects.slice(0, 3);
const previewTechnologies = [
  ...new Set(featuredProjects.flatMap((project) => project.stack)),
].slice(0, 7);

function Home() {
  const homeRef = useRef(null);

  useEffect(() => {
    homeRef.current?.classList.add("home-reveal-ready");
    const revealItems = homeRef.current?.querySelectorAll(".home-reveal");
    if (!revealItems) return undefined;

    const showAll = () =>
      revealItems.forEach((item) => item.classList.add("is-visible"));

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      showAll();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page" ref={homeRef}>
      <section className="hero" id="home" aria-labelledby="home-title">
        <div className="hero-copy home-reveal">
          <p className="hero-kicker">Driven to solve. Inspired to build.</p>
          <p className="hero-name">Lisa Lakisha</p>
          <p className="hero-role">
            Software Engineer | Full-Stack Development
          </p>
          <h1 id="home-title">Engineering ideas into experiences.</h1>
          <p className="hero-description">
            I build with curiosity,{" "}
            <span className="hero-emphasis">engineer with intention</span>, and
            believe the best digital experiences make complex things feel
            effortless. From shaping ideas to developing functional solutions,
            I&apos;m drawn to making technology both powerful and human.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="explore-btn">
              Explore My Work ↗
            </Link>
            <Link to="/contact" className="connect-btn hero-connect-btn">
              Let&apos;s Connect →
            </Link>
          </div>

          <a
            className="home-github-link"
            href="https://github.com/khishaplays"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            <Code2 size={17} aria-hidden="true" />
            GitHub
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-visual home-reveal">
          <div
            className="hero-placeholder-art"
            role="img"
            aria-label="Illustrated latte-colored workspace placeholder, ready to be replaced with a personal photograph."
          >
            <span className="hero-placeholder-label">
              PERSONAL PHOTO / PLACEHOLDER
            </span>
            <svg
              className="hero-workspace-illustration"
              viewBox="0 0 560 420"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M80 320h400l-34 27H114l-34-27Z"
                fill="var(--espresso)"
                fillOpacity=".12"
              />
              <path
                d="M149 101h256a12 12 0 0 1 12 12v157H137V113a12 12 0 0 1 12-12Z"
                fill="var(--espresso)"
              />
              <path
                d="M153 117h248v132H153z"
                fill="var(--cream-light)"
                fillOpacity=".92"
              />
              <path
                d="M171 139h72m-72 21h130m-130 21h93m-93 21h119"
                stroke="var(--caramel)"
                strokeLinecap="round"
                strokeWidth="5"
                strokeOpacity=".72"
              />
              <circle cx="377" cy="140" r="10" fill="var(--latte)" />
              <path
                d="M125 270h304l47 43a9 9 0 0 1-7 15H84a9 9 0 0 1-7-15l48-43Z"
                fill="var(--mocha)"
              />
              <path
                d="M232 286h91l-8 22h-75l-8-22Z"
                fill="var(--latte)"
                fillOpacity=".8"
              />
              <path
                d="M367 215h63v67h-63z"
                fill="var(--caramel)"
                fillOpacity=".86"
              />
              <path
                d="M430 228h12a18 18 0 0 1 0 36h-12"
                stroke="var(--mocha)"
                strokeWidth="8"
              />
              <path
                d="M380 203c-8-11 8-14 0-26m21 26c-8-11 8-14 0-26"
                stroke="var(--cream-light)"
                strokeLinecap="round"
                strokeWidth="4"
                strokeOpacity=".8"
              />
            </svg>
            <span className="hero-placeholder-caption">
              REPLACE WITH YOUR PORTRAIT
            </span>
          </div>
        </div>
      </section>

      <section
        className="home-section home-featured"
        aria-labelledby="home-featured-title"
      >
        <div className="home-section-heading home-reveal">
          <div>
            <p className="home-section-eyebrow">SELECTED WORK / 01</p>
            <h2 id="home-featured-title">On the workbench</h2>
          </div>
          <Link className="home-section-link" to="/projects">
            Explore all projects <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="home-project-grid">
          {featuredProjects.map((project) => (
            <article className="home-project-card home-reveal" key={project.id}>
              <div className="home-project-meta">
                <span>{project.number}</span>
                <span>{project.status}</span>
              </div>
              <h3>
                <Link to="/projects">{project.name}</Link>
              </h3>
              <p>{project.description}</p>
              <div
                className="home-project-tags"
                aria-label={`${project.name} technologies`}
              >
                {project.stack.slice(0, 4).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <a
                className="home-project-repository"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} repository on GitHub`}
              >
                View repository <ExternalLink size={14} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-toolkit" aria-labelledby="home-toolkit-title">
        <div className="home-toolkit-copy home-reveal">
          <p className="home-section-eyebrow">TOOLS & TECHNOLOGIES / 02</p>
          <h2 id="home-toolkit-title">A toolkit shaped by the work.</h2>
          <p>
            Technologies represented across the projects and engineering
            practice in this portfolio.
          </p>
        </div>
        <div className="home-toolkit-preview home-reveal">
          <ul className="home-technology-list" aria-label="Technology preview">
            {previewTechnologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <Link className="home-section-link" to="/skills">
            Explore the Toolkit <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
