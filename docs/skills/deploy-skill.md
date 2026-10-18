---
name: portfolio-deploy-skill
description: Lee el JSON de un proyecto procesado y lo agrega al portafolio Astro editando src/data/projects.ts y copiando los medios a public/.
---

# Portfolio Deploy Skill

Este skill agrega contenido nuevo al portafolio sin tocar el diseño.

### Requisitos previos
- Leer `docs/design-system.md`.
- Leer el JSON generado por el `content-skill`.

### Flujo de trabajo
1. **Decidir la pestaña:**
   - Edición de video o motion graphics → arreglo `works` (pestaña 01).
   - Todo lo demás (UX/UI, 3D, investigación, transmedia, web) → arreglo `archive` (pestaña 02).
2. **Medios:**
   - Videos: comprimir a H.264 (720 px de ancho si es vertical, 1280 px si es horizontal) y crear tres archivos en `public/media/`: `nombre.mp4`, `nombre-loop.mp4` (6 s, sin audio) y `nombre.webp` (póster).
   - Imágenes: `.webp` en `public/img/`. Modelos 3D: `.glb` en `public/models/`.
3. **Datos:** agregar el objeto en `src/data/projects.ts` con todos los textos en `{ es, en }`.
4. **Verificar:** `npm run build` en la raíz del proyecto debe terminar sin errores.
