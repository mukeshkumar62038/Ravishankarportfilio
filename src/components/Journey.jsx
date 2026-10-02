import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Target, 
  GraduationCap, 
  Rocket, 
  Flame,
  Award
} from 'lucide-react';
import './Journey.css';

export default function Journey() {
  const milestones = [
    {
      year: "2023",
      stage: "Foundation & Class 10 Distinction",
      status: "COMPLETED",
      tag: "ACADEMIC BASE",
      icon: <Award size={20} />,
      points: [
        "Achieved 95%+ in Class 10th Board examinations with distinction in Science & Mathematics.",
        "Participated in regional Science & Math Olympiads, sharpening analytical reflexes.",
        "Discovered passion for computer logic, writing first programs in Python and C++."
      ]
    },
    {
      year: "2024",
      stage: "Class 11: Deep PCM & Algorithmic Foundations",
      status: "COMPLETED",
      tag: "CONCEPT ACCELERATION",
      icon: <Flame size={20} />,
      points: [
        "Mastered the toughest JEE topics: Classical Mechanics, Rotational Dynamics & Kinematics.",
        "Built comprehensive grasp of Differential & Integral Calculus and Organic reaction mechanisms.",
        "Delved deeper into Data Structures & C++ Standard Template Library (STL)."
      ]
    },
    {
      year: "2025",
      stage: "Class 12: Advanced Drills & Full-Syllabus Mocks",
      status: "CURRENT FOCUS",
      tag: "PEAK PREPARATION",
      icon: <Clock size={20} />,
      points: [
        "Completing Electrodynamics, Wave Optics, Modern Physics, and Coordination Chemistry.",
        "Tackling advanced problems from Irodov, Pathfinder, and 45-year JEE Advanced Archives.",
        "Attempting bi-weekly 6-hour full-syllabus CBT mock tests with rigorous error-log analysis."
      ]
    },
    {
      year: "2026",
      stage: "JEE Advanced D-Day (Target AIR < 500)",
      status: "THE ULTIMATE TARGET",
      tag: "THE D-DAY",
      icon: <Target size={20} />,
      points: [
        "Qualifying JEE Main with 99.8+ Percentile.",
        "Targeting an All India Rank (AIR) under 500 in JEE Advanced.",
        "Translating 2+ years of relentless discipline into pinnacle exam performance."
      ]
    },
    {
      year: "2026 - 2030",
      stage: "Premier IIT B.Tech in Computer Science / EE",
      status: "FUTURE HORIZON",
      tag: "TECH LEADERSHIP",
      icon: <GraduationCap size={20} />,
      points: [
        "Enrollment at IIT Bombay / IIT Delhi / IIT Madras for Computer Science & Engineering.",
        "Engaging in cutting-edge research: AI, High-Performance Computing & Autonomous Robotics.",
        "Building transformative engineering ventures and open-source systems for India and the world."
      ]
    }
  ];

  return (
    <section className="journey-section" id="roadmap">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">STRATEGIC MILESTONES</span>
          <h2 className="section-title">The Roadmap to IIT & Beyond</h2>
          <p className="section-subtitle">
            A chronological timeline capturing the journey from foundational excellence to 
            JEE Advanced mastery and future engineering leadership.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="timeline-container">
          <div className="timeline-spine"></div>

          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`timeline-item ${isEven ? 'left' : 'right'} ${item.status === 'CURRENT FOCUS' ? 'active-milestone' : ''}`}
              >
                {/* Center Node */}
                <div className="timeline-node">
                  <div className="timeline-node-inner">
                    {item.icon}
                  </div>
                </div>

                {/* Milestone Card */}
                <div className="timeline-card neumorphic-card">
                  <div className="timeline-card-header">
                    <span className="timeline-year">{item.year}</span>
                    <span className={`milestone-badge ${item.status.replace(/\s+/g, '-').toLowerCase()}`}>
                      {item.status}
                    </span>
                  </div>

                  <h3 className="timeline-stage-title">{item.stage}</h3>
                  <span className="timeline-tag-text">{item.tag}</span>

                  <ul className="timeline-points-list">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="timeline-pt">
                        <CheckCircle2 size={15} className="pt-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
