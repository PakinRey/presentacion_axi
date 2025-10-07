import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Slide6_Ecosystem.module.scss';
import { FaHome, FaCog, FaHardHat, FaUsers, FaPaperPlane, FaChevronRight } from 'react-icons/fa';

const sections = [
  {
    title: "Inicio",
    purpose: "Captura y Credibilidad",
    Icon: FaHome,
    notes: "En 3 segundos, debe responder: '¿Esta empresa es seria y puede resolver mi problema?' Aquí mostramos sus 20 años de experiencia y certificaciones para generar confianza inmediata."
  },
  {
    title: "Servicios",
    purpose: "Demostración Técnica",
    Icon: FaCog,
    notes: "Aquí demostramos su capacidad técnica. No solo decimos qué hacen, explicamos cómo su precisión en la fabricación o su eficiencia en el montaje le ahorran al cliente tiempo y dinero en la obra."
  },
  {
    title: "Proyectos",
    purpose: "Su Máquina de Credibilidad",
    Icon: FaHardHat,
    isHighlighted: true,
    notes: "Esta es la sección más importante. No es una galería de fotos, es la documentación técnica que su cliente necesita para justificar internamente por qué elegirlos a ustedes, incluso si son más caros. Cada proyecto es un caso de estudio Problema-Solución-Resultado."
  },
    {
    title: "Nosotros",
    purpose: "Humanizar la Marca",
    Icon: FaUsers,
    notes: "Aquí humanizamos la marca. Los negocios se hacen entre personas. Mostrar al equipo directivo y contar la historia de la empresa genera una conexión y valida la enorme experiencia que tienen."
  },
  {
    title: "Contacto",
    purpose: "La Conversión",
    Icon: FaPaperPlane,
    notes: "Este es el objetivo final. Después de que el cliente ha visto su experiencia, su capacidad y sus proyectos, llega aquí convencido. El formulario está diseñado para capturar una solicitud de cotización calificada."
  }
];

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, type: 'spring', stiffness: 120 },
  }),
};

export const Slide6_Ecosystem = () => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className={styles.slideBase}>
      <button className={styles.notesToggle} onClick={() => setShowNotes(!showNotes)}>
        {showNotes ? 'Ocultar Guía' : 'Guía'}
      </button>

      <h2 className={styles.mainTitle}>La Arquitectura Digital que Mitiga su Riesgo Comercial</h2>
      
      <div className={styles.flowContainer}>
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <motion.div 
              className={`${styles.flowCard} ${section.isHighlighted ? styles.highlighted : ''}`}
              variants={variants}
              custom={index}
              initial="hidden"
              animate="visible"
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}><section.Icon /></div>
                <div className={styles.cardTitles}>
                  <p className={styles.cardTitle}>{section.title}</p>
                  <p className={styles.cardPurpose}>{section.purpose}</p>
                </div>
              </div>
              <AnimatePresence>
                {showNotes && (
                  <motion.div 
                    className={styles.speakerNotes}
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  >
                    <p><strong>Guía:</strong> {section.notes}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {index < sections.length - 1 && (
              <motion.div variants={variants} custom={index + 0.5} initial="hidden" animate="visible">
                <FaChevronRight className={styles.flowArrow} />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};