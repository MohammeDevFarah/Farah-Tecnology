import { scrollTo } from '../utils/helpers.js'

const plans = [
  {
    tier:'Essencial', name:'Presença Online',
    desc:'Para quem precisa marcar posição no digital com qualidade.',
    price:'1.997', per:'projeto', note:'Pagamento parcelado disponível', featured: false,
    feats:[
      [true, 'Site responsivo (até 5 páginas)'], [true, 'Domínio e hospedagem 1 ano'],
      [true, 'SEO On-Page básico'],              [true, 'Formulário de contato integrado'],
      [true, 'Suporte por 30 dias'],             [false,'Social Media gerenciado'],
      [false,'Sistema ou aplicação web'],        [false,'Relatórios mensais'],
    ],
  },
  {
    tier:'Profissional', name:'Crescimento Digital',
    desc:'Para negócios que querem dominar o digital de ponta a ponta.',
    price:'3.997', per:'projeto + mensal', note:'A partir de R$ 997/mês para social media', featured: true,
    feats:[
      [true, 'Site completo (até 12 páginas)'], [true, 'Domínio, hospedagem e SSL'],
      [true, 'SEO avançado + Google Analytics'], [true, 'Integração com WhatsApp'],
      [true, 'Social Media (2 redes) 3 meses'], [true, 'Relatórios mensais de performance'],
      [true, 'Suporte prioritário por 90 dias'],[false,'Sistema ou aplicação web'],
    ],
  },
  {
    tier:'Enterprise', name:'Solução Completa',
    desc:'Aplicações e sistemas sob medida para operações complexas.',
    price:'Sob consulta', per:'', note:'Proposta personalizada para seu negócio', featured: false,
    feats:[
      [true, 'Aplicação web sob medida'],       [true, 'Integrações e APIs personalizadas'],
      [true, 'Banco de dados e infraestrutura'],[true, 'Dashboard e relatórios'],
      [true, 'Treinamento da equipe'],          [true, 'Social Media gerenciado'],
      [true, 'SLA e suporte dedicado'],         [true, 'Escalabilidade garantida'],
    ],
  },
]

export default function Pricing() {
  return (
    <section className="pricing" id="precos">
      <div className="container">
        <div className="pricing-header reveal">
          <span className="section-tag">Investimento</span>
          <h2 className="h-lg">
            Planos claros para cada{' '}
            <span className="text-gradient">etapa do seu crescimento</span>
          </h2>
          <p style={{ color:'var(--text2)', marginTop:'1rem' }}>
            Sem letras miúdas, sem surpresas. Você sabe exatamente o que está contratando.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div className={`price-card${p.featured ? ' featured' : ''} reveal d${i + 1}`} key={p.name}>
              {p.featured && <div className="feat-badge">Mais Popular</div>}
              <div className="price-tier">{p.tier}</div>
              <h3>{p.name}</h3>
              <p className="price-desc">{p.desc}</p>
              <div className="price-val">
                {p.price !== 'Sob consulta' && <span className="price-cur">R$</span>}
                <span className="price-num">{p.price}</span>
                {p.per && <span className="price-per">/{p.per}</span>}
              </div>
              <p className="price-note">{p.note}</p>
              <div className="price-sep" />
              <div className="price-feats">
                {p.feats.map(([ok, f]) => (
                  <div className={`pf ${ok ? 'yes' : 'no'}`} key={f}>
                    <i className={ok ? 'fas fa-check-circle' : 'fas fa-times-circle'}></i>{f}
                  </div>
                ))}
              </div>
              <a
                href="#contato"
                className={`btn btn-full ${p.featured ? 'btn-primary' : 'btn-ghost'}`}
                onClick={e => { e.preventDefault(); scrollTo('#contato') }}
              >
                {p.price === 'Sob consulta' ? 'Solicitar Proposta' : 'Começar Agora'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
