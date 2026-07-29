import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { motion } from 'framer-motion';

const GuestList = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const { data, error } = await supabase
          .from('rsvp_confirmations')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setGuests(data || []);
      } catch (err) {
        console.error('Error fetching guests:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9f5eb',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")',
      padding: '40px 20px',
      fontFamily: '"Cormorant Garamond", serif',
      color: '#000000'
    }}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '15px',
          padding: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid rgba(212, 175, 55, 0.3)'
        }}
      >
        <h1 style={{
          textAlign: 'center',
          color: '#b58843',
          fontSize: '2.5rem',
          marginBottom: '10px'
        }}>Lista de Asistencia</h1>
        <p style={{ textAlign: 'center', marginBottom: '30px', fontStyle: 'italic', color: '#555' }}>
          Registro privado de invitados confirmados
        </p>

        {loading ? (
          <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Cargando lista...</p>
        ) : guests.length === 0 ? (
          <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Aún no hay confirmaciones.</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '1.1rem'
            }}>
              <thead>
                <tr style={{
                  borderBottom: '2px solid #b58843',
                  textAlign: 'left'
                }}>
                  <th style={{ padding: '15px' }}>Nombre</th>

                  <th style={{ padding: '15px' }}>Fecha de Confirmación</th>
                </tr>
              </thead>
              <tbody>
                {guests.map((guest) => (
                  <motion.tr 
                    key={guest.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
                    }}
                  >
                    <td style={{ padding: '15px', fontWeight: 'bold' }}>{guest.full_name}</td>

                    <td style={{ padding: '15px', color: '#555' }}>
                      {new Date(guest.created_at).toLocaleString('es-CO')}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            
            <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: '#b58843' }}>
              Total de confirmaciones: {guests.length}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default GuestList;
