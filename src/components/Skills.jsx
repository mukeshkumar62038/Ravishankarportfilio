import React, { useState } from 'react';
import { 
  Calculator, 
  Atom, 
  FlaskConical, 
  Code2, 
  BrainCircuit, 
  CheckCircle2, 
  Sparkles,
  Search
} from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const skillCategories = [
    { id: 'all', label: 'All Disciplines', icon: <Sparkles size={16} /> },
    { id: 'math', label: 'JEE Mathematics', icon: <Calculator size={16} /> },
    { id: 'physics', label: 'JEE Physics', icon: <Atom size={16} /> },
    { id: 'chemistry', label: 'JEE Chemistry', icon: <FlaskConical size={16} /> },
    { id: 'tech', label: 'Computer Science & Tech', icon: <Code2 size={16} /> },
    { id: 'aptitude', label: 'Competitive Strategy', icon: <BrainCircuit size={16} /> }
  ];

  const allSkills = [
    // Mathematics
    {
      category: 'math',
      title: 'Differential & Integral Calculus',
      level: 96,
      tier: 'JEE Advanced Mastery',
      description: 'Limits, Continuity, Tangents & Normals, Definite Integrals, Leibniz Rule, Differential Equations.',
      tags: ['Leibniz Rule', 'Integration by Parts', 'Area under Curves', 'ODE']
    },
    {
      category: 'math',
      title: 'Vectors & 3D Geometry',
      level: 95,
      tier: 'JEE Advanced Mastery',
      description: 'Scalar & Vector Triple Products, Direction Cosines, Equations of Planes, Skew Lines shortest distance.',
      tags: ['Triple Products', 'Planes', 'Shortest Distance', 'Coplanarity']
    },
    {
      category: 'math',
      title: 'Coordinate Geometry (Conics)',
      level: 94,
      tier: 'High Precision',
      description: 'Parabola, Ellipse, Hyperbola, Circles, Common Tangents, Director Circle, Parametric coordinates.',
      tags: ['Eccentricity', 'Common Tangents', 'Locus Problems', 'Hyperbola']
    },
    {
      category: 'math',
      title: 'Algebra & Complex Numbers',
      level: 92,
      tier: 'Advanced Concept',
      description: 'Euler/De Moivre theorem, Quadratic Equations, Binomial Theorem, Sequences & Series (AGP, Telescoping).',
      tags: ['De Moivre', 'Roots of Unity', 'Telescopic Series', 'Matrices']
    },
    {
      category: 'math',
      title: 'Combinatorics & Probability',
      level: 90,
      tier: 'High Precision',
      description: 'Permutations & Combinations, Pigeonhole Principle, Bayes’ Theorem, Binomial Distribution.',
      tags: ['Bayes Theorem', 'Derangements', 'Conditional Prob', 'Multinomial']
    },

    // Physics
    {
      category: 'physics',
      title: 'Classical Mechanics & Rotation',
      level: 96,
      tier: 'Core Strength',
      description: 'Rigid Body Dynamics, Conservation of Angular Momentum, Rolling with Slipping, Collision Dynamics, COM.',
      tags: ['Rotational Dynamics', 'Torque & Angular Momentum', 'Pure Rolling', 'Irodov Level']
    },
    {
      category: 'physics',
      title: 'Electromagnetism & Maxwell Laws',
      level: 94,
      tier: 'JEE Advanced Mastery',
      description: 'Gauss’s Law, Potential energy distributions, Biot-Savart, Ampere’s Law, Faraday Induction & AC circuits.',
      tags: ['Gauss Law', 'Lenz Law', 'Self & Mutual Inductance', 'RLC Circuits']
    },
    {
      category: 'physics',
      title: 'Wave Optics & Modern Physics',
      level: 95,
      tier: 'High Precision',
      description: 'Young’s Double Slit Experiment, Diffraction, Photoelectric Effect, Bohr Model, Nuclear Decay & Dual Nature.',
      tags: ['YDSE Interference', 'Photoelectric', 'De Broglie Waves', 'Binding Energy']
    },
    {
      category: 'physics',
      title: 'Thermodynamics & Kinetic Theory',
      level: 92,
      tier: 'Advanced Concept',
      description: 'First & Second Laws of Thermo, Heat Engines, Carnot Efficiency, PV Diagrams, Stefan-Boltzmann Law.',
      tags: ['Carnot Cycle', 'Adiabatic Processes', 'Mean Free Path', 'Radiation']
    },

    // Chemistry
    {
      category: 'chemistry',
      title: 'Organic Reaction Mechanisms',
      level: 94,
      tier: 'High Precision',
      description: 'Electrophilic/Nucleophilic Additions, Aldol, Cannizzaro, Grignard Reagents, Aromaticity, Stereochemistry.',
      tags: ['SN1/SN2/E1/E2', 'Reaction Intermediates', 'Stereoisomers', 'Named Reactions']
    },
    {
      category: 'chemistry',
      title: 'Physical Chemistry & Kinetics',
      level: 93,
      tier: 'JEE Advanced Mastery',
      description: 'Chemical & Ionic Equilibrium, Nernst Equation, Rate Law Equations, Arrhenius Theory, Solutions colligative.',
      tags: ['Nernst Equation', 'Buffer Solutions', 'Order of Reaction', 'Gibbs Free Energy']
    },
    {
      category: 'chemistry',
      title: 'Coordination Chemistry & Bonding',
      level: 91,
      tier: 'Advanced Concept',
      description: 'Crystal Field Theory (CFT), Valence Bond Theory, Isomerism in Complexes, Molecular Orbital Theory (MOT).',
      tags: ['CFT Splitting', 'MOT Diagrams', 'Hybridization', 'Coordination Number']
    },

    // Technology & CS
    {
      category: 'tech',
      title: 'C++ & Standard Template Library (STL)',
      level: 92,
      tier: 'High Execution',
      description: 'Fast I/O, Vectors, Sets, Maps, Pointers, Memory management, Object-Oriented Principles, Clean logic.',
      tags: ['STL Containers', 'Iterators', 'Pointers & References', 'Fast I/O']
    },
    {
      category: 'tech',
      title: 'Data Structures & Algorithms (DSA)',
      level: 87,
      tier: 'Competitive Focus',
      description: 'Binary Search, Two Pointers, Recursion, Backtracking, Stack/Queue applications, Sorting complexities.',
      tags: ['Binary Search', 'Recursion & Trees', 'Two Pointers', 'Time Complexity']
    },
    {
      category: 'tech',
      title: 'Python for Scientific Computing',
      level: 89,
      tier: 'Analytical Tool',
      description: 'Mathematical modeling, Numerical problem-solving, Matplotlib physics graph plotting, automation.',
      tags: ['NumPy', 'Matplotlib', 'Math Modeling', 'Data Analysis']
    },
    {
      category: 'tech',
      title: 'Modern Web Engineering (React/JS)',
      level: 86,
      tier: 'Practical Builder',
      description: 'React Components, State Management, Modern Vanilla CSS, Responsive Layouts, Canvas 2D simulation.',
      tags: ['React 19', 'JavaScript ES6+', 'HTML5 Canvas', 'Responsive UI']
    },

    // Aptitude & Strategy
    {
      category: 'aptitude',
      title: 'High-Pressure JEE Advanced Strategy',
      level: 96,
      tier: 'Exam Temperament',
      description: 'Question selection algorithm, negative marking suppression, time-per-mark allocation, multi-correct mastery.',
      tags: ['Question Selection', 'Negative Shield', 'Time Budgeting', 'Matrix Match']
    },
    {
      category: 'aptitude',
      title: 'First-Principles Analytical Thinking',
      level: 95,
      tier: 'Core Mindset',
      description: 'Deconstructing complex engineering and mathematical problems into elemental, solvable sub-units.',
      tags: ['Decomposition', 'Pattern Recognition', 'Error Analysis', 'Deep Focus']
    }
  ];

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = 
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">COMPETITIVE SKILLS & TECH KNOWLEDGE</span>
          <h2 className="section-title">Academic Rigor & Tech Arsenal</h2>
          <p className="section-subtitle">
            A comprehensive matrix of JEE Advanced core subjects (Mathematics, Physics, Chemistry) 
            fused with computer science, algorithmic coding, and high-pressure problem solving.
          </p>
        </div>

        {/* Filter Navigation & Search Bar */}
        <div className="skills-controls">
          <div className="skills-category-tabs">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                className={`skill-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="skill-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search concepts (e.g. Calculus, C++, Mechanics, Kinetics)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skill-search-input"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card neumorphic-card">
              <div className="skill-card-top">
                <span className="skill-tier-badge">{skill.tier}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>

              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.description}</p>

              {/* Progress Bar with Crimson Glow */}
              <div className="skill-progress-bar">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Tag Chips */}
              <div className="skill-tags-wrapper">
                {skill.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="skill-tag-chip">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="no-skills-found">
            <p>No matching skills found for "{searchQuery}". Try searching for another topic!</p>
          </div>
        )}
      </div>
    </section>
  );
}
