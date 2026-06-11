const services = [
  {
    num: '01',
    icon: 'fas fa-display',
    title: 'Sites e landing pages',
    desc: 'Páginas institucionais, landing pages e sites corporativos com narrativa clara, velocidade e foco em conversão.',
    feats: ['Arquitetura da informação', 'Design responsivo', 'SEO on-page', 'Formulários e WhatsApp'],
  },
  {
    num: '02',
    icon: 'fas fa-layer-group',
    title: 'Aplicações web',
    desc: 'Sistemas, dashboards e plataformas para automatizar processos e centralizar informações importantes do negócio.',
    feats: ['Painéis de gestão', 'APIs e integrações', 'Fluxos personalizados', 'Base escalável'],
  },
  {
    num: '03',
    icon: 'fas fa-bullhorn',
    title: 'Social media estratégico',
    desc: 'Presença consistente nas redes com calendário, conteúdo, identidade visual e relatórios de evolução.',
    feats: ['Calendário editorial', 'Posts e criativos', 'Gestão de canais', 'Métricas mensais'],
  },
  {
    num: '04',
    icon: 'fas fa-fingerprint',
    title: 'Identidade digital',
    desc: 'Direção visual, posicionamento e experiência de marca para transmitir confiança antes do primeiro contato.',
    feats: ['Branding digital', 'UX/UI', 'Direção de conteúdo', 'Consultoria de presença'],
  },
]

export default function Services() {
  return (
    <section className="services section-band" id="servicos">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Serviços</span>
          <h2 className="h-lg">Tudo que sua empresa precisa para competir melhor no digital.</h2>
          <p>
            Você pode contratar uma entrega pontual ou construir um plano completo de
            presença digital com estratégia, design, tecnologia e acompanhamento.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className={`service-card reveal d${(index % 4) + 1}`} key={service.title}>
              <span className="service-num">{service.num}</span>
              <i className={service.icon} aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul>
                {service.feats.map((feature) => (
                  <li key={feature}>
                    <i className="fas fa-check" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
