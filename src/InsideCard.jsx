import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import EventDetails from './components/EventDetails';
import GiftsSection from './components/GiftsSection';
import Countdown from './components/Countdown';
import EnvelopeRain from './components/EnvelopeRain';
import RsvpForm from './components/RsvpForm';
import Butterflies from './components/Butterflies';
import InteractiveButterflies from './components/InteractiveButterflies';
import FallingPetals from './components/FallingPetals';
import { CosmicVine, CosmicVineAlt } from './components/CornerOrnaments';
import BackgroundEffects from './BackgroundEffects';

const InsideCard = ({ guestInfo }) => {
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
      {/* Full screen photo background for the first viewport */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(/quinceanera2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '30%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40%', background: 'linear-gradient(to top, #fffafb 2%, transparent)', pointerEvents: 'none' }} />
      </div>

      <FallingPetals />

      <InteractiveButterflies hasTapped={hasTapped} />
      <Butterflies startFlying={startAmbient} />

      <div className="geometric-frame" style={{ zIndex: 10, position: 'relative' }}>
        <BackgroundEffects />

        <HeroSection hasScrolled={hasScrolled} guestInfo={guestInfo} />
        

        <EventDetails />
        <EnvelopeRain />
        <Countdown />
        

        <RsvpForm guestInfo={guestInfo} />

        {/* Footer sutil de créditos */}
        <div style={{ 
          textAlign: 'center', 
          padding: '25px 10px 15px', 
          position: 'relative', 
          zIndex: 15,
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.75rem',
          color: '#8c6420',
          letterSpacing: '0.5px'
        }}>
          Creada por{' '}
          <a 
            href="https://portafolio-santiago-1b4w.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#b58843', 
              fontWeight: '600', 
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            Santiago Dev
          </a>
        </div>

        {/* Esquina de flores Inferior Izquierda — flip vertical */}
        <motion.img
          src="/esquina_flores.png"
          alt="Esquina flores inferior izquierda"
          initial={{ opacity: 0, x: -10, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'absolute',
            bottom: '-43px',
            left: '-10px',
            width: '152px',
            height: 'auto',
            pointerEvents: 'none',
            zIndex: 12,
            scaleY: -1
          }}
        />

        {/* Esquina de flores Inferior Derecha — flip horizontal + vertical */}
        <motion.img
          src="/esquina_flores.png"
          alt="Esquina flores inferior derecha"
          initial={{ opacity: 0, x: 10, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'absolute',
            bottom: '-43px',
            right: '-10px',
            width: '152px',
            height: 'auto',
            pointerEvents: 'none',
            zIndex: 12,
            scaleX: -1,
            scaleY: -1
          }}
        />
      </div>
    </motion.div>
  );
};

export default InsideCard;
