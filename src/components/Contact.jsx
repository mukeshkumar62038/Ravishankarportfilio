import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from './SocialIcons';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your Name, Email, and Message.");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ff014f', '#00d2ff', '#00f298', '#ffffff']
        });
      } catch (err) {
        // fallback
      }
    }, 1000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi RaviShankar! I came across your portfolio.\nName: ${formData.name || 'Visitor'}\nSubject: ${formData.subject || 'Hello'}\nMessage: ${formData.message || 'Connecting with you!'}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">CONNECT & COLLABORATE</span>
          <h2 className="section-title">Contact With Me</h2>
          <p className="section-subtitle">
            Have questions about JEE preparation, algorithmic projects, or technical collaboration? 
            Reach out directly or send a message below.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: RaviShankar's Contact Card matching reference style */}
          <div className="contact-info-card neumorphic-card">
            <div className="contact-img-frame">
              <img 
                src="/images/mukesh-suit.jpg" 
                alt="RaviShankar - Contact" 
                className="contact-portrait-img" 
              />
              <div className="contact-img-gradient"></div>
            </div>

            <div className="contact-info-content">
              <h3 className="contact-name">RaviShankar</h3>
              <p className="contact-designation">JEE Advanced Aspirant & Tech Explorer</p>
              
              <p className="contact-bio-note">
                I am actively preparing for IIT JEE and passionate about developing algorithms, 
                computational simulations, and modern software systems. Feel free to connect!
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-row">
                  <Mail size={18} className="detail-icon" />
                  <div>
                    <span className="detail-label">Email:</span>
                    <a href="mailto:ravishankar.iit.aspirant@gmail.com" className="detail-value">
                      ravishankar.iit.aspirant@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <Phone size={18} className="detail-icon" />
                  <div>
                    <span className="detail-label">Phone / WhatsApp:</span>
                    <span className="detail-value">+91 (India) • Available for Discussion</span>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <MapPin size={18} className="detail-icon" />
                  <div>
                    <span className="detail-label">Current Location:</span>
                    <span className="detail-value">India</span>
                  </div>
                </div>
              </div>

              {/* Social handles matching reference */}
              <div className="contact-social-section">
                <span className="contact-social-label">FIND WITH ME</span>
                <div className="contact-social-icons">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="social-neumorphic-btn mini" title="GitHub">
                    <GithubIcon size={18} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-neumorphic-btn mini" title="LinkedIn">
                    <LinkedinIcon size={18} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-neumorphic-btn mini" title="Instagram">
                    <InstagramIcon size={18} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-neumorphic-btn mini" title="Twitter / X">
                    <TwitterIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card neumorphic-card">
            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon-box">
                  <CheckCircle size={54} className="success-check" />
                </div>
                <h3 className="success-title">Message Sent Successfully!</h3>
                <p className="success-msg">
                  Thank you for reaching out, <strong>{formData.name}</strong>. RaviShankar will get back to you shortly!
                </p>

                <div className="success-actions">
                  <button 
                    className="whatsapp-direct-btn"
                    onClick={handleWhatsAppDirect}
                  >
                    <MessageSquare size={17} />
                    <span>Also Send via WhatsApp</span>
                  </button>
                  <button 
                    className="send-another-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
                    }}
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-body">
                <div className="form-row-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">YOUR NAME *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">PHONE NUMBER</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="JEE Guidance / Tech Project / Collaboration"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">YOUR MESSAGE *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your thoughts, questions, or message for RaviShankar..."
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="form-submit-btn"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}</span>
                  <ArrowUpRight size={18} className="submit-arrow" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
