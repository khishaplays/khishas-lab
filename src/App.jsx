import "./App.css";

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a href="#home" className="logo">
          KHISHA'S LAB <span>☕</span>
        </a>

        <nav className="nav-links">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="connect-btn">
          Let's Connect <span>→</span>
        </a>
      </header>

      <main>
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

            <a href="#projects" className="explore-btn">
              Explore My Work <span>→</span>
            </a>

            <div className="social-links">
              <a
                href="https://github.com/khishaplays"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GH
              </a>

              <a href="#contact" aria-label="LinkedIn">
                in
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
      </main>
    </div>
  );
}

export default App;
