import React from 'react';
import { motion } from 'framer-motion';

const defaultStyle = { filter: 'drop-shadow(0px 0px 8px rgba(212, 175, 55, 0.4))' };
const getGradient = () => (
  <defs>
    <linearGradient id="cosmic-gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#d4af37" />
      <stop offset="50%" stopColor="#fff2cd" />
      <stop offset="100%" stopColor="#b58843" />
    </linearGradient>
    <g id="star">
      <path d="M 10 0 L 12 8 L 20 10 L 12 12 L 10 20 L 8 12 L 0 10 L 8 8 Z" fill="url(#cosmic-gold)" />
    </g>
  </defs>
);

export const CosmicVine = ({ flipX = false, flipY = false, delay = 0, customStyle = null }) => {
  return (
    <div 
      className="cosmic-vine-container pointer-events-none" 
      style={customStyle || { 
        display: 'flex', 
        justifyContent: flipX ? 'flex-end' : 'flex-start', 
        width: '100%', 
        padding: '0 10px',
        marginTop: '-30px', 
        marginBottom: '-30px', 
        zIndex: 5, 
        position: 'relative' 
      }}
    >
      <div style={{ transform: `scaleX(${flipX ? -1 : 1}) scaleY(${flipY ? -1 : 1})` }}>
        <svg viewBox="0 0 250 250" width="160" height="160" style={defaultStyle}>
          {getGradient()}
          <motion.path 
            d="M 5 5 C 80 5, 180 50, 180 120 C 180 180, 120 220, 80 220 C 40 220, 20 180, 20 140 C 20 100, 60 80, 100 80 C 140 80, 150 120, 140 140 C 130 160, 100 160, 90 140 C 80 120, 95 110, 110 120" 
            fill="none" stroke="url(#cosmic-gold)" strokeWidth="5.0" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay }}
          />
          <motion.path 
            d="M 80 50 C 140 30, 220 50, 240 100 C 260 140, 220 180, 180 180 C 150 180, 140 150, 160 130 C 180 110, 200 130, 190 150" 
            fill="none" stroke="url(#cosmic-gold)" strokeWidth="4.0" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: "easeInOut", delay: delay + 0.5 }}
          />
          <motion.g initial={{ scale: 0, opacity: 0, rotate: -45 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.2 }}><use href="#star" x="160" y="30" transform="scale(0.8)" /></motion.g>
          <motion.g initial={{ scale: 0, opacity: 0, rotate: 45 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.5 }}><use href="#star" x="40" y="180" transform="scale(1.2)" /></motion.g>
          <motion.g initial={{ scale: 0, opacity: 0, rotate: 90 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.8 }}><use href="#star" x="220" y="140" transform="scale(0.6)" /></motion.g>
          <motion.circle cx="120" cy="180" r="2" fill="#d4af37" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} transition={{delay: delay + 1.5}} />
          <motion.circle cx="100" cy="40" r="2.5" fill="#d4af37" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} transition={{delay: delay + 1.7}} />
          <motion.circle cx="200" cy="80" r="2" fill="#d4af37" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} transition={{delay: delay + 1.9}} />
        </svg>
      </div>
    </div>
  );
};

export const CosmicVineAlt = ({ flipX = false, flipY = false, delay = 0, customStyle = null }) => {
  return (
    <div 
      className="cosmic-vine-container pointer-events-none" 
      style={customStyle || { 
        display: 'flex', 
        justifyContent: flipX ? 'flex-end' : 'flex-start', 
        width: '100%', 
        padding: '0 10px',
        marginTop: '-30px', 
        marginBottom: '-30px', 
        zIndex: 5, 
        position: 'relative' 
      }}
    >
      <div style={{ transform: `scaleX(${flipX ? -1 : 1}) scaleY(${flipY ? -1 : 1})` }}>
        <svg viewBox="0 0 250 250" width="160" height="160" style={defaultStyle}>
          {getGradient()}
          {/* Un patrón diferente: Una S alargada con remates rizados */}
          <motion.path 
            d="M 20 200 C -20 150, 40 80, 100 80 C 160 80, 220 50, 200 10 C 180 -20, 120 20, 140 60 C 160 100, 210 100, 230 140 C 250 180, 200 240, 140 220 C 80 200, 100 140, 140 160 C 160 170, 150 190, 130 190" 
            fill="none" stroke="url(#cosmic-gold)" strokeWidth="5.0" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay }}
          />
          <motion.path 
            d="M 60 140 C 20 180, 40 230, 80 240 C 120 250, 160 210, 120 180" 
            fill="none" stroke="url(#cosmic-gold)" strokeWidth="4.0" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: "easeInOut", delay: delay + 0.5 }}
          />
          <motion.g initial={{ scale: 0, opacity: 0, rotate: -45 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.2 }}><use href="#star" x="80" y="50" transform="scale(0.8)" /></motion.g>
          <motion.g initial={{ scale: 0, opacity: 0, rotate: 45 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.5 }}><use href="#star" x="200" y="180" transform="scale(1.2)" /></motion.g>
          <motion.g initial={{ scale: 0, opacity: 0, rotate: 90 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.8 }}><use href="#star" x="140" y="20" transform="scale(0.6)" /></motion.g>
          <motion.circle cx="100" cy="120" r="2" fill="#d4af37" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} transition={{delay: delay + 1.5}} />
          <motion.circle cx="180" cy="80" r="2.5" fill="#d4af37" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} transition={{delay: delay + 1.7}} />
          <motion.circle cx="60" cy="210" r="2" fill="#d4af37" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} transition={{delay: delay + 1.9}} />
        </svg>
      </div>
    </div>
  );
};

const CornerOrnaments = () => {
  return null; 
};

export default CornerOrnaments;
