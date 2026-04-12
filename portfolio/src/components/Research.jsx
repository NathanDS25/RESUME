import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../utils/data';
import { BookOpen } from 'lucide-react';

const Research = () => {
  return (
    <section id="research">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="section-title"
      >
        <span className="gradient-text">04.</span> Research Work
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        className="glass-panel fancy-hover"
        style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}
      >
        <div className="glass-shimmer"></div>
        <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05, transform: 'translate(20%, -20%)' }}>
          <BookOpen size={300} />
        </div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '10px', color: 'var(--accent-cyan)' }}>
            {portfolioData.research.title}
          </h3>
          <p style={{ color: 'var(--accent-purple)', fontWeight: 'bold', marginBottom: '30px', fontSize: '1.1rem' }}>
            {portfolioData.research.status}
          </p>
          
          <ul style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '20px', maxWidth: '800px' }}>
            {portfolioData.research.points.map((point, idx) => (
              <li key={idx} style={{ marginBottom: '15px' }}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Research;
