import React from 'react';
import './timeline.css';

const items = [
  {
    company: "ILS",
    role: "Software Engineer",
    time: "December 2025 – May 2026, August 2026 – Present",
    highlights: [
      "Architected a distributed Go and Elasticsearch backend for an enterprise search platform with scalable ingestion pipelines, enabling clients to search 1M+ document datasets with sub-second latency.",
      "Optimized Elasticsearch ingestion via Bulk API batching, achieving a 17x throughput gain (866 to 15,000+ docs/sec).",
      "Built Go REST APIs for bulk CSV ingestion and asynchronous crawls, enabling up to 500 crawl creations per request.",
    ],
    tech: ["Go", "Elasticsearch", "Elastic Open Crawler"],
  },
  {
    company: "Capital One",
    role: "Software Engineer Intern",
    time: "June 2026 – August 2026",
    highlights: [
      "Developed the transactions AWS Lambda service powering Eno, Capital One's AI assistant serving 5M+ customers.",
      "Migrated payments MCP tooling across 5 repos to TypeScript, removing Python dependency conflicts for 3 teams.",
      "Automated Lambda deployment rollbacks using Integrity and CodeDeploy canaries, cutting MTTR to 5 minutes.",
      "Built a NPI/PII masking layer across 6 lambdas to redact sensitive financial identifiers, screening 180K logs/week.",
    ],
    tech: ["Python", "TypeScript", "AWS"],
  },
  {
    company: "Cross Screen Media",
    role: "Software Engineer Intern",
    time: "May 2025 – August 2025",
    highlights: [
      "Developed full-stack features for ScreenSolveV2 using React/TypeScript and Django/Python, including a filtering tool that supports 300+ attributes across 1,500+ ad campaigns.",
      "Migrated 15 TypeScript end-to-end test suites from Cypress to RainforestQA, reducing total test runtime by 68% (25 to 8 minutes).",
      "Engineered a Python/SQL data pipeline, eliminating data handling errors across 75+ audience attributes.",
    ],
    tech: ["Python", "TypeScript", "Django", "React.js"],
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
                <ul className="timeline-highlights">
                  {item.highlights.map((highlight, j) => (
                    <li key={j}>{highlight}</li>
                  ))}
                </ul>
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
