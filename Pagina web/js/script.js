/* ============================================
   LORENA ROJAS ARANGO — PORTFOLIO
   script.js
   ============================================ */

/* ---- TRADUCCIONES ES / EN ---- */
const T = {
  es: {
    nav_about: "Sobre mí", nav_projects: "Proyectos", nav_skills: "Habilidades",
    nav_achievements: "Logros", nav_contact: "Contacto",
    eyebrow: "Universidad de Medellín · Comunicación y Entretenimiento Digital",
    hero_tag: "Comunicadora · Diseñadora · Creadora", hero_cta: "Ver mis proyectos",
    a_hello: "Hola, soy Lorena.",
    a_p1: "Soy estudiante de <strong>Comunicación y Entretenimiento Digital</strong> en la Universidad de Medellín. Me muevo de forma nativa en el ámbito digital y las nuevas formas de comunicar: creo universos transmedia, diseño experiencias visuales y cuento historias que conectan con las audiencias de hoy.",
    a_p2: "Entiendo el entorno digital no solo como un canal, sino como un lenguaje vivo en constante evolución. Por eso mi trabajo cruza mundos: de la posproducción y los motion graphics a la animación 3D, la investigación y el desarrollo web — no solo creo, entiendo a quién le hablo y por qué.",
    proj_t: "Mi trabajo.", f_all: "Todos", f_design: "Diseño", f_anim: "Animación",
    f_3d: "3D", f_res: "Investigación", f_dev: "UX/UI",
    c_dd: "Diseño · UI/UX", c_3da: "3D · Animación", c_an: "Animación",
    c_des: "Diseño · Ilustración", c_3d: "3D · Game", c_res: "Investigación",
    p1n: "Rebranding Web UdeM",
    p1d: "Rediseño UI/UX de la página de Comunicación y Relaciones Corporativas de la Universidad de Medellín. Explora el sistema visual completo en el prototipo interactivo.",
    p2n: "Animación 3D en Blender",
    p2d: "Producción de animación 3D con modelado, iluminación y renderizado en Blender.",
    p3n: "Animación 2D en Premiere",
    p3d: "Animación 2D frame a frame creada en Adobe Premiere Pro.",
    p4n: "Animaciones & Sprites 2D",
    p4d: "Desarrollo de personajes y animaciones para videojuego 2D. Incluye ciclos de caminata, ataque y estados de enemigos, diseñados en Illustrator e integrados en Unity.",
    p5n: "Rebranding Web Vehículos",
    p5d: "Rediseño completo de plataforma de compra, venta de vehículos y trámites. Nueva identidad visual y experiencia de usuario. Explora el sitio web en vivo.",
    p6n: "Chairs Party — Juego 3D Móvil",
    p6d: "Videojuego 3D para móviles. Diseño de la interfaz de personalización de personajes y modelado 3D de elementos interactivos.",
    p7n: "Acoso a Mujeres en Gaming",
    p7d: "Investigación sobre la influencia del acoso hacia mujeres en videojuegos multiplayer. Presentada como oradora en el Congreso Stratcom UdeM.",
    p8n: "Escenario 3D Interactivo",
    p8d: "Modelado y texturizado de escenario 3D en Blender. Explora el modelo girándolo e interactuando con él directamente en el navegador.",
    p9n: "Fantasma Pac-Man",
    p9d: "Modelado 3D del icónico fantasma de Pac-Man, creado en Blender. Diseño nostálgico e interactivo.",
    p10n: "Caja de Madera 3D",
    p10d: "Modelo 3D interactivo de una caja de madera, esculpida y texturizada en Blender. Puedes rotarla para explorarla.",
    p11n: "Arma 3D",
    p11d: "Modelo 3D interactivo de un arma, diseñado y texturizado en Blender. Explora los detalles girando el modelo.",
    p12n: "Casa de Bruja VR",
    p12d: "Escenario 3D interactivo de una casa medieval temática de brujería, modelado en Blender. Diseñado como menú de inicio inmersivo para un proyecto de realidad virtual.",
    p13n: "Caminata de Emem (Duik Angela)",
    p13d: "Ciclo de caminata de personaje 2D 'Emem' creado en Adobe Premiere Pro utilizando Duik Angela para el rigging.",
    p14n: "Animación Tradicional de Emem",
    p14d: "Animación 2D realizada cuadro a cuadro (frame por frame) del personaje 'Emem', explorando técnicas tradicionales en la suite de Adobe.",
    sk_t: "Lo que sé hacer.",
    sk1n: "Universos Transmedia", sk1d: "Narrativas que atraviesan múltiples plataformas y formatos.",
    sk2n: "UI/UX & Diseño", sk2d: "Diseño de interfaces y experiencias en Figma e Illustrator.",
    sk3n: "Producción Audiovisual", sk3d: "Edición y producción de video en Premiere Pro y CapCut.",
    sk4n: "3D & Animación", sk4d: "Modelado 3D y animación 2D/3D en Blender y Premiere.",
    sk5n: "Desarrollo Web", sk5d: "Programación frontend con HTML, CSS y JavaScript.",
    sk6n: "Investigación", sk6d: "Metodología científica y análisis de datos cualitativos.",
    sk7n: "Fotografía & Cámara", sk7d: "Manejo de cámara, composición y fotografía profesional.",
    sk8n: "Estrategia de Audiencias", sk8d: "Análisis y comprensión de audiencias para comunicación efectiva.",
    ach_t: "Reconocimientos.",
    a1t: "Oradora — Congreso Stratcom",
    a1d: "Seleccionada como oradora en el Congreso Stratcom de la Universidad de Medellín, presentando investigación sobre acoso a mujeres en videojuegos multiplayer.",
    a2t: "Nominada — Premios Huella 2025",
    a2d: "Nominada por un juego 3D para móviles con gran capacidad de expansión: más mapas, más skins y potencial para convertirse en un juego multijugador.",
    a4t: "Nominada — Premios Huella 2026",
    a4d: "Segunda nominación consecutiva a los Premios Huella de la Universidad de Medellín, por el ecosistema transmedia creado para la producción de contenidos.",
    a3t: "Universidad de Medellín",
    a3d: "Estudiante activa del programa de Comunicación y Entretenimiento Digital con proyectos en diseño, animación, investigación y desarrollo web.",
    con_t: "Hablemos.",
    con_sub: "¿Tienes un proyecto en mente? Me encantaría escucharte.",
    con_em: "Enviar email",
    foot: "Hecho con dedicación · Medellín, Colombia",
    v_figma: "Ver en Figma",
    v_site: "Ver sitio web",
    v_instagram: "Ver en Instagram",
    v_tiktok: "Ver en TikTok",
    m_more: "Ver más", m_less: "Ver menos",
    nav_proposal: "Enfoque",
    vp_t: "Mi propuesta creativa.",
    vp1n: "Posproducción & Motion Graphics",
    vp1d: "Dominio de herramientas de edición y animación (Premiere Pro, CapCut, Duik Angela, Illustrator) para crear Motion Graphics y piezas audiovisuales con sensibilidad narrativa transmedia.",
    vp2n: "Responsabilidad y mejora constante",
    vp2d: "Cada proyecto se entrega, se documenta y se revisa — mis logros y reconocimientos son resultado de ese proceso, no de la casualidad.",
    vp3n: "Conectar personas con historias",
    vp3d: "Busco que cada edición y animación ayude a que marcas y creadores conecten con su audiencia mediante contenido intencional y cuidado.",
    vp_statement: "Transformo material crudo en piezas audiovisuales con ritmo, intención y carácter. Desde el corte y la animación en Motion Graphics (Premiere, CapCut, Duik Angela) hasta la dirección de color y sonido, entrego contenido con criterio editorial pensado para destacar en cada plataforma.",
    vp_ch1_t: "Edición de Pauta Comercial",
    vp_ch1: "Edición y posproducción de contenido promocional para pauta publicitaria, diseñado para captar la atención desde los primeros segundos.",
    vp_ch2_t: "Instagram Reels",
    vp_ch2: "Reels de edición: procesos, antes y después, y detrás de cámaras de proyectos reales.",
    vp_ch3_t: "TikTok & Formato Corto",
    vp_ch3: "Formato vertical: transiciones dinámicas, tendencias de edición y tips de posproducción.",
    sk3n: "Posproducción & Motion Graphics",
    sk3d: "Edición de video en Premiere Pro y CapCut, combinada con animaciones en Motion Graphics y Duik Angela."
  },
  en: {
    nav_about: "About", nav_projects: "Projects", nav_skills: "Skills",
    nav_achievements: "Achievements", nav_contact: "Contact",
    eyebrow: "Universidad de Medellín · Digital Communication & Entertainment",
    hero_tag: "Communicator · Designer · Creator", hero_cta: "See my work",
    a_hello: "Hi, I'm Lorena.",
    a_p1: "I'm a <strong>Digital Communication & Entertainment</strong> student at Universidad de Medellín. I thrive natively in the digital realm and new ways of communicating: creating transmedia universes, designing visual experiences, and telling stories that connect with today's audiences.",
    a_p2: "I view the digital ecosystem not just as a channel, but as a living, evolving language. That's why my work spans worlds: from post-production and motion graphics to 3D animation, research, and web development — I don't just create, I understand who I'm speaking to and why.",
    proj_t: "My work.", f_all: "All", f_design: "Design", f_anim: "Animation",
    f_3d: "3D", f_res: "Research", f_dev: "UX/UI",
    c_dd: "Design · UI/UX", c_3da: "3D · Animation", c_an: "Animation",
    c_des: "Design · Illustration", c_3d: "3D · Game", c_res: "Research",
    p1n: "UdeM Web Rebranding",
    p1d: "UI/UX redesign of the Communication & Corporate Relations page at Universidad de Medellín. Explore the full visual system in the interactive prototype.",
    p2n: "3D Animation in Blender",
    p2d: "3D animation production including modeling, lighting and rendering in Blender.",
    p3n: "2D Animation in Premiere",
    p3d: "Frame-by-frame 2D animation created in Adobe Premiere Pro.",
    p4n: "2D Animations & Sprites",
    p4d: "Character and animation development for a 2D video game. Includes walk cycles, attacks, and enemy states, designed in Illustrator and integrated into Unity.",
    p5n: "Vehicle Platform Rebranding",
    p5d: "Complete redesign of a vehicle buying, selling and processing platform. New visual identity and user experience. Explore the live website.",
    p6n: "Chairs Party — 3D Mobile Game",
    p6d: "3D mobile video game. Character customization interface design and 3D modeling of interactive assets.",
    p7n: "Harassment of Women in Gaming",
    p7d: "Research on the influence of harassment toward women in multiplayer video games. Presented as speaker at Stratcom Congress, UdeM.",
    p8n: "Interactive 3D Environment",
    p8d: "3D environment modeling and texturing in Blender. Explore the model by rotating and interacting with it directly in the browser.",
    p9n: "3D Pac-Man Ghost",
    p9d: "3D modeling of the iconic Pac-Man ghost, created in Blender. Nostalgic and interactive design.",
    p10n: "3D Wooden Box",
    p10d: "Interactive 3D model of a wooden box, sculpted and textured in Blender. You can rotate it to explore.",
    p11n: "3D Weapon",
    p11d: "Interactive 3D model of a weapon, designed and textured in Blender. Explore the details by rotating the model.",
    p12n: "VR Witch House",
    p12d: "Interactive 3D environment of a medieval witch-themed house, modeled in Blender. Designed as an immersive main menu for a virtual reality project.",
    p13n: "Emem's Walk Cycle (Duik Angela)",
    p13d: "2D character walk cycle of 'Emem' created in Adobe Premiere Pro using Duik Angela for rigging.",
    p14n: "Emem Traditional Animation",
    p14d: "Frame-by-frame 2D animation of the 'Emem' character, exploring traditional techniques in Adobe Suite.",
    sk_t: "What I do.",
    sk1n: "Transmedia Universes", sk1d: "Narratives that span multiple platforms and formats.",
    sk2n: "UI/UX & Design", sk2d: "Interface and experience design in Figma and Illustrator.",
    sk3n: "Post-production & Motion Graphics", sk3d: "Video editing in Premiere Pro and CapCut, combined with Motion Graphics animations and Duik Angela.",
    sk4n: "3D & Animation", sk4d: "3D modeling and 2D/3D animation in Blender and Premiere.",
    sk5n: "Web Development", sk5d: "Frontend programming with HTML, CSS and JavaScript.",
    sk6n: "Research", sk6d: "Scientific research methodology and qualitative data analysis.",
    sk7n: "Photography & Camera", sk7d: "Camera operation, composition and professional photography.",
    sk8n: "Audience Strategy", sk8d: "Audience analysis and understanding for effective communication.",
    ach_t: "Achievements.",
    a1t: "Speaker — Stratcom Congress",
    a1d: "Selected as speaker at the Stratcom Communication Congress at Universidad de Medellín, presenting research on harassment of women in multiplayer gaming.",
    a2t: "Nominee — Premios Huella 2025",
    a2d: "Nominated for a 3D mobile game with strong expansion potential: more maps, more skins, and the capacity to grow into a full multiplayer experience.",
    a4t: "Nominee — Premios Huella 2026",
    a4d: "Second consecutive nomination for Premios Huella at Universidad de Medellín, recognizing the transmedia ecosystem built for content production.",
    a3t: "Universidad de Medellín",
    a3d: "Active student of the Digital Communication & Entertainment program with projects in design, animation, research and web development.",
    con_t: "Let's talk.",
    con_sub: "Have a project in mind? I'd love to hear from you.",
    con_em: "Send email",
    foot: "Made with dedication · Medellín, Colombia",
    v_figma: "View on Figma",
    v_site: "View live site",
    v_instagram: "View on Instagram",
    v_tiktok: "View on TikTok",
    m_more: "See more", m_less: "See less",
    nav_proposal: "Approach",
    vp_t: "My creative approach.",
    vp1n: "Post-production & Motion Graphics",
    vp1d: "Mastery of editing and animation tools (Premiere Pro, CapCut, Duik Angela, Illustrator) to create Motion Graphics and audiovisual pieces with transmedia narrative sensitivity.",
    vp2n: "Responsibility and continuous improvement",
    vp2d: "Every project is delivered, documented, and reviewed — my achievements and recognitions are the result of that process, not chance.",
    vp3n: "Connecting people with stories",
    vp3d: "I aim for every edit and animation to help brands and creators connect with their audience through intentional, polished content.",
    vp_statement: "I transform raw footage into audiovisual pieces with rhythm, intention, and character. From editing and Motion Graphics (Premiere, CapCut, Duik Angela) to color and sound design, I deliver content with editorial vision built to stand out on every platform.",
    vp_ch1_t: "Commercial Video Editing",
    vp_ch1: "Editing and post-production of promotional video content, designed to capture attention from the first seconds.",
    vp_ch2_t: "Instagram Reels",
    vp_ch2: "Editing Reels: processes, before/afters, and behind the scenes of real projects.",
    vp_ch3_t: "TikTok & Short Form",
    vp_ch3: "Vertical format: dynamic transitions, editing trends, and post-production tips."
  }
};

