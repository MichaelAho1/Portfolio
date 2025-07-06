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
              <li>Developing full-stack web applications using React.js, Django, and Python.</li>
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
              <li>Developed and deployed a client-facing web application using JavaScript, HTML, and CSS.</li>
              <li>Integrated Google reCaptcha with JavaScript, reducing bot submissions and spam emails by 96%.</li>
              <li>Automated repetitive data entry tasks using Google’s Gemini API and Python scripting.</li>
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
              <li>Junior Computer Science student at James Madison University with a strong focus on full-stack software engineering.                 
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
