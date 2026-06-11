import React, { useState, useEffect } from 'react';
import { roles, developerInfo, contactLinks } from '../data';
import './Home.css';

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // 3D Tilt & Drag Interaction State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Rotating roles title swap
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 300); // fade out transition duration
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const rotateX = ((yc - y) / yc) * 12; // max 12 degrees
    const rotateY = ((x - xc) / xc) * 12; // max 12 degrees
    setTilt({ x: rotateX, y: rotateY });

    if (isDragging) {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      const maxDrag = 40;
      const clampedX = Math.max(-maxDrag, Math.min(maxDrag, dx));
      const clampedY = Math.max(-maxDrag, Math.min(maxDrag, dy));
      setDragOffset({ x: clampedX, y: clampedY });
    }
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setDragOffset({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    // Only drag with left click and avoid dragging if clicking links/buttons
    if (e.button !== 0 || e.target.closest('a') || e.target.closest('button')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragOffset({ x: 0, y: 0 });
  };

  const cardStyle = {
    transform: `perspective(1000px) translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: isDragging ? 'grabbing' : 'grab'
  };

  return (
    <div className="home-page page-fade">
      {/* Subtle grid pattern overlay */}
      <div className="premium-grid-pattern"></div>

      <div className="home-container">
        {/* LEFT COLUMN: Premium Floating Profile ID Card */}
        <div className="home-left">
          <div 
            className={`profile-id-card glass ${isDragging ? 'dragging' : ''}`}
            style={cardStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <div className="id-card-glow"></div>
            
            {/* Parallax elements */}
            <div className="id-photo-wrapper">
              <img src={process.env.PUBLIC_URL + '/bhanu.png'} alt={developerInfo.name} className="id-photo" loading="lazy" />
            </div>

            <h2 className="id-name">{developerInfo.name}</h2>
            
            <div className="id-role-container">
              <span className="id-role-label">Roles</span>
              <p className={`id-role-title ${visible ? 'fade-in' : ''}`}>
                {roles[roleIndex]}
              </p>
            </div>

            {/* Social Links inside the card */}
            <div className="id-social-bar">
              <a 
                href={`mailto:${contactLinks.email}`} 
                className="social-btn gmail-btn" 
                data-tooltip="Email Me"
                aria-label="Email Me"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a 
                href={`tel:${contactLinks.phone.replace(/\s+/g, '')}`} 
                className="social-btn phone-btn" 
                data-tooltip="Call Me"
                aria-label="Call Me"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <a 
                href={contactLinks.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn github-btn" 
                data-tooltip="GitHub"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com/bhanu_yadav3105" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn instagram-btn" 
                data-tooltip="Instagram"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Greetings, bio */}
        <div className="home-right">
          <div className="hero-greetings">Namaste</div>
          <h1 className="hero-name">{developerInfo.name}</h1>

          <p className="hero-introduction">
            I specialize in Platform Engineering, ServiceNow Development, Enterprise Integrations, REST APIs, Workflow Automation, and Java Backend Development. My focus is building scalable solutions that connect systems, streamline business operations, and deliver reliable digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
