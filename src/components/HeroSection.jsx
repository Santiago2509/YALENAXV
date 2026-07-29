import React from 'react';
import { motion } from 'framer-motion';
import { CosmicVine, CosmicVineAlt } from './CornerOrnaments';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="card-header" style={{ paddingTop: '60px', position: 'relative', zIndex: 10 }}>
        <motion.p
          className="font-cursive metallic-text"
          style={{ marginBottom: '-5px', fontSize: '2.8rem', fontWeight: 400, margin: 0 }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Acompáñame a celebrar
        </motion.p>
        <motion.h1 
          className="font-cursive metallic-text"
          style={{ fontSize: '4.2rem', margin: '0 0 20px 0', fontWeight: 400 }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Mis 15 Años
        </motion.h1>
      </div>

      <div className="photo-container">
        <CosmicVineAlt 
          flipX={false} 
          delay={0.3} 
          customStyle={{ position: 'absolute', top: '-60px', left: 0, zIndex: 10, width: '100%', pointerEvents: 'none' }} 
        />
        <img src="/quinceañera.png" alt="Quinceañera" className="quinceanera-photo" />
      </div>

      <div className="name-section">
        <motion.h1 
          className="quinceanera-name metallic-text"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Yalena Karina <br/> Urbina Ruiz
        </motion.h1>
      </div>

      <CosmicVine flipX={true} delay={0.6} />
      <div className="parents-section" style={{ marginTop: '30px' }}>
        <motion.p 
          className="parents-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Con la bendición de Dios y el amor de mis padres
        </motion.p>
        <motion.div 
          className="parents-names"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <p>Heraldo Urbina</p>
          <p className="parents-and">&</p>
          <p>Nora Ruiz</p>
        </motion.div>
      </div>

      <div className="card-message" style={{ marginTop: '20px' }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Hay momentos en la vida que imaginamos, soñamos y esperamos con el corazón. Hoy, uno de esos sueños se hace realidad. <br/><br/>
          Para vivir la magia y las emociones de este día tan especial, quiero estar rodeada de las personas que más amo. ¡Acompáñame a celebrar!
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
