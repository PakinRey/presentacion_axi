import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Slide4_ICP.module.scss';

const personas = [
  {
    role: "Gerente de Proyecto",
    kpi: "Cumplimiento de Cronograma",
    risk: "Impacto en el Costo Total de Propiedad (TCO) por fallas del proveedor.",
    icon: () => <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg>,
    notes: "Su única misión es que el proyecto se entregue a tiempo y sin errores. Su peor pesadilla es una llamada diciendo que un proveedor falló y ahora toda la construcción está detenida."
  },
  {
    role: "Director de Compras",
    kpi: "Costo Total de Propiedad (TCO)",
    risk: "Costos ocultos por baja calidad o re-trabajos.",
    icon: () => <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125-1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    notes: "No busca lo más barato, busca lo más inteligente. El TCO significa pensar en el costo a 10 años, no solo hoy. Su terror es que 'lo barato salga caro' por reparaciones o fallas."
  },
  {
    role: "Inversionista / Dueño",
    kpi: "Retorno de Inversión (ROI)",
    risk: "Riesgo reputacional y devaluación del activo que afecta el ROI.",
    icon: () => <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" /></svg>,
    notes: "Solo le importa que su inversión sea segura y genere dinero (ROI). Su miedo es construir algo que se devalúe o tenga mala reputación por una mala ejecución."
  }
];

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3 + i * 0.2, type: 'spring' },
  }),
};

export const Slide4_ICP = () => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className={styles.slideBase}>
      {/* --- BOTÓN PARA MOSTRAR/OCULTAR NOTAS --- */}
      <button className={styles.notesToggle} onClick={() => setShowNotes(!showNotes)}>
        {showNotes ? 'Ocultar Guía' : 'Guía'}
      </button>

      <h2 className={styles.mainTitle}>El Comité de Decisión: Hablando el Idioma de Cada Influenciador</h2>
      <div className={styles.personasGrid}>
        {personas.map((persona, index) => (
          <motion.div key={index} className={styles.personaCard} variants={variants} custom={index} initial="hidden" animate="visible">
            <div className={styles.cardIcon}>{persona.icon()}</div>
            <h3 className={styles.roleTitle}>{persona.role}</h3>
            <div className={styles.details}>
              <p className={styles.kpi}><strong>Prioridad:</strong> {persona.kpi}</p>
              <p className={styles.risk}><strong>Su Mayor Miedo:</strong> {persona.risk}</p>
            </div>
            
            {/* --- PANEL DE NOTAS DEL ORADOR --- */}
            <AnimatePresence>
              {showNotes && (
                <motion.div 
                  className={styles.speakerNotes}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: '1.5rem' }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p><strong>Guía:</strong> {persona.notes}</p>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        ))}
      </div>
    </div>
  );
};