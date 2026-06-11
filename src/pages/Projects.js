import React from 'react';
import { projects } from '../data';
import './Projects.css';

export default function Projects() {
  return (
    <section className="section page-fade">
      <div className="section-inner projects-container">
        <div className="projects-header">
          <div className="section-label">Work</div>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="proj-grid">
          {projects.map((proj, index) => (
            <div key={index} className="proj-card card">
              <div className="proj-card-header">
                <div className="proj-icon-box">{proj.icon}</div>
                <h3 className="proj-title">{proj.title}</h3>
              </div>
              <p className="proj-desc">{proj.desc}</p>
              <div className="proj-role-info">
                <strong>Role:</strong> {proj.role}
              </div>
              <div className="proj-tags">
                {proj.tech.map((t, techIndex) => (
                  <span key={techIndex} className="tag">{t}</span>
                ))}
              </div>
              {proj.link.startsWith('http') ? (
                <a href={proj.link} target="_blank" rel="noreferrer" className="btn-link">
                  View Project ↗
                </a>
              ) : (
                <a href={proj.link} className="btn-link">
                  Request Info ✉️
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
