import React from 'react';
import './profile.css';
import headshot from '../assets/headshot.jpeg';
import htmlIcon from '../assets/html.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import pythonIcon from '../assets/python.png';
import javaIcon from '../assets/java.png';
import cIcon from '../assets/c.png';
import wordpressIcon from '../assets/wordpress.png';
import gitIcon from '../assets/git.png';
import flaskIcon from '../assets/flask.png';
import mongoDBIcon from '../assets/mongoDB.png';
import MySQLIcon from '../assets/MySQL.png';

function Profile() {
  return (
    <div className="contact">
      <div className="profile-container">
        <div className="profile-left">
          <img
            id="headshot"
            src={headshot}
            alt="Michael Aho"
          />
          <h1 id="name">Michael Aho</h1>
          <label id="description">
            CS @ JMU<br />
            Full-stack Developer<br />
            Washington D.C. Area
          </label>
          <p>
            I'm a Computer Science student at JMU who enjoys building web apps 
            and working with real data. From a stock market simulator to a productivity app, 
            I like creating projects that are both useful and fun. Feel free to check out my work.
          </p>
        </div>
        
        <div className="profile-right">
          <div className="skills-section">
            <h4>Technologies</h4>
            <div className="skills-grid">
              <div className="skill-tag">
                <img src={htmlIcon} alt="HTML/CSS" />
                <span>HTML/CSS</span>
              </div>
              <div className="skill-tag">
                <img src={jsIcon} alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="skill-tag">
                <img src={reactIcon} alt="React" />
                <span>React</span>
              </div>
              <div className="skill-tag">
                <img src={pythonIcon} alt="Python" />
                <span>Python</span>
              </div>
              <div className="skill-tag">
                <img src={javaIcon} alt="Java" />
                <span>Java</span>
              </div>
              <div className="skill-tag">
                <img src={cIcon} alt="C" />
                <span>C</span>
              </div>
              <div className="skill-tag">
                <img src={mongoDBIcon} alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="skill-tag">
                <img src={flaskIcon} alt="Flask" />
                <span>Flask</span>
              </div>
              <div className="skill-tag">
                <img src={wordpressIcon} alt="WordPress" />
                <span>WordPress</span>
              </div>
              <div className="skill-tag">
                <img src={gitIcon} alt="Git" />
                <span>Git</span>
              </div>
              <div className="skill-tag">
                <img src={MySQLIcon} alt="MySQL" />
                <span>MySQL</span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h4>Interests</h4>
            <div className="skills-grid">
              <div className="skill-tag">
                <span>🏋️ Lifting</span>
              </div>
              <div className="skill-tag">
                <span>⛷️ Skiing</span>
              </div>
              <div className="skill-tag">
                <span>📈 Stocks</span>
              </div>
              <div className="skill-tag">
                <span>⛳ Golf</span>
              </div>
              <div className="skill-tag">
                <span>🎨 UI/UX</span>
              </div>
              <div className="skill-tag">
                <span>🔧 Full-Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;