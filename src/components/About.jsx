import React, { useState } from 'react';
import { 
  BookOpen, 
  Brain, 
  Target, 
  Compass, 
  Flame, 
  Award, 
  CheckCircle, 
  Clock, 
  Cpu, 
  Lightbulb,
  FileCode2,
  Atom
} from 'lucide-react';
import './About.css';

export default function About() {
  const [activeTab, setActiveTab] = useState('mindset');

  const pillars = [
    {
      id: 'mindset',
      title: 'Aspirant Mindset & Tenacity',
      icon: <Brain size={20} />,
      content: {
        headline: "Relentless Curiosity & First-Principles Problem Solving",
        description: "Preparing for IIT JEE isn't just about formulas; it's a rigorous mental crucible. I approach every problem in Physics and Mathematics from first principles—breaking down complex multi-concept scenarios into foundational laws of nature and mathematical logic.",
        bullets: [
          "Consistent 12-14 hour deep-work sessions with extreme focus.",
          "Error Notebook (Galti Register) system: Every mistake is an opportunity for analytical improvement.",
          "Mental stamina to tackle 6-hour intense mock exams under strict time constraints.",
          "High resilience: Embracing challenging questions from Irodov, Krotov, and Pathfinder."
        ]
      }
    },
    {
      id: 'vision',
      title: 'The IIT Engineering Vision',
      icon: <Target size={20} />,
      content: {
        headline: "Targeting Premier IITs for Computer Science & Engineering",
        description: "My ultimate goal is to study at India's premier engineering institutions—IIT Bombay, IIT Delhi, or IIT Madras. I aim to merge theoretical mathematical brilliance with computer science to build high-scale software, autonomous systems, and computational algorithms.",
        bullets: [
          "Primary Goal: All India Rank (AIR) under 500 in JEE Advanced.",
          "Target Disciplines: Computer Science and Engineering (CSE) / Artificial Intelligence / Electrical.",
          "Aspiration to lead cutting-edge tech startups and research initiatives in India.",
          "Belief in technology as the greatest lever to solve systemic human challenges."
        ]
      }
    },
    {
      id: 'tech',
      title: 'Technology & Coding Passion',
      icon: <Cpu size={20} />,
      content: {
        headline: "Bridging Pure Sciences with Modern Software Engineering",
        description: "While preparing for JEE, I nurture a strong parallel fascination with computer systems, algorithms, and web technologies. Understanding calculus directly aids in machine learning algorithms, and physics mechanics translates directly into physics engines and simulation software.",
        bullets: [
          "Proficient in C++ & Standard Template Library (STL) for algorithmic speed.",
          "Python for scientific calculations, numeric analysis, and automation.",
          "Modern Web Development: React, JavaScript, modern CSS architecture.",
          "Computational thinking: Viewing real-world problems through data structures and logic."
        ]
      }
    }
  ];

  const dailySchedule = [
    { time: "05:30 AM - 08:30 AM", subject: "Advanced Physics", focus: "Mechanics / Electrodynamics deep problem drills & theory review", icon: <Atom size={16} /> },
    { time: "09:30 AM - 01:00 PM", subject: "Higher Mathematics", focus: "Calculus, 3D Geometry, Complex Numbers & PYQ speed runs", icon: <Brain size={16} /> },
    { time: "02:30 PM - 05:30 PM", subject: "Chemistry Mastery", focus: "Organic Reaction Mechanisms, Chemical Kinetics & NCERT lines", icon: <Lightbulb size={16} /> },
    { time: "06:30 PM - 08:30 PM", subject: "Test Analysis & Revision", focus: "Mock test review, timing metrics, and concept reinforcement", icon: <CheckCircle size={16} /> },
    { time: "09:30 PM - 11:00 PM", subject: "Tech & Coding Lab", focus: "C++ DSA practice, Algorithm visualizers, and web projects", icon: <FileCode2 size={16} /> }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">MY BACKGROUND & ASPIRATION</span>
          <h2 className="section-title">About RaviShankar: The IIT Dream</h2>
          <p className="section-subtitle">
            An ambitious JEE Aspirant combining the discipline of India's toughest competitive exam 
            with a deep love for software engineering, algorithms, and technology.
          </p>
        </div>

        {/* Top Split: Photo & Narrative */}
        <div className="about-top-grid">
          {/* Left Column: Secondary Styled Photo */}
          <div className="about-visual-col">
            <div className="about-photo-card neumorphic-card">
              <div className="about-img-wrapper">
                <img 
                  src="/images/mukesh-casual.jpg" 
                  alt="RaviShankar - JEE Aspirant" 
                  className="about-secondary-photo"
                />
                <div className="about-img-overlay"></div>
              </div>
              <div className="about-photo-meta">
                <div className="meta-badge-tag">
                  <Flame size={15} className="flame-icon" />
                  <span>UNWAVERING FOCUS</span>
                </div>
                <h3 className="meta-title">RaviShankar</h3>
                <p className="meta-role">JEE Aspirant • Future IIT Engineer • Tech Builder</p>
                <div className="meta-stats-mini">
                  <div>
                    <strong>AIR &lt; 500</strong>
                    <span>Target Rank</span>
                  </div>
                  <div className="divider"></div>
                  <div>
                    <strong>100%</strong>
                    <span>Dedication</span>
                  </div>
                  <div className="divider"></div>
                  <div>
                    <strong>2026</strong>
                    <span>JEE D-Day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Tabs */}
          <div className="about-content-col">
            <div className="about-tabs-nav">
              {pillars.map((tab) => (
                <button
                  key={tab.id}
                  className={`about-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Body */}
            {pillars.map((tab) => {
              if (tab.id !== activeTab) return null;
              return (
                <div key={tab.id} className="about-tab-content neumorphic-card">
                  <h3 className="tab-headline">{tab.content.headline}</h3>
                  <p className="tab-description">{tab.content.description}</p>
                  
                  <ul className="tab-bullets-list">
                    {tab.content.bullets.map((bullet, idx) => (
                      <li key={idx} className="tab-bullet-item">
                        <CheckCircle size={18} className="bullet-check" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="about-quote-box">
                    <em>
                      "Engineering is not just a degree—it is the art of turning mathematical equations 
                      and physical laws into tangible solutions that change the world."
                    </em>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section: Aspirant Daily Routine & Energy */}
        <div className="about-schedule-wrapper">
          <div className="schedule-header">
            <div className="schedule-title-group">
              <Clock size={22} className="clock-icon" />
              <div>
                <h3 className="schedule-title">The Daily 14-Hour Discipline</h3>
                <p className="schedule-desc">A structured timetable balancing JEE rigor with tech exploration.</p>
              </div>
            </div>
            <span className="consistency-badge">Consistency &gt; Motivation</span>
          </div>

          <div className="schedule-grid">
            {dailySchedule.map((slot, index) => (
              <div key={index} className="schedule-card neumorphic-card">
                <div className="slot-time-row">
                  <span className="slot-time">{slot.time}</span>
                  <div className="slot-icon-badge">{slot.icon}</div>
                </div>
                <h4 className="slot-subject">{slot.subject}</h4>
                <p className="slot-focus">{slot.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
