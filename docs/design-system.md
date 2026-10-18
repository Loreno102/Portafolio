# Design System & Interaction Rules
## Portafolio Lorena Rojas — versión Astro (2026)

Concepto: **sala de edición**. Timecodes, pistas de línea de tiempo, monitor de programa y cintas de corte. Referentes: kail.studio (cintas, tarjetas apiladas, azul + lima) y silviamalavasi.com (interfaz tipo expediente, etiquetas mono).

### 1. Interacciones que no se deben romper
- **Dos pestañas:** `01 Edición & Motion` (`/`, `/en/`) y `02 Comunicación digital` (`/digital/`, `/en/digital/`).
- **Idiomas ES/EN:** todos los textos de interfaz viven en `src/i18n/ui.ts` y los de proyectos en `src/data/projects.ts` (campos `{ es, en }`). Nunca escribir texto suelto en los componentes.
- **Modo claro / oscuro:** variables CSS en `src/styles/global.css` bajo `:root[data-theme='dark']` y `:root[data-theme='light']`. Todo elemento nuevo usa esas variables.
- **Cursor propio:** visor de cámara (`Cursor.astro`). Los elementos piden un estado con `data-cursor="play" | "open" | "drag"`.
- **Reveal al hacer scroll:** clase `.rv`.
- **Videos:** `<video data-auto data-src="...-loop.mp4">` se reproduce solo cuando está en pantalla. `data-play-src` abre el reproductor con sonido.
- **Instagram:** nunca incrustar el iframe directamente; usar el bloque `[data-ig]` que carga bajo demanda.

### 2. Identidad visual
- Lima `#D4FF3F`, azul eléctrico `#3434FF`, rojo REC `#FF3B2F`.
- Fondo oscuro `#0C0C0D` / claro `#EFEDE6`.
- Títulos: *Bricolage Grotesque* (ancho 75, peso 800, mayúsculas).
- Cuerpo: *Instrument Sans*. Etiquetas y datos: *JetBrains Mono* en mayúsculas.
- Evitar: degradados morado-rosa, efecto vidrio, íconos dentro de tarjetas, grids de tres tarjetas iguales.
