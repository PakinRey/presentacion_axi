import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Slide10_CTA.module.scss';
import { FaFileSignature, FaBullseye, FaPlayCircle } from 'react-icons/fa';

const nextSteps = [
  { text: "Discutir a detalle el prototipo funcional.", icon: <FaFileSignature/>, note: "Aquí validamos que entendimos su visión y hacemos los ajustes finos." },
  { text: "Alinear métricas de éxito y KPIs.", icon: <FaBullseye/>, note: "Definimos juntos qué significa 'ganar'. ¿Cuántas cotizaciones calificadas necesitamos generar para que esta inversión sea un éxito rotundo?" },
  { text: "Iniciar la Fase 1: Fundación la próxima semana.", icon: <FaPlayCircle/>, note: "Este es el llamado a la acción final. Dejamos claro que estamos listos para empezar a construir de inmediato." }
];

export const Slide10_CTA = () => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className={styles.slideBase}>
       <button className={styles.notesToggle} onClick={() => setShowNotes(!showNotes)}>
        {showNotes ? 'Ocultar Guía' : 'Guía'}
      </button>

      <div className={styles.ctaGrid}>
        <div className={styles.leftColumn}>
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            ¿Construimos Juntos el Liderazgo Digital?
          </motion.h2>
          <motion.p className={styles.summary} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Ustedes tienen 20 años de solidez. Nuestra propuesta es construir el puente digital para que esa solidez se proyecte de manera irrefutable, generando un retorno de inversión tangible y medible.
          </motion.p>
        </div>

        <div className={styles.rightColumn}>
          <h3 className={styles.stepsTitle}>Siguientes Pasos</h3>
          <ul className={styles.stepsList}>
            {nextSteps.map((step, index) => (
              <motion.li key={index} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + index * 0.2 }}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepText}>
                  <h4>{step.text}</h4>
                   <AnimatePresence>
                    {showNotes && (
                      <motion.p 
                        className={styles.speakerNote}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '0.5rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      >
                        <strong>Guía:</strong> {step.note}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      
      <motion.div className={styles.footer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <p>Abrimos el espacio para cualquier pregunta. <strong>Gracias.</strong></p>
      </motion.div>
    </div>
  );
};
