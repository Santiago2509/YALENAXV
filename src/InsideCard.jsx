import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

import { useMemo } from 'react';

const InsideCard = () => {
  return (
    <motion.div 
      className="inside-card"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    >
      <div className="card-header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Mis 15 años
        </motion.h1>
      </div>

      <div className="photo-container">
        
        <img src="/quinceañera.png" alt="Quinceañera" className="quinceanera-photo" />

      </div>

      <div className="card-message">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Para vivir las emociones de este día tan importante, <br/>
          quiero estar al lado de personas especiales como tú!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default InsideCard;
