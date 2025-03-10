import React, { useState, useEffect } from 'react';
import './NavBar.css';

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbar = document.querySelector('.navbar');
    const stockBar = document.querySelector('.stockBar');
    
    if (element && navbar && stockBar) {
      const totalOffset = navbar.offsetHeight + stockBar.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - totalOffset,
        behavior: 'smooth'
      });
    }
  };

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