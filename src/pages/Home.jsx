import { Link } from "react-router-dom";
import "../App.css";
import { Code2, X } from "lucide-react";
function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="hero-label">
            SOFTWARE DEVELOPER <span>•</span> NAIROBI, KE
          </p>

          <h1>
            Hi, I'm
            <br />
            <span>Khisha</span>
            <span className="heart">♡</span>
          </h1>

          <p className="handwritten">where ideas get brewed &amp; built.</p>

          <div className="scribble" />

          <p className="hero-description">
            I build thoughtful digital experiences with code, creativity and
            curiosity — usually with a cup of coffee nearby.
          </p>

          <Link to="/projects" className="explore-btn">
            Explore My Work <span>→</span>
          </Link>

          <div className="social-links">
            <a
              href="https://github.com/khishaplays"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Khisha's GitHub profile"
            >
              <Code2 size={18} aria-hidden="true" />
              <span>GitHub</span>
            </a>

            <Link to="/contact" aria-label="Contact">
              <X size={18} aria-hidden="true" />
              <span>Contact</span>
            </Link>
          </div>

          <div className="availability">
            <span className="availability-dot" />
            <div>
              <small>CURRENTLY</small>
              <p>Open to opportunities</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div
            className="hero-placeholder-art"
            role="img"
            aria-label="Illustrated latte-colored workspace placeholder. Replace this panel with a personal photograph when ready."
          >
            <span className="hero-placeholder-label">
              THE STUDIO / IMAGE PLACEHOLDER
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
              YOUR PHOTO, WHEN YOU’RE READY
            </span>
          </div>

          <div className="paper-note note-one" aria-hidden="true">
            Currently
            <br />
            building something
            <br />
            better ♡
          </div>

          <div className="paper-note note-two" aria-hidden="true">
            Good ideas.
            <br />
            Good code.
            <br />
            Great things. ♡
          </div>

          <div className="scroll-note" aria-hidden="true">
            <span>SCROLL</span>
            <span>↓</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
