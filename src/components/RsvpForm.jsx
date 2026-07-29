import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabaseClient';

const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const { error } = await supabase
        .from('rsvp_confirmations')
        .insert([
          {
            full_name: formData.name,
            with_plus_one: false,
          }
        ]);

      if (error) throw error;
      setIsSuccess(true);
    } catch (error) {
      setErrorMsg('Hubo un error al enviar tu confirmación. Intenta de nuevo.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rsvp-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ¡Gracias por confirmar!
        </motion.h2>
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#000000', fontSize: '1.2rem' }}>Hemos guardado tu respuesta. ¡Nos vemos en la fiesta!</p>
        <div style={{ paddingBottom: '60px' }}></div>
      </div>
    );
  }

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
          <label htmlFor="name">Nombres de los asistentes</label>
          <textarea 
            id="name" 
            name="name" 
            rows="3"
            placeholder="Escribe tu nombre y el de tus acompañantes (si aplica)" 
            value={formData.name}
            onChange={handleChange}
            required 
          ></textarea>
        </div>



        {errorMsg && <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{errorMsg}</p>}
        <button type="submit" className="action-button rsvp-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar Confirmación'}
        </button>
      </motion.form>
      
      <div style={{ paddingBottom: '60px' }}></div>
    </div>
  );
};

export default RsvpForm;
