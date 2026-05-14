# Design System & Interaction Rules
## REGLAS ESTRICTAS DE UI/UX E INTERACCIONES

Este documento blinda la arquitectura visual y funcional del portafolio. **NUNCA** se deben romper estas interacciones al añadir nuevo contenido.

### 1. Interacciones Innegociables (CRÍTICAS)
- **Loader Scramble:** Antes de cargar la página o las imágenes, DEBE aparecer el loader con efecto de letras aleatorias que siempre se resuelven en el nombre **"LORENA"**.
- **Modo Oscuro / Claro:** El toggle de temas funciona mediante variables CSS (`data-theme="dark"` / `light`). Cualquier nuevo elemento debe soportar ambos modos usando estas variables CSS.
- **Multi-idioma (ES/EN):** Todo texto en el HTML usa el atributo `data-i18n`. El contenido ES/EN existe en un objeto JavaScript (`const T`). NUNCA hardcodear textos sin usar este sistema.
- **Eventos de Scroll:** Todas las secciones usan animaciones *reveal* (IntersectionObserver: fade-in + translateY) usando la clase `.rv`. 
- **Cursor Personalizado:** El cursor tiene seguimiento suave y hover ampliado. No sobreescribir la lógica del ratón nativo.

### 2. Identidad Visual (Dark Experimental Minimalista)
- **Paleta Base:** 
  - Fondo Oscuro: `#0A0A0F`
  - Acento Morado: `#7B2FBE`
  - Acento Rosado: `#C9449D`
  - Texto (Dark Mode): `#F0E6FF`
- **Tipografía:**
  - Display/Títulos: *Cormorant Garamond* (Italic, elegante).
  - Cuerpo/UI: *DM Sans* (Moderna, limpia).
- **Estilo de Layout:** Grid asimétrico para proyectos, espacio negativo generoso, bordes sutiles de 1px.
