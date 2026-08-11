import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = ({ hasScrolled, guestInfo }) => {
  return (
    <div className="hero-section" style={{ textAlign: 'center' }}>
      <div className="card-header" style={{ paddingTop: '60px', position: 'relative', zIndex: 10 }}>
        {guestInfo && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.9rem',
              color: '#b76e79',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Invitación Especial <br/> 
            <strong style={{ fontSize: '1.1rem', color: '#7b1113', letterSpacing: '1px', marginTop: '5px', display: 'inline-block' }}>
              {guestInfo.nombre}
            </strong>
          </motion.div>
        )}
        
        <motion.p
          className="font-cursive text-burgundy"
          style={{ fontSize: '3.5rem', fontWeight: 400, margin: 0, lineHeight: '1' }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Mis 15
        </motion.p>
        
        <motion.h1 
          className="font-cursive text-burgundy"
          style={{ fontSize: '5rem', margin: '10px 0 20px 0', fontWeight: 400, lineHeight: '1' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Yalena <br/> Karina
        </motion.h1>

        <motion.p
          className="font-cursive"
          style={{ marginBottom: '30px', fontSize: '2rem', color: '#b76e79' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Acompáñame a celebrar
        </motion.p>
      </div>

      <div className="photo-container" style={{ position: 'relative', width: '250px', height: '250px', margin: '0 auto', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '6px solid rgba(255,255,255,0.9)',
            boxShadow: '0 10px 30px rgba(123, 17, 19, 0.15)'
          }}
        >
          <img src="/quinceañera.png" alt="Quinceañera" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
        </motion.div>
      </div>

      {/* Nuevo Indicador de Scroll Elegante */}
      <AnimatePresence>
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
              marginTop: '-40px',
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
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '10px 15px',
                borderRadius: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                backdropFilter: 'blur(4px)'
              }}
            >
              <div style={{
                width: '20px',
                height: '32px',
                borderRadius: '10px',
                border: '2px solid #b76e79',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '4px',
                marginBottom: '6px',
                backgroundColor: 'rgba(255,255,255,0.9)'
              }}>
                <motion.div
                  animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    width: '3px',
                    height: '6px',
                    borderRadius: '1.5px',
                    background: '#7b1113'
                  }}
                />
              </div>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#7b1113',
                fontWeight: 600
              }}>
                Desliza
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="parents-section" style={{ marginTop: '50px' }}>
        <motion.p 
          style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.85rem', color: '#b76e79', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Con la bendición de Dios <br/> y el amor de mis padres
        </motion.p>
        <motion.div 
          className="parents-names"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: '#7b1113', lineHeight: '1.3', fontWeight: 600 }}
        >
          <p>Heraldo Urbina</p>
          <p style={{ fontFamily: 'Great Vibes, cursive', fontSize: '2.5rem', margin: '5px 0', color: '#b76e79' }}>&</p>
          <p>Nora Ruiz</p>
        </motion.div>
      </div>

      <div className="card-message" style={{ marginTop: '40px', padding: '0 20px' }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', color: '#4a4a4a', lineHeight: '1.8', textAlign: 'center' }}
        >
          Hay momentos en la vida que imaginamos, soñamos y esperamos con el corazón. Hoy, uno de esos sueños se hace realidad. <br/><br/>
          Para vivir la magia y las emociones de este día tan especial, quiero estar rodeada de las personas que más amo.
        </motion.p>
      </div>

    </div>
  );
};

export default HeroSection;
