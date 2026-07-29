import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import BackgroundEffects from './BackgroundEffects';
import InsideCard from './InsideCard';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Aquí más adelante podemos hacer que cambie a la siguiente vista
    console.log("Abriendo tarjeta...");
  };

  return (
    <div className="mobile-container">
      {!isOpen && <BackgroundEffects />}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="envelope-wrapper"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animación del destello sobre el sello. Ahora este es el único elemento clickeable */}
            <div className="seal-highlight" onClick={handleOpen}></div>
            
            <motion.img 
              src="/sobre.png" 
              alt="Sobre de invitación" 
              className="envelope-image"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            
            <motion.div 
              className="arrow-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <svg width="40" height="50" viewBox="0 0 40 100" fill="none" style={{ marginBottom: '5px', filter: 'drop-shadow(1px 1px 0px rgba(255,255,255,1)) drop-shadow(-1px -1px 0px rgba(255,255,255,1)) drop-shadow(0px 0px 5px rgba(255, 255, 255, 1))' }}>
                <motion.path 
                  d="M 20 90 Q 20 50 20 15" 
                  stroke="#400010" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M20,5 Q20,15 10,15 Q20,15 20,25 Q20,15 30,15 Q20,15 20,5"
                  fill="#400010"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: [0, 90, 180] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  style={{ transformOrigin: "20px 15px" }}
                />
              </svg>
              <span>Toca el sello<br/>para abrir</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Aquí irá el contenido de la tarjeta una vez abierta */}
      {isOpen && (
        <>
          <InsideCard />

        </>
      )}
    </div>
  );
}

export default App;
