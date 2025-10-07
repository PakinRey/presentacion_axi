import React from 'react';
import { motion } from 'framer-motion';
import styles from './Slide3_Reframing.module.scss';
import { FaTiktok, FaInstagram, FaFacebook, FaMap } from 'react-icons/fa';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.2,
      type: 'spring',
      stiffness: 100
    },
  }),
};

export const Slide3_Reframing = () => {
  return (
    <div className={styles.slideBase}>
      <h2 className={styles.mainTitle}>De Tareas a Estrategia: El Enfoque B2B</h2>
      <div className={styles.comparisonGrid}>
        
        {/* Columna 1: El Mapa Común */}
        <motion.div className={styles.column} custom={1} initial="hidden" animate="visible" variants={variants}>
          <div className={styles.header}>
            <div className={styles.iconGroup}>
            <FaInstagram />
            <FaTiktok />
            <FaFacebook />
            </div>
            <h3>El Mapa Común</h3>
          </div>
          <div className={styles.content}>
            <p className={styles.focus}>Foco en: <strong>Volumen (Publicar mucho)</strong></p>
            <p className={styles.description}>Publicar en redes de alto alcance para generar "visibilidad" y "likes".</p>
            <p className={styles.resultLabel}>Resultado Potencial:</p>
            <p className={`${styles.resultValue} ${styles.badResult}`}> Riesgo de Inversión sin Retorno</p>
          </div>
        </motion.div>

        {/* Columna 2: El Mapa Estratégico */}
        <motion.div className={`${styles.column} ${styles.recommendedColumn}`} custom={2} initial="hidden" animate="visible" variants={variants}>
          <div className={`${styles.header} ${styles.recommendedHeader}`}>
            <FaMap  />
            <h3>El Mapa Estratégico B2B</h3>
          </div>
          <div className={styles.content}>
            <p className={styles.focus}>Foco en: <strong>Credibilidad Técnica</strong></p>
            <p className={styles.description}>Construir confianza y presencia en canales donde los decisores investigan y compran.</p>
            <p className={styles.resultLabel}>Resultado Potencial:</p>
            <p className={`${styles.resultValue} ${styles.goodResult}`}>Proyectos Calificados y Rentables</p>
          </div>
        </motion.div>

      </div>
        <motion.p className={styles.caption} custom={3} initial="hidden" animate="visible" variants={variants}>
          Nuestro trabajo no es solo ejecutar tareas, es construir el camino más corto hacia sus objetivos de negocio.
        </motion.p>
    </div>
  );
};