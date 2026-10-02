import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Domains from './components/Domains';
import InteractiveLab from './components/InteractiveLab';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HireModal from './components/HireModal';
import './App.css';

export default function App() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  return (
    <div className="portfolio-app">
      {/* Dynamic Background Noise / Radial Lighting */}
      <div className="bg-glow-orb orb-1"></div>
      <div className="bg-glow-orb orb-2"></div>
      <div className="bg-glow-orb orb-3"></div>

      {/* Navigation Bar */}
      <Navbar onOpenHireModal={() => setIsHireModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenHireModal={() => setIsHireModalOpen(true)} />
        <About />
        <Skills />
        <Domains onOpenHireModal={() => setIsHireModalOpen(true)} />
        <InteractiveLab />
        <Journey />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Connect / Hire Modal */}
      <HireModal 
        isOpen={isHireModalOpen} 
        onClose={() => setIsHireModalOpen(false)} 
      />
    </div>
  );
}
