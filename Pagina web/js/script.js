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
    a_p1: "Soy estudiante de <strong>Comunicación y Entretenimiento Digital</strong> en la Universidad de Medellín. Creo universos transmedia, diseño experiencias visuales y cuento historias que conectan con las audiencias.",
    a_p2: "Mi trabajo cruza mundos: del diseño a la animación 3D, de la investigación académica al desarrollo web. No solo creo — entiendo a quién le hablo y por qué.",
    proj_t: "Mi trabajo.", f_all: "Todos", f_design: "Diseño", f_anim: "Animación",
    f_3d: "3D", f_res: "Investigación", f_dev: "Dev",
    c_dd: "Diseño · UI/UX", c_3da: "3D · Animación", c_an: "Animación",
    c_des: "Diseño · Ilustración", c_3d: "3D · Game", c_res: "Investigación",
    p1n: "Rebranding Web UdeM",
    p1d: "Rediseño UI/UX de la página de Comunicación y Relaciones Corporativas de la Universidad de Medellín. Explora el sistema visual completo en el prototipo interactivo.",
    p2n: "Animación 3D en Blender",
    p2d: "Producción de animación 3D con modelado, iluminación y renderizado en Blender.",
    p3n: "Animación 2D en Premiere",
    p3d: "Animación 2D frame a frame creada en Adobe Premiere Pro.",
    p4n: "Sprites Videojuego 2D",
    p4d: "Creación de sprites para videojuego 2D en Adobe Illustrator.",
    p5n: "Rebranding Web Vehículos",
    p5d: "Rediseño completo de plataforma de compra, venta de vehículos y trámites. Nueva identidad visual y experiencia de usuario. Explora el sitio web en vivo.",
    p6n: "Juego 3D en Blender",
    p6d: "Videojuego 3D con modelado de assets y entornos en Blender.",
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
    a2d: "Nominada en los Premios Huella 2025 de la Universidad de Medellín, reconocimiento que celebra el talento de sus estudiantes más destacados.",
    a3t: "Universidad de Medellín",
    a3d: "Estudiante activa del programa de Comunicación y Entretenimiento Digital con proyectos en diseño, animación, investigación y desarrollo web.",
    con_t: "Hablemos.",
    con_sub: "¿Tienes un proyecto en mente? Me encantaría escucharte.",
    con_em: "Enviar email",
    foot: "Hecho con dedicación · Medellín, Colombia",
    v_figma: "Ver en Figma",
    v_site: "Ver sitio web"
  },
  en: {
    nav_about: "About", nav_projects: "Projects", nav_skills: "Skills",
    nav_achievements: "Achievements", nav_contact: "Contact",
    eyebrow: "Universidad de Medellín · Digital Communication & Entertainment",
    hero_tag: "Communicator · Designer · Creator", hero_cta: "See my work",
    a_hello: "Hi, I'm Lorena.",
    a_p1: "I'm a <strong>Digital Communication & Entertainment</strong> student at Universidad de Medellín. I create transmedia universes, design visual experiences, and tell stories that connect with audiences.",
    a_p2: "My work bridges worlds: from design to 3D animation, from academic research to web development. I don't just create — I understand who I'm talking to and why.",
    proj_t: "My work.", f_all: "All", f_design: "Design", f_anim: "Animation",
    f_3d: "3D", f_res: "Research", f_dev: "Dev",
    c_dd: "Design · UI/UX", c_3da: "3D · Animation", c_an: "Animation",
    c_des: "Design · Illustration", c_3d: "3D · Game", c_res: "Research",
    p1n: "UdeM Web Rebranding",
    p1d: "UI/UX redesign of the Communication & Corporate Relations page at Universidad de Medellín. Explore the full visual system in the interactive prototype.",
    p2n: "3D Animation in Blender",
    p2d: "3D animation production including modeling, lighting and rendering in Blender.",
    p3n: "2D Animation in Premiere",
    p3d: "Frame-by-frame 2D animation created in Adobe Premiere Pro.",
    p4n: "2D Game Sprites",
    p4d: "Design and creation of sprites for a 2D video game in Adobe Illustrator.",
    p5n: "Vehicle Platform Rebranding",
    p5d: "Complete redesign of a vehicle buying, selling and processing platform. New visual identity and user experience. Explore the live website.",
    p6n: "3D Game in Blender",
    p6d: "3D video game development including asset and environment modeling in Blender.",
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
    sk3n: "Audiovisual Production", sk3d: "Video editing and production in Premiere Pro and CapCut.",
    sk4n: "3D & Animation", sk4d: "3D modeling and 2D/3D animation in Blender and Premiere.",
    sk5n: "Web Development", sk5d: "Frontend programming with HTML, CSS and JavaScript.",
    sk6n: "Research", sk6d: "Scientific research methodology and qualitative data analysis.",
    sk7n: "Photography & Camera", sk7d: "Camera operation, composition and professional photography.",
    sk8n: "Audience Strategy", sk8d: "Audience analysis and understanding for effective communication.",
    ach_t: "Achievements.",
    a1t: "Speaker — Stratcom Congress",
    a1d: "Selected as speaker at the Stratcom Communication Congress at Universidad de Medellín, presenting research on harassment of women in multiplayer gaming.",
    a2t: "Nominee — Premios Huella 2025",
    a2d: "Nominated for Premios Huella 2025 at Universidad de Medellín, a recognition celebrating the talent of outstanding students.",
    a3t: "Universidad de Medellín",
    a3d: "Active student of the Digital Communication & Entertainment program with projects in design, animation, research and web development.",
    con_t: "Let's talk.",
    con_sub: "Have a project in mind? I'd love to hear from you.",
    con_em: "Send email",
    foot: "Made with dedication · Medellín, Colombia",
    v_figma: "View on Figma",
    v_site: "View live site"
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
}