/* ---- CAMBIO DE IDIOMA ---- */
let lang = 'es';
function setL(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (T[l][k] !== undefined) el.innerHTML = T[l][k];
  });
  document.getElementById('bes').classList.toggle('on', l === 'es');
  document.getElementById('ben').classList.toggle('on', l === 'en');
  document.getElementById('bes').setAttribute('aria-pressed', l === 'es');
  document.getElementById('ben').setAttribute('aria-pressed', l === 'en');
}

/* ---- TOGGLE TEMA OSCURO / CLARO ---- */
function toggleT() {
  const h = document.documentElement;
  const isDark = h.getAttribute('data-theme') === 'dark';
  h.setAttribute('data-theme', isDark ? 'light' : 'dark');
  const btn = document.getElementById('tb');
  btn.innerHTML = isDark ? '<i class="ph ph-moon"></i>' : '<i class="ph ph-sun"></i>';
  btn.setAttribute('aria-label', isDark ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
  btn.setAttribute('aria-pressed', isDark);
}

document.getElementById('bes').addEventListener('click', () => setL('es'));
document.getElementById('ben').addEventListener('click', () => setL('en'));
document.getElementById('tb').addEventListener('click', toggleT);

/* ---- LOADER — EFECTO SCRAMBLE ---- */
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
const TARGET = 'LORENA';
const ltEl = document.getElementById('lt');
let fr = 0, maxFr = 80;

function scramble() {
  let r = '';
  for (let i = 0; i < TARGET.length; i++) {
    if (fr / maxFr > i / TARGET.length) r += TARGET[i];
    else r += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  ltEl.textContent = r;
  fr++;
  if (fr <= maxFr + 15) {
    requestAnimationFrame(scramble);
  } else {
    ltEl.textContent = TARGET;
    setTimeout(() => {
      const loader = document.getElementById('loader');
      loader.classList.add('out');
      setTimeout(() => loader.style.display = 'none', 750);
    }, 500);
  }
}
setTimeout(scramble, 400);

/* ---- CURSOR PERSONALIZADO ---- */
const cur = document.getElementById('cur');
const curR = document.getElementById('cur-r');
let cx = 0, cy = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  cx = e.clientX; cy = e.clientY;
  cur.style.left = cx + 'px';
  cur.style.top = cy + 'px';
});

