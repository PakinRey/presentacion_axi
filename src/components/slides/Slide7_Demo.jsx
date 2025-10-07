import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Slide7_Demo.module.scss';
import { FaDesktop, FaMobileAlt, FaTimes } from 'react-icons/fa';

export const Slide7_Demo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' o 'mobile'
  
  // URL de tu prototipo funcional.
  // Si lo estás corriendo localmente, podría ser 'http://localhost:5174/'
  // Si ya lo subiste a algún lado (Vercel, Netlify), pon esa URL.
  const prototypeUrl = "http://localhost:5174/";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={`${styles.slideBase} ${styles.demoSlide}`}>
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          No es una promesa, es un hecho.
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          Para mostrarle el camino, empezamos a construirlo. Este es un prototipo funcional de su futura presencia digital.
        </motion.p>
        
        {/* Vista Previa No Interactiva */}
        <motion.div 
          className={styles.laptopMockupPreview}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring' }}
        >
          <div className={styles.screenPreview}>
            <button className={styles.ctaButton} onClick={openModal}>
              Explorar Prototipo Interactivo
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal Interactivo */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className={styles.modalHeader}>
                <div className={styles.viewToggle}>
                  <button onClick={() => setViewMode('desktop')} className={viewMode === 'desktop' ? styles.active : ''}>
                    <FaDesktop /> Desktop
                  </button>
                  <button onClick={() => setViewMode('mobile')} className={viewMode === 'mobile' ? styles.active : ''}>
                    <FaMobileAlt /> Móvil
                  </button>
                </div>
                <button className={styles.closeButton} onClick={closeModal}>
                  <FaTimes />
                </button>
              </div>
              
              <div className={styles.iframeContainer}>
                <div className={`${styles.mockupDevice} ${viewMode === 'mobile' ? styles.mobileView : styles.desktopView}`}>
                  <iframe 
                    src={prototypeUrl} 
                    title="Prototipo Funcional de Grupo Alfa 74"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};