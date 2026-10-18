/*
 * Todo el contenido de proyectos vive aquí.
 * Para agregar un proyecto nuevo: copia un objeto, cambia los textos
 * (es / en) y pon el video o imagen en /public/media o /public/img.
 */

type Text = { es: string; en: string };

export const DRIVE = 'https://drive.google.com/drive/folders/1Cu5ShkccA5riXutf0wORPPxlWwBKmmwy?usp=sharing';
export const EMAIL = 'lorenarojasarango2@gmail.com';
export const WHATSAPP = 'https://wa.me/573105910739';
export const LINKEDIN = 'https://www.linkedin.com/in/lorena-rojas-arango-b78ab8197/';

/* ---------- Pestaña 1: Edición & Motion ---------- */

export type Reel = { label: Text; id: string };
export type Clip = { video: string; label: Text };

export type Work = {
  slug: string;
  title: Text;
  client: Text;
  role: Text;
  tools: string[];
  format: Text;
  /** videos propios en /public/media (sin extensión); con más de uno salen pestañas */
  clips?: Clip[];
  /** reels de Instagram (se cargan bajo demanda) */
  reels?: Reel[];
  drive?: boolean;
};

export const works: Work[] = [
  {
    slug: 'tatuador',
    title: { es: 'Reels para tatuador', en: 'Reels for a tattoo artist' },
    client: { es: 'Tatuador independiente', en: 'Independent tattoo artist' },
    role: {
      es: 'Reels del proceso de tatuaje, del boceto a la pieza terminada, y una serie de preguntas al tatuador en dos partes. Corto al ritmo de la música y con detalle en primer plano. También edité el video de pauta para promocionar su agenda abierta.',
      en: 'Reels of the tattoo process, from sketch to finished piece, and a two-part Q&A series with the artist. Cut to the beat with close-up detail. I also edited the paid ad promoting his open booking.',
    },
    tools: ['CapCut', 'Premiere Pro'],
    format: { es: 'Vertical 9:16 · Reels, TikTok y pauta', en: 'Vertical 9:16 · Reels, TikTok & ads' },
    clips: [
      { video: 'proceso', label: { es: 'Proceso', en: 'Process' } },
      { video: 'pauta', label: { es: 'Pauta', en: 'Ad' } },
      { video: 'preguntas-1', label: { es: 'Preguntas 1', en: 'Q&A 1' } },
      { video: 'preguntas-2', label: { es: 'Preguntas 2', en: 'Q&A 2' } },
      { video: 'religiosos', label: { es: 'Religiosos', en: 'Religious' } },
    ],
    drive: true,
  },
  {
    slug: 'mara',
    title: { es: 'Venta de vehículos', en: 'Vehicle sales' },
    client: { es: 'Trámites Mara', en: 'Trámites Mara' },
    role: {
      es: 'Reels promocionales y videos de expectativa para lanzamientos de carros: ganchos de apertura, música en tendencia y llamados a la acción.',
      en: 'Promo reels and teasers for car launches: opening hooks, trending audio and calls to action.',
    },
    tools: ['CapCut'],
    format: { es: 'Reels · Pauta', en: 'Reels · Ads' },
    clips: [
      { video: 'carro-1', label: { es: 'Promo 1', en: 'Promo 1' } },
      { video: 'carro-2', label: { es: 'Promo 2', en: 'Promo 2' } },
      { video: 'expectativa', label: { es: 'Expectativa', en: 'Teaser' } },
    ],
  },
  {
    slug: 'x-muestra',
    title: { es: 'X Muestra', en: 'X Muestra' },
    client: { es: 'Facultad de Ciencias Económicas · UdeM', en: 'School of Economics · UdeM' },
    role: {
      es: 'Cuatro reels de difusión, uno por cada categoría de la muestra, para convocar a la comunidad universitaria.',
      en: 'Four outreach reels, one for each showcase category, to call on the university community.',
    },
    tools: ['Premiere Pro', 'CapCut'],
    format: { es: 'Reels institucionales · 4 piezas', en: 'Institutional reels · 4 pieces' },
    clips: [
      { video: 'xm-creatividad', label: { es: 'Creatividad', en: 'Creativity' } },
      { video: 'xm-gestion', label: { es: 'Gestión Empresarial', en: 'Business Management' } },
      { video: 'xm-modelos', label: { es: 'Modelos CEA', en: 'CEA Models' } },
      { video: 'xm-sostenibilidad', label: { es: 'Sostenibilidad', en: 'Sustainability' } },
    ],
  },
];

