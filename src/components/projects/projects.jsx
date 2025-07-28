import React from 'react';
import './projects.css';
import klowBitesImg from './assets/KLowBites-img.png';
import CSWorkloadImg from './assets/CSWorkload.png';
import morningFlowImg from './assets/MorningFlow-img.png';
import sortResearchImg from './assets/SortReasearch-img.png';
import stockSim from './assets/stockSim.png';
import huffmanImg from './assets/huffmanZipping-img.png';
import htmlIcon from '../assets/html.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import javaIcon from '../assets/java.png';
import gitIcon from '../assets/git.png';
import flaskIcon from '../assets/flask.png';
import pythonIcon from '../assets/python.png';
import MySQLIcon from '../assets/MySQL.png';

function Projects() {
  return (
    <div id="Projects">
      <header>
        <h1>Passion Projects</h1>
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
            An accelerated stock market simulator that compresses a full trading day into 5 minutes
          </p>
        </a>

        <div className="project-card">
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
            An acedimic planning tool built to help JMU students create a customized graduation plan and find CS electives that correlate to there career plans.
          </p>
        </div>

        <a href="https://github.com/MichaelAho1/DailyRise" className="project-card">
          <img src={morningFlowImg} alt="DailyRise Project" className="project-image" />
          <h3 className="project-header">DailyRise</h3>
          <div className="tech-used">
            <span>React.js</span>
            <img src={reactIcon} />
          </div>
          <p className="project-description">
            A morning dashboard application that centralized important morning updates.
          </p>
        </a>
      </div>
      <header>
        <h1>School Projects</h1>
      </header>
      <div className="projectContainer">
        <a href="https://github.com/MichaelAho1/KLowBites1" className="project-card dark-text">
          <img src={klowBitesImg} alt="KLowBites Project" className="project-image" />
          <h3 className="project-header">KLowBites</h3>
          <div className="tech-used">
            <span>Java</span>
            <img src={javaIcon} />
          </div>
          <div className="tech-used">
            <span>Git</span>
            <img src={gitIcon} />
          </div>
          <p className="project-description">
            An interactive digital cookbook that allows users to manage and share recipes.
          </p>
        </a>

        <div className="project-card dark-text">
          <img src={sortResearchImg} alt="Sorting Research Project" className="project-image" />
          <h3 className="project-header">Improved Sorting</h3>
          <div className="tech-used">
            <span>Java</span>
            <img src={javaIcon} />
          </div>
          <p className="project-description">
            Utilized existing sorting algorithms to create 
            improved versions of quick sort and merge sort.
          </p>
        </div>

        <div className="project-card dark-text">
          <img src={huffmanImg} alt="Huffman Coding Project" className="project-image" />
          <h3 className="project-header">Huffman Coding</h3>
          <div className="tech-used">
            <span>Java</span>
            <img src={javaIcon} />
          </div>
          <p className="project-description">
            Implemented file encoding and decoding with Huffman compression techniques.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;