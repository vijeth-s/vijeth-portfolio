// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`} id="mobileMenu">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#certifications" onClick={closeMenu}>Certifications</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <nav className={scrolled ? "scrolled" : ""}>
        <a href="#hero" className="nav-logo">
          Vijeth<span>.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button
          className={`burger ${isOpen ? "open" : ""}`}
          id="burger"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
