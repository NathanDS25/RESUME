import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../utils/data';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="section-title"
      >
        <span className="gradient-text">05.</span> Certifications & Awards
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        {portfolioData.certifications.map((cert, idx) => (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ scale: 1.02 }}
            className="glass-panel"
            style={{
              padding: '30px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              textDecoration: 'none',
              color: 'var(--text-main)',
              transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0,240,255,0.2)';
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.background = 'var(--glass-bg)';
            }}
          >
            {/* Elegant glass shimmer overlay for extra fancy feel */}
            <div className="glass-shimmer"></div>
            
            <div style={{ background: 'rgba(0,240,255,0.1)', padding: '15px', borderRadius: '50%' }}>
              <Award size={32} color="var(--accent-cyan)" />
            </div>

            <div style={{ flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{cert.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{cert.issuer}</p>
            </div>

            <ExternalLink size={20} color="var(--text-muted)" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
