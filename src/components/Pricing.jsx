import { scrollTo } from '../utils/helpers.js'

const plans = [
  {
    tier: 'Essencial',
    name: 'Presença Profissional',
    desc: 'Para empresas que precisam sair do improviso com um site claro, rápido e confiável.',
    price: '1.997',
    note: 'Projeto único, com suporte inicial',
    featured: false,
    feats: [
      'Site responsivo até 5 páginas',
      'Copy base e organização de conteúdo',
      'SEO técnico inicial',
      'Formulário e WhatsApp integrados',
      'Suporte por 30 dias',
    ],
  },
  {
    tier: 'Mais escolhido',
    name: 'Crescimento Digital',
    desc: 'Para negócios que querem site, posicionamento e presença social trabalhando juntos.',
    price: '3.997',
    note: 'Projeto + plano mensal opcional',
    featured: true,
    feats: [
      'Site completo até 12 páginas',
      'Direção visual e copy comercial',
      'Analytics, eventos e SEO avançado',
      'Social media inicial por 3 meses',
      'Suporte prioritário por 90 dias',
    ],
  },
  {
    tier: 'Sob medida',
    name: 'Sistema e Operação',
    desc: 'Para empresas que precisam automatizar processos, integrar dados ou construir uma plataforma.',
    price: 'Sob consulta',
    note: 'Escopo definido por diagnóstico',
    featured: false,
    feats: [
      'Aplicação web personalizada',
      'Dashboard e área administrativa',
      'Integrações com APIs e ferramentas',
      'Banco de dados e infraestrutura',
      'Treinamento e suporte dedicado',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="pricing section-band" id="precos">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Planos</span>
          <h2 className="h-lg">Investimento claro para começar com segurança.</h2>
          <p>
            Os valores servem como ponto de partida. Depois do diagnóstico, ajustamos
            escopo, prazos e prioridades ao momento real da sua empresa.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <article className={`price-card${plan.featured ? ' featured' : ''} reveal d${index + 1}`} key={plan.name}>
              <span className="price-tier">{plan.tier}</span>
              <h3>{plan.name}</h3>
              <p className="price-desc">{plan.desc}</p>
              <div className="price-value">
                {plan.price !== 'Sob consulta' && <small>R$</small>}
                <strong>{plan.price}</strong>
              </div>
              <p className="price-note">{plan.note}</p>
              <ul>
                {plan.feats.map((feature) => (
                  <li key={feature}>
                    <i className="fas fa-check" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className={`btn btn-full ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                href="#contato"
                onClick={(e) => { e.preventDefault(); scrollTo('#contato') }}
              >
                {plan.price === 'Sob consulta' ? 'Solicitar diagnóstico' : 'Começar agora'}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