(function animCur() {
  rx += (cx - rx) * .1;
  ry += (cy - ry) * .1;
  curR.style.left = rx + 'px';
  curR.style.top = ry + 'px';
  requestAnimationFrame(animCur);
})();

document.querySelectorAll('a, button, .pc, .si, .ac').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('ch'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('ch'));
});

/* ---- NAVBAR — SCROLL EFFECT ---- */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('s', scrollY > 60);
});

/* ---- SCROLL REVEAL ---- */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: .08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.rv').forEach((el, i) => {
  el.classList.add('d' + (i % 5));
  obs.observe(el);
});

/* ---- FILTROS DE PROYECTOS & VER MÁS ---- */
let pExp = false; // Proyectos expandidos
const pLim = 6;   // Límite inicial

function updateP(f) {
  const cards = document.querySelectorAll('.pc');
  const btnM = document.getElementById('btn-m');
  const activeF = f || document.querySelector('.fb.on').getAttribute('data-f');
  
  let visibleCount = 0;
  let totalMatch = 0;

  cards.forEach((card, i) => {
    const c = card.getAttribute('data-c') || '';
    const matches = activeF === 'all' || c.includes(activeF);
    if (matches) totalMatch++;

    // Lógica de visibilidad
    const show = matches && (activeF !== 'all' || pExp || visibleCount < pLim);
    
    if (show && matches) visibleCount++;

    card.classList.toggle('is-hidden', !show);
    card.setAttribute('aria-hidden', show ? 'false' : 'true');
    card.classList.remove('is-fading');
  });

  // Mostrar botón solo si estamos en "Todos" y hay más proyectos que el límite
  if (btnM) {
    const showBtn = activeF === 'all' && totalMatch > pLim;
    btnM.parentElement.style.display = showBtn ? 'flex' : 'none';
    const span = btnM.querySelector('span');
    if (span) span.setAttribute('data-i18n', pExp ? 'm_less' : 'm_more');
    setL(lang); // Refrescar texto
  }
}

