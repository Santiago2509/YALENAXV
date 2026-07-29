import React from 'react';
import { motion } from 'framer-motion';

// SVG definition so we can reuse the same beautiful butterfly but stationary initially
const ButterflySVG = ({ color = "gold", animated = false }) => {
  let gradientId = "gold-interactive-wings";
  if (color === "rose") gradientId = "rose-interactive-wings";
  if (color === "white") gradientId = "white-interactive-wings";

  const wingAnimation = animated ? {
    scaleX: [1, 0.2, 1],
    transition: { duration: 0.15, repeat: Infinity, ease: "easeInOut" }
  } : {
    scaleX: [1, 0.8, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } // Slow breathing when resting
  };

  return (
    <svg viewBox="0 0 100 100" width="40" height="40" style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.3))' }}>
      <motion.g style={{ transformOrigin: '50% 50%' }} animate={wingAnimation}>
        <path d="M50 50 C30 10, 0 20, 10 50 C20 80, 40 70, 50 50 Z" fill={`url(#${gradientId})`} opacity="0.85" />
        <path d="M50 50 C30 80, 10 90, 20 60 C30 40, 40 40, 50 50 Z" fill={`url(#${gradientId})`} opacity="0.9" />
      </motion.g>
      <motion.g style={{ transformOrigin: '50% 50%' }} animate={wingAnimation}>
        <path d="M50 50 C70 10, 100 20, 90 50 C80 80, 60 70, 50 50 Z" fill={`url(#${gradientId})`} opacity="0.85" />
        <path d="M50 50 C70 80, 90 90, 80 60 C70 40, 60 40, 50 50 Z" fill={`url(#${gradientId})`} opacity="0.9" />
      </motion.g>
      <rect x="48" y="35" width="4" height="30" rx="2" fill="#6b4c1a" />
      <circle cx="50" cy="35" r="4" fill="#6b4c1a" />
      <path d="M48 33 Q40 20, 35 25 M52 33 Q60 20, 65 25" fill="none" stroke="#6b4c1a" strokeWidth="1.5" />
      <defs>
        <linearGradient id="gold-interactive-wings" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c766" />
          <stop offset="50%" stopColor="#fff5cc" />
          <stop offset="100%" stopColor="#b58843" />
        </linearGradient>
        <linearGradient id="rose-interactive-wings" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff9a9e" />
          <stop offset="50%" stopColor="#fecfef" />
          <stop offset="100%" stopColor="#c06c84" />
        </linearGradient>
        <linearGradient id="white-interactive-wings" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#fdfbfb" />
          <stop offset="100%" stopColor="#ebedee" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Configuration of starting positions (around center photo area) and explosion directions
const butterflyConfigs = [
  { id: 1, color: 'gold', start: { top: '35%', left: '15%', rotate: 15 }, end: { top: '-20%', left: '-20%' } },
  { id: 2, color: 'rose', start: { top: '38%', left: '80%', rotate: -25 }, end: { top: '-20%', left: '120%' } },
  { id: 3, color: 'white', start: { top: '42%', left: '10%', rotate: 45 }, end: { top: '20%', left: '-30%' } },
  { id: 4, color: 'gold', start: { top: '45%', left: '85%', rotate: -15 }, end: { top: '30%', left: '130%' } },
  { id: 5, color: 'rose', start: { top: '50%', left: '12%', rotate: 60 }, end: { top: '60%', left: '-30%' } },
  { id: 6, color: 'white', start: { top: '55%', left: '88%', rotate: -60 }, end: { top: '80%', left: '130%' } },
  { id: 7, color: 'gold', start: { top: '65%', left: '20%', rotate: 10 }, end: { top: '120%', left: '-10%' } },
  { id: 8, color: 'rose', start: { top: '68%', left: '75%', rotate: -10 }, end: { top: '120%', left: '110%' } },
  { id: 9, color: 'gold', start: { top: '32%', left: '70%', rotate: -35 }, end: { top: '-20%', left: '80%' } },
  { id: 10, color: 'white', start: { top: '30%', left: '30%', rotate: 20 }, end: { top: '-20%', left: '10%' } },
  { id: 11, color: 'rose', start: { top: '62%', left: '8%', rotate: 80 }, end: { top: '90%', left: '-20%' } },
  { id: 12, color: 'gold', start: { top: '70%', left: '82%', rotate: -70 }, end: { top: '100%', left: '120%' } },
  { id: 13, color: 'rose', start: { top: '28%', left: '20%', rotate: 25 }, end: { top: '-30%', left: '0%' } },
  { id: 14, color: 'white', start: { top: '30%', left: '80%', rotate: -40 }, end: { top: '-20%', left: '140%' } },
  { id: 15, color: 'gold', start: { top: '72%', left: '15%', rotate: 85 }, end: { top: '110%', left: '-30%' } },
  { id: 16, color: 'rose', start: { top: '75%', left: '78%', rotate: -85 }, end: { top: '110%', left: '130%' } },
  { id: 17, color: 'gold', start: { top: '38%', left: '25%', rotate: 50 }, end: { top: '-10%', left: '-20%' } },
  { id: 18, color: 'white', start: { top: '40%', left: '75%', rotate: -50 }, end: { top: '-10%', left: '120%' } },
  { id: 19, color: 'rose', start: { top: '48%', left: '18%', rotate: 15 }, end: { top: '30%', left: '-40%' } },
  { id: 20, color: 'gold', start: { top: '50%', left: '82%', rotate: -15 }, end: { top: '30%', left: '140%' } },
  { id: 21, color: 'white', start: { top: '60%', left: '22%', rotate: 30 }, end: { top: '90%', left: '-30%' } },
  { id: 22, color: 'rose', start: { top: '58%', left: '78%', rotate: -30 }, end: { top: '80%', left: '130%' } },
];

const InteractiveButterflies = ({ hasTapped }) => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 50, overflow: 'hidden' }}>
      {butterflyConfigs.map((config) => (
        <motion.div
          key={config.id}
          initial={{ 
            top: config.start.top, 
            left: config.start.left, 
            rotate: config.start.rotate,
            opacity: 1
          }}
          animate={hasTapped ? {
            top: config.end.top,
            left: config.end.left,
            rotate: config.start.rotate + (Math.random() > 0.5 ? 45 : -45),
            opacity: 0,
          } : {
            top: config.start.top, 
            left: config.start.left,
            rotate: config.start.rotate,
            opacity: 1
          }}
          transition={hasTapped ? { 
            duration: 1.5 + Math.random() * 0.5, 
            ease: "easeIn" 
          } : { 
            duration: 0 
          }}
          style={{ position: 'absolute' }}
        >
          <ButterflySVG color={config.color} animated={hasTapped} />
        </motion.div>
      ))}
    </div>
  );
};

export default InteractiveButterflies;
