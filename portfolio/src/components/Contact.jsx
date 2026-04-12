import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../utils/data';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        style={{ maxWidth: '600px' }}
      >
        <h2 style={{ fontSize: '4rem', fontFamily: 'Outfit', fontWeight: 800, marginBottom: '20px' }}>
          Get In Touch
        </h2>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '40px' }}>
          I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>

        <a href={`mailto:${portfolioData.personalInfo.contact.email}`} className="btn-primary" style={{ fontSize: '1.2rem', padding: '20px 40px' }}>
          Say Hello <ArrowRight />
        </a>

        <div style={{ marginTop: '100px', paddingTop: '30px', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <p>Designed & Built by {portfolioData.personalInfo.name}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '15px' }}>
            <a href={portfolioData.personalInfo.contact.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>GitHub</a>
            <a href={portfolioData.personalInfo.contact.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