document.querySelectorAll('.fb').forEach(btn => {
  btn.addEventListener('click', function () {
    if (this.classList.contains('on')) return;
    document.querySelectorAll('.fb').forEach(b => {
      b.classList.remove('on');
      b.setAttribute('aria-pressed', 'false');
    });
    this.classList.add('on');
    this.setAttribute('aria-pressed', 'true');
    const f = this.getAttribute('data-f');
    
    const cards = document.querySelectorAll('.pc');
    cards.forEach(card => card.classList.add('is-fading'));

    setTimeout(() => updateP(f), 300);
  });
});

// Inicializar proyectos
setTimeout(() => updateP('all'), 500);

// Evento Ver más
const btnM = document.getElementById('btn-m');
if (btnM) {
  btnM.addEventListener('click', () => {
    pExp = !pExp;
    updateP('all');
    if (!pExp) {
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* ---- MENÚ MÓVIL ---- */
function setMenuState(open) {
  const menu = document.getElementById('mm');
  const btn = document.getElementById('hb');
  menu.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
  btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}
function toggleMM() { setMenuState(!document.getElementById('mm').classList.contains('open')); }
function closeMM() { setMenuState(false); }

document.getElementById('hb').addEventListener('click', toggleMM);
document.querySelectorAll('.mm a').forEach(link => link.addEventListener('click', closeMM));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMM();
});

/* ---- CARGA DIFERIDA DE MEDIOS ---- */
function loadVideo(video) {
  if (video.dataset.loaded === 'true') return;
  const src = video.dataset.src;
  if (!src) return;
  video.src = src;
  video.dataset.loaded = 'true';
  video.load();
  video.play().catch(() => {});
}

function loadModel(model) {
  if (model.dataset.loaded === 'true') return;
  const src = model.dataset.src;
  if (!src) return;
  model.setAttribute('src', src);
  model.dataset.loaded = 'true';
}

const mediaObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    if (el.matches('video')) loadVideo(el);
    if (el.matches('model-viewer')) loadModel(el);
    mediaObs.unobserve(el);
  });
}, { rootMargin: '450px 0px', threshold: .01 });

