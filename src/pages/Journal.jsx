import { useState } from "react";
import { ArrowUpRight, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

import { journalEntries } from "../data/journal";
import "./Journal.css";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "Developer Tools",
];

function Journal() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openEntry, setOpenEntry] = useState(null);

  const filteredEntries =
    activeCategory === "All"
      ? journalEntries
      : journalEntries.filter((entry) => entry.category === activeCategory);

  function toggleEntry(id) {
    setOpenEntry((current) => (current === id ? null : id));
  }

  return (
    <section className="journal-page">
      <div className="journal-heading">
        <div>
          <p className="journal-eyebrow">KHISHA'S LAB / ENGINEERING JOURNAL</p>

          <h1>
            Notes from <em>the build.</em>
          </h1>

          <p className="journal-intro">
            An evolving collection of debugging sessions, technical discoveries,
            experiments, and lessons from the projects I build.
          </p>
        </div>

        <div className="journal-stamp" aria-hidden="true">
          <BookOpen size={32} />
          <span>Still learning</span>
        </div>
      </div>

      <div className="journal-toolbar">
        <div
          className="journal-filters"
          role="group"
          aria-label="Journal categories"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "active" : ""}
              aria-pressed={activeCategory === category}
              onClick={() => {
                setActiveCategory(category);
                setOpenEntry(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <span className="journal-count" role="status" aria-live="polite">
          {String(filteredEntries.length).padStart(2, "0")} NOTES
        </span>
      </div>

      <div className="journal-entries">
        {filteredEntries.map((entry) => {
          const isOpen = openEntry === entry.id;

          return (
            <article className="journal-card" key={entry.id}>
              <button
                type="button"
                className="journal-card-button"
                aria-expanded={isOpen}
                aria-controls={`journal-detail-${entry.id}`}
                onClick={() => toggleEntry(entry.id)}
              >
                <div className="journal-card-content">
                  <div className="journal-meta">
                    <span>ENTRY NO. {entry.number}</span>
                    <span>{entry.category}</span>
                  </div>

                  <h2>{entry.title}</h2>
                  <p>{entry.summary}</p>

                  <div className="journal-tags">
                    {entry.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <span className="journal-card-icon">
                  {isOpen ? (
                    <ChevronUp size={22} />
                  ) : (
                    <ArrowUpRight size={22} />
                  )}
                </span>
              </button>

              <div
                className="journal-details"
                id={`journal-detail-${entry.id}`}
                hidden={!isOpen}
              >
                <p className="journal-project-label">
                  FROM THE PROJECT / {entry.project}
                </p>

                <div className="journal-detail-block">
                  <h3>01 / The Problem</h3>
                  <p>{entry.problem}</p>
                </div>

                <div className="journal-detail-block">
                  <h3>02 / My Approach</h3>
                  <p>{entry.solution}</p>
                </div>

                <div className="journal-takeaway">
                  <h3>03 / What I Learned</h3>
                  <p>{entry.takeaway}</p>
                </div>

                <button
                  type="button"
                  className="journal-close"
                  onClick={() => setOpenEntry(null)}
                >
                  Close entry
                  <ChevronDown size={16} />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <footer className="journal-bottom">
        <span>THE WORK IS ALWAYS EVOLVING.</span>
        <span>Built with curiosity ☕</span>
      </footer>
    </section>
  );
}

export default Journal;
