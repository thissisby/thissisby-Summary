import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Contact from './pages/Contact';
import { contactLinks } from './data';

export default function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [chatOpen, setChatOpen] = useState(false);

  // Auto-open chat after 2 seconds on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setChatOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/':
      case '#/home':
      case '#/about':
        // Both '/' and '/about' are handled by the merged Home landing page
        return <Home route={route} />;
      case '#/experience':
        return <Experience />;
      case '#/projects':
        return <Projects />;
      case '#/skills':
        return <Skills />;
      case '#/education':
        return <Education />;
      case '#/contact':
        return <Contact />;
      default:
        return <Home route={route} />;
    }
  };

  return (
    <div className="app">
      <Navbar currentRoute={route} />
      <main style={{ paddingTop: '80px' }}>
        {renderPage()}
      </main>

      {/* Global Premium Chatbot Widget */}
      <div className={`chatbot-widget ${chatOpen ? 'open' : ''}`}>
        {chatOpen ? (
          <div className="chat-window glass">
            <div className="chat-header">
              <div className="chat-user-info">
                <div className="chat-avatar-wrapper">
                  <img src="/bhanu.png" alt="Bhanu Yadav" className="chat-avatar" />
                  <span className="online-indicator"></span>
                </div>
                <div className="chat-title-group">
                  <span className="chat-bot-name">Bhanu Yadav</span>
                  <span className="chat-bot-subtitle">Online Assistant</span>
                </div>
              </div>
              <button className="chat-close-btn" onClick={() => setChatOpen(false)} aria-label="Close Chat">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="chat-body">
              <div className="chat-message-bubble bot">
                <p>Hello! How may I help you today?</p>
              </div>
              
              <div className="chat-options-group">
                <a href={`mailto:${contactLinks.email}`} className="chat-option-btn email-opt">
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opt-icon">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email Me
                </a>
                <a href={`tel:${contactLinks.phone.replace(/\s+/g, '')}`} className="chat-option-btn phone-opt">
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opt-icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call Me Now
                </a>
              </div>
            </div>
          </div>
        ) : (
          <button className="chat-trigger-bubble glass" onClick={() => setChatOpen(true)} aria-label="Open Chat Assistant">
            <span className="online-indicator active"></span>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="chat-icon">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
