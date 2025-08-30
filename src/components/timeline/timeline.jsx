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
            <h3>Cross Screen Media | Software Engineering Intern</h3>
            <p className="timeline-time">May 2025 - August 2025</p>
            <div className="timeline-tech">
              <span>React.js</span>
              <span>TypeScript</span>
              <span>Django</span>
              <span>Python</span>
            </div>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-content">
            <h3>LandMarksCM | Web Development Intern</h3>
            <p className="timeline-time">January 2024 - April 2024</p>
            <div className="timeline-tech">
            <span>Python</span>
            <span>JavaScript</span>
            </div>
          </div>
        </article>
      </div>
    </section>
    </>
  );
}

export default Timeline;
