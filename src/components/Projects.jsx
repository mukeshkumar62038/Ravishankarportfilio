import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  ArrowUpRight,
  Sparkles,
  Atom,
  Calculator,
  Binary
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Interactive Kinematics & Mechanics Engine",
      category: "simulation",
      badge: "Physics & Tech",
      icon: <Atom size={24} />,
      desc: "An in-browser 2D physics simulation visualizer modeling rigid body rotation, projectile motion under variable gravity, and elastic collisions.",
      tags: ["HTML5 Canvas", "JavaScript ES6+", "Classical Mechanics", "Vector Math"],
      link: "#lab",
      github: "https://github.com"
    },
    {
      title: "JEE Mock Analytics & Error Tracker",
      category: "tech",
      badge: "Productivity & Data",
      icon: <Binary size={24} />,
      desc: "A custom performance-tracking dashboard for JEE mock tests, calculating subject accuracy, negative mark penalty ratios, and revision alerts.",
      tags: ["React", "Analytics", "Local Storage", "Data Visualization"],
      link: "#",
      github: "https://github.com"
    },
    {
      title: "Organic Reaction Synthesis Grapher",
      category: "chemistry",
      badge: "Chemical Science",
      icon: <Sparkles size={24} />,
      desc: "Step-by-step reaction mechanism visualizer explaining electrophilic aromatic substitution, nucleophilic addition, and named conversions.",
      tags: ["Chemistry", "React", "State Logic", "SVG Pathways"],
      link: "#",
      github: "https://github.com"
    },
    {
      title: "Calculus & Riemann Integral Solver",
      category: "math",
      badge: "Higher Mathematics",
      icon: <Calculator size={24} />,
      desc: "A computational calculus visualizer computing Riemann sums, instantaneous tangent gradients, and area bounded under polynomial curves.",
      tags: ["C++ Algorithms", "Math Modeling", "Definite Integrals"],
      link: "#",
      github: "https://github.com"
    }
  ];

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">VISIT MY PORTFOLIO OF WORK</span>
          <h2 className="section-title">Academic & Tech Projects</h2>
          <p className="section-subtitle">
            A fusion of competitive science, algorithmic logic, and modern software applications 
            built during my JEE preparation journey.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filter-nav">
          <button 
            className={`proj-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Work
          </button>
          <button 
            className={`proj-filter-btn ${filter === 'simulation' ? 'active' : ''}`}
            onClick={() => setFilter('simulation')}
          >
            Physics & Simulations
          </button>
          <button 
            className={`proj-filter-btn ${filter === 'tech' ? 'active' : ''}`}
            onClick={() => setFilter('tech')}
          >
            Software & Analytics
          </button>
          <button 
            className={`proj-filter-btn ${filter === 'math' ? 'active' : ''}`}
            onClick={() => setFilter('math')}
          >
            Mathematics
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filtered.map((item, index) => (
            <div key={index} className="project-card neumorphic-card">
              <div className="project-card-top">
                <div className="project-icon-pill">
                  {item.icon}
                </div>
                <span className="project-badge">{item.badge}</span>
              </div>

              <h3 className="project-title">{item.title}</h3>
              <p className="project-desc">{item.desc}</p>

              <div className="project-tags">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <a href={item.link} className="project-action-link">
                  <span>View Project</span>
                  <ArrowUpRight size={16} />
                </a>
                <a href={item.github} target="_blank" rel="noreferrer" className="project-gh-link" title="Source Code">
                  <GithubIcon size={17} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
