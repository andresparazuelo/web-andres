import './styles.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page-shell">
    <header class="hero">
      <nav class="topbar glass">
        <div class="brand">AP.</div>
        <div class="nav-links">
          <a href="#sobre-mi">Sobre mi</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <div class="hero-deco">
        <div class="deco-ring deco-ring-1"></div>
        <div class="deco-ring deco-ring-2"></div>
        <div class="deco-ring deco-ring-3"></div>
      </div>

      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">SEO &middot; Contenidos &middot; Social Media</p>
          <h1>SEO, contenido y estrategia digital para marcas que quieren ser visibles.</h1>
          <p class="lead">
            Trabajo en SEO, creacion de contenidos y gestion de redes con un enfoque
            practico: analizar, ejecutar, medir y mejorar. No soy un consultor que solo
            da consejos &mdash; ejecuto desde dentro, ya sea en una startup o una agencia.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#contacto">Trabajemos juntos</a>
            <a class="button secondary" href="#experiencia">Ver mi trayectoria</a>
          </div>
        </div>

        <aside class="hero-card glass">
          <p class="card-label">Perfil</p>
          <h2>Andres Parazuelo</h2>
          <ul>
            <li>Marketing Digital & SEO Specialist</li>
            <li>Co-Founder & Marketing Manager en Fundy</li>
            <li>Malaga, Espana</li>
          </ul>
          <div class="hero-card-links">
            <a href="https://www.linkedin.com/in/andresparazuelo" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:parazueloandres@gmail.com">Email</a>
          </div>
        </aside>
      </div>
    </header>

    <main>
      <section class="stats-section reveal">
        <div class="section-heading">
          <p class="eyebrow">Lo que hago</p>
          <h2>Cuatro areas donde sumo valor real.</h2>
        </div>
        <div class="stats-grid">
          <article class="stagger">
            <strong>SEO</strong>
            <p>Posiciono paginas en Google con optimizacion on-page, estrategia de contenidos y herramientas como SEMrush y Ahrefs.</p>
          </article>
          <article class="stagger">
            <strong>Contenido</strong>
            <p>Creo contenido que posiciona en buscadores y conecta con personas. WordPress, Canva y copywriting orientado a resultado.</p>
          </article>
          <article class="stagger">
            <strong>Social Media</strong>
            <p>Gestiono Instagram, LinkedIn y TikTok con contenido adaptado a cada canal y metricas que demuestran impacto.</p>
          </article>
          <article class="stagger">
            <strong>Analitica</strong>
            <p>Uso Google Analytics y Looker Studio para entender que funciona, que no, y donde conviene invertir mas.</p>
          </article>
        </div>
      </section>

      <section id="sobre-mi" class="content-grid reveal">
        <div class="section-heading sticky">
          <p class="eyebrow">Sobre mi</p>
          <h2>Menos buzzwords, mas ejecucion.</h2>
        </div>
        <div class="content-stack">
          <article class="panel">
            <p>
              Me forme en Marketing y Publicidad (MEDAC) y complete un Master en Marketing
              Digital (Windup Training), pero donde de verdad aprendi fue ejecutando.
              Lidero el marketing de Fundy desde su inicio, trabaje en SEO para clientes
              de agencia y gestione comunidades en redes. Cada proyecto me enseno algo
              que no esta en ningun manual.
            </p>
          </article>
          <article class="panel">
            <h3>Como trabajo</h3>
            <ul class="bullet-list">
              <li>Estrategia basada en datos, no en suposiciones.</li>
              <li>SEO como palanca de negocio, no como ejercicio tecnico.</li>
              <li>Contenido que posiciona en Google y genera interaccion real.</li>
              <li>Pruebo, mido, ajusto. Ninguna estrategia se toca una sola vez.</li>
              <li>Marca personal en LinkedIn porque la visibilidad profesional tambien es estrategia.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="experiencia" class="timeline-section reveal">
        <div class="section-heading">
          <p class="eyebrow">Experiencia</p>
          <h2>Trayectoria profesional</h2>
        </div>
        <div class="timeline">
          <article class="timeline-item stagger">
            <div class="timeline-meta">abr. 2025 — actualidad</div>
            <div class="timeline-body">
              <h3>Co-Founder & Marketing Manager &middot; Fundy</h3>
              <p class="timeline-location">Malaga, Andalucia, Espana</p>
              <ul class="timeline-details">
                <li>Estrategia de marketing y crecimiento de marca desde la primera semana del proyecto.</li>
                <li>Definicion de posicionamiento SEO y plan de contenidos desde cero.</li>
                <li>Gestion de toda la presencia digital: web, redes y propuesta de valor.</li>
                <li>Decisiones de marketing en un entorno startup: rapido, pragmatico y orientado a resultado.</li>
              </ul>
            </div>
          </article>
          <article class="timeline-item stagger">
            <div class="timeline-meta">may. 2025 — ago. 2025</div>
            <div class="timeline-body">
              <h3>SEO Junior &middot; Nubeseo</h3>
              <p class="timeline-location">Contrato de practicas &middot; Remoto</p>
              <ul class="timeline-details">
                <li>Optimizacion on-page de sitios web reales de clientes.</li>
                <li>Auditorias SEO completas con informes accionables para cada cliente.</li>
                <li>Keyword research y analisis de competencia con SEMrush y Ahrefs.</li>
                <li>Link building y creacion de contenido SEO para mejorar posiciones organicas.</li>
              </ul>
            </div>
          </article>
          <article class="timeline-item stagger">
            <div class="timeline-meta">mar. 2024 — may. 2024</div>
            <div class="timeline-body">
              <h3>Community Manager &middot; SOMOS.plus</h3>
              <p class="timeline-location">Malaga, Andalucia, Espana &middot; Hibrido</p>
              <ul class="timeline-details">
                <li>Planificacion y publicacion de contenido en Instagram, LinkedIn y TikTok.</li>
                <li>Creacion de piezas visuales y redaccion de copys adaptados a cada red.</li>
                <li>Seguimiento de metricas de engagement y reportes semanales de resultados.</li>
                <li>Atencion directa a la comunidad y gestion de consultas en tiempo real.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section class="education-section reveal">
        <div class="section-heading">
          <p class="eyebrow">Educacion</p>
          <h2>Formacion academica</h2>
        </div>
        <div class="cards-grid two-col">
          <article class="panel stagger">
            <span class="panel-date">oct. 2024 — feb. 2025</span>
            <h3>Master en Marketing Digital</h3>
            <p>Windup Training</p>
          </article>
          <article class="panel stagger">
            <span class="panel-date">sept. 2022 — jul. 2024</span>
            <h3>Grado Superior en Marketing y Publicidad</h3>
            <p>MEDAC</p>
          </article>
        </div>
      </section>

      <section class="tools-section reveal">
        <div class="section-heading">
          <p class="eyebrow">Herramientas</p>
          <h2>Stack digital</h2>
        </div>
        <div class="tools-grid">
          <article class="tool-group stagger">
            <h3>SEO</h3>
            <div class="tool-tags">
              <span class="tool-tag">Google Search Console</span>
              <span class="tool-tag">SEMrush</span>
              <span class="tool-tag">Ahrefs</span>
              <span class="tool-tag">Screaming Frog</span>
            </div>
          </article>
          <article class="tool-group stagger">
            <h3>Contenidos</h3>
            <div class="tool-tags">
              <span class="tool-tag">WordPress</span>
              <span class="tool-tag">Canva</span>
              <span class="tool-tag">ChatGPT</span>
            </div>
          </article>
          <article class="tool-group stagger">
            <h3>Analitica</h3>
            <div class="tool-tags">
              <span class="tool-tag">Google Analytics</span>
              <span class="tool-tag">Looker Studio</span>
            </div>
          </article>
          <article class="tool-group stagger">
            <h3>Social Media</h3>
            <div class="tool-tags">
              <span class="tool-tag">Meta Business Suite</span>
              <span class="tool-tag">LinkedIn</span>
              <span class="tool-tag">TikTok</span>
            </div>
          </article>
          <article class="tool-group stagger">
            <h3>Productividad</h3>
            <div class="tool-tags">
              <span class="tool-tag">Notion</span>
              <span class="tool-tag">Trello</span>
              <span class="tool-tag">Figma</span>
            </div>
          </article>
          <article class="tool-group stagger">
            <h3>Idiomas</h3>
            <div class="tool-tags">
              <span class="tool-tag">Espanol (Nativo)</span>
              <span class="tool-tag">Ingles (B1)</span>
            </div>
          </article>
        </div>
      </section>

      <section id="proyectos" class="projects-section reveal">
        <div class="section-heading">
          <p class="eyebrow">Proyectos</p>
          <h2>Casos de estudio</h2>
        </div>
        <div class="cards-grid">
          <article class="project-card accent-a stagger">
            <span class="project-tag">Startup Marketing</span>
            <h3>Estrategia de marca Fundy</h3>
            <p>
              Construi la estrategia de marketing de una startup desde cero:
              posicionamiento de marca, plan de contenidos, SEO y presencia
              en redes sociales.
            </p>
          </article>
          <article class="project-card accent-b stagger">
            <span class="project-tag">SEO Tecnico</span>
            <h3>Optimizacion organica</h3>
            <p>
              Auditorias tecnicas, optimizacion on-page y estrategia de contenidos
              SEO para clientes de agencia. Keyword research, analisis de competencia
              y mejora de posiciones organicas.
            </p>
          </article>
          <article class="project-card accent-c stagger">
            <span class="project-tag">Social Media</span>
            <h3>Gestion de comunidad</h3>
            <p>
              Gestion integral de redes para SOMOS.plus: contenido diario, piezas
              visuales, metricas de engagement y comunidad activa en Instagram,
              LinkedIn y TikTok.
            </p>
          </article>
        </div>
      </section>

      <section id="contacto" class="contact-section reveal">
        <div class="contact-wrapper">
          <div class="section-heading">
            <p class="eyebrow">Contacto</p>
            <h2>Hablemos.</h2>
          </div>
          <p class="contact-lead">
            Busco un equipo donde aportar mi experiencia en SEO, contenidos y
            crecimiento digital. Si necesitas alguien que ejecute de verdad &mdash;
            no solo que planifique &mdash; me gustaria hablar contigo.
          </p>
          <div class="contact-grid">
            <a class="contact-card glass" href="https://www.linkedin.com/in/andresparazuelo" target="_blank" rel="noreferrer">
              <span class="contact-icon">&#9672;</span>
              <div>
                <strong>LinkedIn</strong>
                <p>andresparazuelo</p>
              </div>
            </a>
            <a class="contact-card glass" href="mailto:parazueloandres@gmail.com">
              <span class="contact-icon">&#9993;</span>
              <div>
                <strong>Email</strong>
                <p>parazueloandres@gmail.com</p>
              </div>
            </a>
            <a class="contact-card glass" href="/assets/CV_Andres_Parazuelo_Albarran.pdf" target="_blank" rel="noreferrer">
              <span class="contact-icon">&#8595;</span>
              <div>
                <strong>Curriculum</strong>
                <p>Descargar PDF</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2025 Andres Parazuelo. Todos los derechos reservados.</p>
    </footer>
  </div>
`;

/* --- Cursor glow effect --- */
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

/* --- Scroll reveal --- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  observer.observe(el);
});
