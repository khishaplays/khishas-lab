import { Link } from "react-router-dom";
import "../App.css";
import { Code2 } from "lucide-react";
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

            <a href="/contact" aria-label="Contact">
              <X size={18} aria-hidden="true" />
              <span>Contact</span>
            </a>
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
          <img
            src="/hero-latte.jpg"
            alt="Warm developer workspace with laptop and coffee"
          />

          <div className="paper-note note-one">
            Currently
            <br />
            building something
            <br />
            better ♡
          </div>

          <div className="paper-note note-two">
            Good ideas.
            <br />
            Good code.
            <br />
            Great things. ♡
          </div>

          <div className="scroll-note">
            <span>SCROLL</span>
            <span>↓</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
