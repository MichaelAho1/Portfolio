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
            <ul>
              <li>Developed full-stack features for an analytics platform using React, TypeScript, and Django, including a filtering tool that supports 300+ audience attributes, improving audience targeting for 1,500+ advertising campaigns</li>
              <li>Migrated 15 TypeScript end-to-end test suites from Cypress to RainforestQA, enabling parallel test execution, reducing total test runtime by 68% (from 25 to 8 minutes)</li>
              <li>Optimized attribute load speeds with React, using Redux caching to reduce redundant API requests</li>
              <li>Built a data validation system with Python and Django, resolving data handling errors for 75+ audience attributes</li>
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
            <p className="timeline-time">January 2024 - April 2024</p>
            <ul>
              <li>Built a client-facing website with JavaScript and CSS, integrating Google reCaptcha to reduce spam emails by 96%</li>
              <li>Developed an automation tool with Python, using OpenAI’s GPT-4 API to standardize inconsistent column headers and Pandas to merge audience data across multiple spreadsheets, automating 4 hours of manual work per week</li>
            </ul>
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
