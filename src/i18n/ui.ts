export type Lang = 'es' | 'en';

/** Rutas de cada pestaña por idioma */
export const routes = {
  es: { edit: '/', digital: '/digital/' },
  en: { edit: '/en/', digital: '/en/digital/' },
} as const;

export const ui = {
  es: {
    metaEdit: 'Lorena Rojas — Edición de video & Motion Graphics',
    metaDigital: 'Lorena Rojas — Comunicación digital',
    metaDesc:
      'Portafolio de Lorena Rojas Arango, editora de video y motion graphics en Medellín. Reels, pauta comercial, animación y comunicación digital.',
    tabEdit: 'Edición & Motion',
    tabDigital: 'Comunicación digital',
    skip: 'Saltar al contenido',
    themeLight: 'Cambiar a modo claro',
    themeDark: 'Cambiar a modo oscuro',
    langSwitch: 'Switch to English',
    loader: 'Cargando material',
    available: 'Disponible para proyectos freelance',

    heroKicker: 'Editora de video · Motion graphics',
    heroLine1: 'Edito video',
    heroLine2: 'con ritmo',
    heroLine3: 'y hago motion.',
    heroIntro:
      'Soy Lorena, estudiante de Comunicación y Entretenimiento Digital en la Universidad de Medellín. Corto, animo y termino piezas para redes sociales y pauta: reels, videos de expectativa y contenido de marca.',
    heroCta: 'Ver trabajos',
    monitorLabel: 'Monitor de programa',
    reelPlay: 'Ver con sonido',

    tape: ['Corte', 'Ritmo', 'Motion graphics', 'Posproducción', 'Reels', 'Color', 'Sonido', 'Pauta'],

    binWork: 'Bin 01',
    workTitle: 'Trabajos seleccionados',
    workIntro: 'Piezas reales, para clientes reales. Toca un video para verlo completo y con sonido.',
    client: 'Cliente',
    role: 'Lo que hice',
    tools: 'Herramientas',
    format: 'Formato',
    loadReel: 'Cargar reel de Instagram',
    loadReelNote: 'Se carga solo si lo pides — así la página va más rápido.',
    openIg: 'Abrir en Instagram',
    openDrive: 'Ver más en Drive',
    sound: 'Sonido',

    binProcess: 'Línea de tiempo',
    processTitle: 'Cómo armo una pieza',
    processIntro: 'Cada edición pasa por las mismas pistas. Lo que cambia es la plataforma y la persona que va a verla.',

    binAbout: 'Ficha',
    aboutTitle: 'Detrás del corte',
    aboutP1:
      'Además de mis proyectos de la universidad, he editado para un tatuador independiente, una empresa de venta de vehículos y la Facultad de Ciencias Económicas de la UdeM.',
    aboutP2:
      'Me importa que el video funcione: que enganche en los primeros segundos, que el ritmo acompañe la música y que el mensaje se entienda aunque esté sin sonido. Lo estético viene después, pero viene.',
    factStudy: 'Estudio',
    factStudyV: 'Com. y Entretenimiento Digital · UdeM · 2023–2027',
    factBase: 'Base',
    factBaseV: 'Medellín, Colombia',
    factLang: 'Idiomas',
    factLangV: 'Español · Inglés',
    stack: 'Software',

    driveKicker: 'Todo el material',
    driveTitle: 'Todos los videos que he editado están en una carpeta.',
    driveCta: 'Abrir Google Drive',

    nextKicker: 'Pestaña 02',
    nextTitle: 'Además de editar, soy comunicadora.',
    nextCta: 'Ver comunicación digital',

    digitalKicker: 'Bin 02 · Archivo',
    digitalLine1: 'Edito video.',
    digitalLine2: 'Pero primero',
    digitalLine3: 'soy comunicadora.',
    digitalIntro:
      'Mi carrera me formó en todo lo que pasa alrededor del contenido: cómo se diseña una interfaz, cómo se cuenta una historia en varias plataformas, cómo se modela un mundo en 3D y cómo se investiga a una audiencia. Esto es lo que he hecho por fuera de la sala de edición.',
    areasTitle: 'Áreas',
    archiveTitle: 'Archivo de proyectos',
    filterAll: 'Todo',
    open: 'Abrir',
    close: 'Cerrar',
    drag: 'Arrastra para girar el modelo',
    visit: 'Visitar',
    awardsTitle: 'Reconocimientos',

    contactKicker: 'Contacto',
    contactTitle: '¿Editamos algo?',
    contactSub: 'Escríbeme por correo o por WhatsApp y hablamos de tu proyecto.',
    footer: 'Hecho en Medellín',
    cursorPlay: 'Play',
    cursorOpen: 'Ver',
    cursorDrag: 'Girar',
  },
  en: {
    metaEdit: 'Lorena Rojas — Video editing & Motion graphics',
    metaDigital: 'Lorena Rojas — Digital communication',
    metaDesc:
      'Portfolio of Lorena Rojas Arango, video editor and motion designer based in Medellín. Reels, ads, animation and digital communication.',
    tabEdit: 'Editing & Motion',
    tabDigital: 'Digital communication',
    skip: 'Skip to content',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
    langSwitch: 'Cambiar a español',
    loader: 'Loading footage',
    available: 'Available for freelance work',

    heroKicker: 'Video editor · Motion graphics',
    heroLine1: 'I edit video',
    heroLine2: 'with rhythm',
    heroLine3: 'and make motion.',
    heroIntro:
      "I'm Lorena, a Digital Communication & Entertainment student at Universidad de Medellín. I cut, animate and finish pieces for social media and ads: reels, teasers and brand content.",
    heroCta: 'See the work',
    monitorLabel: 'Program monitor',
    reelPlay: 'Watch with sound',

    tape: ['Cut', 'Rhythm', 'Motion graphics', 'Post-production', 'Reels', 'Color', 'Sound', 'Ads'],

    binWork: 'Bin 01',
    workTitle: 'Selected work',
    workIntro: 'Real pieces for real clients. Tap a video to watch it in full, with sound.',
    client: 'Client',
    role: 'What I did',
    tools: 'Tools',
    format: 'Format',
    loadReel: 'Load Instagram reel',
    loadReelNote: 'It only loads when you ask — keeps the page fast.',
    openIg: 'Open on Instagram',
    openDrive: 'More on Drive',
    sound: 'Sound',

    binProcess: 'Timeline',
    processTitle: 'How I build a piece',
    processIntro: 'Every edit goes through the same tracks. What changes is the platform and the person watching.',

    binAbout: 'File',
    aboutTitle: 'Behind the cut',
    aboutP1:
      'Besides my university projects, I have edited for an independent tattoo artist, a vehicle sales company and the School of Economics at UdeM.',
    aboutP2:
      'I care about the video working: hooking in the first seconds, letting the pacing follow the music, and getting the message across even on mute. Aesthetics come after — but they come.',
    factStudy: 'Studies',
    factStudyV: 'Digital Communication & Entertainment · UdeM · 2023–2027',
    factBase: 'Based in',
    factBaseV: 'Medellín, Colombia',
    factLang: 'Languages',
    factLangV: 'Spanish · English',
    stack: 'Software',

    driveKicker: 'All the footage',
    driveTitle: "Every video I've edited lives in one folder.",
    driveCta: 'Open Google Drive',

    nextKicker: 'Tab 02',
    nextTitle: "Beyond editing, I'm a communicator.",
    nextCta: 'See digital communication',

    digitalKicker: 'Bin 02 · Archive',
    digitalLine1: 'I edit video.',
    digitalLine2: 'But first,',
    digitalLine3: "I'm a communicator.",
    digitalIntro:
      'My degree trained me in everything around content: designing an interface, telling a story across platforms, modelling a world in 3D and researching an audience. This is what I have made outside the editing room.',
    areasTitle: 'Areas',
    archiveTitle: 'Project archive',
    filterAll: 'All',
    open: 'Open',
    close: 'Close',
    drag: 'Drag to rotate the model',
    visit: 'Visit',
    awardsTitle: 'Recognition',

    contactKicker: 'Contact',
    contactTitle: "Let's edit something.",
    contactSub: 'Write me by email or WhatsApp and let’s talk about your project.',
    footer: 'Made in Medellín',
    cursorPlay: 'Play',
    cursorOpen: 'View',
    cursorDrag: 'Rotate',
  },
} as const;

export type UI = (typeof ui)[Lang];

export function t(lang: Lang) {
  return ui[lang];
}
