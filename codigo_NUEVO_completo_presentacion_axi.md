# Compilación de Código del Proyecto: presentacion-axi

---

## Archivo: `codigo_frontend_PRESENTACION_css.md`

```markdown
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


```

---

## Archivo: `codigo_NUEVO_completo_presentacion_axi.md`

```markdown
# Compilación de Código del Proyecto: presentacion-axi

---

## Archivo: `codigo_frontend_PRESENTACION_css.md`

```markdown
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


```

---

## Archivo: `eslint.config.js`

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])

```

---

## Archivo: `explicacion.html`

```html

```

---

## Archivo: `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>presentacion-axi</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

---

## Archivo: `package.json`

```json
{
  "name": "presentacion-axi",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "chart.js": "^4.5.0",
    "framer-motion": "^12.23.22",
    "react": "^19.1.1",
    "react-chartjs-2": "^5.3.0",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.9.3",
    "sass": "^1.93.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.13",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.3",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.4.0",
    "vite": "npm:rolldown-vite@7.1.12"
  },
  "overrides": {
    "vite": "npm:rolldown-vite@7.1.12"
  }
}

```

---

## Archivo: `README.md`

```markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

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

## Archivo: `src\App.jsx`

```jsx
import React from 'react';
import { Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './assets/scss/Presentation.module.scss';

// Importa todas tus diapositivas
import { Slide1_Title } from './components/slides/Slide1_Title.jsx';
import { Slide2_ClientRequest } from './components/slides/Slide2_ClientRequest.jsx';
import { Slide3_Reframing } from './components/slides/Slide3_Reframing.jsx'; // <-- NUEVA IMPORTACIÓN
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


// --- ARRAY DE DIAPOSITIVAS ACTUALIZADO ---
const slides = [
  Slide1_Title,
  Slide2_ClientRequest,
  Slide4_OurVision,
  Slide3_Reframing,
  Slide8_SocialProof,
  Slide5_Market,
  Slide6_ICP,
  Slide7_Strategy,
  Slide8_Ecosystem,
  Slide9_Demo,
  Slide10_Roadmap,
  Slide11_Investment,
  Slide12_CTA,
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


```

---

## Archivo: `src\assets\scss\_variables.scss`

```scss
// Paleta de colores de la presentación
$brand-dark-gray: #1a202c;
$brand-white: #FFFFFF;
$brand-green: #9CCC3C;
$brand-green-bright: #A3D84B;
$brand-green-dark: #6D902D;
$brand-black: #1a202c;

// Layout
$transition-speed: 0.4s;
```

---

## Archivo: `src\assets\scss\Presentation.module.scss`

```scss
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

## Archivo: `src\components\slides\Slide10_CTA.jsx`

```jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Slide10_CTA.module.scss';
import { FaFileSignature, FaBullseye, FaPlayCircle } from 'react-icons/fa';

const nextSteps = [
  { text: "Discutir a detalle el prototipo funcional.", icon: <FaFileSignature/>, note: "Aquí validamos que entendimos su visión y hacemos los ajustes finos." },
  { text: "Alinear métricas de éxito y KPIs.", icon: <FaBullseye/>, note: "Definimos juntos qué significa 'ganar'. ¿Cuántas cotizaciones calificadas necesitamos generar para que esta inversión sea un éxito rotundo?" },
  { text: "Iniciar la Fase 1: Fundación la próxima semana.", icon: <FaPlayCircle/>, note: "Este es el llamado a la acción final. Dejamos claro que estamos listos para empezar a construir de inmediato." }
];

export const Slide10_CTA = () => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className={styles.slideBase}>
       <button className={styles.notesToggle} onClick={() => setShowNotes(!showNotes)}>
        {showNotes ? 'Ocultar Guía' : 'Guía'}
      </button>

      <div className={styles.ctaGrid}>
        <div className={styles.leftColumn}>
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            ¿Construimos Juntos el Liderazgo Digital?
          </motion.h2>
          <motion.p className={styles.summary} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Ustedes tienen 20 años de solidez. Nuestra propuesta es construir el puente digital para que esa solidez se proyecte de manera irrefutable, generando un retorno de inversión tangible y medible.
          </motion.p>
        </div>

        <div className={styles.rightColumn}>
          <h3 className={styles.stepsTitle}>Siguientes Pasos</h3>
          <ul className={styles.stepsList}>
            {nextSteps.map((step, index) => (
              <motion.li key={index} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + index * 0.2 }}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepText}>
                  <h4>{step.text}</h4>
                   <AnimatePresence>
                    {showNotes && (
                      <motion.p 
                        className={styles.speakerNote}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '0.5rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      >
                        <strong>Guía:</strong> {step.note}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      
      <motion.div className={styles.footer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <p>Abrimos el espacio para cualquier pregunta. <strong>Gracias.</strong></p>
      </motion.div>
    </div>
  );
};

```

---

## Archivo: `src\components\slides\Slide10_CTA.module.scss`

```scss
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
  padding: 2rem;
  background-color: $brand-dark-gray;
  color: $brand-white;
  border-radius: 20px;
}

.notesToggle {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: rgba($brand-white, 0.1);
  color: $brand-white;
  border: 1px solid rgba($brand-white, 0.2);
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: rgba($brand-white, 0.2);
  }
}

.ctaGrid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
}

.leftColumn {
  h2 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1.2;
    color: $brand-green;
    margin-bottom: 1.5rem;
    text-align: left;
  }
  .summary {
    font-size: 1.2rem;
    color: #d1d5db;
    line-height: 1.7;
    max-width: 500px;
    text-align: left;
  }

  @media (max-width: 992px) {
    h2, .summary {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

.rightColumn {
  background-color: rgba($brand-black, 0.2);
  border: 1px solid rgba($brand-white, 0.1);
  border-radius: 12px;
  padding: 2rem;
}

.stepsTitle {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: $brand-white;
  text-align: center;
}

.stepsList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.stepIcon {
  font-size: 1.5rem;
  color: $brand-green;
  flex-shrink: 0;
  margin-right: 1.5rem;
  width: 40px;
  text-align: center;
}

.stepText {
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    color: $brand-white;
  }
  .speakerNote {
    overflow: hidden;
    font-size: 0.9rem;
    color: #9ca3af;
    strong {
      color: #e5e7eb;
    }
  }
}

li {
  display: flex;
  align-items: flex-start;
}

.footer {
  margin-top: 4rem;
  padding-top: 2rem;
  width: 100%;
  max-width: 1100px;
  border-top: 1px solid rgba($brand-white, 0.2);
  text-align: center;
  font-size: 1.5rem;
  color: #9ca3af;

  strong {
    color: $brand-white;
  }
}

```

---

## Archivo: `src\components\slides\Slide1_Title.jsx`

```jsx
import React from 'react';
import styles from '../../assets/scss/Presentation.module.scss';

export const Slide1_Title = () => (
  <div className={`${styles.slideBase} ${styles.titleSlide}`}>
    <h1>Construyendo su Futuro Digital</h1>
    <h2>De la Visibilidad a la Rentabilidad en el Sector B2B</h2>
    <div className={styles.authors}>
      <p>Presentado por <strong>Axi Marketing</strong></p>
      <p>Karla Montiel & Francisco Reyes</p>
    </div>
  </div>
);
```

---

## Archivo: `src\components\slides\Slide2_ClientRequest.jsx`

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Slide2_ClientRequest.module.scss';

// --- Iconos para cada punto ---
const IconSocial = () => <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.186 2.25 2.25 0 00-3.933 2.186z" /></svg>;
const IconCamera = () => <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>;
const IconCalendar = () => <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" /></svg>;
const IconBrand = () => <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 15.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 20l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 23.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 20l1.035-.259a3.375 3.375 0 002.456-2.456L18 15.75z" /></svg>;

const requirements = [
  { icon: <IconSocial/>, text: "Gestión de redes sociales (Instagram, TikTok y Facebook)." },
  { icon: <IconCamera/>, text: "Toma de fotografías y videos profesionales en obra." },
  { icon: <IconCalendar/>, text: "Planeación y reportería mensual de contenido." },
  { icon: <IconBrand/>, text: "Unificación de identidad de marca y formatos corporativos." }
];

export const Slide2_ClientRequest = () => {
  return (
    <motion.div 
      className={styles.slideLayout}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.textColumn}>
        <h2 className={styles.title}>El Punto de Partida: Su Solicitud</h2>
        <p className={styles.subtitle}>Analizamos los requerimientos clave que nos compartieron para entender sus necesidades operativas inmediatas.</p>
        <ul className={styles.requirementsList}>
          {requirements.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
            >
              <div className={styles.iconWrapper}>{item.icon}</div>
              <span>{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className={styles.visualColumn}>
         {/* La imagen de WhatsApp se usa como un ancla visual */}
         <img src="./solicitud_marketing.jpeg" alt="Solicitud original del cliente" />
      </div>
    </motion.div>
  );
};
```

---

## Archivo: `src\components\slides\Slide2_ClientRequest.module.scss`

```scss
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

## Archivo: `src\components\slides\Slide2_Intro.jsx`

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Slide2_Intro.module.scss'; // Importa los nuevos estilos dedicados

// --- Variantes de animación para una entrada impactante ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 } 
  },
};

const textVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
};

const visualVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] } },
};

export const Slide2_Intro = () => {
  return (
    <motion.div 
      className={styles.slideLayoutGrid}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden" // Asegura que se desvanezca al salir
    >
      <div className={styles.introContent}>
        <motion.p className={styles.eyebrow} variants={textVariant}>
          El Punto de Partida
        </motion.p>
        <motion.h2 variants={textVariant}>
          Su intuición es correcta. El futuro es digital.
        </motion.h2>
        <motion.p variants={textVariant}>
          Pero en el sector B2B, no se trata de estar en todos lados. Se trata de construir el mapa correcto hacia la rentabilidad.
        </motion.p>
      </div>
      <motion.div className={styles.introVisual} variants={visualVariant}>
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Equipo de construcción revisando planos en obra"
        />
      </motion.div>
    </motion.div>
  );
};

```

---

## Archivo: `src\components\slides\Slide2_Intro.module.scss`

```scss
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

## Archivo: `src\components\slides\Slide3_Market.jsx`

```jsx
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
```

---

## Archivo: `src\components\slides\Slide3_Market.module.scss`

```scss
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
  font-size: clamp(2.2rem, 5vw, 2.8rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 2.5rem;
  color: $brand-dark-gray;
  max-width: 800px;
}

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

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
}

.chartWrapper {
  flex: 1;
  max-width: 380px;
  text-align: center;
}

.chartTitle {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.chartCanvas {
  height: 280px;
  width: 100%;
}

.dataAttribution {
  font-size: 0.8rem;
  font-style: italic;
  color: #9ca3af;
  text-align: center;
}

.captionText {
  font-size: 1.2rem;
  font-style: italic;
  color: #4b5563;
  max-width: 600px;
  text-align: center;
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
  z-index: 10;
  transition: all 0.2s ease;
  &:hover {
    background-color: color.adjust($brand-dark-gray, $lightness: 15%);
  }
}

.speakerNotesPanel {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba($brand-dark-gray, 0.9);
  color: $brand-white;
  backdrop-filter: blur(5px);
  border-top: 2px solid $brand-green;
  border-radius: 12px 12px 0 0;
  padding: 1.5rem 2rem;
  z-index: 5;
  box-shadow: 0 -10px 20px rgba(0,0,0,0.2);

  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: $brand-green;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  li {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #d1d5db;
    flex: 1;
    strong {
      color: $brand-white;
    }
  }
}
```

