import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Journal from "./pages/Journal";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Journey from "./pages/Journey";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";

// Temporary page layout for sections still being developed
function Page({ number, title, subtitle, showReturnHome = false }) {
  return (
    <section className="page-placeholder">
      <p className="hero-label">KHISHA'S LAB / {number}</p>

      <h1>{title}</h1>
      <p>{subtitle}</p>
      {showReturnHome && (
        <Link className="page-home-link" to="/">
          Return Home <span aria-hidden="true">→</span>
        </Link>
      )}
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
            <Route path="/about" element={<About />} />

            {/* PROJECTS — INTERACTIVE WORKBENCH */}
            <Route path="/projects" element={<Projects />} />

            {/* SKILLS */}
            <Route path="/skills" element={<Skills />} />

            {/* ENGINEERING JOURNAL */}
            <Route path="/journal" element={<Journal />} />

            {/* JOURNEY */}
            <Route path="/journey" element={<Journey />} />

            {/* CONTACT */}
            <Route path="/contact" element={<Contact />} />

            {/* UNKNOWN ROUTES */}
            <Route
              path="*"
              element={
                <Page
                  number="404"
                  title="Page Not Found."
                  subtitle="Looks like this page hasn't been brewed yet."
                  showReturnHome
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
