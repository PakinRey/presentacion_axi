# Compilación de Código del Proyecto: presentacion-axi

---

## Archivo: `src\App.css`

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

---

## Archivo: `src\assets\scss\_variables.scss`

```
// Paleta de colores de la presentación
$brand-dark-gray: #1a202c;
$brand-white: #FFFFFF;
$brand-green: #9CCC3C;
$brand-green-bright: #A3D84B;
$brand-green-dark: #6D902D;

// Layout
$transition-speed: 0.4s;
```

---

## Archivo: `src\assets\scss\Presentation.module.scss`

```
@use 'sass:color';

/* ============================================= */
/* ==         VARIABLES DE LA MARCA             == */
/* ============================================= */
$brand-green: #9CCC3C;
$brand-green-dark: #6EB43F;
$brand-dark-gray: #1a202c; // Nuevo color de fondo principal
$brand-light-gray: #f3f4f6;
$brand-white: #FFFFFF;
$border-color: #4a5568; // Borde más sutil para tema oscuro
$transition-speed: 0.3s;

/* ============================================= */
/* ==       ESTRUCTURA DE PRESENTACIÓN          == */
/* ============================================= */
.presentationContainer {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #e2e8f0; // Un fondo gris claro muy suave
  color: $brand-dark-gray;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Poppins', sans-serif; // Una fuente más moderna
}

.slideContent {
  flex-grow: 1;
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 100;
  background-color: rgba(26, 32, 44, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  span {
    color: $brand-white;
    font-weight: 500;
    min-width: 50px;
    text-align: center;
  }

  button {
    background-color: $brand-white;
    color: $brand-dark-gray;
    border: none;
    padding: 0.6rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: all $transition-speed ease;

    &:hover:not(:disabled) {
      background-color: color.adjust($brand-white, $lightness: -10%);
      transform: scale(1.05);
    }

    &:disabled {
      background-color: #6b7280;
      color: #9ca3af;
      cursor: not-allowed;
    }
  }
}

.progressBar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 6px;
  background: linear-gradient(90deg, $brand-green-dark, $brand-green);
  transition: width $transition-speed ease;
  box-shadow: 0 0 10px $brand-green;
}

/* ============================================= */
/* ==         ESTILOS BASE DE SLIDES            == */
/* ============================================= */
.slideBase {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2.8rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 3rem;
  }
}

.titleSlide {
  text-align: center;
  h1 {
    font-size: 4rem;
    font-weight: 800;
  }
  h2 {
    font-size: 2rem;
    color: $brand-green-dark;
    margin-top: 0.5rem;
    font-weight: 600;
  }
  .authors {
    margin-top: 3rem;
    font-size: 1.1rem;
  }
}

/* ============================================= */
/* ==      ESTILOS MEJORADOS (FASE 1 & 2)       == */
/* ============================================= */

/* --- Layouts reutilizables --- */
.slideLayoutGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: left;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
}

.darkSlide {
  background-color: $brand-dark-gray;
  color: $brand-white;
  padding: 4rem;
  border-radius: 20px;
  
  h2, h3, p {
    color: $brand-white;
  }
  p {
    color: color.mix($brand-white, $brand-dark-gray, 75%);
  }
}

.dataAttribution {
  font-size: 0.8rem;
  font-style: italic;
  color: #9ca3af;
  text-align: center;
  margin-top: 1.5rem;
}

/* --- Slide 2: Intro --- */
.introContent {
  .eyebrow {
    font-size: 1rem;
    font-weight: 700;
    color: $brand-green;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 3.2rem;
    text-align: left;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.25rem;
    max-width: 500px;
  }
}
.introVisual {
  position: relative;
  width: 100%;
  height: 450px;
  background: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop') center/cover;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3);
}

/* --- Slide 3: Market --- */
.marketComparisonContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
}
.chartsRow {
  display: flex;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  margin-bottom: 1rem;
}
.chartWrapper {
  flex: 1;
  max-width: 350px;
  text-align: center;
  .chartTitle {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .chartCanvas {
    height: 280px;
  }
}
.captionText {
  font-size: 1.2rem;
  font-style: italic;
  color: #4b5563;
  max-width: 600px;
  text-align: center;
  margin-top: 1rem;
}

/* --- Slide 4: ICP --- */
.icpSlide {
  .cardsContainer {
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
  }
  .icpCard {
    background-color: $brand-white;
    padding: 2rem;
    border-radius: 12px;
    flex: 1;
    max-width: 320px;
    border: 1px solid #e5e7eb;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    border-top: 5px solid $brand-green;

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .icpStatistic {
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 2px solid #e5e7eb;
      
      .statisticValue {
        display: block;
        font-size: 2.8rem;
        font-weight: 800;
        color: $brand-green-dark;
        line-height: 1.1;
      }
      .statisticLabel {
        font-size: 0.9rem;
        color: #4b5563;
        max-width: 250px;
        margin: 0.25rem auto 0;
      }
      .dataAttribution {
        font-size: 0.75rem;
        margin-top: 0.75rem;
      }
    }
  }
}

/* --- Slide 5: Strategy --- */
.strategyGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}
.strategyCard {
  background-color: color.mix($brand-dark-gray, $brand-white, 92%);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid $border-color;
  transition: transform 0.3s ease, background-color 0.3s ease;
  &:hover {
      transform: translateY(-10px);
      background-color: color.mix($brand-dark-gray, $brand-white, 85%);
  }
  .icon {
    width: 40px;
    height: 40px;
    color: $brand-green;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  p {
    font-size: 0.95rem;
    line-height: 1.6;
  }
}

/* --- Slide 6: Ecosystem --- */
.ecosystemFlow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}
.flowStep {
  background-color: $brand-white;
  color: $brand-dark-gray;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  flex: 1;
  max-width: 200px;
  .stepTitle {
    font-weight: 700;
    font-size: 1.1rem;
  }
  .stepPurpose {
    font-size: 0.85rem;
    color: #4b5563;
  }
}
.flowArrow {
  color: #9ca3af;
  flex-shrink: 0;
}


/* --- Slide 8: Roadmap --- */
.roadmapGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  width: 100%;
}
.phaseCard {
  background-color: $brand-white;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  text-align: center;
  display: flex;
  flex-direction: column;

  .phaseHeader {
    color: $brand-green-dark;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }
  .phaseTitle {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  .phaseDetail {
    flex-grow: 1;
    margin-bottom: 2rem;

    .detailLabel {
      font-weight: 600;
      color: #4b5563;
      margin-bottom: 0.5rem;
    }
    .detailValue {
      font-size: 1.1rem;
      font-weight: 500;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}

/* --- Slide 9: Investment --- */
.investmentComparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: stretch;
  width: 100%;
}
.investmentOption {
  background-color: $brand-white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  .optionTitle {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .optionLabel {
    color: #4b5563;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  .costList, .benefitsList {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
    flex-grow: 1;
  }
  .costList li {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px dashed #d1d5db;
  }
  .benefitsList li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    svg {
      width: 20px;
      height: 20px;
      color: $brand-green-dark;
      flex-shrink: 0;
    }
  }
  .totalCost {
    font-size: 2.8rem;
    font-weight: 800;
    margin-top: auto;
  }
  &.recommended {
    border-color: $brand-green;
    background-color: color.mix($brand-green, $brand-white, 8%);
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
    
    .totalCost {
      color: $brand-green-dark;
    }
  }
}

```

