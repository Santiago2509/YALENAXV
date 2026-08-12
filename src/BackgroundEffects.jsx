import { motion } from 'framer-motion';

/* ── Destello en forma de estrella ── */
const Twinkle = ({ top, left, delay, size = 12 }) => (
  <motion.div
    style={{
      position: 'absolute',
      top, left,
      width: size, height: size,
      pointerEvents: 'none',
      zIndex: 1,
    }}
    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5], rotate: [0, 45, 0] }}
    transition={{ duration: 3.5, repeat: Infinity, delay, ease: 'easeInOut' }}
  >
    <svg viewBox="0 0 24 24" width={size} height={size}>
      <line x1="12" y1="2" x2="12" y2="22" stroke="rgba(181,136,67,0.9)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="2" y1="12" x2="22" y2="12" stroke="rgba(181,136,67,0.9)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5" y1="5" x2="19" y2="19" stroke="rgba(181,136,67,0.5)" strokeWidth="1" strokeLinecap="round"/>
      <line x1="19" y1="5" x2="5" y2="19" stroke="rgba(181,136,67,0.5)" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2" fill="rgba(181,136,67,1)"/>
    </svg>
  </motion.div>
);

/* ── Orbe/halo de brillo animado ── */
const GlowOrb = ({ top, left, width, height, delay, color = 'rgba(181,136,67,0.10)' }) => (
  <motion.div
    style={{
      position: 'absolute', top, left,
      width, height,
      borderRadius: '50%',
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      pointerEvents: 'none',
      zIndex: 1,
    }}
    animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
    transition={{ duration: 5, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

/* ── Curva lateral SVG  ── */
const SideCurve = ({ style, d, delay }) => (
  <div style={{ position: 'absolute', pointerEvents: 'none', zIndex: 1, ...style }}>
    <svg width="80" height="200" viewBox="0 0 80 200" fill="none">
      <motion.path
        d={d}
        stroke="rgba(181,136,67,0.5)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.8, 0.8, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay, ease: 'easeInOut' }}
      />
    </svg>
  </div>
);

export default function BackgroundEffects() {
  const twinkles = [
    { top: '22%',  left: '4%',  delay: 0,   size: 14 },
    { top: '18%',  left: '88%', delay: 1.2, size: 11 },
    { top: '35%',  left: '7%',  delay: 2.5, size: 16 },
    { top: '38%',  left: '85%', delay: 0.7, size: 12 },
    { top: '52%',  left: '3%',  delay: 3.1, size: 13 },
    { top: '55%',  left: '90%', delay: 1.8, size: 10 },
    { top: '68%',  left: '6%',  delay: 0.4, size: 15 },
    { top: '72%',  left: '87%', delay: 2.0, size: 11 },
    { top: '82%',  left: '5%',  delay: 1.5, size: 12 },
    { top: '86%',  left: '88%', delay: 3.5, size: 14 },
    { top: '30%',  left: '46%', delay: 2.8, size: 9  },
    { top: '60%',  left: '50%', delay: 1.0, size: 10 },
  ];

  return (
    <div style={{
      position: 'absolute',
      top: 0, left: 0,
      width: '100%', height: '100%',
      pointerEvents: 'none',
      zIndex: 2,
      overflow: 'hidden',
    }}>

      {/* ── Patrón de puntos dorados (textura de fondo) ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '100%', height: '100%',
        backgroundImage: 'radial-gradient(circle, rgba(181,136,67,0.38) 1.5px, transparent 1.5px)',
        backgroundSize: '26px 26px',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* ── Líneas diagonales sutiles ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '100%', height: '100%',
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(181,136,67,0.10) 0px, rgba(181,136,67,0.10) 1px, transparent 1px, transparent 38px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* ── Orbes de brillo ── */}
      <GlowOrb top="15%" left="-60px" width="220px" height="220px" delay={0}   color="rgba(181,136,67,0.22)" />
      <GlowOrb top="42%" left="-50px" width="200px" height="200px" delay={2}   color="rgba(181,136,67,0.18)" />
      <GlowOrb top="70%" left="-55px" width="210px" height="210px" delay={4}   color="rgba(181,136,67,0.20)" />
      <GlowOrb top="15%" left="calc(100% - 140px)" width="220px" height="220px" delay={1}   color="rgba(181,136,67,0.20)" />
      <GlowOrb top="50%" left="calc(100% - 130px)" width="200px" height="200px" delay={3}   color="rgba(181,136,67,0.18)" />
      <GlowOrb top="78%" left="calc(100% - 145px)" width="215px" height="215px" delay={1.5} color="rgba(181,136,67,0.20)" />

      {/* ── Curvas laterales izquierda ── */}
      <SideCurve style={{ top: '20%', left: 0 }} d="M 5 10 C 30 50, 60 80, 20 120 S 50 160, 10 190" delay={0}   />
      <SideCurve style={{ top: '48%', left: 0 }} d="M 10 5 C 50 40, 70 90, 15 130 S 55 170, 8 195"  delay={2.5} />
      <SideCurve style={{ top: '73%', left: 0 }} d="M 5 15 C 35 55, 65 85, 18 125 S 52 165, 12 190" delay={5}   />

      {/* ── Curvas laterales derecha ── */}
      <SideCurve style={{ top: '20%', right: 0 }} d="M 75 10 C 50 50, 20 80, 60 120 S 30 160, 70 190" delay={1.5} />
      <SideCurve style={{ top: '48%', right: 0 }} d="M 70 5 C 30 40, 10 90, 65 130 S 25 170, 72 195"  delay={4}   />
      <SideCurve style={{ top: '73%', right: 0 }} d="M 75 15 C 45 55, 15 85, 62 125 S 28 165, 68 190" delay={0.8} />

      {/* ── Destellos ✦ ── */}
      {twinkles.map((t, i) => <Twinkle key={i} {...t} />)}
    </div>
  );
}