---

## Archivo: `src\components\slides\Slide3_Reframing.jsx`

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Slide3_Reframing.module.scss';
import { FaTiktok, FaInstagram, FaFacebook, FaMap } from 'react-icons/fa';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.2,
      type: 'spring',
      stiffness: 100
    },
  }),
};

export const Slide3_Reframing = () => {
  return (
    <div className={styles.slideBase}>
      <h2 className={styles.mainTitle}>De Tareas a Estrategia: El Enfoque B2B</h2>
      <div className={styles.comparisonGrid}>
        
        {/* Columna 1: El Mapa Común */}
        <motion.div className={styles.column} custom={1} initial="hidden" animate="visible" variants={variants}>
          <div className={styles.header}>
            <div className={styles.iconGroup}>
            <FaInstagram />
            <FaTiktok />
            <FaFacebook />
            </div>
            <h3>El Mapa Común</h3>
          </div>
          <div className={styles.content}>
            <p className={styles.focus}>Foco en: <strong>Actividad</strong></p>
            <p className={styles.description}>Publicar en redes de alto alcance para generar "visibilidad" y "likes".</p>
            <p className={styles.resultLabel}>Resultado Potencial:</p>
            <p className={`${styles.resultValue} ${styles.badResult}`}>Métricas de Vanidad</p>
          </div>
        </motion.div>

        {/* Columna 2: El Mapa Estratégico */}
        <motion.div className={`${styles.column} ${styles.recommendedColumn}`} custom={2} initial="hidden" animate="visible" variants={variants}>
          <div className={`${styles.header} ${styles.recommendedHeader}`}>
            <FaMap  />
            <h3>El Mapa Estratégico B2B</h3>
          </div>
          <div className={styles.content}>
            <p className={styles.focus}>Foco en: <strong>Autoridad</strong></p>
            <p className={styles.description}>Construir confianza y presencia en canales donde los decisores investigan y compran.</p>
            <p className={styles.resultLabel}>Resultado Potencial:</p>
            <p className={`${styles.resultValue} ${styles.goodResult}`}>Rentabilidad</p>
          </div>
        </motion.div>

      </div>
        <motion.p className={styles.caption} custom={3} initial="hidden" animate="visible" variants={variants}>
          Nuestro trabajo no es solo ejecutar tareas, es construir el camino más corto hacia sus objetivos de negocio.
        </motion.p>
    </div>
  );
};
```

---

## Archivo: `src\components\slides\Slide3_Reframing.module.scss`

```scss
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

