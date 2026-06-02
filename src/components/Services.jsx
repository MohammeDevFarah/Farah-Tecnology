const services = [
  {
    icon: 'fas fa-laptop-code', color: '#0066FF', bg: 'rgba(0,102,255,.12)',
    title: 'Desenvolvimento Web',
    desc:  'Sites e landing pages que convertem visitantes em clientes. Cada projeto é construído com foco em performance, SEO e experiência do usuário — porque um site bonito que ninguém encontra não serve ao seu negócio.',
    feats: ['Sites institucionais e corporativos', 'Landing pages de alta conversão', 'E-commerce completo', 'Integração com sistemas e APIs'],
  },
  {
    icon: 'fas fa-layer-group', color: '#7B2FFF', bg: 'rgba(123,47,255,.12)',
    title: 'Aplicações Web',
    desc:  'Sistemas e plataformas sob medida que automatizam processos, centralizam informações e entregam dados em tempo real. Desenvolvidos com arquitetura escalável desde o primeiro dia.',
    feats: ['Painéis e dashboards interativos', 'Sistemas de gestão (ERP/CRM)', 'Automações de processos', 'APIs e integrações corporativas'],
  },
  {
    icon: 'fas fa-share-nodes', color: '#00C8FF', bg: 'rgba(0,200,255,.1)',
    title: 'Social Media',
    desc:  'Sua marca presente, consistente e engajada onde o seu cliente está. Desenvolvemos estratégia de conteúdo, criamos posts e gerenciamos suas redes com foco em crescimento real de audiência e autoridade.',
    feats: ['Gestão de Instagram, Facebook e LinkedIn', 'Criação de conteúdo estratégico', 'Calendário editorial mensal', 'Relatórios de performance'],
  },
  {
    icon: 'fas fa-fingerprint', color: '#00E87A', bg: 'rgba(0,232,122,.1)',
    title: 'Identidade Digital',
    desc:  'Mais do que um logo: um posicionamento completo que comunica quem você é, para quem você serve e por que escolher você. Construímos marcas digitais que geram confiança antes mesmo do primeiro contato.',
    feats: ['Branding e identidade visual', 'Estratégia de posicionamento', 'UX/UI para produtos digitais', 'Consultoria de presença digital'],
  },
]

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Nossos Serviços</span>
          <h2 className="h-lg">
            Tudo o que você precisa para{' '}
            <span className="text-gradient">dominar o digital</span>
          </h2>
          <p>
            Soluções completas e integradas para construir, fortalecer e escalar a presença
            digital do seu negócio — com a qualidade que você merece.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className={`svc-card reveal d${(i % 4) + 1}`} key={s.title}>
              <div className="svc-icon" style={{ background: s.bg, color: s.color }}>
                <i className={s.icon}></i>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="svc-feats">
                {s.feats.map(f => (
                  <div className="svc-feat" key={f}>
                    <i className="fas fa-check-circle"></i>{f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
