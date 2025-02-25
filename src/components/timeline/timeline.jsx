import React from 'react';
import './timeline.css';

function Timeline() {
  return (
    <section className="timeline-container">
      <div className="timeline">

        <article className="timeline-item">
          <div className="timeline-content">
            <h3>Side Project Programmer</h3>
            <p className="timeline-time">July 2024 - Present</p>
            <p className="timeline-description">
              Coding side projects to further my software development skills.
            </p>
            <ul>
              <li>Leading the development of StockSim, a full-stack Stock Market simulator.</li>
              <li>Developed MorningFlow to reduce the amount of time it takes to get morning updates.</li>
              <li>Developed a stock market game to create a risk free and fun way to start learning about the market.</li>
              <li>Developed this portfolio in React.js.</li>
            </ul>
            <div className="timeline-tech">
              <span>Python/DJango</span>
              <span>React.js</span>
              <span>Git</span>
              <span>Figma</span>
              <span>MySQL</span>
            </div>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-content">
            <h3>Student at James Madison</h3>
            <p className="timeline-time">Aug 2023 - Present</p>
            <p className="timeline-description">
              Computer Science student focusing on software development.
            </p>
            <ul>
              <li>Collaborated with other students to create a digital cookbook application.</li>
              <li>Competitor in the JMU Cyber Defense Club.</li>
              <li>Built various school projects in JavaScript, Java, Python, and C.</li>
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

        <article className="timeline-item">
          <div className="timeline-content">
            <h3>Outlier AI | AI Prompt Engineer Intern</h3>
            <p className="timeline-time">Dec 2024 - Feb 2025</p>
            <ul>
              <li>
                Developed Python scripts to improve AI image recognition capabilities, focusing on improving coding-related image analysis.
              </li>
            </ul>
            <div className="timeline-tech">
              <span>Python</span>
              <span>AI/ML</span>
              <span>Image Processing</span>
            </div>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-content">
            <h3>LandMarksCM | Web Development Intern</h3>
            <p className="timeline-time">Jan 2024 - Mar 2025</p>
            <ul>
              <li>Designed and managed a responsive company website using WordPress and JavaScript.</li>
              <li>Implemented a captcha system that eliminated 96% of spam emails received by the company, significantly reducing manual email filtering.</li>
              <li>Assisted the company in adopting AI to automate repetitive tasks and improve efficiency.</li>
            </ul>
            <div className="timeline-tech">
            <span>WordPress</span>
            <span>JavaScript</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Timeline;
