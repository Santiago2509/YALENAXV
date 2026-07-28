import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    bringingGuest: 'no',
    guests: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podemos definir a dónde enviar los datos, por ejemplo un enlace de WhatsApp
    let message = `¡Hola Yalena! Confirmo mi asistencia a tus 15 años. Soy ${formData.name}.`;
    if (formData.bringingGuest === 'yes') {
      message += ` Iré acompañado/a de: ${formData.guests}.`;
    }
    
    // Suponiendo que el número de teléfono será añadido después
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="rsvp-section">
      <motion.div 
        className="section-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="churro-divider">
           <svg viewBox="0 0 200 30" width="100%" height="30">
              <path d="M10,15 Q50,0 100,15 T190,15" fill="none" stroke="#b58843" strokeWidth="2" />
              <circle cx="100" cy="15" r="4" fill="#b58843" />
              <circle cx="10" cy="15" r="2" fill="#b58843" />
              <circle cx="190" cy="15" r="2" fill="#b58843" />
           </svg>
        </div>
      </motion.div>

      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Confirmar Asistencia
      </motion.h2>

      <motion.p
        className="rsvp-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Por favor, confírmame si podrás acompañarme en este día tan especial.
      </motion.p>

      <motion.form 
        className="rsvp-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Escribe tu nombre" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label>¿Asistirás con alguien más?</label>
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                name="bringingGuest" 
                value="yes" 
                checked={formData.bringingGuest === 'yes'}
                onChange={handleChange}
              />
              <span>Sí</span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="bringingGuest" 
                value="no"
                checked={formData.bringingGuest === 'no'}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <AnimatePresence>
          {formData.bringingGuest === 'yes' && (
            <motion.div 
              className="form-group expand-animation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor="guests">Nombres de tus acompañantes</label>
              <textarea 
                id="guests" 
                name="guests" 
                placeholder="Escribe los nombres aquí" 
                rows="3"
                value={formData.guests}
                onChange={handleChange}
                required={formData.bringingGuest === 'yes'}
              ></textarea>
            </motion.div>
          )}
        </AnimatePresence>

        <button type="submit" className="action-button rsvp-submit">
          Enviar Confirmación
        </button>
      </motion.form>
      
      <div style={{ paddingBottom: '60px' }}></div>
    </div>
  );
};

export default RsvpForm;
