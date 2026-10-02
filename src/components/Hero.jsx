import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Target, 
  Compass, 
  Cpu, 
  Award,
  ArrowRight,
  RefreshCw,
  Zap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from './SocialIcons';
import './Hero.css';

export default function Hero({ onOpenHireModal }) {
  const roles = [
    "JEE Aspirant (Target IIT)",
    "Future Software Engineer",
    "Physics & Math Solver",
    "C++ & Algorithm Explorer",
    "Computational Thinker"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);
  const [activePhoto, setActivePhoto] = useState('suit'); // 'suit' or 'casual'

  useEffect(() => {
    const currentWord = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentWord.length) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 45 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const socialLinks = [
    { name: 'GitHub', icon: <GithubIcon size={20} />, href: 'https://github.com', label: 'GitHub Profile' },
    { name: 'Instagram', icon: <InstagramIcon size={20} />, href: 'https://instagram.com', label: 'Instagram Profile' },
    { name: 'LinkedIn', icon: <LinkedinIcon size={20} />, href: 'https://linkedin.com', label: 'LinkedIn Profile' },
    { name: 'Twitter', icon: <TwitterIcon size={20} />, href: 'https://twitter.com', label: 'X / Twitter Profile' },
  ];

  const photoSrc = activePhoto === 'suit' 
    ? '/images/mukesh-suit.jpg' 
    : '/images/mukesh-casual.jpg';

  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        {/* Left Column: Bio & Introduction matching reference layout */}
        <div className="hero-content">
          <div className="hero-tag-badge">
            <Sparkles size={14} className="tag-sparkle" />
            <span>WELCOME TO MY DOMAIN</span>
          </div>

          <h1 className="hero-heading">
            Hi, I'm <span className="hero-name-highlight">RaviShankar</span>
          </h1>

          <div className="hero-role-display">
            <h2 className="hero-dynamic-role">
              {displayText}
              <span className="hero-cursor"></span>
            </h2>
          </div>

          <p className="hero-description">
            Dedicated JEE Aspirant aiming for premier Indian Institutes of Technology (IIT). 
            Deeply immersed in the analytical beauty of Higher Mathematics, Classical Mechanics, 
            and Chemical Kinetics — combined with an innate passion for C++, Data Structures, 
            and modern software technologies.
          </p>

          {/* Social Row ("FIND WITH ME" matching reference design) */}
          <div className="find-with-me-box">
            <span className="find-with-me-label">FIND WITH ME</span>
            <div className="social-buttons-grid">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-neumorphic-btn"
                  aria-label={item.label}
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Aspirant Key Milestones Cards */}
          <div className="hero-stats-row">
            <div className="stat-pill-card">
              <Target size={18} className="stat-icon red" />
              <div className="stat-pill-info">
                <span className="stat-pill-value">AIR &lt; 500</span>
                <span className="stat-pill-label">IIT JEE Target</span>
              </div>
            </div>

            <div className="stat-pill-card">
              <Cpu size={18} className="stat-icon cyan" />
              <div className="stat-pill-info">
                <span className="stat-pill-value">5,000+</span>
                <span className="stat-pill-label">PCM Problems Solved</span>
              </div>
            </div>

            <div className="stat-pill-card">
              <Award size={18} className="stat-icon gold" />
              <div className="stat-pill-info">
                <span className="stat-pill-value">Top IIT CSE</span>
                <span className="stat-pill-label">Dream Engineering Goal</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#lab" className="primary-cta-btn">
              <span>Try Physics Simulator</span>
              <ArrowRight size={17} />
            </a>
            <a href="#about" className="secondary-cta-btn">
              <span>Explore My Journey</span>
            </a>
          </div>
        </div>

        {/* Right Column: RaviShankar's Photo matching reference layout with bottom fade */}
        <div className="hero-visual-wrapper">
          <div className="hero-image-aura"></div>
          
          <div className="hero-image-frame">
            <img 
              src={photoSrc} 
              alt="RaviShankar - JEE Aspirant & Future IIT Engineer" 
              className="hero-main-photo" 
            />
            {/* Soft gradient bottom fade matching reference */}
            <div className="hero-bottom-fade"></div>

            {/* Floating Info Badges */}
            <div className="floating-badge badge-top-right">
              <Zap size={16} className="badge-icon-lightning" />
              <div>
                <strong>JEE Advanced 2026</strong>
                <span>Rigorous PCM Discipline</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <Cpu size={16} className="badge-icon-tech" />
              <div>
                <strong>Future IITian</strong>
                <span>Computer Science & Engineering</span>
              </div>
            </div>

            {/* Photo Switcher Pill */}
            <button 
              className="photo-toggle-pill"
              onClick={() => setActivePhoto(activePhoto === 'suit' ? 'casual' : 'suit')}
              title="Toggle portrait mode"
            >
              <RefreshCw size={13} className="spin-icon" />
              <span>{activePhoto === 'suit' ? 'Switch: Casual View' : 'Switch: Formal Suit'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
