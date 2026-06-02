import { scrollTo } from '../utils/helpers.js'

const features = [
  { icon: 'fas fa-pen-ruler',    title: 'Design Estratégico',   desc: 'Visual que impressiona e converte, não apenas decora.' },
  { icon: 'fas fa-shield-halved',title: 'Tecnologia de Ponta',  desc: 'Stack moderno, seguro e preparado para crescer com você.' },
  { icon: 'fas fa-headset',      title: 'Parceria Duradoura',   desc: 'Não entregamos e sumimos. Continuamos do seu lado.' },
]

export default function About() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="about-grid">

          {/* Visual decorativo */}
          <div className="about-visual reveal">
            <div className="about-img-wrap">
              <div className="about-grid-overlay" />
              <i className="fas fa-code about-center-icon"></i>
              <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 50%,rgba(0,102,255,.12) 0%,transparent 70%)' }} />
            </div>

            <div className="floating-badge anim-float" style={{ top:'12%', right:'-18px' }}>
              <div className="fb-icon" style={{ background:'rgba(0,102,255,.15)', color:'#0066FF' }}>
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="fb-text"><strong>React & Next.js</strong><span>Frontend Moderno</span></div>
            </div>

            <div className="floating-badge anim-float" style={{ bottom:'15%', left:'-18px', animationDelay:'.8s' }}>
              <div className="fb-icon" style={{ background:'rgba(0,200,255,.12)', color:'#00C8FF' }}>
                <i className="fas fa-server"></i>
              </div>
              <div className="fb-text"><strong>Node & Python</strong><span>Backend Escalável</span></div>
            </div>

            <div className="floating-badge" style={{ bottom:'42%', right:'-14px' }}>
              <div className="fb-icon" style={{ background:'rgba(0,232,122,.12)', color:'#00E87A' }}>
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="fb-text"><strong>+38% conversão</strong><span>média dos clientes</span></div>
            </div>
          </div>

          {/* Texto */}
          <div className="about-content reveal d2">
            <span className="section-tag">Sobre Nós</span>
            <h2 className="h-lg" style={{ marginBottom: '1.25rem' }}>
              Tecnologia com propósito.<br />
              <span className="text-gradient">Resultados com consistência.</span>
            </h2>
            <p>
              A FarahTechnology nasceu da convicção de que toda empresa — do microempreendedor à
              corporação — merece uma presença digital que trabalhe por ela enquanto você foca no
              seu negócio.
            </p>
            <p>
              Somos uma equipe de desenvolvedores, designers e estrategistas de conteúdo que
              entendem de tecnologia e, principalmente, entendem de negócios. Para nós, código
              limpo e design bonito são apenas meios para um fim: gerar resultado real para você.
            </p>

            <div className="about-feats">
              {features.map(f => (
                <div className="about-feat" key={f.title}>
                  <div className="feat-icon"><i className={f.icon}></i></div>
                  <div className="feat-text"><h4>{f.title}</h4><p>{f.desc}</p></div>
                </div>
              ))}
            </div>

            <a href="#contato" className="btn btn-primary" onClick={e => { e.preventDefault(); scrollTo('#contato') }}>
              Conheça nosso trabalho <i className="fas fa-arrow-right"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
