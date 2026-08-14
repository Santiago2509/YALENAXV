import React from 'react';
import { motion } from 'framer-motion';

const PetalSVG = ({ size = 24, color = 'rose' }) => {
  const colors = {
    rose: { main: '#e89ab0', shadow: '#b56576', light: '#f7cad0' },
    gold: { main: '#f3c677', shadow: '#b58843', light: '#fdf0a6' },
    deep: { main: '#c05273', shadow: '#7a203c', light: '#e89ab0' },
  };
  const c = colors[color] || colors.rose;
  const id = `petal-${color}-${Math.random().toString(36).substr(2, 4)}`;

  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 40 52" fill="none" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c.light} />
          <stop offset="50%" stopColor={c.main} />
          <stop offset="100%" stopColor={c.shadow} />
        </linearGradient>
      </defs>
      <path
        d="M20 2 C32 10, 40 25, 35 38 C30 48, 10 50, 5 38 C0 25, 8 10, 20 2 Z"
        fill={`url(#${id})`}
        opacity="0.9"
      />
      {/* Vena central del pétalo */}
      <path d="M20 8 Q21 28 18 44" stroke={c.shadow} strokeWidth="0.8" opacity="0.4" fill="none" />
    </svg>
  );
};

const FallingPetal = ({ left, delay, duration, size, rotateStart, rotateEnd, drift, color }) => (
  <motion.div
    style={{
      position: 'absolute',
      left: `${left}%`,
      top: '-40px',
      pointerEvents: 'none',
      zIndex: 6,
    }}
    animate={{
      y: ['0vh', '85vh'],
      x: [0, drift, -drift, drift / 2, 0],
      rotate: [rotateStart, rotateStart + 120, rotateEnd],
      rotateY: [0, 180, 360],
      opacity: [0, 0.95, 0.85, 0.4, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  >
    <PetalSVG size={size} color={color} />
  </motion.div>
);

const FallingPetals = () => {
  const petals = [
    { left: 5,   delay: 0,   duration: 7,   size: 22, rotateStart: 10,  rotateEnd: 180, drift: 25,  color: 'rose' },
    { left: 18,  delay: 2.5, duration: 8.5, size: 26, rotateStart: -20, rotateEnd: 240, drift: -30, color: 'deep' },
    { left: 30,  delay: 1.2, duration: 6.8, size: 20, rotateStart: 45,  rotateEnd: 200, drift: 20,  color: 'gold' },
    { left: 42,  delay: 3.8, duration: 9,   size: 28, rotateStart: -15, rotateEnd: 300, drift: -25, color: 'rose' },
    { left: 55,  delay: 0.5, duration: 7.2, size: 24, rotateStart: 30,  rotateEnd: 150, drift: 35,  color: 'deep' },
    { left: 68,  delay: 2.0, duration: 8,   size: 22, rotateStart: -35, rotateEnd: 210, drift: -20, color: 'rose' },
    { left: 80,  delay: 4.2, duration: 7.5, size: 25, rotateStart: 15,  rotateEnd: 270, drift: 30,  color: 'gold' },
    { left: 92,  delay: 1.7, duration: 8.8, size: 21, rotateStart: -45, rotateEnd: 190, drift: -15, color: 'rose' },
    { left: 12,  delay: 4.8, duration: 7.8, size: 23, rotateStart: 25,  rotateEnd: 220, drift: 20,  color: 'deep' },
    { left: 25,  delay: 3.1, duration: 6.5, size: 27, rotateStart: -10, rotateEnd: 160, drift: -35, color: 'rose' },
    { left: 48,  delay: 5.2, duration: 8.2, size: 19, rotateStart: 60,  rotateEnd: 310, drift: 15,  color: 'gold' },
    { left: 62,  delay: 1.0, duration: 7.0, size: 25, rotateStart: -25, rotateEnd: 250, drift: -25, color: 'deep' },
    { left: 75,  delay: 3.5, duration: 8.6, size: 24, rotateStart: 40,  rotateEnd: 180, drift: 30,  color: 'rose' },
    { left: 88,  delay: 0.8, duration: 6.9, size: 22, rotateStart: -50, rotateEnd: 200, drift: -20, color: 'rose' },
  ];

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 5,
    }}>
      {petals.map((p, i) => (
        <FallingPetal key={i} {...p} />
      ))}
    </div>
  );
};

export default FallingPetals;
