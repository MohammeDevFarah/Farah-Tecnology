const benefits = [
  {
    icon: 'fas fa-user-check',
    title: 'Mais confiança antes da reunião',
    desc: 'Quando o cliente pesquisa sua empresa, ele encontra uma presença organizada, clara e profissional.',
  },
  {
    icon: 'fas fa-route',
    title: 'Caminho de conversão mais curto',
    desc: 'Textos, CTAs e páginas organizadas para levar o visitante do interesse ao contato com menos atrito.',
  },
  {
    icon: 'fas fa-chart-simple',
    title: 'Decisões com dados',
    desc: 'Métricas, eventos e relatórios para entender o que gera demanda e onde melhorar.',
  },
  {
    icon: 'fas fa-shield-halved',
    title: 'Base técnica confiável',
    desc: 'Projeto preparado para velocidade, segurança, manutenção e evolução futura.',
  },
]

export default function Benefits() {
  return (
    <section className="benefits section-band" id="beneficios">
      <div className="container benefits-layout">
        <div className="benefits-copy reveal">
          <span className="section-tag">Impacto</span>
          <h2 className="h-lg">Profissionalizar o digital muda a forma como o mercado enxerga sua empresa.</h2>
          <p>
            Um bom projeto digital não serve apenas para “estar online”. Ele organiza sua
            comunicação, aumenta percepção de valor e transforma tráfego em relacionamento.
          </p>
        </div>

        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <article className={`benefit-card reveal d${Math.min(index + 1, 4)}`} key={benefit.title}>
              <i className={benefit.icon} aria-hidden="true" />
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
