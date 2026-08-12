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

      <InteractiveButterflies hasTapped={hasTapped} />
      <Butterflies startFlying={startAmbient} />

      <div className="geometric-frame" style={{ zIndex: 10, position: 'relative' }}>
        <BackgroundEffects />

        <HeroSection hasScrolled={hasScrolled} guestInfo={guestInfo} />
        

        <EventDetails />
        <EnvelopeRain />
        <Countdown />
        

        <RsvpForm guestInfo={guestInfo} />
      </div>
    </motion.div>
  );
};

export default InsideCard;
