import React from 'react';
import './profile.css';
import headshot from '../assets/headshot.jpg';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import pythonIcon from '../assets/python.png';
import javaIcon from '../assets/java.png';
import gitIcon from '../assets/git.png';
import MySQLIcon from '../assets/MySQL.png';
import DjangoIcon from '../assets/django.png';

function Profile() {
  return (
    <div className="contact">
      <div className="profile-container">
        <div className="profile-left">
          <img
            id="headshot"
            src={headshot}
            alt="Michael Aho"
          />
          <h1 id="name">Michael Aho</h1>
          <label id="description">
            CS @ JMU · Expected Dec 2026<br />
            Software Engineer @ ILS<br />
          </label>
          <div>
            <h2 id="contact-header">Contact info</h2>
            <a href="mailto:michael.aho84@gmail.com" className="email-link">
              <img src="https://img.icons8.com/color/48/000000/gmail.png" alt="Email" />
            </a>
            <a href="https://www.linkedin.com/in/michael-a-aho/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.github.com/michaelaho1" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="GitHub" />
            </a>
          </div>
          <p>
            Hi, I am Michael, I enjoy working with financial data, building software, and learning new technologies.
          </p>
        </div>
        
        <div className="profile-right">
          <div className="skills-section">
            <h4>Technologies</h4>
            <div className="skills-grid">
              <div className="skill-tag">
                <img src={pythonIcon} alt="Python" />
                <span>Python</span>
              </div>
              <div className="skill-tag">
                <img src="https://img.icons8.com/color/48/typescript.png" alt="TypeScript" />
                <span>TypeScript</span>
              </div>
              <div className="skill-tag">
                <img src={jsIcon} alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="skill-tag">
                <img src={reactIcon} alt="React" />
                <span>React.js</span>
              </div>
              <div className="skill-tag">
                <img src={DjangoIcon} alt="Django" />
                <span>Django</span>
              </div>
              <div className="skill-tag">
                <img src={javaIcon} alt="Java" />
                <span>Java</span>
              </div>
              <div className="skill-tag">
                <img src="https://img.icons8.com/color/48/golang.png" alt="Go" />
                <span>Go</span>
              </div>
              <div className="skill-tag">
                <img src="https://img.icons8.com/color/48/amazon-web-services.png" alt="AWS" />
                <span>AWS</span>
              </div>
              <div className="skill-tag">
                <img src={MySQLIcon} alt="SQL" />
                <span>SQL</span>
              </div>
              <div className="skill-tag">
                <img src={gitIcon} alt="Git" />
                <span>Git</span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h4>Interests</h4>
            <div className="skills-grid">
              <div className="skill-tag" data-aos="fade-up">
                <span data-emoji="💰">Finance</span>
              </div>
              <div className="skill-tag" data-aos="fade-up" data-aos-delay="50">
                <span data-emoji="📈">Stocks</span>
              </div>
              <div className="skill-tag" data-aos="fade-up" data-aos-delay="100">
                <span data-emoji="🏋️">Lifting</span>
              </div>
              <div className="skill-tag" data-aos="fade-up" data-aos-delay="150">
                <span data-emoji="⛷️">Skiing</span>
              </div>
              <div className="skill-tag" data-aos="fade-up" data-aos-delay="200">
                <span data-emoji="⛳">Golf</span>
              </div>
              <div className="skill-tag" data-aos="fade-up" data-aos-delay="300">
                <span data-emoji="🔧">Full-Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;