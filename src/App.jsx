import { BrowserRouter, Routes, Route } from "react-router-dom";
import Journal from "./pages/Journal";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import "./App.css";

// Temporary page layout for sections still being developed
function Page({ number, title, subtitle }) {
  return (
    <section className="page-placeholder">
      <p className="hero-label">KHISHA'S LAB / {number}</p>

      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <Navbar />

        <main>
          <Routes>
            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* ABOUT */}
            <Route
              path="/about"
              element={
                <Page
                  number="01 — ABOUT"
                  title="The Developer."
                  subtitle="A little about the person behind the code."
                />
              }
            />

            {/* PROJECTS — INTERACTIVE WORKBENCH */}
            <Route path="/projects" element={<Projects />} />

            {/* SKILLS */}
            <Route
              path="/skills"
              element={
                <Page
                  number="03 — TOOLKIT"
                  title="My Toolkit."
                  subtitle="The technologies, tools and frameworks I work with."
                />
              }
            />

            {/* ENGINEERING JOURNAL */}
            <Route path="/journal" element={<Journal />} />

            {/* JOURNEY */}
            <Route
              path="/journey"
              element={
                <Page
                  number="05 — JOURNEY"
                  title="The Journey."
                  subtitle="Learning, experimenting and growing as a software engineer."
                />
              }
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={
                <Page
                  number="06 — CONTACT"
                  title="Let's Connect."
                  subtitle="Have an opportunity, collaboration or idea? Let's talk."
                />
              }
            />

            {/* UNKNOWN ROUTES */}
            <Route
              path="*"
              element={
                <Page
                  number="404"
                  title="Page Not Found."
                  subtitle="Looks like this page hasn't been brewed yet."
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
