import React from 'react';
import './projects.css';
import CSWorkloadImg from './assets/CSWorkload.png';
import stockSim from './assets/stockSim.png';
import htmlIcon from '../assets/html.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import javaIcon from '../assets/java.png';
import gitIcon from '../assets/git.png';
import flaskIcon from '../assets/flask.png';
import pythonIcon from '../assets/python.png';
import MySQLIcon from '../assets/MySQL.png';
import groupitoImg from './assets/Groupito.png';
import fantasyStockLeagueImg from './assets/FantasyStockLeague.png';

function Projects() {
  return (
    <div id="Projects">
      <header>
        <h1>Projects</h1>
      </header>
      <div className="projectContainer">
        <a href="https://github.com/MichaelAho1/stockSim" className="project-card">
          <img src={stockSim} alt="StockSim" className="project-image" />
          <h3 className="project-header">StockSim</h3>
          <div className="tech-used">
            <span>React.js</span>
            <img src={reactIcon} />
          </div>
          <div className="tech-used">
            <span>Django</span>
            <img src={pythonIcon} />
          </div>
          <p className="project-description">
            Accelerated stock market simulator: trade virtual portfolios in real-time, track performance, and compete using GBM-driven realistic prices.
          </p>
        </a>

        <a href="https://github.com/MichaelAho1/Grupito" className="project-card">
          <img src={groupitoImg} alt="Grupito Project" className="project-image" />
          <h3 className="project-header">Grupito</h3>
          <div className="tech-used">
            <span>React.js</span>
            <img src={reactIcon} />
          </div>
          <div className="tech-used">
            <span>JavaScript</span>
            <img src={jsIcon} />
          </div>

          <p className="project-description">
            Full-stack social learning platform for JMU Spanish classes that enables section-based feeds with posts, audio, images, interactive challenges, and instructor/student activity tracking.
          </p>
        </a>

        <a href="https://github.com/MichaelAho1/FantasyStockLeague" className="project-card">
          <img src={fantasyStockLeagueImg} alt="Fantasy Stock League Project" className="project-image" />
          <h3 className="project-header">Fantasy Stock League</h3>
          <div className="tech-used">
            <span>React.js</span>
            <img src={reactIcon} />
          </div>
          <div className="tech-used">
            <span>Django</span>
            <img src={pythonIcon} />
          </div>

          <p className="project-description">
            Multiplayer stock market game: manage $10K virtual portfolios, trade in real-time, and compete in 8-week leagues.
          </p>
        </a>

        <a href="https://github.com/MichaelAho1/CSWorkload" className="project-card">
          <img src={CSWorkloadImg} alt="CS Workload" className="project-image" />
          <h3 className="project-header">CS Workload</h3>
          <div className="tech-used">
            <span>JavaScript</span>
            <img src={jsIcon} />
          </div>
          <div className="tech-used">
            <span>HTML/CSS</span>
            <img src={htmlIcon} />
          </div>
          <p className="project-description">
            Browser-based CS graduation planner: generate prerequisite-aware, difficulty-balanced multi-semester schedules with exportable JSON and optional salary data.
          </p>
        </a>
      </div>
    </div>
  );
}

export default Projects;