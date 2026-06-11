import React from 'react';
import { experience } from '../data';
import './Experience.css';

export default function Experience() {
  return (
    <section className="section page-fade">
      <div className="section-inner experience-container">
        <div className="experience-header">
          <div className="section-label">Career</div>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="timeline">
          <div className="timeline-line" />
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-node" />
              <div className="timeline-content card">
                <div className="exp-info">
                  <div className="company-logo-avatar">
                    {exp.company.charAt(0)}
                  </div>
                  <div className="exp-title-group">
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="meta-icon">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {exp.period}
                  </span>
                  <span className="exp-location">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="meta-icon">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {exp.location}
                  </span>
                </div>
                
                {exp.highlights && (
                  <div className="exp-highlights">
                    {exp.highlights.map((hl, hlIndex) => (
                      <span key={hlIndex} className="highlight-tag">{hl}</span>
                    ))}
                  </div>
                )}

                <ul className="exp-points">
                  {exp.points.map((pt, ptIndex) => (
                    <li key={ptIndex}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
