---
name: portfolio-deploy-skill
description: Lee el JSON de un proyecto procesado y modifica index.html, js/script.js y (si es necesario) css/styles.css de la carpeta 'Pagina web/' de forma quirúrgica para desplegar el proyecto.
---

# Portfolio Deploy Skill

Este skill inyecta contenido nuevo en la base de código existente sin romper la estructura.

### Requisitos previos
- Leer `referencias/design-system.md` para NO romper el loader, idiomas, modo oscuro ni scroll reveal.
- Leer el JSON generado por el `content-skill`.

### Flujo de Trabajo Quirúrgico
1. **Actualización de JavaScript (Idiomas):**
   - Abre `Pagina web/js/script.js`.
   - Inyecta de forma segura los nuevos pares de traducción (ES y EN) en el objeto `const T`, respetando el formato actual y los nombres de las claves (`data-i18n`).
2. **Actualización de HTML (DOM):**
   - Abre `Pagina web/index.html`.
   - Busca el contenedor `<div class="pg" id="pg">` (Grid de proyectos).
   - Inyecta un nuevo div de proyecto, manteniendo la estructura exacta de clases requerida por el diseño:
     ```html
     <div class="pc rv" data-c="categoria"> ... </div>
     ```
   - Asegúrate de incluir los atributos `data-i18n`, la clase `.rv` (para el Scroll Reveal), y enlazar la imagen correcta.
3. **Verificación Visual:**
   - Asegurar que el proyecto siga el diseño asimétrico (clase `.ft` si es destacado, etc).