document.querySelectorAll('.lazy-video, model-viewer[data-src]').forEach(el => mediaObs.observe(el));

/* ---- CARGA DIFERIDA DE EMBEDS (INSTAGRAM / TIKTOK) ---- */
function loadInstagramEmbed() {
  if (window.instgrm && window.instgrm.Embeds) {
    window.instgrm.Embeds.process();
    return;
  }
  if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';
    script.onload = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);
  }
}

function loadTikTokEmbed() {
  if (!document.querySelector('script[src*="tiktok.com/embed.js"]')) {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.tiktok.com/embed.js';
    document.body.appendChild(script);
  }
}

const embedObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    if (el.matches('.instagram-media') || el.querySelector('.instagram-media')) {
      loadInstagramEmbed();
      embedObs.unobserve(el);
    }
    if (el.matches('.tiktok-embed') || el.querySelector('.tiktok-embed')) {
      loadTikTokEmbed();
      embedObs.unobserve(el);
    }
  });
}, { rootMargin: '450px 0px', threshold: .01 });

document.querySelectorAll('.instagram-media, .tiktok-embed, .vpe-card-ig, .vpe-card-tt').forEach(el => embedObs.observe(el));

/* ---- CONTROL DE AUDIO VIDEO ---- */
const btnAudio = document.getElementById('btn-audio');
const volIcon = document.getElementById('vol-icon');
const volSlider = document.getElementById('vol-slider');
const vidProj2 = document.getElementById('vid-proj2');

