import React from 'react';
import { motion } from 'framer-motion';

const ElegantDivider = () => (
  <motion.div
    className="section-divider"
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.1, ease: 'easeOut' }}
  >
    <div className="churro-divider">
      <svg viewBox="0 0 340 48" width="100%" height="48" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b58843" stopOpacity="0"/>
            <stop offset="30%" stopColor="#b58843" stopOpacity="1"/>
            <stop offset="70%" stopColor="#b58843" stopOpacity="1"/>
            <stop offset="100%" stopColor="#b58843" stopOpacity="0"/>
          </linearGradient>
        </defs>

        {/* === Línea base izquierda === */}
        <path d="M8,24 Q80,14 148,24" fill="none" stroke="url(#goldLine)" strokeWidth="1" strokeLinecap="round"/>
        {/* === Línea base derecha === */}
        <path d="M192,24 Q260,14 332,24" fill="none" stroke="url(#goldLine)" strokeWidth="1" strokeLinecap="round"/>

        {/* === Hoja izquierda === */}
        <path d="M60,24 Q80,14 100,24 Q80,34 60,24 Z" fill="none" stroke="#b58843" strokeWidth="1" opacity="0.85"/>
        <circle cx="80" cy="24" r="1.8" fill="#b58843" opacity="0.9"/>

        {/* === Hoja derecha === */}
        <path d="M240,24 Q260,14 280,24 Q260,34 240,24 Z" fill="none" stroke="#b58843" strokeWidth="1" opacity="0.85"/>
        <circle cx="260" cy="24" r="1.8" fill="#b58843" opacity="0.9"/>

        {/* === Diamante central === */}
        <polygon points="170,10 182,24 170,38 158,24" fill="rgba(181,136,67,0.12)" stroke="#b58843" strokeWidth="1.4"/>
        {/* Interior del diamante */}
        <polygon points="170,15 178,24 170,33 162,24" fill="rgba(181,136,67,0.18)" stroke="#b58843" strokeWidth="0.8" opacity="0.7"/>
        {/* Punto brillante central */}
        <circle cx="170" cy="24" r="2.5" fill="#b58843"/>
        <circle cx="170" cy="24" r="1.2" fill="#fdf0a6"/>

        {/* === Puntos extremos === */}
        <circle cx="8" cy="24" r="1.5" fill="#b58843" opacity="0.5"/>
        <circle cx="332" cy="24" r="1.5" fill="#b58843" opacity="0.5"/>

        {/* === Pequeños destellos ✦ === */}
        <text x="38" y="28" fontSize="7" fill="#b58843" opacity="0.7" textAnchor="middle">✦</text>
        <text x="302" y="28" fontSize="7" fill="#b58843" opacity="0.7" textAnchor="middle">✦</text>
      </svg>
    </div>
  </motion.div>
);

export default ElegantDivider;
