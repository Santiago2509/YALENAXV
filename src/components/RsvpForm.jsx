import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabaseClient';

const RsvpForm = () => {
  const [names, setNames] = useState(['']);

  const handleNameChange = (index, value) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const addNameField = () => {
    setNames([...names, '']);
  };

  const removeNameField = (index) => {
    const newNames = names.filter((_, i) => i !== index);
    setNames(newNames.length ? newNames : ['']);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const validNames = names.filter(n => n.trim() !== '');
      if (validNames.length === 0) throw new Error('Debes ingresar al menos un nombre');

      const insertData = validNames.map(name => ({
        full_name: name.trim(),
        with_plus_one: false,
      }));

      const { error } = await supabase
        .from('rsvp_confirmations')
        .insert(insertData);

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
        Por favor, confírmame si podrás acompañarme en este día tan especial.<br/><br/><strong style={{ color: '#b58843', fontSize: '1.1rem' }}>La confirmación de asistencia es de carácter obligatorio.</strong>
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
          <label>Nombres de los asistentes</label>
          <p style={{ fontSize: '0.9rem', marginBottom: '10px', color: '#666' }}>Agrega un campo por cada persona que asistirá.</p>
          <AnimatePresence>
            {names.map((name, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}
              >
                <input 
                  type="text" 
                  placeholder={`Invitado ${index + 1}`} 
                  value={name}
                  onChange={(e) => handleNameChange(index, e.target.value)}
                  required={index === 0} 
                  style={{ flex: 1 }}
                />
                {index > 0 && (
                  <button 
                    type="button" 
                    onClick={() => removeNameField(index)}
                    style={{ padding: '0 15px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    X
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          <button 
            type="button" 
            onClick={addNameField}
            style={{ width: '100%', padding: '10px', background: 'transparent', border: '2px dashed #b58843', color: '#b58843', borderRadius: '5px', cursor: 'pointer', marginTop: '10px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}
          >
            + Añadir otro invitado
          </button>
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
