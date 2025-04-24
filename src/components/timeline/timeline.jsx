import React from 'react';
import './timeline.css';

function Timeline() {
  return (
    <>
    <header>
      <h1>Work Experience</h1>
    </header>
    <section className="timeline-container">
      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-content">
            <h3>Cross Screen Media | Software Engineer Intern</h3>
            <p className="timeline-time">May 2025 - Present</p>
            <ul>
              <li>
                Building and managing full-stack web applications.
              </li>
            </ul>
            <div className="timeline-tech">
              <span>Python/DJango</span>
              <span>React.js</span>
              <span>JavaScript</span>
            </div>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-content">
            <h3>Freelance Developer</h3>
            <p className="timeline-time">July 2024 - Present</p>
            <ul>
              <li>Coding side projects to learn new technologies and gain experience.</li>
            </ul>
            <div className="timeline-tech">
              <span>Python/DJango</span>
              <span>React</span>
              <span>Git</span>
              <span>Figma</span>
              <span>MySQL</span>
            </div>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-content">
            <h3>LandMarksCM | Web Development Intern</h3>
            <p className="timeline-time">January 2024 - March 2024</p>
            <ul>
              <li>Designed and developed LandmarksCM website.</li>
              <li>Assisted the company in adopting AI for repetitive tasks.</li>
            </ul>
            <div className="timeline-tech">
            <span>WordPress</span>
            <span>JavaScript</span>
            </div>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-content">
            <h3>James Madison University | Computer Science</h3>
            <p className="timeline-time">August 2023 - Present</p>
            <ul>
              <li>Computer Science student at James Madison University focusing on full-stack software engineering.
            </li>
            </ul>
            <div className="timeline-tech">
              <span>Java</span>
              <span>Python</span>
              <span>JavaScript</span>
              <span>HTML/CSS</span>
              <span>C</span>
              <span>Jira/Agile</span>
              <span>Git</span>
            </div>
          </div>
        </article>
      </div>
    </section>
    </>
  );
}

export default Timeline;
