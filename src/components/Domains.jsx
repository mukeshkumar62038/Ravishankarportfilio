import React from 'react';
import { 
  Cpu, 
  Atom, 
  Terminal, 
  LineChart, 
  Layers, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';
import './Domains.css';

export default function Domains({ onOpenHireModal }) {
  const domains = [
    {
      icon: <Atom size={28} />,
      title: "Advanced JEE Problem Solving",
      desc: "Tackling multi-concept problems combining Rotational Dynamics, Electrodynamics, and Integral Calculus from sources like Irodov and JEE Advanced.",
      tag: "CORE ACADEMIC RIGOR"
    },
    {
      icon: <Terminal size={28} />,
      title: "C++ & Algorithmic Logic",
      desc: "Architecting clean, highly-efficient code with C++ and STL. Building foundational mastery in data structures, recursion, and computational complexity.",
      tag: "SOFTWARE FOUNDATION"
    },
    {
      icon: <Cpu size={28} />,
      title: "Scientific Simulation & Modeling",
      desc: "Translating physical laws into computational simulations—visualizing parabolic projectile motion, wave packets, and harmonic oscillators.",
      tag: "COMPUTATIONAL PHYSICS"
    },
    {
      icon: <LineChart size={28} />,
      title: "Data-Driven Test Analytics",
      desc: "Maintaining granular error notebooks (Galti Register), tracking accuracy percentiles, and optimizing time allocation during 3-hour exam pressure.",
      tag: "EXAM STRATEGY"
    },
    {
      icon: <Layers size={28} />,
      title: "Modern Web Engineering",
      desc: "Crafting modern, interactive web interfaces with React, modern CSS, and HTML5 Canvas to create engaging tools and portfolios.",
      tag: "CREATIVE TECH"
    },
    {
      icon: <Compass size={28} />,
      title: "Engineering Innovation & Research",
      desc: "Fascinated by high-performance computing, artificial intelligence, robotics, and how IIT engineering translates to real-world infrastructure.",
      tag: "FUTURE VISION"
    }
  ];

  return (
    <section className="domains-section" id="domains">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">FEATURES & CAPABILITIES</span>
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            Exploring the intersection of competitive sciences, algorithmic problem solving, 
            and modern computer engineering.
          </p>
        </div>

        {/* Domains Cards Grid */}
        <div className="domains-grid">
          {domains.map((item, index) => (
            <div key={index} className="domain-card neumorphic-card">
              <div className="domain-header-row">
                <div className="domain-icon-box">{item.icon}</div>
                <span className="domain-tag-mini">{item.tag}</span>
              </div>
              <h3 className="domain-title">{item.title}</h3>
              <p className="domain-desc">{item.desc}</p>
              <div className="domain-footer-link">
                <span className="domain-learn-more">Deep Dive</span>
                <ArrowUpRight size={16} className="domain-arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
