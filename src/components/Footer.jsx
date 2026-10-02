import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="logo-avatar-badge small">
            <span>R</span>
          </div>
          <span className="brand-text">
            RAVISHANKAR<span className="brand-dot">.</span>
          </span>
        </div>

        <p className="footer-tagline">
          Bridging Pure Sciences, IIT JEE Rigor, and Modern Software Engineering.
        </p>

        {/* Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#domains">What I Do</a>
          <a href="#lab">Physics Lab</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Credits */}
        <div className="footer-bottom-row">
          <span className="footer-copy">
            © 2026 RaviShankar. All rights reserved. Dedicated JEE Aspirant & Future IITian.
          </span>

          <button 
            className="back-to-top-btn" 
            onClick={scrollToTop}
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
