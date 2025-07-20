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
            <p className="timeline-time">May 2025 - Present</p>
            <ul>
              <li>Building React & Django features focusing on improving UI capabilities for ScreenSolve, an ad analytics platform.</li>
            </ul>
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
            <p className="timeline-time">January 2024 - March 2024</p>
            <ul>
              <li>Developed an automation tool with Python, using OpenAI’s GPT-4 API to standardize inconsistent headers and
                merge audience data from multiple spreadsheets, automating 4 hours of manual work per week</li>
              <li>Built a client-facing web application using JavaScript & CSS</li>
            </ul>
            <div className="timeline-tech">
            <span>Python</span>
            <span>JavaScript</span>
            </div>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-content">
            <h3>James Madison University | Computer Science</h3>
            <p className="timeline-time">August 2023 - Present</p>
            <ul>
              <li>Junior Computer Science student at James Madison University with a focus on full-stack software engineering.                 
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
