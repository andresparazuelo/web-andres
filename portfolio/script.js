import './styles.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page-shell">
    <header class="hero">
      <nav class="topbar glass">
        <div class="brand">AP.</div>
        <div class="nav-links">
          <a href="#sobre-mi">Sobre mí</a>
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
          <h1>Contenido y estrategia digital para marcas que quieren ser visibles.</h1>
          <p class="lead">
            Trabajo en SEO, creación de contenidos y gestión de redes con un enfoque
            práctico: analizar, ejecutar, medir y mejorar. No soy un consultor que solo
            da consejos: ejecuto desde dentro, ya sea en una startup o una agencia.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#contacto">Trabajemos juntos</a>
            <a class="button secondary" href="#experiencia">Ver mi trayectoria</a>
          </div>
        </div>

        <aside class="hero-card glass">
          <p class="card-label">Perfil</p>
          <h2>Andrés Parazuelo</h2>
          <ul>
            <li>Marketing Digital & SEO Specialist</li>
            <li>Co-Founder & Marketing Manager en Fundy</li>
          </ul>
          <div class="hero-card-links">
            <a href="https://www.linkedin.com/in/andres-parazuelo-740410241/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:parazueloandres@gmail.com">Email</a>
          </div>
        </aside>
      </div>
    </header>

    <main>
      <section class="stats-section reveal">
        <div class="section-heading">
          <p class="eyebrow">Lo que hago</p>
          <h2>Cuatro áreas donde sumo valor real.</h2>
        </div>
        <div class="stats-grid">
          <article class="stagger">
            <strong>SEO</strong>
            <p>Posiciono páginas en Google con optimización on-page, estrategia de contenidos y herramientas como SEMrush y Ahrefs.</p>
          </article>
          <article class="stagger">
            <strong>Contenido</strong>
            <p>Creo contenido que posiciona en buscadores y conecta con personas. WordPress, Canva y copywriting orientado a resultado.</p>
          </article>
          <article class="stagger">
            <strong>Social Media</strong>
            <p>Gestiono Instagram, LinkedIn y TikTok con contenido adaptado a cada canal y métricas que demuestran impacto.</p>
          </article>
          <article class="stagger">
            <strong>Analítica</strong>
            <p>Uso Google Analytics y Looker Studio para entender qué funciona, qué no, y dónde conviene invertir más.</p>
          </article>
        </div>
      </section>

      <section id="sobre-mi" class="content-grid reveal">
        <div class="section-heading sticky">
          <p class="eyebrow">Sobre mí</p>
          <h2>Menos ruido, más resultados.</h2>
        </div>
        <div class="content-stack">
          <article class="panel">
            <p>
              Me formé en Marketing y Publicidad (MEDAC) y completé un Máster en Marketing
              Digital (Windup Training), pero donde de verdad aprendí fue ejecutando.
              Lideré el marketing de Fundy desde su inicio, trabajé en SEO para clientes
              de agencia y gestioné comunidades en redes. Cada proyecto me enseñó algo
              que no está en ningún manual.
            </p>
          </article>
          <article class="panel">
            <h3>Cómo trabajo</h3>
            <ul class="bullet-list">
              <li>Estrategia basada en datos, no en suposiciones.</li>
              <li>SEO como palanca de negocio, no como ejercicio técnico.</li>
              <li>Contenido que posiciona en Google y genera interacción real.</li>
              <li>Pruebo, mido, ajusto. Ninguna estrategia se toca una sola vez.</li>
              <li>Marca personal en LinkedIn porque la visibilidad profesional también es estrategia.</li>
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
                <li>Definición de posicionamiento SEO y plan de contenidos desde cero.</li>
                <li>Gestión de toda la presencia digital: web, redes y propuesta de valor.</li>
                <li>Decisiones de marketing en un entorno startup: rápido, pragmático y orientado a resultado.</li>
              </ul>
            </div>
          </article>
          <article class="timeline-item stagger">
            <div class="timeline-meta">may. 2025 — ago. 2025</div>
            <div class="timeline-body">
              <h3>SEO Junior &middot; Nubeseo</h3>
              <p class="timeline-location">Contrato de prácticas &middot; Remoto</p>
              <ul class="timeline-details">
                <li>Optimización on-page de sitios web reales de clientes.</li>
                <li>Auditorías SEO completas con informes accionables para cada cliente.</li>
                <li>Keyword research y análisis de competencia con SEMrush y Ahrefs.</li>
                <li>Link building y creación de contenido SEO para mejorar posiciones orgánicas.</li>
              </ul>
            </div>
          </article>
          <article class="timeline-item stagger">
            <div class="timeline-meta">mar. 2024 — may. 2024</div>
            <div class="timeline-body">
              <h3>Community Manager &middot; SOMOS.plus</h3>
              <p class="timeline-location">Málaga, Andalucía, España &middot; Híbrido</p>
              <ul class="timeline-details">
                <li>Planificación y publicación de contenido en Instagram.</li>
                <li>Creación de piezas visuales y redacción de copys adaptados a cada cliente.</li>
                <li>Seguimiento de métricas de engagement.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section class="education-section reveal">
        <div class="section-heading">
          <p class="eyebrow">Educación</p>
          <h2>Formación académica</h2>
        </div>
        <div class="cards-grid two-col">
          <article class="panel stagger">
            <span class="panel-date">oct. 2024 — feb. 2025</span>
            <h3>Máster en Marketing Digital</h3>
            <p>Windup Training</p>
          </article>
          <article class="panel stagger">
            <span class="panel-date">sept. 2022 — jul. 2024</span>
            <h3>Grado Superior en Marketing y Publicidad</h3>
            <p>MEDAC</p>
          </article>
        </div>
      </section>

      <section id="proyectos" class="portfolio-section reveal">
        <div class="section-heading">
          <p class="eyebrow">Proyectos</p>
          <h2>Webs y contenido social</h2>
        </div>

        <div class="portfolio-block">
          <h3 class="portfolio-block-title">Webs realizadas</h3>
          <div class="portfolio-grid portfolio-grid--web">
            <article class="portfolio-item stagger">
              <div class="portfolio-preview">
                <img src="/assets/portfolio/fundy.jpg" alt="Fundy" />
              </div>
              <div class="portfolio-meta">
                <h4>Fundy</h4>
                <a href="https://fundy.es" target="_blank" rel="noreferrer">Ver sitio &rarr;</a>
              </div>
            </article>
            <article class="portfolio-item stagger">
              <div class="portfolio-preview">
                <img src="/assets/portfolio/fundocs.png" alt="FunDocs" />
              </div>
              <div class="portfolio-meta">
                <h4>FunDocs</h4>
                <a href="https://start.fundocs.es" target="_blank" rel="noreferrer">Ver sitio &rarr;</a>
              </div>
            </article>
            <article class="portfolio-item stagger">
              <div class="portfolio-preview">
                <img src="/assets/portfolio/fundy-snk.jpg" alt="Fundy SNK" />
              </div>
              <div class="portfolio-meta">
                <h4>Fundy SNK</h4>
                <a href="https://sneaker.fundy.es" target="_blank" rel="noreferrer">Ver sitio &rarr;</a>
              </div>
            </article>
          </div>
        </div>

        <div class="portfolio-block">
          <h3 class="portfolio-block-title">Herramientas desarrolladas</h3>
          <div class="portfolio-grid portfolio-grid--tools">
            <article class="panel stagger tool-card">
              <div class="tool-card-header">
                <span class="tool-badge">SEO Tool</span>
              </div>
              <h4>Herramienta de optimización SEO integrada en CMS propio</h4>
              <p>
                Desarrollé e integré una herramienta de auditoría SEO dentro del CMS de Fundy,
                diseñada para sitios construidos en código. Analiza cada artículo en tiempo real
                y genera una puntuación con checks accionables, sin depender de WordPress ni
                plugins externos.
              </p>
              <ul class="bullet-list">
                <li>Puntuación SEO sobre 100 con desglose de correctos, mejorables y errores.</li>
                <li>Checks de título, slug, resumen, keywords y estructura de contenido.</li>
                <li>Panel SEO con meta title, meta description, keywords y URL canónica.</li>
                <li>Vista previa del snippet en Google antes de publicar.</li>
                <li>Recomendaciones de alto impacto priorizadas por relevancia.</li>
              </ul>
            </article>
          </div>
        </div>

        <div class="portfolio-block">
          <h3 class="portfolio-block-title">Contenido social media</h3>
          <div class="portfolio-grid portfolio-grid--social">
            <article class="portfolio-item stagger">
              <div class="portfolio-preview portfolio-preview--social">
                <img src="/assets/portfolio/social-8.jpg" alt="Social media content" />
              </div>
            </article>
            <article class="portfolio-item stagger">
              <div class="portfolio-preview portfolio-preview--social">
                <img src="/assets/portfolio/social-7.jpg" alt="Social media content" />
              </div>
            </article>
            <article class="portfolio-item stagger">
              <div class="portfolio-preview portfolio-preview--social">
                <img src="/assets/portfolio/social-6.png" alt="Social media content" />
              </div>
            </article>
            <article class="portfolio-item stagger">
              <div class="portfolio-preview portfolio-preview--social">
                <img src="/assets/portfolio/social-5.png" alt="Social media content" />
              </div>
            </article>
            <article class="portfolio-item stagger">
              <div class="portfolio-preview portfolio-preview--social">
                <img src="/assets/portfolio/social-4.png" alt="Social media content" />
              </div>
            </article>
            <article class="portfolio-item stagger">
              <div class="portfolio-preview portfolio-preview--social">
                <img src="/assets/portfolio/social-3.png" alt="Social media content" />
              </div>
            </article>
            <article class="portfolio-item stagger">
              <div class="portfolio-preview portfolio-preview--social">
                <img src="/assets/portfolio/social-2.png" alt="Social media content" />
              </div>
            </article>
            <article class="portfolio-item stagger">
              <div class="portfolio-preview portfolio-preview--social">
                <img src="/assets/portfolio/social-1.png" alt="Social media content" />
              </div>
            </article>
          </div>
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
            crecimiento digital. Si necesitas alguien que ejecute de verdad,
            no solo que planifique, me gustaría hablar contigo.
          </p>
          <div class="contact-grid">
            <a class="contact-card glass" href="https://www.linkedin.com/in/andres-parazuelo-740410241/" target="_blank" rel="noreferrer">
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
                <strong>Currículum</strong>
                <p>Descargar PDF</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2025 Andrés Parazuelo. Todos los derechos reservados.</p>
    </footer>
  </div>

  <div class="lightbox" id="lightbox">
    <button class="lightbox-close" id="lightbox-close">&times;</button>
    <img src="" alt="" id="lightbox-img" />
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

/* --- Lightbox --- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.portfolio-preview--social img').forEach((img) => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
  lightboxImg.src = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
