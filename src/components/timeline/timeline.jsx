import React from 'react';
import './timeline.css';

const items = [
  {
    company: "Capital One",
    role: "Software Engineer Intern",
    time: "June 2026 – August 2026",
    description: "Set to work on backend tooling and infrastructure for Eno, Capital One's AI assistant for card customers.",
    tech: ["Python", "TypeScript", "AWS"],
  },
  {
    company: "ILS",
    role: "Software Engineer",
    time: "December 2025 – Present",
    description: "Backend work on an enterprise search platform, a search engine for enterprise data.",
    tech: ["Elasticsearch", "Go", "Elastic Open Crawler"],
  },
  {
    company: "Cross Screen Media",
    role: "Software Engineer Intern",
    time: "May 2025 – August 2025",
    description: "Full-Stack work on the ScreensolveV2 project, an analytics platform for advertisers.",
    tech: ["Python", "TypeScript", "Django", "React.js"],
  },
  {
    company: "LandMarksCM",
    role: "Web Development Intern",
    time: "January 2024 – April 2024",
    description: "Scripting/AI Automation work on audience data processing and spreadsheet workflows. Front-End work on the company website.",
    tech: ["Python", "JavaScript"],
  },
];

function Timeline() {
  return (
    <>
      <header>
        <h1>Work Experience</h1>
      </header>
      <section className="timeline-container">
        <div className="timeline">
          {items.map((item, i) => (
            <article key={i} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-title-group">
                    <h3 className="timeline-company">{item.company}</h3>
                    <span className="timeline-role">{item.role}</span>
                  </div>
                  <span className="timeline-badge">{item.time}</span>
                </div>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-tech">
                  {item.tech.map((t, j) => <span key={j}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Timeline;
