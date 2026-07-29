import React from 'react';
import { motion } from 'framer-motion';

const EventDetails = () => {
  return (
    <div className="event-details-section">
      <motion.div 
        className="section-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="churro-divider">
           <svg viewBox="0 0 200 30" width="100%" height="30">
              <path d="M10,15 Q50,0 100,15 T190,15" fill="none" stroke="#b58843" strokeWidth="2" />
              <circle cx="100" cy="15" r="4" fill="#b58843" />
              <circle cx="10" cy="15" r="2" fill="#b58843" />
              <circle cx="190" cy="15" r="2" fill="#b58843" />
           </svg>
        </div>
      </motion.div>

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
        {/* Tarjeta 1: Ceremonia */}
        <motion.div 
          className="detail-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="detail-icon" style={{ marginBottom: '5px' }}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M464 128h-80V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v304c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V176c0-26.51-21.49-48-48-48zM312 80c0-13.25-10.75-24-24-24h-64c-13.25 0-24 10.75-24 24v48h112V80zm144 376H56V176h400v280z"></path></svg>
          </div>
          <h3>Ceremonia Religiosa</h3>
          <p className="detail-highlight" style={{ fontSize: '1.3rem' }}>28 de Agosto</p>
          <p className="time-text" style={{ marginBottom: '15px' }}>a las 6:00 PM</p>
          
          <p className="detail-highlight" style={{ fontSize: '1.1rem' }}>Iglesia San Rafael Arcángel</p>
          <p>Tangua, Nariño</p>
          
          <a href="https://www.google.com/maps/place/Iglesia+San+Rafael+Arc%C3%A1ngel/@1.0942841,-77.3942423,21z/data=!4m12!1m5!3m4!2zMcKwMDUnNDIuNSJOIDc3wrAyMyc0My43Ilc!8m2!3d1.0951389!4d-77.3954722!3m5!1s0x8e2931e9522c0285:0x736808863ff74723!8m2!3d1.0941215!4d-77.3940719!16s%2Fg%2F1tfkxbzx?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="action-button" style={{ marginTop: '10px' }}>
            Ver en GPS
          </a>
        </motion.div>

        {/* Tarjeta 2: Recepción */}
        <motion.div 
          className="detail-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="detail-icon" style={{ marginBottom: '5px' }}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M492.61 54.33a23.951 23.951 0 0 0-21.2-12.89H40.59a24.015 24.015 0 0 0-21.2 12.89 23.963 23.963 0 0 0 .39 24.62l128 202.7c18.59 29.43 45.31 52.12 77.01 64.65V464H176a16 16 0 0 0 0 32h160a16 16 0 0 0 0-32h-48.79V346.3c31.7-12.53 58.42-35.21 77.01-64.65l128-202.7a23.963 23.963 0 0 0 .39-24.62zM286.9 264.83a81.99 81.99 0 0 1-61.8 0L102.32 69.83C105.82 69.83 110.15 72 116.32 72h279.37c6.17 0 10.5-2.17 14-2.17l-122.79 195z"></path></svg>
          </div>
          <h3>Recepción</h3>
          <p className="detail-highlight" style={{ fontSize: '1.3rem' }}>29 de Agosto</p>
          <p className="time-text" style={{ marginBottom: '15px' }}>a las 7:00 PM</p>
          
          <p className="detail-highlight" style={{ fontSize: '1.1rem' }}>Salón la Tangueñita</p>
          <p>Tangua, Nariño</p>
          
          <a href="https://www.google.com/maps/search/?api=1&query=1%C2%B005'42.5%22N+77%C2%B023'43.7%22W" target="_blank" rel="noopener noreferrer" className="action-button" style={{ marginTop: '10px' }}>
            Ver en GPS
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default EventDetails;
