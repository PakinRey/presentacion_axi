import React from 'react';
import { motion } from 'framer-motion';
import styles from './Slide1_Title.module.scss';

export const Slide1_Title = () => (
  <div className={styles.titleSlide}>
    <div className={styles.content}>
      <motion.div
        className={styles.logoLuxeContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img src="/logoAXI_bg.png" alt="Axi Marketing Logo" className={styles.logoLuxe} />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Construyendo su Futuro Digital
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        De la Visibilidad a la Rentabilidad en el Sector B2B
      </motion.h2>
      <motion.div
        className={styles.authors}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p>Presentado por <strong>Francisco Reyes & Karla Montiel</strong></p>
      </motion.div>
    </div>
  </div>
);