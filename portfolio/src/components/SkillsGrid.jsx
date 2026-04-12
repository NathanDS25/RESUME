import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../utils/data';

const SkillsGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="section-title"
      >
        <span className="gradient-text">02.</span> Technical Arsenal
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(300px, 1fr)', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* Programming Languages Progress Bars */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="glass-panel fancy-hover"
          style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <div className="glass-shimmer"></div>
          <h3 style={{ fontSize: '1.4rem', borderBottom: `2px solid var(--accent-cyan)`, paddingBottom: '10px', display: 'inline-block', width: 'fit-content' }}>
            Programming Proficiency
          </h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}
          >
            {portfolioData.programmingProgress.map((lang, i) => (
              <motion.div key={i} variants={itemVariants} style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>{lang.name}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', background: 'rgba(0, 240, 255, 0.1)', padding: '2px 8px', borderRadius: '12px' }}>
                    {lang.level}
                  </span>
                </div>
                {/* Progress Bar Track */}
                <div style={{ width: '100%', height: '8px', background: 'var(--glass-bg)', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                  {/* Progress Bar Fill */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{ 
                      height: '100%', 
                      background: 'linear-gradient(90deg, var(--accent-purple), var(--accent-cyan))',
                      boxShadow: '0 0 10px var(--accent-cyan)'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Spoken Languages & Frameworks (Badges) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* Spoken Languages */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="glass-panel fancy-hover"
            style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div className="glass-shimmer"></div>
            <h3 style={{ fontSize: '1.4rem', borderBottom: `2px solid var(--accent-purple)`, paddingBottom: '10px', display: 'inline-block', width: 'fit-content' }}>
              Spoken Languages
            </h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
              {portfolioData.spokenLanguages.map((l, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'var(--accent-purple)' }}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--glass-bg)', padding: '10px 20px', borderRadius: '12px', border: '1px solid var(--glass-border)', cursor: 'default', transition: 'all 0.3s ease' }}
                >
                  <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{l.language}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>— {l.proficiency}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Frameworks */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.3 }}
            className="glass-panel fancy-hover"
            style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div className="glass-shimmer"></div>
            <h3 style={{ fontSize: '1.4rem', borderBottom: `2px solid #ff00aa`, paddingBottom: '10px', display: 'inline-block', width: 'fit-content' }}>
              Tools & Ecosystems
            </h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[...portfolioData.skills.dataScience, ...portfolioData.skills.tools].map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)', borderColor: '#ff00aa' }}
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'default',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
