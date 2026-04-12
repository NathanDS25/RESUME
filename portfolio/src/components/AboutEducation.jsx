import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../utils/data';
import { GraduationCap, Briefcase } from 'lucide-react';

const AboutEducation = () => {
  return (
    <section id="about" style={{ position: 'relative' }}>
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="section-title"
      >
        <span className="gradient-text">01.</span> About & Experience
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <GraduationCap size={32} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.8rem' }}>Education</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="glass-panel fancy-hover" style={{ padding: '25px', position: 'relative', overflow: 'hidden' }}>
                <div className="glass-shimmer"></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, var(--accent-cyan), transparent)' }}></div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '5px' }}>{edu.degree}</h4>
                <div style={{ color: 'var(--accent-cyan)', fontWeight: 'bold', marginBottom: '10px' }}>{edu.institution}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '5px' }}>{edu.duration}</div>
                <div style={{ color: 'var(--text-muted)' }}>{edu.details}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <Briefcase size={32} color="var(--accent-purple)" />
            <h3 style={{ fontSize: '1.8rem' }}>Leadership</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {portfolioData.leadership.map((item, idx) => (
              <div key={idx} className="glass-panel fancy-hover" style={{ padding: '25px', position: 'relative', overflow: 'hidden' }}>
                <div className="glass-shimmer"></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, var(--accent-purple), transparent)' }}></div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '5px' }}>{item.role}</h4>
                <div style={{ color: 'var(--accent-purple)', fontWeight: 'bold', marginBottom: '10px' }}>{item.organization}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '15px' }}>{item.duration}</div>
                <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px' }}>
                  {item.description.map((desc, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutEducation;
