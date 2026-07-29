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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30 && !hasTapped) {
        setHasTapped(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTapped]);

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
      onClick={() => setHasTapped(true)}
    >
      <InteractiveButterflies hasTapped={hasTapped} />
      <Butterflies startFlying={startAmbient} />

      <CosmicVine flipX={true} delay={0.5} absoluteTopRight={true} />
      <HeroSection />
      
      <CosmicVine flipX={false} delay={0.2} />
      <EventDetails />
      
      <CosmicVineAlt flipX={true} delay={0.2} />
      <GiftsSection />
      
      <CosmicVine flipX={false} delay={0.2} />
      <RsvpForm />
    </motion.div>
  );
};

export default InsideCard;