---

## Archivo: `src\components\slides\Slide2_ClientRequest.module.scss`

```
@use 'sass:color';
@use '../../assets/scss/_variables.scss' as *;

.slideLayout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: left;
  margin: 6rem;
}

.textColumn {
  .title {
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 1rem;
    text-align: left;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #4b5563;
    max-width: 500px;
    margin-bottom: 2.5rem;
  }
}

.requirementsList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  li {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .iconWrapper {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    margin-right: 1rem;
    background-color: color.adjust($brand-green, $lightness: 40%, $alpha: -0.8);
    color: $brand-green-dark;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 24px;
      height: 24px;
    }
  }
}

.visualColumn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  img {
    max-width: 100%;
    max-height: 500px;
    object-fit: contain;
    border-radius: 16px;
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.2);
  }
}
```

---

## Archivo: `src\components\slides\Slide2_Intro.module.scss`

```
/* Estilos para Slide 2: Intro Mejorada */
@use '../../assets/scss/variables' as *;

.slideLayoutGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: left;
  margin: 5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
}

.introContent {
  .eyebrow {
    font-size: 1rem;
    font-weight: 700;
    color: $brand-green;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    text-align: left; // Asegura la alineación
  }

  p {
    font-size: 1.25rem;
    max-width: 500px;
  }

  @media (max-width: 992px) {
    h2, p {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

.introVisual {
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 450px;
  min-height: 300px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3);
  }
}

```

