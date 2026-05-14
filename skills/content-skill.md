---
name: portfolio-content-skill
description: Procesa notas crudas e imágenes de un nuevo proyecto desde la carpeta 'nuevos_proyectos/' y genera el copy profesional bilingüe (ES/EN) y metadatos listos para web.
---

# Portfolio Content Skill

Este skill ingesta archivos crudos locales de la carpeta `nuevos_proyectos/` y los estandariza.

### Requisitos previos
- Leer `referencias/brand-voice.md` para mantener el tono.
- El usuario debe indicar qué carpeta/archivos leer (ej. `nuevos_proyectos/animacion-3d/`).

### Flujo de Trabajo
1. **Lectura:** Analiza los archivos `.txt` o notas proporcionadas por el usuario.
2. **Generación de Copy:**
   - Redacta el nombre del proyecto.
   - Crea descripciones persuasivas (una en ES, una en EN).
   - Identifica las etiquetas/herramientas (ej. Blender, Premiere, UI/UX).
3. **Organización de Assets:**
   - Sugiere renombrar imágenes al formato `nombre-proyecto.webp` y moverlas a `Pagina web/assets/`.
4. **Output Final:**
   - Genera un archivo local temporal (ej. `nuevos_proyectos/data-proyecto.json`) estructurado para que el `deploy-skill` pueda usarlo. 
   - El JSON debe contener: `id_i18n`, `titulo_es`, `titulo_en`, `desc_es`, `desc_en`, `categorias`, `tags`, `ruta_imagen`.
