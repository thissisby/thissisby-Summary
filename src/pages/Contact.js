import React, { useState } from 'react';
import { contactLinks } from '../data';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contactLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section page-fade contact-wrapper-section">
      {/* Premium Grid pattern overlay */}
      <div className="premium-grid-pattern"></div>

      {/* Floating Animated Colorful Blobs */}
      <div className="contact-blob1"></div>
      <div className="contact-blob2"></div>
      <div className="contact-blob3"></div>

      <div className="section-inner contact-container">
        <div className="contact-header">
          <span className="section-label">Connect</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-content card">
          <h3 className="contact-prompt">Let's build something together.</h3>
          <p className="contact-sub">
            Currently open to full-time roles in platform engineering, system architectures, and Java/Spring Boot development.
          </p>

          <div className="email-copy-box">
            <span className="email-text">{contactLinks.email}</span>
            <div className="copy-action-wrapper">
              <button className="btn-copy" onClick={handleCopy} aria-label="Copy email to clipboard">
                Copy
              </button>
              {copied && <span className="copied-toast">Copied ✓</span>}
            </div>
          </div>

          <div className="contact-grid">
            <a href={contactLinks.linkedinUrl} target="_blank" rel="noreferrer" className="contact-link-btn linkedin-btn">
              💼 LinkedIn ↗
            </a>
            <a href={contactLinks.githubUrl} target="_blank" rel="noreferrer" className="contact-link-btn github-btn">
              🐙 GitHub ↗
            </a>
            <a href={`tel:${contactLinks.phone.replace(/\s+/g, '')}`} className="contact-link-btn phone-btn">
              📞 {contactLinks.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
