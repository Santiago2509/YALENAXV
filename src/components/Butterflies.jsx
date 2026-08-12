import React from 'react';
import { motion } from 'framer-motion';

const Butterflies = ({ startFlying = true }) => {
  if (!startFlying) return null;

  // Mariposa con alas que rotan en 3D (mucho más realista)
  const ButterflySVG = ({ color = "gold", size = 48 }) => {
    const palettes = {
      gold:  { top: '#fdf0a6', mid: '#e8c766', dark: '#b58843', body: '#6b4c1a' },
      rose:  { top: '#fecfef', mid: '#ff9ec0', dark: '#c06c84', body: '#7a2a50' },
      white: { top: '#ffffff', mid: '#f0f4ff', dark: '#c8d6e8', body: '#5a6a7a' },
    };
    const p = palettes[color] || palettes.gold;
    const uid = `bf-${color}-${Math.random().toString(36).substr(2,5)}`;

    return (
      <svg viewBox="0 0 120 100" width={size} height={size} style={{ overflow: 'visible', filter: `drop-shadow(0 3px 8px ${p.dark}66)` }}>
        <defs>
          <radialGradient id={`${uid}-wl`} cx="60%" cy="40%" r="60%">
            <stop offset="0%"   stopColor={p.top} />
            <stop offset="50%"  stopColor={p.mid} />
            <stop offset="100%" stopColor={p.dark} />
          </radialGradient>
          <radialGradient id={`${uid}-wr`} cx="40%" cy="40%" r="60%">
            <stop offset="0%"   stopColor={p.top} />
            <stop offset="50%"  stopColor={p.mid} />
            <stop offset="100%" stopColor={p.dark} />
          </radialGradient>
          {/* Venas del ala */}
          <filter id={`${uid}-glow`}>
            <feGaussianBlur stdDeviation="1" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>

        {/* Ala superior izquierda */}
        <motion.g
          style={{ transformOrigin: '60px 55px' }}
          animate={{ rotateY: [0, 70, 0] }}
          transition={{ duration: 0.55, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M60 55 C45 20, 5 10, 8 42 C10 62, 35 72, 60 55 Z"
            fill={`url(#${uid}-wl)`}
            opacity="0.92"
          />
          {/* Ala inferior izquierda */}
          <path
            d="M60 55 C40 72, 12 88, 20 68 C28 50, 48 52, 60 55 Z"
            fill={`url(#${uid}-wl)`}
            opacity="0.78"
          />
          {/* Detalle / vena del ala */}
          <path
            d="M60 55 C45 38, 22 28, 18 45"
            fill="none" stroke={p.dark} strokeWidth="0.8" opacity="0.4"
          />
          <path
            d="M60 55 C42 62, 28 74, 30 64"
            fill="none" stroke={p.dark} strokeWidth="0.6" opacity="0.3"
          />
          {/* Lunares decorativos */}
          <circle cx="25" cy="38" r="4" fill={p.dark} opacity="0.35" />
          <circle cx="30" cy="55" r="2.5" fill={p.dark} opacity="0.25" />
        </motion.g>

        {/* Ala superior derecha */}
        <motion.g
          style={{ transformOrigin: '60px 55px' }}
          animate={{ rotateY: [0, -70, 0] }}
          transition={{ duration: 0.55, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M60 55 C75 20, 115 10, 112 42 C110 62, 85 72, 60 55 Z"
            fill={`url(#${uid}-wr)`}
            opacity="0.92"
          />
          {/* Ala inferior derecha */}
          <path
            d="M60 55 C80 72, 108 88, 100 68 C92 50, 72 52, 60 55 Z"
            fill={`url(#${uid}-wr)`}
            opacity="0.78"
          />
          {/* Detalle / vena */}
          <path
            d="M60 55 C75 38, 98 28, 102 45"
            fill="none" stroke={p.dark} strokeWidth="0.8" opacity="0.4"
          />
          <path
            d="M60 55 C78 62, 92 74, 90 64"
            fill="none" stroke={p.dark} strokeWidth="0.6" opacity="0.3"
          />
          {/* Lunares decorativos */}
          <circle cx="95" cy="38" r="4" fill={p.dark} opacity="0.35" />
          <circle cx="90" cy="55" r="2.5" fill={p.dark} opacity="0.25" />
        </motion.g>

        {/* Cuerpo */}
        <ellipse cx="60" cy="58" rx="3" ry="14" fill={p.body} />
        {/* Cabeza */}
        <circle cx="60" cy="43" r="4.5" fill={p.body} />
        {/* Antenas con bolitas */}
        <path d="M58 40 Q50 28, 44 30" fill="none" stroke={p.body} strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="44" cy="30" r="2" fill={p.body} />
        <path d="M62 40 Q70 28, 76 30" fill="none" stroke={p.body} strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="76" cy="30" r="2" fill={p.body} />
      </svg>
    );
  };

  const butterflies = [
    { color: 'gold',  size: 52, init: { left: '-10%', top: '110%' }, anim: { left: ['-10%','110%'], top: ['110%','-10%'], rotate: [15,30,15,45,20] }, dur: 18, delay: 0  },
    { color: 'rose',  size: 44, init: { left: '20%',  top: '120%' }, anim: { top: ['120%','-20%'], left: ['20%','40%','10%','30%','20%'], rotate: [-10,20,-15,10,-5] }, dur: 25, delay: 5  },
    { color: 'white', size: 48, init: { left: '110%', top: '40%'  }, anim: { left: ['110%','-20%'], top: ['40%','20%','50%','10%'], rotate: [-45,-60,-30,-50] }, dur: 22, delay: 10 },
    { color: 'rose',  size: 40, init: { left: '80%',  top: '110%' }, anim: { left: ['80%','50%','90%'], top: ['110%','50%','-20%'], rotate: [-20,0,-40] }, dur: 20, delay: 2  },
    { color: 'white', size: 46, init: { left: '-20%', top: '50%'  }, anim: { left: ['-20%','120%'], top: ['50%','20%','60%','10%'], rotate: [45,20,45,10] }, dur: 25, delay: 3  },
    { color: 'gold',  size: 50, init: { left: '60%',  top: '120%' }, anim: { top: ['120%','-20%'], left: ['60%','30%','50%'], rotate: [-15,15,-10] }, dur: 18, delay: 7  },
    { color: 'rose',  size: 42, init: { left: '120%', top: '70%'  }, anim: { left: ['120%','-20%'], top: ['70%','90%','40%'], rotate: [-60,-30,-50] }, dur: 28, delay: 1  },
    { color: 'white', size: 44, init: { left: '10%',  top: '-20%' }, anim: { top: ['-20%','120%'], left: ['10%','30%','0%'], rotate: [180,200,170] }, dur: 22, delay: 12 },
  ];

  return (
    <div className="butterflies-layer">
      {butterflies.map((b, i) => (
        <motion.div
          key={i}
          className="butterfly"
          initial={b.init}
          animate={b.anim}
          transition={{ duration: b.dur, repeat: Infinity, ease: 'linear', delay: b.delay }}
        >
          <ButterflySVG color={b.color} size={b.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default Butterflies;
