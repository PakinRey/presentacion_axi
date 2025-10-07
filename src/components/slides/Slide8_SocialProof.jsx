// src/components/Slide8_SocialProof/Slide8_SocialProof.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Slide8_SocialProof.module.scss';
import { FaLinkedin, FaEllipsisH, FaGlobe, FaQuoteLeft } from 'react-icons/fa';
import { BiLike, BiCommentDetail, BiRepost, BiSend } from "react-icons/bi";

export const Slide8_SocialProof = () => {
  return (
    <div className={`${styles.slideBase} ${styles.socialProofSlide}`}>
      <motion.div 
        className={styles.leftColumn}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.mobileMockup}>
          <div className={styles.speaker}></div>
          <div className={styles.screen}>
            
            {/* Cabecera de la App */}
            <div className={styles.appHeader}>
              <div className={styles.profilePic}></div>
              <div className={styles.searchBar}>Buscar</div>
              <div className={styles.messageIcon}></div>
            </div>

            {/* Contenido del Post */}
            <div className={styles.postCard}>
              {/* Encabezado del Post */}
              <div className={styles.postHeader}>
                <div className={styles.companyLogo}>
                  <img src="./logo_grupo_alfa_74.png" alt="Grupo Alfa 74" />
                </div>
                <div className={styles.postInfo}>
                  <span className={styles.companyName}>Grupo Alfa 74</span>
                  <span className={styles.postMeta}>1,250 seguidores • Promocionado</span>
                  <span className={styles.postTime}>1d • <FaGlobe size={12} /></span>
                </div>
                <FaEllipsisH className={styles.moreOptions} />
              </div>

              {/* Texto del Post */}
              <p className={styles.postText}>
                Teníamos 48 horas para montar esta estructura en un espacio confinado. La precisión en el habilitado y la sinergia en campo fueron clave. <strong>#ConstruccionIndustrial #AceroEstructural #Ingenieria</strong>
              </p>

              {/* Imagen del Post */}
              <div className={styles.postImageContainer}>
                <img src="/estructura_metalica_edificio_1.png" alt="Montaje de estructura metálica industrial" />
              </div>

              {/* Interacciones */}
              <div className={styles.postStats}>
                <span>2,158 impresiones</span>
              </div>
              <div className={styles.postActions}>
                <button><BiLike size={22} /><span>Recomendar</span></button>
                <button><BiCommentDetail size={22} /><span>Comentar</span></button>
                <button><BiRepost size={22} /><span>Compartir</span></button>
                <button><BiSend size={22} /><span>Enviar</span></button>
              </div>
            </div>

             {/* Barra de Navegación de la App */}
             <div className={styles.appFooter}>
                <div>Inicio</div>
                <div>Mi red</div>
                <div>Publicar</div>
                <div>Notificaciones</div>
                <div>Empleos</div>
            </div>

          </div>
          <div className={styles.homeButton}></div>
        </div>
      </motion.div>

        <motion.div 
        className={styles.rightColumn}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        >
        <h2 className={styles.strategyTitle}>Contenido que Construye Confianza</h2>
        <p className={styles.strategyText}>
            <FaQuoteLeft size={16} color="#0077B5" style={{ marginRight: '8px' }} /> En el sector B2B industrial, la decisión de compra se basa en la credibilidad y la prueba de capacidad. Las redes sociales, especialmente LinkedIn, no son para vender, son para demostrar.
        </p>
        <p className={styles.strategyText}>
            <FaQuoteLeft size={16} color="#0077B5" style={{ marginRight: '8px' }} /> Nuestra estrategia se centra en crear y distribuir contenido de <strong>liderazgo de pensamiento (Thought Leadership)</strong>. Mostramos el "cómo": la complejidad técnica resuelta, la precisión en la ejecución y los resultados cuantificables.
        </p>
        <p className={styles.strategyText}>
            <FaQuoteLeft size={16} color="#0077B5" style={{ marginRight: '8px' }} /> Cada publicación es un micro-caso de éxito diseñado para que el <strong>Perfil de Cliente Ideal (ICP)</strong> —ingenieros, gerentes de proyecto, directores de compras— vea en nosotros no un proveedor, sino un socio estratégico que mitiga riesgos.
        </p>
        </motion.div>
    </div>
  );
};