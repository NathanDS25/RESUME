import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Research', id: 'research' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '15px 10%' : '25px 10%',
        background: scrolled ? 'rgba(10, 10, 15, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div 
        style={{ fontFamily: 'Outfit', fontSize: '1.5rem', fontWeight: 800, cursor: 'pointer' }}
        onClick={() => scrollToSection('home')}
      >
        Nathan<span className="gradient-text">.</span>
      </div>

      <div style={{ display: 'flex', gap: '30px' }}>
        {navLinks.map((link) => (
          <div
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            style={{
              cursor: 'pointer',
              fontWeight: 500,
              color: 'var(--text-main)',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = 'var(--accent-cyan)')}
            onMouseOut={(e) => (e.target.style.color = 'var(--text-main)')}
          >
            {link.name}
          </div>
        ))}
        <a 
          href="#contact" 
          onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          style={{
            background: 'var(--accent-purple)',
            color: 'white',
            padding: '5px 15px',
            borderRadius: '20px',
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
