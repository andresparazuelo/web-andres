import './styles.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page-shell">
    <header class="hero">
      <nav class="topbar">
        <div class="brand">Andres Parazuelo</div>
        <div class="nav-links">
          <a href="#sobre-mi">Sobre mi</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">SEO · Contenidos · Social Media</p>
          <h1>Marketing digital con foco en visibilidad, estrategia y ejecucion.</h1>
          <p class="lead">
            Perfil orientado a SEO, contenidos y crecimiento digital. Combino base
            analitica con ejecucion real en entornos donde hay que adaptarse,
            priorizar y aprender rapido.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#contacto">Trabajemos juntos</a>
            <a class="button secondary" href="#experiencia">Ver trayectoria</a>
          </div>
        </div>

        <aside class="hero-card">
          <p class="card-label">Perfil</p>
          <h2>Andres Parazuelo Albarran</h2>
          <ul>
            <li>Especialista en Marketing Digital y SEO</li>
            <li>Co-Founder en Fundy</li>
            <li>Base en Malaga, Andalucia, Espana</li>
            <li>Interes en estrategia de contenidos y posicionamiento web</li>
          </ul>
        </aside>
      </div>
    </header>

    <main>
      <section class="stats-section reveal">
        <div class="section-heading">
          <p class="eyebrow">Propuesta de valor</p>
          <h2>Una estructura pensada para convertir experiencia en credibilidad.</h2>
        </div>
        <div class="stats-grid">
          <article>
            <strong>SEO</strong>
            <p>Optimizacion on-page, contenidos y mejora de visibilidad organica.</p>
          </article>
          <article>
            <strong>Contenido</strong>
            <p>Estrategias editoriales con orientacion a negocio y marca personal.</p>
          </article>
          <article>
            <strong>Social</strong>
            <p>Experiencia en gestion de redes y adaptacion del mensaje por canal.</p>
          </article>
          <article>
            <strong>Analitica</strong>
            <p>Lectura de resultados para iterar rapido y tomar mejores decisiones.</p>
          </article>
        </div>
      </section>

      <section id="sobre-mi" class="content-grid reveal">
        <div class="section-heading sticky">
          <p class="eyebrow">Sobre mi</p>
          <h2>Perfil para portfolio personal.</h2>
        </div>
        <div class="content-stack">
          <article class="panel">
            <p>
              Ayudo a marcas a ganar visibilidad digital a traves de SEO,
              contenidos y estrategia. Mi perfil combina una base practica en
              posicionamiento web, planificacion de contenidos, social media y
              analisis, con experiencia en entornos dinamicos donde la ejecucion
              y el aprendizaje rapido marcan la diferencia.
            </p>
          </article>
          <article class="panel">
            <h3>Lo que deberia transmitir tu portfolio</h3>
            <ul class="bullet-list">
              <li>Que sabes ejecutar, no solo estudiar marketing.</li>
              <li>Que entiendes el SEO como palanca de negocio.</li>
              <li>Que puedes combinar estrategia, contenidos y operativa diaria.</li>
              <li>Que estas construyendo experiencia real mientras desarrollas marca personal.</li>
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
          <article class="timeline-item">
            <div class="timeline-meta">abr. 2025 - actualidad</div>
            <div class="timeline-body">
              <h3>Co-Founder & Marketing Manager · Fundy</h3>
              <p>Malaga, Andalucia, Espana</p>
              <p>
                Liderazgo en marketing y crecimiento con foco en SEO, presencia
                digital y desarrollo de una propuesta de valor clara.
              </p>
            </div>
          </article>
          <article class="timeline-item">
            <div class="timeline-meta">may. 2025 - ago. 2025</div>
            <div class="timeline-body">
              <h3>SEO Junior · Nubeseo</h3>
              <p>Contrato de practicas · Remoto</p>
              <p>
                Trabajo en optimizacion para motores de busqueda, analisis on-page
                y apoyo en tareas de posicionamiento organico.
              </p>
            </div>
          </article>
          <article class="timeline-item">
            <div class="timeline-meta">mar. 2024 - may. 2024</div>
            <div class="timeline-body">
              <h3>Community Manager · SOMOS.plus</h3>
              <p>Malaga, Andalucia, Espana · Hibrido</p>
              <p>
                Gestion de redes sociales y coordinacion de contenido para mejorar
                presencia, consistencia y comunicacion digital.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section class="education-section reveal">
        <div class="section-heading">
          <p class="eyebrow">Educacion</p>
          <h2>Formacion</h2>
        </div>
        <div class="cards-grid two-col">
          <article class="panel">
            <h3>Windup Training</h3>
            <p>Master en Marketing Digital</p>
            <span>oct. 2024 - feb. 2025</span>
          </article>
          <article class="panel">
            <h3>MEDAC</h3>
            <p>Grado Superior en Marketing y Publicidad</p>
            <span>sept. 2022 - jul. 2024</span>
          </article>
        </div>
      </section>

      <section id="proyectos" class="projects-section reveal">
        <div class="section-heading">
          <p class="eyebrow">Proyectos</p>
          <h2>Estructura recomendada para tus casos de estudio</h2>
        </div>
        <div class="cards-grid">
          <article class="project-card accent-a">
            <span class="project-tag">Caso 01</span>
            <h3>Proyecto Fundy</h3>
            <p>
              Cuenta como definiste posicionamiento, mensaje, activos digitales y
              decisiones de marketing en una etapa temprana.
            </p>
          </article>
          <article class="project-card accent-b">
            <span class="project-tag">Caso 02</span>
            <h3>SEO y optimizacion</h3>
            <p>
              Explica auditoria, mejoras on-page, contenidos trabajados y
              aprendizajes obtenidos durante tu experiencia en SEO.
            </p>
          </article>
          <article class="project-card accent-c">
            <span class="project-tag">Caso 03</span>
            <h3>Social media y comunidad</h3>
            <p>
              Muestra campañas, tono de marca, piezas publicadas y como mediste el
              impacto de la gestion de redes.
            </p>
          </article>
        </div>
      </section>

      <section class="writing-section reveal">
        <div class="section-heading">
          <p class="eyebrow">Marca personal</p>
          <h2>Tu actividad en LinkedIn tambien debe entrar en el portfolio.</h2>
        </div>
        <article class="panel quote-panel">
          <p>
            Estas publicando sobre trabajo, esfuerzo, aprendizaje y realidad
            profesional. Eso encaja bien con una seccion de reflexiones o
            publicaciones destacadas para reforzar autoridad y voz propia.
          </p>
        </article>
      </section>

      <section id="contacto" class="contact-section reveal">
        <div class="section-heading">
          <p class="eyebrow">Contacto</p>
          <h2>Bloque final recomendado</h2>
        </div>
        <div class="contact-card">
          <p>
            Disponible para oportunidades en marketing digital, SEO, contenidos o
            proyectos de crecimiento digital.
          </p>
          <div class="contact-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:tuemail@ejemplo.com">Email</a>
            <a href="/assets/CV_Andres_Parazuelo_Albarran.pdf" target="_blank" rel="noreferrer">CV</a>
          </div>
        </div>
      </section>
    </main>
  </div>
`;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll('.reveal').forEach((element) => {
  observer.observe(element);
});