/** Fragmentos que pasan en el "monitor" del inicio (en vez de un showreel) */
export const monitorClips = [
  { video: 'pauta', label: { es: 'Pauta · tatuador', en: 'Ad · tattoo artist' } },
  { video: 'carro-1', label: { es: 'Promo · Trámites Mara', en: 'Promo · Trámites Mara' } },
  { video: 'proceso', label: { es: 'Proceso de tatuaje', en: 'Tattoo process' } },
  { video: 'expectativa', label: { es: 'Expectativa · Trámites Mara', en: 'Teaser · Trámites Mara' } },
  { video: 'preguntas-1', label: { es: 'Preguntas al tatuador', en: 'Tattoo artist Q&A' } },
  { video: 'religiosos', label: { es: 'Tatuajes religiosos', en: 'Religious tattoos' } },
  { video: 'xm-creatividad', label: { es: 'X Muestra · Creatividad', en: 'X Muestra · Creativity' } },
];

export const process = [
  { track: 'V1', title: { es: 'Brief y plataforma', en: 'Brief & platform' }, text: { es: '¿Dónde se va a ver y quién lo va a ver? Eso define duración, formato y tono.', en: 'Where will it play and who will watch? That sets length, format and tone.' } },
  { track: 'V1', title: { es: 'Selección de tomas', en: 'Shot selection' }, text: { es: 'Reviso todo el material crudo y me quedo solo con lo que cuenta algo.', en: 'I go through all the raw footage and keep only what tells something.' } },
  { track: 'V2', title: { es: 'Ritmo y corte', en: 'Pacing & cut' }, text: { es: 'Corto a la música. El gancho va en los tres primeros segundos.', en: 'I cut to the music. The hook goes in the first three seconds.' } },
  { track: 'V3', title: { es: 'Motion y gráficos', en: 'Motion & graphics' }, text: { es: 'Textos animados, transiciones y elementos de marca que se entiendan sin sonido.', en: 'Animated text, transitions and brand elements that read on mute.' } },
  { track: 'A1', title: { es: 'Color y sonido', en: 'Color & sound' }, text: { es: 'Corrección de color, mezcla y efectos para que todo se sienta de la misma pieza.', en: 'Color correction, mix and sound effects so it all feels like one piece.' } },
  { track: 'OUT', title: { es: 'Exportación por formato', en: 'Export per format' }, text: { es: 'Versiones para Reels, TikTok, historias o pauta, cada una con su encuadre.', en: 'Versions for Reels, TikTok, stories or ads, each with its own framing.' } },
];

export const stack = ['Premiere Pro', 'CapCut', 'After Effects', 'Duik Angela', 'Blender', 'Illustrator', 'Figma', 'Unity'];

/* ---------- Pestaña 2: Comunicación digital ---------- */

export const areas = [
  { id: 'ux', name: { es: 'UX/UI y diseño visual', en: 'UX/UI & visual design' }, text: { es: 'Rediseño de sitios, prototipos en Figma y sistemas visuales.', en: 'Website redesigns, Figma prototypes and visual systems.' } },
  { id: '3d', name: { es: '3D y videojuegos', en: '3D & games' }, text: { es: 'Modelado y texturizado en Blender para juegos y realidad virtual.', en: 'Modelling and texturing in Blender for games and VR.' } },
  { id: 'animation', name: { es: 'Animación 2D y 3D', en: '2D & 3D animation' }, text: { es: 'Personajes, ciclos de caminata y escenas animadas en After Effects y Blender.', en: 'Characters, walk cycles and animated scenes in After Effects and Blender.' } },
  { id: 'transmedia', name: { es: 'Narrativa transmedia', en: 'Transmedia storytelling' }, text: { es: 'Historias que se reparten entre plataformas y formatos.', en: 'Stories spread across platforms and formats.' } },
  { id: 'research', name: { es: 'Investigación', en: 'Research' }, text: { es: 'Metodología cualitativa aplicada a audiencias digitales.', en: 'Qualitative methods applied to digital audiences.' } },
  { id: 'web', name: { es: 'Desarrollo web', en: 'Web development' }, text: { es: 'HTML, CSS y JavaScript. Este portafolio lo hice yo.', en: 'HTML, CSS and JavaScript. I built this portfolio.' } },
];

