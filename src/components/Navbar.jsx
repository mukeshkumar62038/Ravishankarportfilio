import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenHireModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'domains', 'lab', 'roadmap', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SKILL', href: '#skills', id: 'skills' },
    { label: 'WHAT I DO', href: '#domains', id: 'domains' },
    { label: 'LAB & SIM', href: '#lab', id: 'lab' },
    { label: 'ROADMAP', href: '#roadmap', id: 'roadmap' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo matching reference */}
        <a href="#home" className="brand-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <div className="logo-avatar-badge">
            <span>R</span>
          </div>
          <span className="brand-text">
            RAVISHANKAR<span className="brand-dot">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                  {activeSection === link.id && <span className="active-dot"></span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Action CTA Button matching reference */}
        <div className="header-actions">
          <button
            className="hire-me-btn"
            id="hire-me-nav-btn"
            onClick={onOpenHireModal}
            title="Connect with RaviShankar"
          >
            <span>HIRE ME</span>
            <ArrowUpRight size={17} className="hire-arrow" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.id} className="mobile-nav-item">
              <a
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-nav-item mobile-cta-item">
            <button
              className="hire-me-btn mobile-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHireModal();
              }}
            >
              <span>CONNECT / HIRE ME</span>
              <ArrowUpRight size={18} />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
