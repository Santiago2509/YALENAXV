import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  // Configura aquí la fecha exacta del evento
  const targetDate = new Date('2026-08-28T18:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        // Cuando llegue la fecha, puede quedar en 0 o cambiar a un mensaje
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const NumberBox = ({ number, label }) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '15px 10px',
      borderRadius: '15px',
      minWidth: '70px',
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

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', background: '#fffafb' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          background: 'linear-gradient(135deg, rgba(253, 240, 166, 0.1), rgba(181, 136, 67, 0.05))',
          borderRadius: '20px',
          padding: '30px 20px',
          border: '1px solid rgba(181, 136, 67, 0.2)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}
      >
        <h3 className="font-cursive" style={{ fontSize: '2.5rem', color: '#b76e79', margin: '0 0 10px 0', fontWeight: 400 }}>
          Falta muy poco...
        </h3>
        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.9rem',
          color: '#8c6420',
          marginBottom: '25px',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Para el gran día
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <NumberBox number={timeLeft.days} label="Días" />
          <NumberBox number={timeLeft.hours} label="Hrs" />
          <NumberBox number={timeLeft.minutes} label="Min" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown;
