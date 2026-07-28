import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import EventDetails from './components/EventDetails';
import GiftsSection from './components/GiftsSection';
import RsvpForm from './components/RsvpForm';
import Butterflies from './components/Butterflies';
import { CosmicVine, CosmicVineAlt } from './components/CornerOrnaments';

const InsideCard = () => {
  return (
    <motion.div 
      className="inside-card"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    >
      <Butterflies />

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
