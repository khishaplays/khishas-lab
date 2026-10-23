import { NavLink, Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Workbench", path: "/projects" },
  { label: "Toolkit", path: "/skills" },
  { label: "Journal", path: "/journal" },
  { label: "Journey", path: "/journey" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef(null);

  function handleMenuKeyDown(event) {
    if (event.key === "Escape" && menuOpen) {
      setMenuOpen(false);
      menuToggleRef.current?.focus();
    }
  }

  return (
    <header className="navbar" onKeyDown={handleMenuKeyDown}>
      <Link to="/" className="logo">
        KHISHA'S LAB <span>☕</span>
      </Link>

      <nav
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {navigation.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <Link to="/contact" className="connect-btn">
        Let's Connect <span>→</span>
      </Link>

      <button
        ref={menuToggleRef}
        type="button"
        className="mobile-menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

export default Navbar;