## Archivo: `src\components\slides\Slide4_ICP.jsx`

```jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Slide4_ICP.module.scss';

const personas = [
  {
    role: "Gerente de Proyecto",
    kpi: "Cumplimiento de Cronograma",
    risk: "Retrasos por fallas de subcontratistas.",
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
    risk: "Pérdida de valor del activo por fallas estructurales.",
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
```

---

## Archivo: `src\components\slides\Slide4_ICP.module.scss`

```scss
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

## Archivo: `src\components\slides\Slide5_Strategy.jsx`

```jsx
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
        Garantía Estructural de Riesgo Cero
      </h2>
      <div className={styles.strategyGrid}>
        <div className={styles.strategyCard}>
          <IconEcosystem />
          <h3>1. Ecosistema Web Profesional</h3>
          <p>Su carta de presentación digital. Un sitio que demuestra su solidez, expone sus proyectos y convierte visitantes en prospectos calificados.</p>
        </div>
        <div className={styles.strategyCard}>
          <IconLinkedIn />
          <h3>2. Prospección Inteligente</h3>
          <p>Llegamos directamente a los tomadores de decisión en su entorno profesional (LinkedIn), construyendo relaciones y autoridad de marca.</p>
        </div>
        <div className={styles.strategyCard}>
          <IconGoogle />
          <h3>3. Captura de Demanda Activa</h3>
          <p>Aparecemos en Google justo cuando un cliente potencial tiene una necesidad urgente, capturando oportunidades de negocio en el momento preciso.</p>
        </div>
      </div>
    </div>
  </div>
);
```

---

## Archivo: `src\components\slides\Slide6_DecisionMakers.module.scss`

```scss

```

---

## Archivo: `src\components\slides\Slide6_Ecosystem.jsx`

```jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Slide6_Ecosystem.module.scss';
import { FaHome, FaCog, FaHardHat, FaUsers, FaPaperPlane, FaChevronRight } from 'react-icons/fa';

const sections = [
  {
    title: "Inicio",
    purpose: "Captura y Credibilidad",
    Icon: FaHome,
    notes: "En 3 segundos, debe responder: '¿Esta empresa es seria y puede resolver mi problema?' Aquí mostramos sus 20 años de experiencia y certificaciones para generar confianza inmediata."
  },
  {
    title: "Servicios",
    purpose: "Demostración Técnica",
    Icon: FaCog,
    notes: "Aquí demostramos su capacidad técnica. No solo decimos qué hacen, explicamos cómo su precisión en la fabricación o su eficiencia en el montaje le ahorran al cliente tiempo y dinero en la obra."
  },
  {
    title: "Proyectos",
    purpose: "La Prueba Irrefutable",
    Icon: FaHardHat,
    isHighlighted: true,
    notes: "Esta es la sección más importante. No es una galería de fotos, es su portafolio de pruebas. Cada proyecto es un caso de estudio que le demuestra al cliente que ustedes ya han resuelto problemas complejos como el suyo."
  },
    {
    title: "Nosotros",
    purpose: "Humanizar la Marca",
    Icon: FaUsers,
    notes: "Aquí humanizamos la marca. Los negocios se hacen entre personas. Mostrar al equipo directivo y contar la historia de la empresa genera una conexión y valida la enorme experiencia que tienen."
  },
  {
    title: "Contacto",
    purpose: "La Conversión",
    Icon: FaPaperPlane,
    notes: "Este es el objetivo final. Después de que el cliente ha visto su experiencia, su capacidad y sus proyectos, llega aquí convencido. El formulario está diseñado para capturar una solicitud de cotización calificada."
  }
];

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, type: 'spring', stiffness: 120 },
  }),
};

