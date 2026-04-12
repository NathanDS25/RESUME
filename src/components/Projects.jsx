import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../utils/data';
import { FolderGit2 } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="section-title"
      >
        <span className="gradient-text">03.</span> Featured Projects
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        {portfolioData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: (idx % 3) * 0.1 }}
            className="glass-panel fancy-hover"
            style={{ 
              padding: '30px', 
              display: 'flex', 
              flexDirection: 'column', 
              cursor: 'pointer',
            }}
          >
            <div className="glass-shimmer"></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <FolderGit2 size={40} color="var(--accent-cyan)" />
            </div>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{project.title}</h3>
            
            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '25px', flexGrow: 1 }}>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {project.points.slice(0, 3).map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
              {project.tech.map((tech, i) => (
                <span key={i} style={{ fontFamily: 'Outfit', fontSize: '0.8rem', color: 'var(--accent-purple)', fontWeight: 600 }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
