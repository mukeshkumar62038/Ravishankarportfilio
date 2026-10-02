import React, { useState } from 'react';
import { X, MessageSquare, Mail, Copy, Check, Target, Sparkles, ArrowRight } from 'lucide-react';
import './HireModal.css';

export default function HireModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const email = "ravishankar.iit.aspirant@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = (topic) => {
    const text = encodeURIComponent(`Hi RaviShankar! I would like to connect with you regarding: ${topic}.`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container neumorphic-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-badge">
            <Sparkles size={14} />
            <span>LET'S CONNECT</span>
          </div>
          <h3 className="modal-title">Collaborate with RaviShankar</h3>
          <p className="modal-subtitle">
            Dedicated JEE Aspirant aiming for Top IITs with skills in C++, Python, 
            Computational Physics, and Algorithm Design.
          </p>
        </div>

        <div className="modal-reasons-list">
          <div 
            className="reason-card" 
            onClick={() => handleWhatsApp('Academic Problem Solving & JEE Discussion')}
          >
            <div className="reason-icon">📐</div>
            <div className="reason-info">
              <h4>Academic & Problem Discussion</h4>
              <p>Discuss challenging Physics & Math problems from Irodov & Advanced PYQs.</p>
            </div>
            <ArrowRight size={16} className="reason-arrow" />
          </div>

          <div 
            className="reason-card" 
            onClick={() => handleWhatsApp('Software & Tech Collaboration')}
          >
            <div className="reason-icon">💻</div>
            <div className="reason-info">
              <h4>Tech & Simulation Projects</h4>
              <p>Collaborate on C++, algorithmic development, simulations, or web apps.</p>
            </div>
            <ArrowRight size={16} className="reason-arrow" />
          </div>

          <div 
            className="reason-card" 
            onClick={() => handleWhatsApp('Mentorship & Study Exchange')}
          >
            <div className="reason-icon">🎯</div>
            <div className="reason-info">
              <h4>Study Strategy & Peer Motivation</h4>
              <p>Exchange mock test strategies, revision schedules, and focus routines.</p>
            </div>
            <ArrowRight size={16} className="reason-arrow" />
          </div>
        </div>

        <div className="modal-footer-box">
          <div className="email-copy-row">
            <Mail size={16} className="email-icon" />
            <span className="email-text">{email}</span>
            <button className="copy-action-btn" onClick={handleCopyEmail}>
              {copied ? <Check size={14} className="copied" /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <a 
            href="#contact" 
            className="modal-full-contact-btn"
            onClick={() => {
              onClose();
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Open Full Contact Form
          </a>
        </div>
      </div>
    </div>
  );
}
