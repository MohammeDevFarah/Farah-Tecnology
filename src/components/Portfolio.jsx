import { scrollTo } from '../utils/helpers.js'

const projects = [
  {
    title: 'Clínica Bella Pele',
    type: 'Saúde e estética',
    desc: 'Site institucional com agenda online, páginas de procedimentos e captação via WhatsApp.',
    metric: '+240% consultas online',
    tags: ['React', 'SEO', 'Agendamento'],
    icon: 'fas fa-spa',
  },
  {
    title: 'Logística Express',
    type: 'Operação e transporte',
    desc: 'Dashboard de fretes, acompanhamento de entregas e relatórios para equipe comercial.',
    metric: '-38% tempo operacional',
    tags: ['Vue', 'API', 'Dashboard'],
    icon: 'fas fa-truck-fast',
  },
  {
    title: 'Sabor & Arte',
    type: 'Restaurante',
    desc: 'Cardápio digital, pedidos integrados e landing page para campanhas locais.',
    metric: '+31% pedidos diretos',
    tags: ['Next.js', 'Pedidos', 'Local SEO'],
    icon: 'fas fa-utensils',
  },
  {
    title: 'Marques Advocacia',
    type: 'Serviços profissionais',
    desc: 'Site jurídico com artigos, páginas de atuação e fluxo de qualificação de leads.',
    metric: '+52% leads qualificados',
    tags: ['CMS', 'Conteúdo', 'SEO'],
    icon: 'fas fa-scale-balanced',
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header section-header-row reveal">
          <div>
            <span className="section-tag">Projetos</span>
            <h2 className="h-lg">Projetos pensados para gerar resultado, não apenas aparência.</h2>
          </div>
          <a className="btn btn-secondary" href="#contato" onClick={(e) => { e.preventDefault(); scrollTo('#contato') }}>
            Quero um case assim
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article className={`project-card reveal d${(index % 4) + 1}`} key={project.title}>
              <div className="project-visual">
                <i className={project.icon} aria-hidden="true" />
                <span>{project.type}</span>
              </div>
              <div className="project-body">
                <div className="project-metric">{project.metric}</div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
