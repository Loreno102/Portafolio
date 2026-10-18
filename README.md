# Portafolio — Lorena Rojas Arango

Hecho con [Astro](https://astro.build). Genera un sitio estático: HTML, CSS y un poco de JavaScript.

## Estructura

```
Portafolio/
├── src/
│   ├── data/projects.ts   ← proyectos, clientes, premios y contacto
│   ├── i18n/ui.ts         ← textos de la interfaz (ES / EN)
│   ├── styles/global.css  ← colores, tipografías, modo claro/oscuro
│   ├── components/        ← piezas de la página (portada, tarjetas, cursor…)
│   ├── views/             ← las dos pestañas
│   ├── pages/             ← rutas: /, /digital/, /en/, /en/digital/
│   └── assets/foto.png    ← tu foto (Astro la optimiza sola)
├── public/
│   ├── media/             ← videos y pósters
│   ├── img/               ← imágenes
│   └── models/            ← modelos 3D (.glb)
├── docs/                  ← guía de marca, sistema de diseño y skills
├── netlify.toml           ← configuración de Netlify
└── package.json
```

## Verlo en tu computador

Necesitas [Node.js](https://nodejs.org) 22 o más reciente. Abre una terminal en esta carpeta y ejecuta (solo la primera vez):

```bash
npm.cmd install
```

Después, cada vez que quieras verlo:

```bash
npm.cmd run dev
```

Abre http://localhost:4321 en el navegador. Cada cambio que guardes se actualiza solo. Para detenerlo: `Ctrl + C`.

> En PowerShell se usa `npm.cmd` porque Windows bloquea `npm` por la política de scripts.

## Publicarlo en Netlify

Netlify está conectado a GitHub. El archivo `netlify.toml` le dice que ejecute `npm run build` y publique la carpeta `dist`. Solo tienes que subir los cambios a GitHub (commit + push) y Netlify publica la nueva versión en uno o dos minutos.

## Agregar un video

Cada video tiene tres archivos en `public/media/`:

- `nombre.mp4` — completo, con sonido (H.264, 720 px de ancho si es vertical)
- `nombre-loop.mp4` — 6 segundos sin sonido, para la vista previa
- `nombre.webp` — imagen de portada

Luego lo agregas en `src/data/projects.ts`.
