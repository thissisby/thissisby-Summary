import React from 'react';
import { skills } from '../data';
import './Skills.css';

export default function Skills() {
  return (
    <section className="section page-fade">
      <div className="section-inner skills-container">
        <div className="skills-header">
          <div className="section-label">Toolkit</div>
          <h2 className="section-title">Skills & Proficiencies</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, list], index) => (
            <div key={index} className="skills-card card">
              <h3 className="category-title">{category}</h3>
              <div className="tags-container">
                {list.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
