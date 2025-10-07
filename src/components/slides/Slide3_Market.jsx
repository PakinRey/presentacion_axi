import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Slide3_Market.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend: { position: 'bottom' },
  },
};

const lowIntentData = {
  labels: ['TikTok', 'Instagram', 'Facebook'],
  datasets: [{
    data: [2, 5, 8],
    backgroundColor: ['#d1d5db', '#9ca3af', '#6b7280'],
    borderColor: '#FFFFFF',
    borderWidth: 4,
  }]
};

const highIntentData = {
  labels: ['LinkedIn', 'Búsqueda Google', 'Sitio Web Proveedor'],
  datasets: [{
    data: [76, 85, 90],
    backgroundColor: ['#6EB43F', '#9CCC3C', '#3A7D44'],
    borderColor: '#FFFFFF',
    borderWidth: 4,
  }]
};

export const Slide3_Market = () => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className={styles.slideBase}>
      <button className={styles.notesToggle} onClick={() => setShowNotes(!showNotes)}>
        {showNotes ? 'Ocultar Guía' : 'Guía'}
      </button>

      <h2 className={styles.mainTitle}>El Veredicto del Mercado B2B: Señal vs. Ruido</h2>
      
      <div className={styles.marketComparisonContainer}>
        <div className={styles.chartsRow}>
          <div className={styles.chartWrapper}>
            <h3 className={styles.chartTitle}>Canales de Ruido y Bajo Impacto</h3>
            <div className={styles.chartCanvas}>
              <Doughnut data={lowIntentData} options={options} />
            </div>
          </div>

          <div className={styles.chartWrapper}>
            <h3 className={styles.chartTitle}>Canales de Decisión y Confianza</h3>
            <div className={styles.chartCanvas}>
              <Doughnut data={highIntentData} options={options} />
            </div>
          </div>
        </div>
        
        <p className={styles.dataAttribution}>
          Fuentes: Edelman-LinkedIn B2B Thought Leadership Impact Report (2024), Contently, Google B2B Marketing Stats.
        </p>
        
        <p className={styles.captionText}>
          "Enfocamos su inversión donde se firman los contratos, no donde se pierden las horas."
        </p>
      </div>

      {/* --- PANEL DE NOTAS DEL ORADOR --- */}
      <AnimatePresence>
        {showNotes && (
          <motion.div 
            className={styles.speakerNotesPanel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <h4>Guía Rápida para Presentar los Datos:</h4>
            <ul>
              <li><strong>Gráfica Izquierda (Ruido):</strong> Explica que aquí la gente se entretiene, no compra. "Es como un espectacular en un festival de música; muchos lo ven, pero nadie está ahí para comprar acero."</li>
              <li><strong>Gráfica Derecha (Decisión):</strong> Enfatiza que aquí es donde el cliente ideal busca soluciones activamente. "Cuando tienen un problema, abren Google, investigan en LinkedIn y validan en el sitio web."</li>
              <li><strong>Remate Final:</strong> Cierra con la idea de rentabilidad. "Ignoramos el ruido y ponemos el 100% de la inversión donde sus clientes ya están listos para decidir."</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};