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
        <h1>Coding Projects</h1>
      </header>
      <div className="projectContainer">
        <div className="project-card">
          <img src={stockSim} alt="StockSim" width="100px" height="100px" />
          <h3 className="project-header">StockSim (In Progress)</h3>
          <div className="tech-used">
            <span>React</span>
            <img src={reactIcon} />
          </div>
          <div className="tech-used">
            <span>Python</span>
            <img src={pythonIcon} />
          </div>
          <div className="tech-used">
            <span>MySQL</span>
            <img src={MySQLIcon} />
          </div>
          <div className="tech-used">
            <span>Git</span>
            <img src={gitIcon} />
          </div>
          <p className="project-description">
            A Full-stack simulator featuring dynamic prices, volatility, charts, and a compressed timeframe.
          </p>
          <div>
            <a href="https://github.com/MichaelAho1/stockSim" className="btn">
              View Code
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src={klowBitesImg} alt="KLowBites Project" width="100px" height="100px" />
          <h3 className="project-header">KLowBites</h3>
          <div className="tech-used">
            <span>Java</span>
            <img src={javaIcon} />
          </div>
          <div className="tech-used">
            <span>Git</span>
            <img src={gitIcon} />
          </div>
          <div className="tech-used">
            <span>ScrumBoard</span>
          </div>
          <p className="project-description">
            An interactive digital cookbook that allows users to manage and share recipes.
          </p>
          <div>
            <a href="https://github.com/MichaelAho1/KLowBites1" className="btn">
              View Code
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={morningFlowImg} alt="DailyRise Project" width="200px" height="200px" />
          <h3 className="project-header">DailyRise</h3>
          <div className="tech-used">
            <span>React</span>
            <img src={reactIcon} />
          </div>
          <div className="tech-used">
            <span>JavaScript</span>
            <img src={jsIcon} />
          </div>
          <p className="project-description">
            A productivity app delivering consolidated updates like weather, Bible verses, and stock info.
          </p>
          <div>
            <a href="https://github.com/MichaelAho1/DailyRise" className="btn">
              View Code
            </a>
            <a href="https://michaelaho1.github.io/DailyRise/" className="btn">
              View Site
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={CSWorkloadImg} alt="CS Workload" width="100px" height="100px" />
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
            Website to help JMU students create a graduation plan and find CS electives that correlate to there career plans.
          </p>
          <div>
            <a href="https://w3stu.cs.jmu.edu/ahoma/cs343/project/index.html" className="btn">
              View Site
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={sortResearchImg} alt="Sorting Research Project" width="100px" height="100px" />
          <h3 className="project-header">Improved Sorting</h3>
          <div className="tech-used">
            <span>Java</span>
            <img src={javaIcon} />
          </div>
          <p className="project-description">
            Utilized existing sorting algorithms to create 
            improved versions of quick sort and merge sort.
          </p>
          <div>
          </div>
        </div>

        <div className="project-card">
          <img src={huffmanImg} alt="Huffman Coding Project" width="100px" height="100px" />
          <h3 className="project-header">Huffman Coding</h3>
          <div className="tech-used">
            <span>Java</span>
            <img src={javaIcon} />
          </div>
          <p className="project-description">
            Implemented file encoding and decoding with Huffman compression techniques.
          </p>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;