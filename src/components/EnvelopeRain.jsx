import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const EnvelopeSVG = ({ size = 40, color = '#b58843' }) => (
  <svg width={size} height={size} viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="62" height="46" rx="4" fill="white" stroke={color} strokeWidth="2"/>
    <path d="M1 5 L32 28 L63 5" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M1 43 L22 24" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M63 43 L42 24" stroke={color} strokeWidth="1.5" fill="none"/>
  </svg>
);

// Individual falling envelope
const FallingEnvelope = ({ delay, left, duration, size, rotate }) => (
  <motion.div
    style={{
      position: 'absolute',
      left: `${left}%`,
      top: '-60px',
      opacity: 0,
    }}
    animate={{
      y: ['0px', '500px'],
      opacity: [0, 1, 1, 0],
      rotate: [rotate, rotate + 20, rotate - 10, rotate + 5],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeIn',
    }}
  >
    <EnvelopeSVG size={size} color="#b58843" />
  </motion.div>
);

const EnvelopeRain = () => {
  const envelopes = [
    { delay: 0,    left: 10, duration: 3.5, size: 32, rotate: -15 },
    { delay: 0.6,  left: 25, duration: 4.2, size: 40, rotate: 10  },
    { delay: 1.2,  left: 45, duration: 3.8, size: 28, rotate: -5  },
    { delay: 0.3,  left: 60, duration: 4.5, size: 36, rotate: 20  },
    { delay: 1.8,  left: 78, duration: 3.2, size: 30, rotate: -20 },
    { delay: 0.9,  left: 88, duration: 4.0, size: 38, rotate: 8   },
    { delay: 2.2,  left: 35, duration: 3.6, size: 26, rotate: -12 },
    { delay: 1.5,  left: 68, duration: 4.3, size: 34, rotate: 15  },
  ];

  return (
    <div style={{ padding: '40px 20px 30px', textAlign: 'center', background: '#fffafb' }}>
      <motion.div
        initial={{ opacity: 0, y: 55, scale: 0.88 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ type: 'spring', stiffness: 95, damping: 15, delay: 0.1 }}
        style={{
          background: 'linear-gradient(135deg, rgba(253,240,166,0.15), rgba(181,136,67,0.08))',
          borderRadius: '20px',
          padding: '30px 20px',
          border: '1px solid rgba(181,136,67,0.25)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
          position: 'relative',
          overflow: 'visible',
          minHeight: '260px',
        }}
      >
        {/* Marco de flores en el contorno (10% más grande) */}
        <img 
          src="/marco_flores.png" 
          alt="Marco de flores" 
          style={{
            position: 'absolute',
            top: '-32px',
            left: '-32px',
            width: 'calc(100% + 64px)',
            height: 'calc(100% + 64px)',
            objectFit: 'fill',
            pointerEvents: 'none',
            zIndex: 15
          }} 
        />

        {/* Falling envelopes animation */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden', zIndex: 5 }}>
          {envelopes.map((env, i) => (
            <FallingEnvelope key={i} {...env} />
          ))}
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, padding: '20px 15px' }}>
          <div style={{ marginBottom: '12px' }}>
            <EnvelopeSVG size={52} color="#b58843" />
          </div>

          <h3 className="font-cursive" style={{
            fontSize: '3rem',
            color: '#b76e79',
            margin: '0',
            fontWeight: 400,
          }}>
            Lluvia de Sobres
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

export default EnvelopeRain;
