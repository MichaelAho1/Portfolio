import React, { useState, useEffect } from 'react';
import './NavBar.css';

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-links">
          <button onClick={() => scrollToSection('profile')} className="nav-button">
            About Me
          </button>
          <button onClick={() => scrollToSection('timeline')} className="nav-button">
            Timeline
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-button">
            Projects
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 