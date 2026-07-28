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
        <motion.div 
          className="detail-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="detail-icon">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
          </div>
          <h3>Fecha y Hora</h3>
          <p className="detail-highlight">29 de Agosto</p>
          <p className="time-text">a las 7:00 PM</p>
        </motion.div>

        <motion.div 
          className="detail-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="detail-icon">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
          </div>
          <h3>Ubicación</h3>
          <p className="detail-highlight">Cra. 5</p>
          <p>Tangua, Nariño</p>
          
          <a href="https://www.google.com/maps/search/?api=1&query=1%C2%B005'42.5%22N+77%C2%B023'43.7%22W" target="_blank" rel="noopener noreferrer" className="action-button">
            Ver en GPS
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default EventDetails;
