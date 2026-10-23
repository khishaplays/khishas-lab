import { ArrowUpRight, Code2 } from "lucide-react";
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
            A little curiosity, a lot of practice.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerNavigation.map(({ label, path }) => (
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}
        </nav>

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
      </div>

      <div className="site-footer-bottom">
        <span>© {new Date().getFullYear()} KHISHA&apos;S LAB</span>
        <span>BUILT WITH CURIOSITY ☕</span>
      </div>
    </footer>
  );
}

export default Footer;