---

## Archivo: `src\components\slides\Slide3_Reframing.module.scss`

```
// /components/slides/Slide3_Reframing.module.scss
@use '../../assets/scss/_variables.scss' as *;

.slideBase {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem; // Padding base para pantallas pequeñas
}

.mainTitle {
  font-size: clamp(2rem, 5vw, 2.8rem); // Fuente responsiva
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  color: $brand-dark-gray;
}

.comparisonGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 900px;

  // --- MEDIA QUERY PARA RESPONSIVIDAD ---
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Apila las columnas en pantallas pequeñas
    gap: 2rem;
  }
}

.column {
  background-color: $brand-white;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
}

.recommendedColumn {
  border-width: 2px;
  border-color: $brand-green;
  transform: scale(1.03);

  &:hover {
    transform: scale(1.03) translateY(-8px);
  }

  @media (max-width: 768px) {
    transform: scale(1); // Desactiva el zoom en móvil para mejor layout
    &:hover {
       transform: translateY(-8px);
    }
  }
}

.header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  text-align: center;

  h3 {
    font-size: 1.3rem; // Tamaño de fuente ajustado
    font-weight: 700;
    margin-top: 0.75rem;
    color: $brand-dark-gray;
  }
}

// --- CLAVE: Control del tamaño de los íconos ---
.iconGroup, .header svg {
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    width: 32px;
    height: 32px;
    color: #6b7280;
  }
}

.recommendedHeader {
  background-color: $brand-dark-gray;
  border-bottom-color: $brand-dark-gray;

  h3, svg {
    color: $brand-white;
  }
}

.content {
  padding: 1.5rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  .focus {
    font-size: 1.1rem;
    color: #4b5563;
    margin-bottom: 0.5rem;
  }

  .description {
    color: #6b7280;
    margin-bottom: 1.5rem;
    flex-grow: 1;
    font-size: 0.95rem;
  }

  .resultLabel {
    font-weight: 600;
    color: #4b5563;
  }

  .resultValue {
    font-size: 1.4rem;
    font-weight: 700;
  }

  .badResult { color: #ef4444; }
  .goodResult { color: #84cc16; }
}

.caption {
  margin-top: 2.5rem;
  font-size: 1.1rem;
  font-style: italic;
  color: #4b5563;
  max-width: 700px;
  text-align: center;
}
```

---

## Archivo: `src\components\slides\Slide4_ICP.module.scss`

```
@use 'sass:color';
@use '../../assets/scss/_variables.scss' as *;

.slideBase {
  position: relative; // Necesario para posicionar el botón de notas
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem; // Padding base para pantallas pequeñas
}

/* --- BOTÓN Y PANEL DE NOTAS --- */
.notesToggle {
  position: absolute;
  top: 0;
  right: 0;
  background-color: $brand-dark-gray;
  color: $brand-white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: color.adjust($brand-dark-gray, $lightness: 15%);
  }
}

.speakerNotes {
  overflow: hidden; // Clave para la animación de altura
  p {
    background-color: color.adjust($brand-green, $lightness: 45%);
    color: #3f6212; // Verde oscuro para contraste
    border-radius: 8px;
    padding: 1rem;
    font-size: 0.9rem;
    text-align: left;
    line-height: 1.5;

    strong {
      color: #1a2e05;
    }
  }
}

/* --- ESTILOS DE LA DIAPOSITIVA --- */
.mainTitle {
  font-size: clamp(2.2rem, 5vw, 2.8rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 3.5rem;
  color: $brand-dark-gray;
  max-width: 750px;
}

.personasGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}

.personaCard {
  background-color: $brand-white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.07);
  }
}

.cardIcon {
  width: 60px;
  height: 60px;
  background-color: color.adjust($brand-green, $lightness: 40%, $alpha: -0.8);
  color: $brand-green-dark;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    width: 32px;
    height: 32px;
  }
}

.roleTitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: $brand-dark-gray;
  margin-bottom: 1.5rem;
}

.details {
  text-align: left;
  width: 100%;
  font-size: 1rem;
  color: #4b5563;
  flex-grow: 1; // Empuja las notas hacia abajo
  
  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  strong {
    color: $brand-dark-gray;
  }
}
```

---

## Archivo: `src\components\slides\Slide6_DecisionMakers.module.scss`

