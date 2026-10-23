import { ArrowDownRight, ArrowUpRight, BookOpen, Compass, GraduationCap, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";
import { editableJourneyDetails } from "../data/journey";
import "./About.css";

const projectIds = ["wanderly", "scribe"];
const currentProjects = projects.filter((project) =>
  projectIds.includes(project.id),
);

function SectionHeading({ index, eyebrow, title }) {
  return (
    <div className="about-section-heading">
      <span className="about-section-index">{index}</span>
      <div>
        <p className="about-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function About() {
  const education = editableJourneyDetails.education;

  return (
    <div className="about-page">
      <section className="about-intro" aria-labelledby="about-title">
        <div className="about-intro-copy">
          <p className="about-eyebrow">KHISHA'S LAB / A LITTLE ABOUT ME</p>
          <h1 id="about-title">
            The person
            <br />
            behind <em>the build.</em>
          </h1>
          <p className="about-lede">
            I’m Khisha, a Software Engineer who designs and builds thoughtful
            digital experiences, connecting intuitive interfaces with the
            systems that power them.
          </p>
          <Link className="about-text-link" to="/projects">
            Explore what I’m building <ArrowDownRight size={17} />
          </Link>
        </div>

        <aside className="about-note" aria-label="A note from the workbench">
          <span className="about-note-number">FIELD NOTE / 001</span>
          <BookOpen size={25} strokeWidth={1.5} aria-hidden="true" />
          <p>Curiosity first. Make it clear. Keep learning.</p>
          <span className="about-note-rule" aria-hidden="true" />
          <span className="about-note-caption">A working practice</span>
        </aside>
      </section>

      <section className="about-section about-story" aria-labelledby="story-title">
        <SectionHeading
          index="01"
          eyebrow="THE BEGINNING"
          title="My story"
        />
        <div className="about-section-copy">
          <h2 id="story-title">From clear interfaces to dependable systems.</h2>
          <p>
            My work spans React interfaces, Flask-backed applications, and
            Python developer tools. I focus on understanding how each part
            fits together—from the experience a user sees to the data and
            services behind it.
          </p>
        </div>
      </section>

      <section className="about-section about-education" aria-labelledby="education-title">
        <SectionHeading
          index="02"
          eyebrow="TECHNICAL EDUCATION & PROFESSIONAL DEVELOPMENT"
          title="Software Engineering"
        />
        <div className="about-education-card">
          <div className="about-education-icon">
            <GraduationCap size={25} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div>
            <p className="about-eyebrow">{education.studyProgram}</p>
            <h2 id="education-title">{education.institution}</h2>
            <p className="about-education-date">{education.date}</p>
            <p className="about-education-label">RELEVANT LEARNING AREAS</p>
            <ul className="about-learning-areas">
              {education.learningAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section about-philosophy" aria-labelledby="philosophy-title">
        <SectionHeading
          index="03"
          eyebrow="HOW I APPROACH THE WORK"
          title="Engineering philosophy"
        />
        <div className="about-philosophy-intro">
          <h2 id="philosophy-title">
            Understand the problem.
            <br />
            Make the next step clear.
          </h2>
          <p>
            I aim to make software easier to reason about—for the people using
            it and for the people building it.
          </p>
        </div>
        <div className="about-principles">
          <article className="about-principle">
            <span className="about-principle-icon">
              <Compass size={20} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span className="about-principle-number">01 / ORIENT</span>
            <h3>Start with the real question</h3>
            <p>
              Get clear on the problem and the people it affects before
              reaching for a solution.
            </p>
          </article>
          <article className="about-principle">
            <span className="about-principle-icon">
              <Lightbulb size={20} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span className="about-principle-number">02 / BUILD</span>
            <h3>Keep the pieces understandable</h3>
            <p>
              Give components and system layers clear responsibilities, then
              make their connections explicit.
            </p>
          </article>
          <article className="about-principle">
            <span className="about-principle-icon">
              <BookOpen size={20} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span className="about-principle-number">03 / REFLECT</span>
            <h3>Learn from each iteration</h3>
            <p>
              Treat questions, feedback, and unexpected behavior as useful
              information for the next pass.
            </p>
          </article>
        </div>
      </section>

      <section className="about-section about-building" aria-labelledby="building-title">
        <SectionHeading
          index="04"
          eyebrow="ON THE WORKBENCH"
          title="Currently building"
        />
        <div className="about-building-heading">
          <h2 id="building-title">A few projects in progress.</h2>
          <span>NOTES FROM THE STUDIO</span>
        </div>
        <div className="about-projects">
          {currentProjects.map((project) => (
            <article className="about-project-card" key={project.id}>
              <div className="about-project-topline">
                <span>{project.number} / {project.type}</span>
                <span className="about-project-status">{project.status}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="about-project-tags" aria-label={`${project.name} technologies`}>
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <Link
                className="about-project-link"
                to="/projects"
                aria-label={`Explore ${project.name} and other projects`}
              >
                View work <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
          <article className="about-project-card about-lab-card">
            <div className="about-project-topline">
              <span>003 / PERSONAL SPACE</span>
              <span className="about-project-status">Evolving</span>
            </div>
            <h3>Khisha&apos;s Lab</h3>
            <p>
              This portfolio: a place to bring together my projects, notes, and
              ongoing software engineering practice.
            </p>
            <div className="about-project-tags" aria-label="Khisha's Lab technologies">
              {["React", "Vite", "CSS"].map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <Link className="about-project-link" to="/journal">
              Read the journal <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <section className="about-cta" aria-labelledby="about-cta-title">
        <div>
          <p className="about-eyebrow">NEXT, LET’S MAKE SOMETHING</p>
          <h2 id="about-cta-title">
            Good ideas start
            <br />
            with a conversation.
          </h2>
        </div>
        <div className="about-cta-links">
          <Link className="about-cta-primary" to="/projects">
            Explore my projects <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link className="about-cta-secondary" to="/contact">
            Get in touch <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;