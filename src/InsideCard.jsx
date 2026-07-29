import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import EventDetails from './components/EventDetails';
import GiftsSection from './components/GiftsSection';
import RsvpForm from './components/RsvpForm';
import Butterflies from './components/Butterflies';
import InteractiveButterflies from './components/InteractiveButterflies';
import { CosmicVine, CosmicVineAlt } from './components/CornerOrnaments';

const InsideCard = () => {
  const [hasTapped, setHasTapped] = useState(false);
  const [startAmbient, setStartAmbient] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);


  useEffect(() => {
    if (hasTapped) {
      const timer = setTimeout(() => {
        setStartAmbient(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [hasTapped]);

  return (
    <motion.div 
      className="inside-card"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      onClick={() => !hasTapped && setHasTapped(true)}
      onScroll={(e) => {
        if (e.target.scrollTop > 30) {
          if (!hasTapped) setHasTapped(true);
          if (!hasScrolled) setHasScrolled(true);
        }
      }}
    >
      <InteractiveButterflies hasTapped={hasTapped} />
      <Butterflies startFlying={startAmbient} />

      <CosmicVine 
        flipX={true} 
        delay={0.5} 
        customStyle={{ 
          position: 'absolute', 
          top: '-10px', 
          right: '-10px', 
          zIndex: 1, 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'flex-end', 
          padding: '10px'
        }} 
      />
      <HeroSection />
      
      <CosmicVine flipX={false} delay={0.2} />
      <EventDetails />
      
      <CosmicVineAlt flipX={true} delay={0.2} />
      <GiftsSection />
      
      <CosmicVine flipX={false} delay={0.2} />
      <RsvpForm />

      {/* Indicador de scroll fijo en la parte inferior inicial */}
      {!hasScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 100,
            pointerEvents: 'none'
          }}
        >
          <span style={{ 
            fontFamily: 'Montserrat, sans-serif', 
            fontSize: '0.75rem', 
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            color: '#b58843',
            marginBottom: '10px',
            textShadow: '0 0 5px rgba(255,255,255,0.8)'
          }}>
            Desliza hacia abajo
          </span>
          <div style={{ height: '50px', width: '1.5px', background: 'rgba(181, 136, 67, 0.2)', position: 'relative', overflow: 'hidden', borderRadius: '2px' }}>
            <motion.div 
              animate={{ top: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', left: 0, right: 0, height: '100%', background: 'linear-gradient(to bottom, transparent, #b58843, #d4af37, transparent)' }}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default InsideCard;
