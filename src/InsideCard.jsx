import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import EventDetails from './components/EventDetails';
import GiftsSection from './components/GiftsSection';
import RsvpForm from './components/RsvpForm';
import Butterflies from './components/Butterflies';
import InteractiveButterflies from './components/InteractiveButterflies';
import { CosmicVine, CosmicVineAlt } from './components/CornerOrnaments';

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
      <InteractiveButterflies hasTapped={hasTapped} />
      <Butterflies startFlying={startAmbient} />

      <div className="geometric-frame">
        <img src="/rosas.png" alt="Flores" className="floral-corner-tl" />
        <img src="/rosas.png" alt="Flores" className="floral-corner-br" />
        
        <HeroSection hasScrolled={hasScrolled} guestInfo={guestInfo} />
        
        <EventDetails />
        
        <RsvpForm guestInfo={guestInfo} />
      </div>
    </motion.div>
  );
};

export default InsideCard;
