import React from 'react';
import { motion } from 'framer-motion';

const GiftsSection = () => {
  return (
    <div className="gifts-section">
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

      <div className="gifts-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Lluvia de Sobres
        </motion.h2>
        
        <motion.div
          className="gift-icon-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <svg stroke="#b58843" fill="#b58843" strokeWidth="0" viewBox="0 0 512 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.46 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
        </motion.div>
        
        <motion.p
          className="gift-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          El mejor regalo es tu presencia. <br/>
          Si deseas hacerme un presente, contaremos con un buzón para <br/><strong className="lluvia-sobres-text">Lluvia de Sobres</strong>.
        </motion.p>
      </div>

    </div>
  );
};

export default GiftsSection;
