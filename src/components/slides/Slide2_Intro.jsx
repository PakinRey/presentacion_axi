import React from 'react';
import { motion } from 'framer-motion';
import styles from './Slide2_Intro.module.scss'; // Importa los nuevos estilos dedicados

// --- Variantes de animación para una entrada impactante ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 } 
  },
};

const textVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
};

const visualVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] } },
};

export const Slide2_Intro = () => {
  return (
    <motion.div 
      className={styles.slideLayoutGrid}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden" // Asegura que se desvanezca al salir
    >
      <div className={styles.introContent}>
        <motion.p className={styles.eyebrow} variants={textVariant}>
          El Punto de Partida
        </motion.p>
        <motion.h2 variants={textVariant}>
          Su intuición es correcta. El futuro es digital.
        </motion.h2>
        <motion.p variants={textVariant}>
          Pero en el sector B2B, no se trata de estar en todos lados. Se trata de construir el mapa correcto hacia la rentabilidad.
        </motion.p>
      </div>
      <motion.div className={styles.introVisual} variants={visualVariant}>
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Equipo de construcción revisando planos en obra"
        />
      </motion.div>
    </motion.div>
  );
};
