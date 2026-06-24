import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import GooeyNav from "../GooeyNav/GooeyNav";
import './Navbar.css'

const navItems = [
  { label: "Home",     href: "/" },
  { label: "About Me", href: "/about-me" },
  { label: "Projects", href: "/projects" },
  { label: "Skills",   href: "/skills" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const activeIndex = navItems.findIndex(item =>
    item.href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(item.href)
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gooeyItems = navItems.map(item => ({
    label: item.label,
    href: item.href,
    onClick: (e) => {
      e.preventDefault();
      navigate(item.href);
    }
  }))

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">

          <div className="logo">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Kirby<span className="logo-dot">.</span>
            </Link>
          </div>

          {/* RIGHT SIDE: nav + CTA grouped together */}
          <div className="nav-right">
            <div className="nav-gooey-wrapper">
              <GooeyNav
                items={gooeyItems}
                initialActiveIndex={activeIndex === -1 ? 0 : activeIndex}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                animationTime={600}
              />
            </div>

            <Link to="/contact" className="nav-cta nav-cta--desktop">
              Contact Me
            </Link>
          </div>

          {/* MOBILE */}
          <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

<ul className={`nav-links ${menuOpen ? "active" : ""}`}>
  <li className={location.pathname === "/" ? "mobile-active" : ""}>
    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
  </li>
  <li className={location.pathname.startsWith("/about-me") ? "mobile-active" : ""}>
    <Link to="/about-me" onClick={() => setMenuOpen(false)}>About Me</Link>
  </li>
  <li className={location.pathname.startsWith("/projects") ? "mobile-active" : ""}>
    <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
  </li>
  <li className={location.pathname.startsWith("/skills") ? "mobile-active" : ""}>
    <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
  </li>
  <li>
    <Link to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
      Contact Me
    </Link>
  </li>
</ul>
        </div>
      </nav>

      <div
        className={`nav-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;