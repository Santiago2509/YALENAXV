import React from 'react';
import { motion } from 'framer-motion';
import { CosmicVine, CosmicVineAlt } from './CornerOrnaments';

const HeroSection = ({ hasScrolled, guestInfo }) => {
  return (
    <div className="hero-section">
      <div className="card-header" style={{ paddingTop: '50px', position: 'relative', zIndex: 10 }}>
        {guestInfo && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1rem',
              color: '#8c6420',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '15px',
              textShadow: '0 0 5px rgba(255,255,255,0.8)'
            }}
          >
            Querida familia <br/> <strong style={{ fontSize: '1.2rem' }}>{guestInfo.nombre}</strong>
          </motion.div>
        )}
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
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.65)',
              padding: '10px 15px',
              borderRadius: '20px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(4px)'
            }}
          >
            <div style={{
              width: '22px',
              height: '36px',
              borderRadius: '11px',
              border: '2px solid #b58843',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '5px',
              marginBottom: '6px',
              backgroundColor: 'rgba(255,255,255,0.8)',
            }}>
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: '4px',
                  height: '8px',
                  borderRadius: '2px',
                  background: '#b58843'
                }}
              />
            </div>
            <span style={{ 
              fontFamily: 'Montserrat, sans-serif', 
              fontSize: '0.75rem', 
              fontWeight: 'bold',
              textTransform: 'uppercase', 
              letterSpacing: '3px', 
              color: '#8c6420',
              textShadow: '0px 1px 2px rgba(255,255,255,0.8)'
            }}>
              Desliza
            </span>
          </motion.div>
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
