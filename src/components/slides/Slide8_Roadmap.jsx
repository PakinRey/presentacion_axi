// src/components/slides/Slide8_Roadmap.jsx
import React from 'react';
import styles from '../../assets/scss/Presentation.module.scss';

export const Slide8_Roadmap = () => (
  <div className={`${styles.slideBase} ${styles.icpSlide}`}>
    <h2 style={{ marginBottom: '3rem' }}>La Hoja de Ruta: De la Fundación a la Autoridad</h2>
    <div className={styles.roadmapGrid}>
      {/* Fase 1 */}
      <div className={styles.phaseCard}>
        <p className={styles.phaseHeader}>Fase 1 (Mes 1)</p>
        <h3 className={styles.phaseTitle}>Fundación Digital</h3>
        <div className={styles.phaseDetail}>
          <p className={styles.detailLabel}>ENTREGABLE CLAVE</p>
          <p className={styles.detailValue}>Ecosistema Digital de Autoridad (Web + Portafolio)</p>
        </div>
        <div className={styles.phaseDetail}>
          <p className={styles.detailLabel}>KPI DE ÉXITO</p>
          <p className={styles.detailValue}>100% Operativo y Optimizado para Conversión en 90 días</p>
        </div>
      </div>
      
      {/* Fase 2 */}
      <div className={styles.phaseCard}>
        <p className={styles.phaseHeader}>Fase 2 (Mes 2-6)</p>
        <h3 className={styles.phaseTitle}>Activación y Captura</h3>
        <div className={styles.phaseDetail}>
          <p className={styles.detailLabel}>ENTREGABLE CLAVE</p>
          <p className={styles.detailValue}>Campañas de Captura de Demanda (Google & LinkedIn Ads)</p>
        </div>
        <div className={styles.phaseDetail}>
          <p className={styles.detailLabel}>KPI DE ÉXITO</p>
          <p className={styles.detailValue}>Generar las primeras 15 Solicitudes de Cotización Calificadas</p>
        </div>
      </div>
      
      {/* Fase 3 */}
      <div className={styles.phaseCard}>
        <p className={styles.phaseHeader}>Fase 3 (Mes 7+)</p>
        <h3 className={styles.phaseTitle}>Liderazgo de Mercado</h3>
        <div className={styles.phaseDetail}>
          <p className={styles.detailLabel}>ENTREGABLE CLAVE</p>
          <p className={styles.detailValue}>Estrategia SEO y Contenido de Liderazgo de Pensamiento</p>
        </div>
        <div className={styles.phaseDetail}>
          <p className={styles.detailLabel}>KPI DE ÉXITO</p>
          <p className={styles.detailValue}>Posicionamiento Top 5 en Google para "estructuras metálicas en CDMX"</p>
        </div>
      </div>
    </div>
  </div>
);