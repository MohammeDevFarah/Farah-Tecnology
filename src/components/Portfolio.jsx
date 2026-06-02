import { scrollTo } from '../utils/helpers.js'

const projects = [
  { title:'Clínica Bella Pele',    desc:'Site institucional com agendamento online',      tags:['React','Node.js','SEO'],       icon:'fas fa-spa',             bg:'linear-gradient(135deg,#1a1a3e,#2d1b4e)' },
  { title:'Logística Express',     desc:'Sistema de gestão de fretes e entregas',         tags:['Vue.js','Python','PostgreSQL'], icon:'fas fa-truck-fast',       bg:'linear-gradient(135deg,#0d1f3c,#1a3460)' },
  { title:'Restaurante Sabor&Arte',desc:'E-commerce + cardápio digital com delivery',    tags:['Next.js','Stripe','Firebase'],  icon:'fas fa-utensils',         bg:'linear-gradient(135deg,#2d1010,#4a1c1c)' },
  { title:'Academia FitLife',      desc:'App de treinos e acompanhamento de alunos',      tags:['React Native','MongoDB'],       icon:'fas fa-dumbbell',         bg:'linear-gradient(135deg,#0f2d1a,#1a4a2d)' },
  { title:'Advocacia Marques',     desc:'Site jurídico com blog e captação de leads',     tags:['Next.js','Sanity CMS','SEO'],   icon:'fas fa-scale-balanced',   bg:'linear-gradient(135deg,#1f1f1f,#2d2d2d)' },
  { title:'EduTech Aprenda+',      desc:'Plataforma de cursos online com dashboard',      tags:['React','Django','AWS'],         icon:'fas fa-graduation-cap',   bg:'linear-gradient(135deg,#1a2d0d,#2d4a1a)' },
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="port-header">
          <div className="reveal">
            <span className="section-tag">Portfólio</span>
            <h2 className="h-lg">
              Projetos que{' '}
              <span className="text-gradient">entregam resultado</span>
            </h2>
          </div>
          <a
            href="#contato"
            className="btn btn-ghost reveal d2"
            onClick={e => { e.preventDefault(); scrollTo('#contato') }}
          >
            Ver todos os projetos <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="port-grid">
          {projects.map((p, i) => (
            <div className={`port-card reveal d${(i % 3) + 1}`} key={p.title}>
              <div className="port-img" style={{ background: p.bg }}>
                <i className={p.icon} style={{ fontSize:'3rem', color:'rgba(255,255,255,.22)' }}></i>
                <div className="port-overlay">
                  <span className="port-overlay-btn">
                    <i className="fas fa-external-link-alt"></i> Ver Projeto
                  </span>
                </div>
              </div>
              <div className="port-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="port-tags">
                  {p.tags.map(t => <span className="port-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