```

```

---

## Archivo: `src\components\slides\Slide6_Ecosystem.module.scss`

```
@use 'sass:color';
@use '../../assets/scss/_variables.scss' as *;

.slideBase {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.mainTitle {
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  color: $brand-dark-gray;
  max-width: 800px;
}

.flowContainer {
  display: flex;
  align-items: stretch; // Hace que las tarjetas tengan la misma altura
  justify-content: center;
  gap: 1rem;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    .flowArrow {
      transform: rotate(90deg);
      margin: 0.5rem 0;
    }
  }
}

.flowCard {
  background: $brand-white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.03);
  padding: 1.5rem;
  flex: 1;
  max-width: 200px;
  display: flex;
  flex-direction: column;

  &.highlighted {
    background-color: $brand-dark-gray;
    border-color: $brand-green;
    color: $brand-white;
    transform: scale(1.05);

    .cardTitle, .cardPurpose {
      color: $brand-white;
    }
    .cardIcon {
      background-color: $brand-green;
      color: $brand-dark-gray;
    }
  }

  @media (max-width: 1024px) {
    max-width: 400px;
    width: 100%;
  }
}

.cardHeader {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cardIcon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  background-color: #f3f4f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $brand-dark-gray;
  font-size: 1.2rem;
}

.cardTitle {
  font-size: 1.1rem;
  font-weight: 700;
  color: $brand-dark-gray;
}

.cardPurpose {
  font-size: 0.85rem;
  color: #6b7280;
}

.flowArrow {
  font-size: 1.5rem;
  color: #d1d5db;
  align-self: center;
}

/* --- ESTILOS PARA MODO PRESENTADOR --- */
.notesToggle {
  position: absolute;
  top: 0;
  right: 0;
  background-color: $brand-dark-gray;
  color: $brand-white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: color.adjust($brand-dark-gray, $lightness: 15%);
  }
}

.speakerNotes {
  overflow: hidden;
  
  p {
    background-color: #f3f4f6;
    border-top: 2px solid #e5e7eb;
    padding: 1rem;
    margin-top: 1.5rem; // Espacio que se anima
    font-size: 0.9rem;
    text-align: left;
    line-height: 1.5;
    color: #4b5563;

    strong {
      color: $brand-dark-gray;
    }
  }
}
```

---

## Archivo: `src\components\slides\Slide7_Demo.module.scss`

```
@use '../../assets/scss/_variables.scss' as *;

.demoSlide {
  text-align: center;
  h2 {
    font-size: 3rem;
    font-weight: 800;
    color: $brand-green-dark;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 3rem auto;
    color: #4b5563;
  }
}

// Mockup de la vista previa (no interactivo)
.laptopMockupPreview {
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 10;
  background: #111;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4);
  margin: 0 auto;
}

.screenPreview {
  width: 100%;
  height: 100%;
  background: url('https://placehold.co/800x600/1a202c/9CCC3C?text=Prototipo+Alfa+74') center/cover;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ctaButton {
  background: $brand-green;
  color: $brand-white;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1.5rem 3rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(156, 204, 60, 0.4);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(156, 204, 60, 0.5);
  }
}

// Estilos del Modal
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background: rgba(26, 32, 44, 0.8);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modalContent {
  background: $brand-white;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  max-width: 95vw;
  max-height: 95vh;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
}

.modalHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.viewToggle {
  display: flex;
  gap: 0.5rem;
  background-color: #f3f4f6;
  padding: 0.5rem;
  border-radius: 8px;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    background: transparent;
    color: #4b5563;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
      background: $brand-white;
      color: $brand-dark-gray;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
  }
}

.closeButton {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    color: $brand-dark-gray;
  }
}

.iframeContainer {
  flex-grow: 1;
  padding: 2rem;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.mockupDevice {
  transition: all 0.4s ease-in-out;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3);
  
  iframe {
    width: 100%;
    height: 100%;
  }
}

.desktopView {
  width: 100%;
  height: 100%;
  max-width: 1400px;
  aspect-ratio: 16/9;
  border-radius: 12px;
  border: 12px solid #111;
  background: #111;
}

.mobileView {
  width: 375px;
  height: 812px;
  border-radius: 40px;
  border: 14px solid #111;
  background: #111;
  iframe {
    border-radius: 26px;
  }
}
```

---

## Archivo: `src\index.css`

```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

```

