import React from 'react';
import { motion } from 'framer-motion';
import { CosmicVine, CosmicVineAlt } from './CornerOrnaments';

const HeroSection = ({ hasScrolled, guestInfo }) => {
  return (
    <div className="hero-section" style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* 1. Full height image section like Image 2 */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>


        {/* Top texts */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '12px' }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.9rem',
                color: '#fdf0a6',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '4px',
                textShadow: '0 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              <strong style={{ fontSize: '0.8rem', lineHeight: '1.3', display: 'inline-block', maxWidth: '80%', margin: '0 auto' }}>
                {guestInfo?.nombre || "Señor Alvaro Urbina Sra. e Hijos"}
              </strong>
            </motion.div>
          
          <motion.p
            className="font-cursive"
            style={{ marginBottom: '0', marginTop: '0px', fontSize: '1.7rem', fontWeight: 400, color: '#fdf0a6', textShadow: '2px 2px 5px rgba(0,0,0,0.7)' }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Acompáñame a celebrar
          </motion.p>
          <motion.h1 
            className="font-cursive"
            style={{ fontSize: '2.5rem', margin: '0', fontWeight: 400, color: '#fdf0a6', textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Mis 15 Años
          </motion.h1>
        </div>

        {/* Bottom: Name & Scroll Indicator */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '120px' }}>
          <motion.h1 
            className="quinceanera-name font-cursive"
            style={{ 
              fontSize: '4.5rem', 
              fontWeight: 400, 
              margin: '0', 
              lineHeight: 1,
              color: '#fdf0a6',
              textShadow: '2px 2px 5px rgba(0,0,0,0.6), 0 0 15px rgba(253, 240, 166, 0.4)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Yalena Karina <br/> Urbina Ruiz
          </motion.h1>

          {!hasScrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2, duration: 1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '15px'
              }}
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div style={{
                  width: '22px',
                  height: '36px',
                  borderRadius: '11px',
                  border: '2px solid #fdf0a6',
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '5px',
                  marginBottom: '6px',
                  backgroundColor: 'rgba(0,0,0,0.2)'
                }}>
                  <motion.div 
                    animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                      width: '4px',
                      height: '8px',
                      backgroundColor: '#fdf0a6',
                      borderRadius: '2px'
                    }}
                  />
                </div>
                <span style={{ 
                  fontSize: '0.8rem', 
                  color: '#fdf0a6', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                }}>
                  Deslizar
                </span>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
      

      {/* 3. The rest of the content (Parents, message, etc.) */}
      <div style={{ width: '100%', padding: '0 20px', textAlign: 'center', backgroundColor: '#fffafb' }}>
        




        <div style={{ width: '100%', maxWidth: '480px', margin: '20px auto 0' }}>
          
          {/* Imagen de flores ARRIBA (volteada y más cerca) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ marginBottom: '0px', display: 'flex', justifyContent: 'center' }}
          >
            <img 
              src="/debajo_texto.png" 
              alt="Flores decorativas superior" 
              style={{
                width: '100%',
                maxWidth: '460px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                transform: 'rotate(180deg)'
              }} 
            />
          </motion.div>

          <div className="parents-section" style={{ marginTop: '5px' }}>
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

          <div className="card-message" style={{ marginTop: '25px' }}>
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

          {/* Imagen de flores DEBAJO (más cerca) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            style={{ marginTop: '5px', display: 'flex', justifyContent: 'center' }}
          >
            <img 
              src="/debajo_texto.png" 
              alt="Flores decorativas inferior" 
              style={{
                width: '100%',
                maxWidth: '460px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block'
              }} 
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
