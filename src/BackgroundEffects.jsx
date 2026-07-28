import { motion } from 'framer-motion';

const Sparkle = ({ cx, cy, delay, size = 12 }) => (
  <motion.path
    d={`M${cx},${cy - size} Q${cx},${cy} ${cx - size},${cy} Q${cx},${cy} ${cx},${cy + size} Q${cx},${cy} ${cx + size},${cy} Q${cx},${cy} ${cx},${cy - size}`}
    fill="rgba(218, 165, 32, 0.7)" 
    initial={{ scale: 0, opacity: 0, rotate: 0 }}
    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: [0, 90, 180] }}
    transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
    style={{ transformOrigin: `${cx}px ${cy}px` }}
  />
);

const Curl = ({ d, delay }) => (
  <motion.path
    d={d}
    fill="transparent"
    stroke="rgba(218, 165, 32, 0.5)"
    strokeWidth="2.5"
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const Leaf = ({ cx, cy, angle, delay }) => (
  <motion.path
    d={`M ${cx} ${cy} C ${cx+8} ${cy-8}, ${cx+16} ${cy-4}, ${cx+20} ${cy+4} C ${cx+12} ${cy+12}, ${cx+4} ${cy+8}, ${cx} ${cy}`}
    fill="rgba(218, 165, 32, 0.3)"
    stroke="rgba(218, 165, 32, 0.6)"
    strokeWidth="1.5"
    initial={{ scale: 0, opacity: 0, rotate: angle }}
    animate={{ scale: [0, 1, 1], opacity: [0, 1, 0], rotate: angle }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
    style={{ transformOrigin: `${cx}px ${cy}px` }}
  />
);

const Flower = ({ cx, cy, delay }) => (
  <motion.g
    initial={{ scale: 0, opacity: 0, rotate: 0 }}
    animate={{ scale: [0, 1, 1], opacity: [0, 1, 0], rotate: 45 }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
    style={{ transformOrigin: `${cx}px ${cy}px` }}
  >
    <circle cx={cx} cy={cy} r="3" fill="rgba(218, 165, 32, 0.8)" />
    <path d={`M ${cx} ${cy-3} C ${cx-5} ${cy-10}, ${cx+5} ${cy-10}, ${cx} ${cy-3}`} fill="rgba(218, 165, 32, 0.4)" stroke="rgba(218, 165, 32, 0.6)" strokeWidth="1"/>
    <path d={`M ${cx} ${cy+3} C ${cx-5} ${cy+10}, ${cx+5} ${cy+10}, ${cx} ${cy+3}`} fill="rgba(218, 165, 32, 0.4)" stroke="rgba(218, 165, 32, 0.6)" strokeWidth="1"/>
    <path d={`M ${cx-3} ${cy} C ${cx-10} ${cy-5}, ${cx-10} ${cy+5}, ${cx-3} ${cy}`} fill="rgba(218, 165, 32, 0.4)" stroke="rgba(218, 165, 32, 0.6)" strokeWidth="1"/>
    <path d={`M ${cx+3} ${cy} C ${cx+10} ${cy-5}, ${cx+10} ${cy+5}, ${cx+3} ${cy}`} fill="rgba(218, 165, 32, 0.4)" stroke="rgba(218, 165, 32, 0.6)" strokeWidth="1"/>
  </motion.g>
);

export default function BackgroundEffects() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 5,
      overflow: 'hidden'
    }}>
      <svg width="100%" height="100%" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute' }}>
        
        {/* VECTORES DESORDENADOS APUNTANDO HACIA LA CARTA */}
        
        {/* Esquina Superior Izquierda hacia el centro */}
        <Curl d="M -20 200 C 80 180, 50 280, 140 270 S 120 220, 160 210" delay={0} />
        <Curl d="M 50 120 Q 150 180 100 240 T 170 240" delay={1.5} />
        <Leaf cx={100} cy={240} angle={-30} delay={1.5} />
        <Leaf cx={140} cy={270} angle={45} delay={0.5} />
        <Flower cx={120} cy={220} delay={1} />
        
        {/* Esquina Superior Derecha hacia el centro */}
        <Curl d="M 420 200 C 320 180, 350 280, 260 270 S 280 220, 240 210" delay={2} />
        <Curl d="M 350 120 Q 250 180 300 240 T 230 240" delay={3.5} />
        <Leaf cx={300} cy={240} angle={30} delay={3.5} />
        <Leaf cx={260} cy={270} angle={-45} delay={2.5} />
        <Flower cx={280} cy={220} delay={3} />

        {/* Esquina Inferior Izquierda hacia el centro */}
        <Curl d="M -20 600 C 80 620, 50 520, 140 530 S 120 580, 160 590" delay={1} />
        <Curl d="M 50 680 Q 150 620 100 560 T 170 560" delay={2.5} />
        <Leaf cx={100} cy={560} angle={-120} delay={2.5} />
        <Leaf cx={140} cy={530} angle={135} delay={1.5} />
        <Flower cx={120} cy={580} delay={2} />

        {/* Esquina Inferior Derecha hacia el centro */}
        <Curl d="M 420 600 C 320 620, 350 520, 260 530 S 280 580, 240 590" delay={3} />
        <Curl d="M 350 680 Q 250 620 300 560 T 230 560" delay={4.5} />
        <Leaf cx={300} cy={560} angle={120} delay={4.5} />
        <Leaf cx={260} cy={530} angle={-135} delay={3.5} />
        <Flower cx={280} cy={580} delay={4} />

        {/* Vectores laterales desordenados apuntando al sobre */}
        <Curl d="M 20 350 Q 80 400 50 450 T 90 480" delay={0.5} />
        <Curl d="M 380 350 Q 320 400 350 450 T 310 480" delay={2.5} />
        <Leaf cx={50} cy={450} angle={-90} delay={0.8} />
        <Leaf cx={350} cy={450} angle={90} delay={2.8} />

        {/* Algunos vectores saliendo de detrás del sobre aleatorios */}
        <Curl d="M 200 400 Q 100 350 150 200" delay={4} />
        <Curl d="M 200 400 Q 300 450 250 600" delay={1.5} />
        
        {/* SPARKLES MAGICOS DESORDENADOS */}
        <Sparkle cx={80} cy={160} delay={0} size={15} />
        <Sparkle cx={320} cy={140} delay={1.5} size={10} />
        <Sparkle cx={180} cy={220} delay={3} size={8} />
        <Sparkle cx={260} cy={180} delay={2} size={12} />
        <Sparkle cx={120} cy={280} delay={0.5} size={14} />
        <Sparkle cx={300} cy={270} delay={2.5} size={10} />
        
        <Sparkle cx={90} cy={640} delay={1} size={14} />
        <Sparkle cx={300} cy={660} delay={2.5} size={10} />
        <Sparkle cx={220} cy={580} delay={4} size={12} />
        <Sparkle cx={140} cy={620} delay={0} size={8} />
        <Sparkle cx={100} cy={520} delay={3.5} size={15} />
        <Sparkle cx={320} cy={540} delay={1.5} size={12} />

      </svg>
    </div>
  );
}