export const Slide6_Ecosystem = () => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className={styles.slideBase}>
      <button className={styles.notesToggle} onClick={() => setShowNotes(!showNotes)}>
        {showNotes ? 'Ocultar Guía' : 'Guía'}
      </button>

      <h2 className={styles.mainTitle}>Su Vendedor Digital 24/7: Una Arquitectura que Genera Negocios</h2>
      
      <div className={styles.flowContainer}>
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <motion.div 
              className={`${styles.flowCard} ${section.isHighlighted ? styles.highlighted : ''}`}
              variants={variants}
              custom={index}
              initial="hidden"
              animate="visible"
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}><section.Icon /></div>
                <div className={styles.cardTitles}>
                  <p className={styles.cardTitle}>{section.title}</p>
                  <p className={styles.cardPurpose}>{section.purpose}</p>
                </div>
              </div>
              <AnimatePresence>
                {showNotes && (
                  <motion.div 
                    className={styles.speakerNotes}
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  >
                    <p><strong>Guía:</strong> {section.notes}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {index < sections.length - 1 && (
              <motion.div variants={variants} custom={index + 0.5} initial="hidden" animate="visible">
                <FaChevronRight className={styles.flowArrow} />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
```

---

## Archivo: `src\components\slides\Slide6_Ecosystem.module.scss`

```scss
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

## Archivo: `src\components\slides\Slide7_Demo.jsx`

```jsx
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
```

---

## Archivo: `src\components\slides\Slide7_Demo.module.scss`

```scss
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
  max-width: 820px;
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
  background: url('./PreviewScreenPage.png') center/cover;
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
  padding: 0.5rem 1rem;
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
  height: 800px;
  border-radius: 40px;
  border: 14px solid #111;
  background: #111;
  iframe {
    border-radius: 26px;
  }
}
```

---

## Archivo: `src\components\slides\Slide8_Roadmap.jsx`

```jsx
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
```

---

## Archivo: `src\components\slides\Slide8_SocialProof.jsx`

```jsx
// src/components/Slide8_SocialProof/Slide8_SocialProof.js
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
```

---

## Archivo: `src\components\slides\Slide8_SocialProof.module.scss`

```scss
// src/components/Slide8_SocialProof/Slide8_SocialProof.module.scss
@use '../../assets/scss/_variables.scss' as *;

// Nuevas variables para la simulación
$linkedin-blue: #0A66C2;
$linkedin-bg: #f4f2ee;
$linkedin-border: #e0e0e0;
$text-color-secondary: #666666;
$mockup-bg: #f9f9f9;


.slideBase {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  gap: 4rem;
  background: $brand-white;
}

.socialProofSlide {
  display: flex;
  flex-direction: row;
  align-items: center;
}

// Columna Izquierda - Mockup
.leftColumn {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobileMockup {
  width: 380px;
  height: 810px;
  background: $brand-black;
  border-radius: 50px;
  padding: 15px;
  box-shadow: 0 30px 60px -20px rgba(0,0,0,0.5), inset 0 0 4px rgba(255,255,255,0.2);
  position: relative;
  
  .speaker {
    width: 60px;
    height: 6px;
    background: #101010;
    border-radius: 3px;
    position: absolute;
    top: 22px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  .screen {
    width: 100%;
    height: 100%;
    background: $linkedin-bg;
    border-radius: 35px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .homeButton {
    width: 140px;
    height: 4px;
    background: #555;
    border-radius: 2px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}

// Elementos dentro de la pantalla
.appHeader {
  display: flex;
  align-items: center;
  padding: 10px;
  background: $brand-white;
  border-bottom: 1px solid $linkedin-border;
  gap: 10px;
  
  .profilePic {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #ccc;
  }
  .searchBar {
    flex-grow: 1;
    height: 32px;
    background: $linkedin-bg;
    border-radius: 5px;
    padding: 0 10px;
    line-height: 32px;
    color: $text-color-secondary;
    font-size: 0.9rem;
  }
  .messageIcon {
    width: 28px;
    height: 28px;
    background: #ccc;
    border-radius: 5px;
  }
}

.postCard {
  background: $brand-white;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid $linkedin-border;
  overflow: hidden;
}

.postHeader {
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 10px;

  .companyLogo {
    width: 50px;
    height: 50px;
    object-fit: contain;
    // background: $linkedin-blue;
    color: $brand-white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border-radius: 4px;
    flex-shrink: 0;
  }
  .companyLogo img{
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  .postInfo {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .companyName { font-weight: 700; color: $brand-black; }
    .postMeta, .postTime { font-size: 0.75rem; color: $text-color-secondary; }
  }

  .moreOptions { color: $text-color-secondary; cursor: pointer; }
}

.postText {
  font-size: 0.9rem;
  padding: 0 12px 12px 12px;
  line-height: 1.5;
  color: $brand-dark-gray;
  strong { color: $linkedin-blue; }
}

.postImageContainer {
  width: 100%;
  max-height: 300px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.postStats {
  font-size: 0.75rem;
  color: $text-color-secondary;
  padding: 8px 12px;
}

.postActions {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid $linkedin-border;
  padding: 4px 0;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: $text-color-secondary;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px;
    border-radius: 4px;
    flex-grow: 1;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;

    &:hover { background-color: #0000000d; }
  }
}

.appFooter {
    margin-top: auto;
    display: flex;
    justify-content: space-around;
    padding: 8px 0;
    background: $brand-white;
    border-top: 1px solid $linkedin-border;
    font-size: 0.7rem;
    color: $text-color-secondary;
    text-align: center;
}

// Columna Derecha - Estrategia
.rightColumn {
  flex: 1.2;
  padding-left: 2rem;
  
  .strategyTitle {
    font-size: 3rem;
    font-weight: 800;
    color: $brand-green-dark;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .strategyText {
    font-size: 1.2rem;
    line-height: 1.8;
    color: $brand-dark-gray;
    margin-bottom: 1.5rem;

    strong {
      color: $brand-green-dark;
      font-weight: 700;
    }
  }
}
```

---

## Archivo: `src\components\slides\Slide9_Investment.jsx`

```jsx
// src/components/slides/Slide9_Investment.jsx
import React from 'react';
import styles from '../../assets/scss/Presentation.module.scss';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

export const Slide9_Investment = () => (
    <div className={styles.slideBase}>
        <h2 style={{ fontSize: '2.8rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem' }}>
            Una Inversión Inteligente, No un Gasto
        </h2>
        <div className={styles.investmentComparison}>
            {/* Columna Izquierda: Equipo Interno */}
            <div className={styles.investmentOption}>
                <h3 className={styles.optionTitle}>Alternativa: Equipo Interno</h3>
                <p className={styles.optionLabel}>Alto costo, gestión compleja</p>
                <ul className={styles.costList}>
                    <li><span>Salario Gerente Mkt.</span> <strong>$40,000 MXN</strong></li>
                    <li><span>Freelancer Diseño/Video</span> <strong>$15,000 MXN</strong></li>
                    <li><span>Herramientas (CRM, SEO)</span> <strong>$5,000 MXN</strong></li>
                </ul>
                <p className={styles.totalCost}>~ $60,000 / Mes</p>
            </div>

            {/* Columna Derecha: Nuestra Alianza */}
            <div className={`${styles.investmentOption} ${styles.recommended}`}>
                <h3 className={styles.optionTitle}>Nuestra Alianza Estratégica</h3>
                <p className={styles.optionLabel}>Inversión eficiente, resultados medibles</p>
                <ul className={styles.benefitsList}>
                    <li><CheckIcon /> Equipo multidisciplinario a su servicio</li>
                    <li><CheckIcon /> Acceso a tecnología y herramientas impulsadas por Inteligencia Artificial</li>
                    <li><CheckIcon /> Estrategia probada en el sector B2B</li>
                    <li><CheckIcon /> Un único punto de contacto y gestión</li>
                </ul>
                <p className={styles.totalCost}>$23,000 / Mes</p>
            </div>
        </div>
    </div>
);
```

---

## Archivo: `src\index.css`

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

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

---

## Archivo: `src\main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <-- Importa BrowserRouter
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

---

## Archivo: `vite.config.js`

```javascript
// Después
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

