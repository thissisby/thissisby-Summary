import React from 'react';
import { education } from '../data';
import './Education.css';

export default function Education() {
  return (
    <section className="section page-fade">
      <div className="section-inner education-container">
        <div className="education-header">
          <div className="section-label">Background</div>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="edu-list">
          {education.map((edu, index) => (
            <div key={index} className="edu-card card">
              <div className="edu-icon-box">{edu.icon}</div>
              <div className="edu-details">
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-school">{edu.school}</p>
                <span className="edu-year">{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
