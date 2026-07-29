import React from 'react';
import { motion } from 'framer-motion';
import { CosmicVine, CosmicVineAlt } from './CornerOrnaments';

const HeroSection = ({ hasScrolled }) => {
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

      {/* Nuevo Indicador de Scroll Elegante y Visible */}
      {!hasScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '-60px', /* Lo subimos para que quede sobre las nubes/foto */
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 20,
            pointerEvents: 'none'
          }}
        >
          <div style={{
            width: '18px',
            height: '30px',
            borderRadius: '15px',
            border: '1.5px solid rgba(181, 136, 67, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '4px',
            marginBottom: '8px',
            boxShadow: '0 0 10px rgba(255,255,255,0.4)',
            backgroundColor: 'rgba(255,255,255,0.25)',
            backdropFilter: 'blur(2px)'
          }}>
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: '2px',
                height: '6px',
                borderRadius: '1px',
                background: '#b58843'
              }}
            />
          </div>
          <span style={{ 
            fontFamily: 'Montserrat, sans-serif', 
            fontSize: '0.65rem', 
            textTransform: 'uppercase', 
            letterSpacing: '3px', 
            color: '#b58843',
            textShadow: '0 0 5px rgba(255,255,255,0.8)'
          }}>
            Desliza
          </span>
        </motion.div>
      )}

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

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'relative', zIndex: 5, marginTop: '-20px', marginBottom: '-10px' }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <CosmicVine flipX={false} delay={0.6} customStyle={{ padding: '0 10px' }} />
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <CosmicVine flipX={true} delay={0.6} customStyle={{ padding: '0 10px' }} />
        </div>
      </div>
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
