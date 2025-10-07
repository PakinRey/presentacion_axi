import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../assets/scss/Presentation.module.scss';

// Iconos para cada pilar estratégico
const IconEcosystem = () => <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const IconLinkedIn = () => <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" stroke="none" fill="currentColor" /></svg>;
const IconGoogle = () => <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;

export const Slide5_Strategy = () => (
  <div className={`${styles.slideBase} ${styles.darkSlide}`}>
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '1.5rem' }}>Nuestra Estrategia</p>
      <h2 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#9CCC3C' }}>
        Su Garantía de Cumplimiento y Rentabilidad
      </h2>
      <div className={styles.strategyGrid}>
        <div className={styles.strategyCard}>
          <IconEcosystem />
          <h3>1. Ecosistema Web Profesional</h3>
          <p>Su carta de presentación digital. Un sitio que demuestra su solidez, expone sus proyectos y convierte visitantes en solicitudes de cotización calificadas. </p>
        </div>
        <div className={styles.strategyCard}>
          <IconLinkedIn />
          <h3>2. Prospección Inteligente</h3>
          <p>Llegamos directamente a los tomadores de decisión en su entorno profesional (LinkedIn), construyendo relaciones y autoridad de marca.</p>
        </div>
        <div className={styles.strategyCard}>
          <IconGoogle />
          <h3>3. Captura de Demanda Activa</h3>
          <p>Aparecemos en Google justo cuando un cliente potencial tiene una necesidad urgente, capturando oportunidades de negocio con intención de compra inmediata. </p>
        </div>
      </div>
    </div>
  </div>
);