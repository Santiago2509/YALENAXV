import React from 'react';
import { motion } from 'framer-motion';

// Sombra mejorada para los vectores
const defaultStyle = { filter: 'drop-shadow(2px 2px 5px rgba(0,0,0,0.6))' };

const getDefs = () => (
  <defs>
    <linearGradient id="cosmic-gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#d4af37" />
      <stop offset="50%" stopColor="#fff2cd" />
      <stop offset="100%" stopColor="#b58843" />
    </linearGradient>
    {/* Estrella brillante */}
    <g id="star">
      <path d="M 10 0 L 12 8 L 20 10 L 12 12 L 10 20 L 8 12 L 0 10 L 8 8 Z" fill="url(#cosmic-gold)" />
    </g>
    {/* Hoja elegante (más grande) */}
    <g id="leaf">
      <path d="M0,0 C12,-12 30,-6 30,12 C30,12 18,18 0,0 Z" fill="url(#cosmic-gold)" opacity="0.95"/>
    </g>
    {/* Flor bien visible formada por 5 círculos (pétalos) y un centro */}
    <g id="flower">
      <circle cx="0" cy="-9" r="6" fill="url(#cosmic-gold)" />
      <circle cx="8.5" cy="-2.7" r="6" fill="url(#cosmic-gold)" />
      <circle cx="5.3" cy="7.3" r="6" fill="url(#cosmic-gold)" />
      <circle cx="-5.3" cy="7.3" r="6" fill="url(#cosmic-gold)" />
      <circle cx="-8.5" cy="-2.7" r="6" fill="url(#cosmic-gold)" />
      <circle cx="0" cy="0" r="4.5" fill="#ffffff" />
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
          {getDefs()}
          {/* Ramas principales */}
          <motion.path 
            d="M 10 150 C 40 120, 100 100, 150 150 C 200 200, 250 100, 200 50 C 150 0, 100 50, 130 90 C 150 120, 180 100, 170 70" 
            fill="none" stroke="url(#cosmic-gold)" strokeWidth="4.0" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay }}
          />
          <motion.path 
            d="M 50 135 C 80 80, 50 30, 90 20 C 130 10, 150 50, 120 70" 
            fill="none" stroke="url(#cosmic-gold)" strokeWidth="3.0" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: "easeInOut", delay: delay + 0.3 }}
          />
          <motion.path 
            d="M 100 135 C 120 180, 80 230, 50 200 C 20 170, 60 150, 80 170" 
            fill="none" stroke="url(#cosmic-gold)" strokeWidth="3.0" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: "easeInOut", delay: delay + 0.6 }}
          />
          
          {/* Elementos decorativos (estrellas, hojas, flores) */}
          <motion.g initial={{ scale: 0, opacity: 0, rotate: -45 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.2 }}><use href="#flower" x="150" y="40" /></motion.g>
          <motion.g initial={{ scale: 0, opacity: 0, rotate: 45 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.5 }}><use href="#leaf" x="50" y="170" transform="rotate(-30 50 170)" /></motion.g>
          <motion.g initial={{ scale: 0, opacity: 0, rotate: 90 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.8 }}><use href="#star" x="220" y="140" /></motion.g>
          
          <motion.g initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.5 }}><use href="#leaf" x="110" y="180" transform="rotate(45 110 180)" /></motion.g>
          <motion.g initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.7 }}><use href="#flower" x="90" y="50" /></motion.g>
          <motion.g initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.9 }}><use href="#leaf" x="200" y="90" transform="rotate(110 200 90)" /></motion.g>
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
          {getDefs()}
          {/* Ramas principales */}
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
          
          {/* Elementos decorativos */}
          <motion.g initial={{ scale: 0, opacity: 0, rotate: -45 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.2 }}><use href="#flower" x="70" y="60" /></motion.g>
          <motion.g initial={{ scale: 0, opacity: 0, rotate: 45 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.5 }}><use href="#star" x="200" y="180" /></motion.g>
          <motion.g initial={{ scale: 0, opacity: 0, rotate: 90 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.8 }}><use href="#leaf" x="140" y="30" transform="rotate(-60 140 30)" /></motion.g>
          
          <motion.g initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.5 }}><use href="#leaf" x="90" y="120" transform="rotate(30 90 120)" /></motion.g>
          <motion.g initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.7 }}><use href="#flower" x="170" y="75" /></motion.g>
          <motion.g initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: delay + 1.9 }}><use href="#leaf" x="50" y="210" transform="rotate(160 50 210)" /></motion.g>
        </svg>
      </div>
    </div>
  );
};
