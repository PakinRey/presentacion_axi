// src/components/slides/Slide9_Investment.jsx
import React from 'react';
import styles from './Slide9_Investment.module.scss';
import { FaCheckCircle, FaHandshake } from 'react-icons/fa';

export const Slide9_Investment = () => (
    <div className={styles.slideBase}>
        <h2 className={styles.mainTitle}>
            Una Inversión Inteligente, No un Gasto
        </h2>
        <div className={styles.investmentComparison}>
            {/* Columna Izquierda: Equipo Interno */}
            <div className={styles.investmentOption}>
                <h3 className={styles.optionTitle}>Alternativa: Equipo Interno</h3>
                <p className={styles.optionLabel}>Alto costo, gestión compleja</p>
                <ul className={styles.costList}>
                    <li><span>Salario Gerente Mkt.</span> <strong>$24,923 MXN</strong></li>
                    <li><span>Freelancer Diseño/Video</span> <strong>$15,000 MXN</strong></li>
                    <li><span>Herramientas (CRM, Sales Nav.)</span> <strong>$1,900 MXN</strong></li>
                </ul>
                <p className={styles.totalCost}>~ $41,823 / Mes</p>
            </div>

            {/* Columna Derecha: Nuestra Alianza */}
            <div className={`${styles.investmentOption} ${styles.recommended}`}>
                <h3 className={styles.optionTitle}>Nuestro Modelo de Socio Estratégico</h3>
                <p className={styles.optionLabel}>Inversión eficiente, resultados medibles</p>
                <ul className={styles.benefitsList}>
                    <li><FaCheckCircle /> Equipo multidisciplinario a su servicio</li>
                    <li><FaCheckCircle /> Acceso a tecnología y herramientas de vanguardia</li>
                    <li><FaCheckCircle /> Estrategia probada en el sector B2B Industrial</li>
                    <li><FaCheckCircle /> Un único punto de contacto y gestión</li>
                </ul>

                {/* --- SECCIÓN DE COMPROMISO --- */}
                <div className={styles.commitmentDetail}>
                  <div className={styles.commitmentIcon}><FaHandshake /></div>
                  <div>
                    <h4 className={styles.commitmentTitle}>Alianza Estratégica Fundacional</h4>
                    <p className={styles.commitmentText}>Un compromiso de 6 meses para ejecutar las Fases 1 y 2, garantizando la entrega de resultados medibles.</p>
                  </div>
                </div>
                {/* --- FIN DE LA SECCIÓN --- */}

                <p className={styles.totalCost}>$23,000 / Mes</p>
            </div>
        </div>
    </div>
);