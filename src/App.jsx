import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import SkillsGrid from './components/SkillsGrid';
import Projects from './components/Projects';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <CustomCursor />
      <ParticlesBackground />
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
          transformOrigin: '0%',
          scaleX,
          zIndex: 1000
        }}
      />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
        <Hero />
        <AboutEducation />
        <SkillsGrid />
        <Projects />
        <Research />
        <Certifications />
        <Contact />
      </main>
      
      {/* Background Orbs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
    </>
  );
}

export default App;
