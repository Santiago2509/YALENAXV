import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Intentar reproducir automáticamente (los navegadores pueden bloquearlo hasta que el usuario interactúe)
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.log("El navegador bloqueó el autoplay. El usuario debe hacer clic.");
      }
    };
    
    // Un pequeño retraso para asegurar que la vista cargó
    setTimeout(playAudio, 1500);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ display: 'none' }}>
      {/* Busca el archivo cancion.mp3 en la carpeta public */}
      <audio ref={audioRef} src="/cancion.mp3" loop preload="auto" />
      
      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #d4af37 0%, #b58843 100%)',
          border: '2px solid #fff2cd',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          color: 'white'
        }}
      >
        {isPlaying ? (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
        ) : (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"></path></svg>
        )}
      </motion.button>
    </div>
  );
};

export default AudioPlayer;