if (btnAudio && vidProj2 && volSlider && volIcon) {
  // Función para actualizar icono según volumen
  function updateVolIcon(v, muted) {
    volIcon.className = 'ph';
    if (muted || v == 0) {
      volIcon.classList.add('ph-speaker-slash');
    } else if (v < 0.5) {
      volIcon.classList.add('ph-speaker-low');
    } else {
      volIcon.classList.add('ph-speaker-high');
    }
  }

  // Click en el icono para mute/unmute
  btnAudio.addEventListener('click', (e) => {
    e.stopPropagation();
    loadVideo(vidProj2);
    
    if (vidProj2.muted) {
      vidProj2.muted = false;
      const val = volSlider.value > 0 ? volSlider.value : 0.5;
      vidProj2.volume = val;
      volSlider.value = val;
    } else {
      vidProj2.muted = true;
    }
    updateVolIcon(vidProj2.volume, vidProj2.muted);
  });

  // Cambio en el slider
  volSlider.addEventListener('input', (e) => {
    e.stopPropagation();
    loadVideo(vidProj2);
    const v = parseFloat(e.target.value);
    vidProj2.volume = v;
    vidProj2.muted = (v === 0);
    updateVolIcon(v, vidProj2.muted);
  });

  // Evitar que el click en el slider propague al card (si el card tiene link o algo)
  volSlider.addEventListener('click', e => e.stopPropagation());
}