export type ArchiveItem = {
  slug: string;
  /** año, solo si se conoce */
  year?: string;
  area: string;
  title: Text;
  text: Text;
  tools: string[];
  media?:
    | { type: 'image'; src: string; alt: Text }
    | { type: 'video'; src: string }
    | { type: 'model'; src: string };
  link?: { href: string; label: 'figma' | 'site' | 'instagram' };
};

export const archive: ArchiveItem[] = [
  {
    slug: 'rebranding-udem', area: 'ux',
    title: { es: 'Rebranding web UdeM', en: 'UdeM web rebranding' },
    text: { es: 'Rediseño UI/UX de la página de Comunicación y Relaciones Corporativas de la Universidad de Medellín, con prototipo navegable.', en: 'UI/UX redesign of the Communication & Corporate Relations page at Universidad de Medellín, with a clickable prototype.' },
    tools: ['Figma', 'UI/UX'],
    media: { type: 'image', src: '/img/udem-rebranding.webp', alt: { es: 'Pantallas del rediseño web de la UdeM', en: 'Screens from the UdeM web redesign' } },
    link: { href: 'https://www.figma.com/proto/1ocLASVo5O3tWYtbEQmW6U/Re-Branging-Comunicaci%C3%B3n-y-Relaciones-Coorporativas?node-id=1-313&t=yYqwZpS8I8Yo2fD6-1', label: 'figma' },
  },
  {
    slug: 'rebranding-mara', area: 'ux',
    title: { es: 'Rebranding web Trámites Mara', en: 'Trámites Mara web rebranding' },
    text: { es: 'Nueva identidad y experiencia para una plataforma de compra, venta de vehículos y trámites. El sitio está en línea.', en: 'New identity and experience for a vehicle buying, selling and paperwork platform. The site is live.' },
    tools: ['UI/UX', 'Web'],
    media: { type: 'image', src: '/img/rebranding-vehiculos.webp', alt: { es: 'Sitio web de Trámites Mara', en: 'Trámites Mara website' } },
    link: { href: 'https://tramitesmara.com/', label: 'site' },
  },
  {
    slug: 'dermalis', year: '2026', area: 'transmedia',
    title: { es: 'Dermalis — ecosistema transmedia', en: 'Dermalis — transmedia ecosystem' },
    text: { es: 'Ecosistema transmedia para producción de contenidos. Nominado a los Premios Huella 2026.', en: 'Transmedia ecosystem for content production. Nominated for Premios Huella 2026.' },
    tools: ['Transmedia', 'Contenido'],
    link: { href: 'https://www.instagram.com/p/DYnexbcPYOn/', label: 'instagram' },
  },
  {
    slug: 'chairs-party', year: '2025', area: '3d',
    title: { es: 'Chairs Party — juego 3D móvil', en: 'Chairs Party — 3D mobile game' },
    text: { es: 'Videojuego para móviles: diseño de la interfaz de personalización de personajes y modelado de elementos. Nominado a los Premios Huella 2025.', en: 'Mobile game: character customisation interface and asset modelling. Nominated for Premios Huella 2025.' },
    tools: ['Blender', 'Unity', 'UI/UX'],
    media: { type: 'video', src: 'chairs-party' },
    link: { href: 'https://www.instagram.com/p/DQm1jzrj9FS/', label: 'instagram' },
  },
  {
    slug: 'animacion-3d', area: 'animation',
    title: { es: 'Animación 3D en Blender', en: '3D animation in Blender' },
    text: { es: 'Modelado, iluminación, animación y render en Blender, con el montaje final en edición.', en: 'Modelling, lighting, animation and render in Blender, with the final cut done in editing.' },
    tools: ['Blender', 'Premiere Pro'],
    media: { type: 'video', src: 'animacion-3d' },
  },
  {
    slug: 'emem-caminata', area: 'animation',
    title: { es: 'Emem — ciclo de caminata', en: 'Emem — walk cycle' },
    text: { es: 'Ciclo de caminata de mi personaje Emem, con rigging en Duik Angela.', en: 'Walk cycle of my character Emem, rigged with Duik Angela.' },
    tools: ['After Effects', 'Duik Angela'],
    media: { type: 'video', src: 'emem-caminata' },
  },
  {
    slug: 'emem-tradicional', area: 'animation',
    title: { es: 'Emem — cuadro a cuadro', en: 'Emem — frame by frame' },
    text: { es: 'Animación tradicional, dibujada cuadro a cuadro, del mismo personaje.', en: 'Traditional frame-by-frame animation of the same character.' },
    tools: ['Adobe', 'Frame by frame'],
    media: { type: 'video', src: 'emem-tradicional' },
  },
  {
    slug: 'sprites', area: 'animation',
    title: { es: 'Sprites para videojuego 2D', en: '2D game sprites' },
    text: { es: 'Personajes y animaciones (caminar, atacar, estados de enemigo) dibujados en Illustrator e integrados en Unity.', en: 'Characters and animations (walk, attack, enemy states) drawn in Illustrator and integrated in Unity.' },
    tools: ['Illustrator', 'Unity'],
    media: { type: 'video', src: 'sprites-2d' },
  },
  {
    slug: 'casa-bruja', area: '3d',
    title: { es: 'Casa de bruja VR', en: 'VR witch house' },
    text: { es: 'Casa medieval modelada en Blender como menú de inicio inmersivo para un proyecto de realidad virtual.', en: 'Medieval house modelled in Blender as an immersive start menu for a VR project.' },
    tools: ['Blender', 'VR'],
    media: { type: 'model', src: '/models/casa-bruja.glb' },
  },
  {
    slug: 'escenario', area: '3d',
    title: { es: 'Escenario 3D para juego', en: '3D game environment' },
    text: { es: 'Escenario modelado y texturizado en Blender. Puedes girarlo aquí mismo.', en: 'Environment modelled and textured in Blender. You can rotate it right here.' },
    tools: ['Blender'],
    media: { type: 'model', src: '/models/escenario-3d-optimized.glb' },
  },
  {
    slug: 'props', area: '3d',
    title: { es: 'Props: fantasma, caja y arma', en: 'Props: ghost, crate and weapon' },
    text: { es: 'Ejercicios de modelado y texturizado de objetos para videojuego, incluido el fantasma de Pac-Man.', en: 'Game prop modelling and texturing exercises, including the Pac-Man ghost.' },
    tools: ['Blender'],
    media: { type: 'model', src: '/models/fantasma-pacman.glb' },
  },
  {
    slug: 'acoso-gaming', year: '2026', area: 'research',
    title: { es: 'Acoso a mujeres en videojuegos', en: 'Harassment of women in gaming' },
    text: { es: 'Investigación sobre cómo influye el acoso hacia las mujeres en videojuegos multijugador. La presenté como oradora en el Congreso Stratcom de la UdeM.', en: 'Research on how harassment affects women in multiplayer games. I presented it as a speaker at the UdeM Stratcom Congress.' },
    tools: ['Investigación cualitativa'],
  },
  {
    slug: 'portafolio', year: '2026', area: 'web',
    title: { es: 'Este portafolio', en: 'This portfolio' },
    text: { es: 'Diseñado y programado por mí en Astro, bilingüe y con modo claro y oscuro.', en: 'Designed and built by me in Astro, bilingual with light and dark mode.' },
    tools: ['Astro', 'CSS', 'JavaScript'],
  },
];

export const awards = [
  { year: '2026', title: { es: 'Oradora — Congreso Stratcom', en: 'Speaker — Stratcom Congress' }, text: { es: 'Universidad de Medellín. Investigación sobre acoso a mujeres en videojuegos multijugador.', en: 'Universidad de Medellín. Research on harassment of women in multiplayer games.' } },
  { year: '2026', title: { es: 'Nominada — Premios Huella', en: 'Nominee — Premios Huella' }, text: { es: 'Segunda nominación seguida, por el ecosistema transmedia Dermalis.', en: 'Second nomination in a row, for the Dermalis transmedia ecosystem.' } },
  { year: '2025', title: { es: 'Nominada — Premios Huella', en: 'Nominee — Premios Huella' }, text: { es: 'Por Chairs Party, juego 3D para móviles.', en: 'For Chairs Party, a 3D mobile game.' } },
];