/* ---- TOGGLE TEMA OSCURO / CLARO ---- */
function toggleT() {
  const h = document.documentElement;
  const isDark = h.getAttribute('data-theme') === 'dark';
  h.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('tb').innerHTML = isDark ? '<i class="ph ph-moon"></i>' : '<i class="ph ph-sun"></i>';
}

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
  el.style.transitionDelay = (i % 5) * .07 + 's';
  obs.observe(el);
});

/* ---- FILTROS DE PROYECTOS ---- */
document.querySelectorAll('.fb').forEach(btn => {
  btn.addEventListener('click', function () {
    if (this.classList.contains('on')) return; // Evitar doble clic en el mismo filtro
    document.querySelectorAll('.fb').forEach(b => b.classList.remove('on'));
    this.classList.add('on');
    const f = this.getAttribute('data-f');
    
    const cards = document.querySelectorAll('.pc');
    
    // Paso 1: Desvanecer todas las tarjetas suavemente
    cards.forEach(card => {
      card.style.transition = 'opacity .3s var(--ease), transform .3s var(--ease)';
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      card.style.pointerEvents = 'none';
    });

    // Paso 2: Esperar a que se desvanezcan, reorganizar y mostrar las correctas
    setTimeout(() => {
      // Aplicar display: none a las que no van, y display: block a las que sí
      cards.forEach(card => {
        const c = card.getAttribute('data-c') || '';
        const show = f === 'all' || c.includes(f);
        card.style.display = show ? '' : 'none';
      });
      
      // Forzar la recálculo del layout en el DOM para que la transición funcione
      document.body.offsetHeight;
      
      // Desvanecer hacia adentro (Fade-in) las tarjetas filtradas
      cards.forEach(card => {
        const c = card.getAttribute('data-c') || '';
        const show = f === 'all' || c.includes(f);
        if (show) {
          card.style.opacity = '1';
          card.style.transform = 'none';
          card.style.pointerEvents = '';
        }
      });
    }, 300); // 300ms coincide con la transición en CSS
  });
});

/* ---- MENÚ MÓVIL ---- */
function toggleMM() { document.getElementById('mm').classList.toggle('open'); }
function closeMM() { document.getElementById('mm').classList.remove('open'); }

/* ---- CONTROL DE AUDIO VIDEO ---- */
const btnAudio = document.getElementById('btn-audio');
const vidProj2 = document.getElementById('vid-proj2');

if (btnAudio && vidProj2) {
  btnAudio.addEventListener('click', (e) => {
    e.stopPropagation(); // Evitar que el clic interfiera con otras interacciones
    if (vidProj2.muted) {
      vidProj2.muted = false;
      btnAudio.textContent = '🔊 Mute';
      btnAudio.style.background = 'rgba(255,255,255,0.2)';
    } else {
      vidProj2.muted = true;
      btnAudio.textContent = '🔇 Unmute';
      btnAudio.style.background = 'rgba(0,0,0,0.5)';
    }
  });
}
