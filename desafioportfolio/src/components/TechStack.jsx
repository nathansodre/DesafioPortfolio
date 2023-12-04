import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaVuejs,
} from "react-icons/fa";
import "../App.css";
import { SiCsharp } from "react-icons/si";

const TechStack = () => {
  return (
    <section className="tech-stack-section">
      <h2>Tech Stack</h2>
      <div className="tech-stack-container">
        <div className="tech-stack-item">
          <FaReact className="tech-stack-icon" />
          <span>React.js</span>
        </div>
        <div className="tech-stack-item">
          <FaNodeJs className="tech-stack-icon" />
          <span>Node.js</span>
        </div>
        <div className="tech-stack-item">
          <FaDatabase className="tech-stack-icon" />
          <span>MySQL</span>
        </div>
        <div className="tech-stack-item">
          <FaVuejs className="tech-stack-icon" />
          <span>Vue.js</span>
        </div>
        <div className="tech-stack-item">
          <SiCsharp className="tech-stack-icon" />
          <span>C#</span>
        </div>
        <div className="tech-stack-item">
          <FaDatabase className="tech-stack-icon" />
          <span>MongoDB</span>
        </div>
        <div className="tech-stack-item">
          <FaHtml5 className="tech-stack-icon" />
          <span>HTML5</span>
        </div>
        <div className="tech-stack-item">
          <FaCss3Alt className="tech-stack-icon" />
          <span>CSS3</span>
        </div>
        <div className="tech-stack-item">
          <FaJs className="tech-stack-icon" />
          <span>Javascript</span>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
