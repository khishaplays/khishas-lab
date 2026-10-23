import { ArrowUpRight, Code2, Compass, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { contactDetails } from "../data/contact";
import "./Footer.css";

const footerNavigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Workbench", path: "/projects" },
  { label: "Toolkit", path: "/skills" },
  { label: "Journal", path: "/journal" },
  { label: "Journey", path: "/journey" },
  { label: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="footer-brand-block">
          <Link className="footer-brand" to="/">
            KHISHA&apos;S LAB <span aria-hidden="true">☕</span>
          </Link>
          <p className="footer-tagline">
            Software Engineer building thoughtful digital experiences.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerNavigation.map(({ label, path }) => (
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="footer-professional-links">
          <a
            className="footer-professional-link"
            href={contactDetails.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 size={17} aria-hidden="true" />
            GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          {contactDetails.email && (
            <a
              className="footer-professional-link"
              href={`mailto:${contactDetails.email}`}
            >
              <Mail size={17} aria-hidden="true" />
              Email
            </a>
          )}
          {contactDetails.linkedin && (
            <a
              className="footer-professional-link"
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Compass size={17} aria-hidden="true" />
              LinkedIn
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>© {new Date().getFullYear()} KHISHA&apos;S LAB</span>
        <span>BUILT WITH CURIOSITY ☕</span>
      </div>
    </footer>
  );
}

export default Footer;