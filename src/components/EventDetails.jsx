import React from 'react';
import { motion } from 'framer-motion';
import ElegantDivider from './ElegantDivider';

/* ── Destellos dorados para Ceremonia ── */
const Sparkle = ({ top, left, delay, size }) => (
  <motion.div
    style={{
      position: 'absolute', top, left,
      width: size, height: size,
      borderRadius: '50%',
      background: 'radial-gradient(circle, #fff9c0 0%, #fdf0a6 30%, #b58843 70%, transparent 100%)',
      pointerEvents: 'none',
      boxShadow: '0 0 8px 3px rgba(253,240,166,0.6)',
    }}
    animate={{ opacity: [0, 1, 0], scale: [0.4, 1.6, 0.4] }}
    transition={{ duration: 2, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

/* ── Burbujas para Recepción ── */
const Bubble = ({ left, delay, size }) => (
  <motion.div
    style={{
      position: 'absolute', bottom: '10px', left,
      width: size, height: size,
      borderRadius: '50%',
      border: '2px solid rgba(181,136,67,0.7)',
      background: 'rgba(253,240,166,0.3)',
      boxShadow: '0 0 6px rgba(181,136,67,0.4)',
      pointerEvents: 'none',
    }}
    animate={{ y: [0, -230], opacity: [0, 1, 1, 0] }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: 'easeOut' }}
  />
);

const EventDetails = () => {
  const sparkles = [
    { top: '8%',  left: '6%',  delay: 0,    size: '14px' },
    { top: '18%', left: '85%', delay: 0.6,  size: '10px' },
    { top: '50%', left: '4%',  delay: 1.3,  size: '16px' },
    { top: '68%', left: '80%', delay: 0.2,  size: '12px' },
    { top: '82%', left: '12%', delay: 1.0,  size: '9px'  },
    { top: '35%', left: '90%', delay: 1.7,  size: '14px' },
    { top: '55%', left: '50%', delay: 0.9,  size: '8px'  },
  ];

  const bubbles = [
    { left: '10%', delay: 0,    size: '16px' },
    { left: '28%', delay: 0.7,  size: '11px' },
    { left: '50%', delay: 1.5,  size: '18px' },
    { left: '68%', delay: 0.3,  size: '13px' },
    { left: '82%', delay: 1.1,  size: '10px' },
    { left: '40%', delay: 2.0,  size: '8px'  },
    { left: '90%', delay: 0.9,  size: '14px' },
  ];

  return (
    <div className="event-details-section">
      <ElegantDivider />

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Cuándo y Dónde
      </motion.h2>

      <div className="details-cards">

        {/* ── Tarjeta 1: Ceremonia con destellos dorados ── */}
        <motion.div
          className="detail-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {/* Destellos de fondo */}
          {sparkles.map((s, i) => <Sparkle key={i} {...s} />)}

          {/* Shimmer sweep – más visible */}
          <motion.div
            style={{
              position: 'absolute', top: 0, left: '-100%',
              width: '55%', height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(253,240,166,0.45), rgba(255,255,255,0.3), transparent)',
              pointerEvents: 'none',
            }}
            animate={{ left: ['-60%', '140%'] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
          />

          <div className="detail-icon" style={{ marginBottom: '5px', position: 'relative', zIndex: 1 }}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M464 128h-80V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v304c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V176c0-26.51-21.49-48-48-48zM312 80c0-13.25-10.75-24-24-24h-64c-13.25 0-24 10.75-24 24v48h112V80zm144 376H56V176h400v280z"></path></svg>
          </div>
          <h3 style={{ position: 'relative', zIndex: 1 }}>Ceremonia Religiosa</h3>
          <p className="detail-highlight" style={{ fontSize: '1.3rem', position: 'relative', zIndex: 1 }}>28 de Agosto</p>
          <p className="time-text" style={{ marginBottom: '15px', position: 'relative', zIndex: 1 }}>Viernes a las 6:00 PM</p>
          <p className="detail-highlight" style={{ fontSize: '1.1rem', position: 'relative', zIndex: 1 }}>Iglesia San Rafael Arcángel</p>
          <p style={{ position: 'relative', zIndex: 1 }}>Tangua, Nariño</p>
          <a href="https://www.google.com/maps/place/Iglesia+San+Rafael+Arc%C3%A1ngel/@1.0942841,-77.3942423,21z/data=!4m12!1m5!3m4!2zMcKwMDUnNDIuNSJOIDc3wrAyMyc0My43Ilc!8m2!3d1.0951389!4d-77.3954722!3m5!1s0x8e2931e9522c0285:0x736808863ff74723!8m2!3d1.0941215!4d-77.3940719!16s%2Fg%2F1tfkxbzx?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="action-button" style={{ marginTop: '10px', position: 'relative', zIndex: 1 }}>
            Ver en GPS
          </a>
        </motion.div>

        {/* ── Tarjeta 2: Recepción con burbujas ── */}
        <motion.div
          className="detail-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {/* Burbujas subiendo */}
          {bubbles.map((b, i) => <Bubble key={i} {...b} />)}

          {/* Pulso de brillo en el borde */}
          <motion.div
            style={{
              position: 'absolute', inset: 0,
              borderRadius: 'inherit',
              boxShadow: '0 0 0 0px rgba(181,136,67,0)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
            animate={{ boxShadow: ['0 0 0 0px rgba(181,136,67,0)', '0 0 0 6px rgba(181,136,67,0.2)', '0 0 0 0px rgba(181,136,67,0)'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="detail-icon" style={{ marginBottom: '5px', position: 'relative', zIndex: 1 }}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M492.61 54.33a23.951 23.951 0 0 0-21.2-12.89H40.59a24.015 24.015 0 0 0-21.2 12.89 23.963 23.963 0 0 0 .39 24.62l128 202.7c18.59 29.43 45.31 52.12 77.01 64.65V464H176a16 16 0 0 0 0 32h160a16 16 0 0 0 0-32h-48.79V346.3c31.7-12.53 58.42-35.21 77.01-64.65l128-202.7a23.963 23.963 0 0 0 .39-24.62zM286.9 264.83a81.99 81.99 0 0 1-61.8 0L102.32 69.83C105.82 69.83 110.15 72 116.32 72h279.37c6.17 0 10.5-2.17 14-2.17l-122.79 195z"></path></svg>
          </div>
          <h3 style={{ position: 'relative', zIndex: 1 }}>Recepción</h3>
          <p className="detail-highlight" style={{ fontSize: '1.3rem', position: 'relative', zIndex: 1 }}>29 de Agosto</p>
          <p className="time-text" style={{ marginBottom: '15px', position: 'relative', zIndex: 1 }}>Sábado a las 6:00 PM</p>
          <p className="detail-highlight" style={{ fontSize: '1.1rem', position: 'relative', zIndex: 1 }}>Salón la Tangueñita</p>
          <p style={{ position: 'relative', zIndex: 1 }}>Tangua, Nariño</p>
          <a href="https://www.google.com/maps/search/?api=1&query=1%C2%B005'42.5%22N+77%C2%B023'43.7%22W" target="_blank" rel="noopener noreferrer" className="action-button" style={{ marginTop: '10px', position: 'relative', zIndex: 1 }}>
            Ver en GPS
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default EventDetails;
