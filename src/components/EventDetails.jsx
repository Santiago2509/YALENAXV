import React from 'react';
import { motion } from 'framer-motion';

const EventDetails = () => {
  return (
    <div className="event-details-section" style={{ padding: '0 20px', marginTop: '30px' }}>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}
      >
        <div style={{ height: '1px', flex: 1, backgroundColor: '#d4af37', opacity: 0.5 }}></div>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 15px', color: '#b76e79' }}>
          <path d="M464 128h-80V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v304c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V176c0-26.51-21.49-48-48-48zM312 80c0-13.25-10.75-24-24-24h-64c-13.25 0-24 10.75-24 24v48h112V80zm144 376H56V176h400v280z"></path>
        </svg>
        <div style={{ height: '1px', flex: 1, backgroundColor: '#d4af37', opacity: 0.5 }}></div>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ fontFamily: 'Great Vibes, cursive', fontSize: '2.5rem', color: '#7b1113', textAlign: 'center', marginBottom: '20px', fontWeight: 400 }}
      >
        Ceremonia Religiosa
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif', color: '#4a4a4a', marginBottom: '40px' }}
      >
        <p style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '5px' }}>Sábado</p>
        <p style={{ fontSize: '1.4rem', color: '#7b1113', fontWeight: 600, marginBottom: '5px' }}>28 de Agosto</p>
        <p style={{ fontSize: '1rem', color: '#b76e79', fontStyle: 'italic', marginBottom: '15px' }}>6:00 PM</p>
        <p style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '5px' }}>Iglesia San Rafael Arcángel</p>
        <p style={{ fontSize: '0.9rem', marginBottom: '15px' }}>Tangua, Nariño</p>
        <a href="https://www.google.com/maps/place/Iglesia+San+Rafael+Arc%C3%A1ngel/@1.0942841,-77.3942423,21z" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '8px 25px', backgroundColor: 'transparent', border: '1px solid #b76e79', color: '#b76e79', textDecoration: 'none', borderRadius: '25px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s ease' }}>
          Ver en GPS
        </a>
      </motion.div>

      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}
      >
        <div style={{ height: '1px', flex: 1, backgroundColor: '#d4af37', opacity: 0.5 }}></div>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 15px', color: '#b76e79' }}>
          <path d="M492.61 54.33a23.951 23.951 0 0 0-21.2-12.89H40.59a24.015 24.015 0 0 0-21.2 12.89 23.963 23.963 0 0 0 .39 24.62l128 202.7c18.59 29.43 45.31 52.12 77.01 64.65V464H176a16 16 0 0 0 0 32h160a16 16 0 0 0 0-32h-48.79V346.3c31.7-12.53 58.42-35.21 77.01-64.65l128-202.7a23.963 23.963 0 0 0 .39-24.62zM286.9 264.83a81.99 81.99 0 0 1-61.8 0L102.32 69.83C105.82 69.83 110.15 72 116.32 72h279.37c6.17 0 10.5-2.17 14-2.17l-122.79 195z"></path>
        </svg>
        <div style={{ height: '1px', flex: 1, backgroundColor: '#d4af37', opacity: 0.5 }}></div>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ fontFamily: 'Great Vibes, cursive', fontSize: '2.5rem', color: '#7b1113', textAlign: 'center', marginBottom: '20px', fontWeight: 400 }}
      >
        Recepción
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif', color: '#4a4a4a', marginBottom: '40px' }}
      >
        <p style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '5px' }}>Domingo</p>
        <p style={{ fontSize: '1.4rem', color: '#7b1113', fontWeight: 600, marginBottom: '5px' }}>29 de Agosto</p>
        <p style={{ fontSize: '1rem', color: '#b76e79', fontStyle: 'italic', marginBottom: '15px' }}>6:00 PM</p>
        <p style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '5px' }}>Salón la Tangueñita</p>
        <p style={{ fontSize: '0.9rem', marginBottom: '15px' }}>Tangua, Nariño</p>
        <a href="https://www.google.com/maps/place/Sal%C3%B3n+la+Tangue%C3%B1ita/@1.0920404,-77.3986958,20z" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '8px 25px', backgroundColor: 'transparent', border: '1px solid #b76e79', color: '#b76e79', textDecoration: 'none', borderRadius: '25px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s ease' }}>
          Ver en GPS
        </a>
      </motion.div>

    </div>
  );
};

export default EventDetails;
