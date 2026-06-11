import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ currentRoute }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => {
    if (path === '#/' && (currentRoute === '#/' || currentRoute === '#/me' || currentRoute === '#/about' || currentRoute === '')) {
      return true;
    }
    return currentRoute === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#/" className="nav-left" onClick={closeMenu}>
          <div className="logo-box"></div>
          <span class="logo-name">Bhanu Yadav</span>
          <span class="logo-title">/ developer / engineer</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#/" className={isActive('#/') ? 'active' : ''}>Me</a>
          <a href="#/experience" className={isActive('#/experience') ? 'active' : ''}>Experience</a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span className="hamburger-line line-1" />
          <span className="hamburger-line line-2" />
          <span className="hamburger-line line-3" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#/" className={isActive('#/') ? 'active' : ''} onClick={closeMenu}>Me</a>
          <a href="#/experience" className={isActive('#/experience') ? 'active' : ''} onClick={closeMenu}>Experience</a>
        </div>
      )}
    </nav>
  );
}
