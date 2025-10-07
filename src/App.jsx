import React from 'react';
import { Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './assets/scss/Presentation.module.scss';

// Importa todas tus diapositivas
import { Slide1_Title } from './components/slides/Slide1_Title.jsx';
import { Slide2_ClientRequest } from './components/slides/Slide2_ClientRequest.jsx';
import { Slide3_Reframing } from './components/slides/Slide3_Reframing.jsx';
import { Slide2_Intro as Slide4_OurVision } from './components/slides/Slide2_Intro.jsx';
import { Slide3_Market as Slide5_Market } from './components/slides/Slide3_Market.jsx';
import { Slide4_ICP as Slide6_ICP } from './components/slides/Slide4_ICP.jsx';
import { Slide5_Strategy as Slide7_Strategy } from './components/slides/Slide5_Strategy.jsx';
import { Slide6_Ecosystem as Slide8_Ecosystem } from './components/slides/Slide6_Ecosystem.jsx';
import { Slide7_Demo as Slide9_Demo } from './components/slides/Slide7_Demo.jsx';
import { Slide8_Roadmap as Slide10_Roadmap } from './components/slides/Slide8_Roadmap.jsx';
import { Slide9_Investment as Slide11_Investment } from './components/slides/Slide9_Investment.jsx';
import { Slide10_CTA as Slide12_CTA } from './components/slides/Slide10_CTA.jsx';


import { Slide8_SocialProof } from './components/Slides/Slide8_SocialProof.jsx';

import logoAxi from './logo_axi.svg';


// --- ARRAY DE DIAPOSITIVAS ACTUALIZADO ---
const slides = [
  // Bloque 1: Empatía y Reencuadre
  Slide1_Title,          // 1. Hola
  Slide2_ClientRequest,  // 2. Te escuchamos
  Slide3_Reframing,      // 3. Pero el problema real es este
  Slide6_ICP,            // 4. Porque entendemos a TUS clientes a la perfección

  // Bloque 2: La Visión y la Lógica del Mercado
  Slide4_OurVision,      // 5. Esta es la visión correcta
  Slide5_Market,         // 6. Y aquí están los datos duros que la respaldan

  // Bloque 3: La Solución y la Prueba
  Slide7_Strategy,       // 7. Por eso, nuestra estrategia es esta
  Slide8_Ecosystem,      // 8. Así funciona el pilar 1 (Tu Web)
  Slide8_SocialProof,    // 9. Así se ve en acción el pilar 2 (Prospección)
  Slide9_Demo,           // 10. Y esta es la prueba de que ya podemos empezar (Prototipo)

  // Bloque 4: El Cierre
  Slide10_Roadmap,       // 11. Este es el plan para lograrlo
  Slide11_Investment,
  Slide12_CTA,           // 13. Empecemos
];
const totalSlides = slides.length;

const slideVariants = {
  enter: { opacity: 0, scale: 0.98 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 }
};

function Presentation() {
  const navigate = useNavigate();
  const { slideId } = useParams();
  const currentSlide = parseInt(slideId || '1');
  const CurrentSlideComponent = slides[currentSlide - 1];

  React.useEffect(() => {
    if (isNaN(currentSlide) || currentSlide < 1 || currentSlide > totalSlides) {
      navigate('/1', { replace: true });
    }
  }, [slideId, navigate, currentSlide]);

  const goToSlide = React.useCallback((nextSlide) => {
    if (nextSlide > 0 && nextSlide <= totalSlides) {
      navigate(`/${nextSlide}`);
    }
  }, [navigate]);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft') {
        goToSlide(currentSlide - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, goToSlide]);

  return (
    <div className={styles.presentationContainer}>
        <AnimatePresence mode='wait'>
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={styles.slideWrapper}
            >
              <div className={styles.slideContent}>
                {CurrentSlideComponent && <CurrentSlideComponent />}
              </div>
            </motion.div>
        </AnimatePresence>
        <img src={logoAxi} alt="Logo Axi Marketing" className={styles.watermarkLogo} />

      <div className={styles.navigation}>
        <button onClick={() => goToSlide(currentSlide - 1)} disabled={currentSlide === 1}>Anterior</button>
        <span>{currentSlide} / {totalSlides}</span>
        <button onClick={() => goToSlide(currentSlide + 1)} disabled={currentSlide === totalSlides}>Siguiente</button>
      </div>
      <div className={styles.progressBar} style={{ width: `${(currentSlide / totalSlides) * 100}%` }}></div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/:slideId" element={<Presentation />} />
      <Route path="/" element={<PresentationWrapper initialSlide="1" />} /> 
    </Routes>
  );
}

function PresentationWrapper({ initialSlide }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(`/${initialSlide}`, { replace: true });
  }, [initialSlide, navigate]);
  return null;
}

export default App;

