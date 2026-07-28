import React from 'react';
import { motion } from 'framer-motion';

const Butterflies = () => {
  const ButterflySVG = () => (
    <svg viewBox="0 0 100 100" width="45" height="45" style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.3))' }}>
      {/* Ala Izquierda */}
      <motion.g
        style={{ transformOrigin: '50% 50%' }}
        animate={{ scaleX: [1, 0.2, 1] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path 
          d="M50 50 C30 10, 0 20, 10 50 C20 80, 40 70, 50 50 Z" 
          fill="url(#gold-butterfly-wings)" 
          opacity="0.85"
        />
        <path 
          d="M50 50 C30 80, 10 90, 20 60 C30 40, 40 40, 50 50 Z" 
          fill="url(#gold-butterfly-wings)" 
          opacity="0.9"
        />
      </motion.g>

      {/* Ala Derecha */}
      <motion.g
        style={{ transformOrigin: '50% 50%' }}
        animate={{ scaleX: [1, 0.2, 1] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path 
          d="M50 50 C70 10, 100 20, 90 50 C80 80, 60 70, 50 50 Z" 
          fill="url(#gold-butterfly-wings)" 
          opacity="0.85"
        />
        <path 
          d="M50 50 C70 80, 90 90, 80 60 C70 40, 60 40, 50 50 Z" 
          fill="url(#gold-butterfly-wings)" 
          opacity="0.9"
        />
      </motion.g>

      {/* Cuerpo */}
      <rect x="48" y="35" width="4" height="30" rx="2" fill="#6b4c1a" />
      <circle cx="50" cy="35" r="4" fill="#6b4c1a" />
      
      {/* Antenas */}
      <path d="M48 33 Q40 20, 35 25 M52 33 Q60 20, 65 25" fill="none" stroke="#6b4c1a" strokeWidth="1.5" />
      
      <defs>
        <linearGradient id="gold-butterfly-wings" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c766" />
          <stop offset="50%" stopColor="#fff5cc" />
          <stop offset="100%" stopColor="#b58843" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className="butterflies-layer">
      {/* Mariposa 1 - Cruza toda la pantalla diagonalmente */}
      <motion.div 
        className="butterfly"
        initial={{ left: '-10%', top: '110%' }}
        animate={{ 
          left: ['-10%', '110%'],
          top: ['110%', '-10%'],
          rotate: [15, 30, 15, 45, 20]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <ButterflySVG />
      </motion.div>

      {/* Mariposa 2 - Sube haciendo zig zag lento */}
      <motion.div 
        className="butterfly"
        initial={{ left: '20%', top: '120%' }}
        animate={{ 
          top: ['120%', '-20%'],
          left: ['20%', '40%', '10%', '30%', '20%'],
          rotate: [-10, 20, -15, 10, -5]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
      >
        <ButterflySVG />
      </motion.div>

      {/* Mariposa 3 - Vuela de derecha a izquierda arriba */}
      <motion.div 
        className="butterfly"
        initial={{ left: '110%', top: '40%' }}
        animate={{ 
          left: ['110%', '-20%'],
          top: ['40%', '20%', '50%', '10%'],
          rotate: [-45, -60, -30, -50]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 10 }}
      >
        <ButterflySVG />
      </motion.div>

       {/* Mariposa 4 - Vuela desde abajo al centro y se va */}
       <motion.div 
        className="butterfly"
        initial={{ left: '80%', top: '110%' }}
        animate={{ 
          left: ['80%', '50%', '90%'],
          top: ['110%', '50%', '-20%'],
          rotate: [-20, 0, -40]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
      >
        <ButterflySVG />
      </motion.div>
    </div>
  );
};

export default Butterflies;
