import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../utils/data';

const Hero = () => {
  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '800px', zIndex: 10, position: 'relative' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '2px', marginBottom: '10px' }}
        >
          HI THERE, I'M
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '20px' }}
        >
          {portfolioData.personalInfo.name}.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-muted)', marginBottom: '30px' }}
        >
          I build <span className="gradient-text">intelligent systems</span> & <span className="gradient-text">web experiences</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '40px' }}
        >
          Currently pursuing my B.Tech in Computer Engineering. Specializing in AI/ML, Full-Stack Web Development, and creating elegant, high-performance solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <button
            onClick={async () => {
              try {
                const response = await fetch('/Nathan_DSouza_Resume.docx');
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Nathan_DSouza_Resume.docx';
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
              } catch {
                window.open('/Nathan_DSouza_Resume.docx', '_blank');
              }
            }}
            className="btn-primary"
            style={{ cursor: 'pointer', border: 'none' }}
          >
            <Download size={20} /> Download Resume
          </button>
          
          <div style={{ display: 'flex', gap: '15px', marginLeft: '20px' }}>
            <a href={portfolioData.personalInfo.contact.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
              <FaGithub size={24} style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'} />
            </a>
            <a href={portfolioData.personalInfo.contact.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
              <FaLinkedin size={24} style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#0e76a8'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'} />
            </a>
            <a href={`mailto:${portfolioData.personalInfo.contact.email}`} style={{ color: 'var(--text-muted)' }}>
              <Mail size={24} style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-purple)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
