import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Anillo pulsante de fondo
const PulseRing = ({ delay, size }) => (
  <motion.div
    style={{
      position: 'absolute',
      top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
      width: size, height: size,
      borderRadius: '50%',
      border: '1.5px solid rgba(181,136,67,0.3)',
      pointerEvents: 'none',
    }}
    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
    transition={{ duration: 2.5, delay, repeat: Infinity, ease: 'easeOut' }}
  />
);

// Estrellita flotante
const FloatingStar = ({ top, left, delay }) => (
  <motion.div
    style={{
      position: 'absolute', top, left,
      fontSize: '12px', color: '#b58843',
      pointerEvents: 'none', userSelect: 'none',
    }}
    animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: 'easeInOut' }}
  >
    ✦
  </motion.div>
);

// Caja de número
const NumberBox = ({ number, label }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '15px 10px',
    borderRadius: '15px',
    minWidth: '68px',
    boxShadow: 'inset 0 0 10px rgba(181, 136, 67, 0.2), 0 4px 15px rgba(0,0,0,0.05)',
    border: '1px solid rgba(181, 136, 67, 0.3)'
  }}>
    <span style={{
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#8c6420',
      lineHeight: 1
    }}>
      {number < 10 ? `0${number}` : number}
    </span>
    <span style={{
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '0.75rem',
      color: '#b76e79',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginTop: '5px'
    }}>
      {label}
    </span>
  </div>
);

const Countdown = () => {
  const targetDate = new Date('2026-08-29T18:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const stars = [
    { top: '10%', left: '5%',  delay: 0   },
    { top: '20%', left: '88%', delay: 0.8 },
    { top: '65%', left: '7%',  delay: 1.5 },
    { top: '75%', left: '85%', delay: 0.4 },
    { top: '88%', left: '45%', delay: 1.2 },
  ];

  return (
    <div style={{ padding: '10px 20px 40px', textAlign: 'center', background: '#fffafb' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.86, y: 45 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ type: 'spring', stiffness: 95, damping: 15, delay: 0.1 }}
        style={{
          background: 'linear-gradient(135deg, rgba(253, 240, 166, 0.12), rgba(181, 136, 67, 0.06))',
          borderRadius: '20px',
          padding: '40px 20px',
          border: '1px solid rgba(181, 136, 67, 0.25)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '200px',
        }}
      >
        {/* Anillos pulsantes centrados */}
        <PulseRing delay={0}   size="180px" />
        <PulseRing delay={0.9} size="260px" />
        <PulseRing delay={1.8} size="340px" />

        {/* Estrellitas flotantes */}
        {stars.map((s, i) => <FloatingStar key={i} {...s} />)}

        {/* Contenido */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <h3 className="font-cursive" style={{ fontSize: '2.5rem', color: '#b76e79', margin: '0 0 6px 0', fontWeight: 400 }}>
            Falta muy poco...
          </h3>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.85rem',
            color: '#8c6420',
            marginBottom: '28px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Para el gran día
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <NumberBox number={timeLeft.days}    label="Días" />
            <NumberBox number={timeLeft.hours}   label="Hrs" />
            <NumberBox number={timeLeft.minutes} label="Min" />
            <NumberBox number={timeLeft.seconds} label="Seg" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown;
