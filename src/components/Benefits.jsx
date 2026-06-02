const benefits = [
  { icon:'fas fa-users',          color:'#0066FF', bg:'rgba(0,102,255,.12)',  title:'Mais clientes chegando até você',          desc:'Um site otimizado e presença digital consistente funcionam 24h por dia atraindo e convertendo novos clientes enquanto você foca no que faz de melhor.' },
  { icon:'fas fa-trophy',         color:'#FFB800', bg:'rgba(255,184,0,.1)',   title:'Autoridade que fecha negócios',             desc:'Presença digital profissional transmite credibilidade imediata. Quando o cliente chega à reunião, ele já confia em você.' },
  { icon:'fas fa-clock',          color:'#00C8FF', bg:'rgba(0,200,255,.1)',   title:'Tempo livre para o que importa',            desc:'Automações e boa gestão digital eliminam tarefas manuais. Você recupera horas para investir no crescimento real.' },
  { icon:'fas fa-chart-line',     color:'#00E87A', bg:'rgba(0,232,122,.1)',   title:'Resultados mensuráveis e reais',            desc:'Sem achismo. Cada ação digital é acompanhada por métricas claras — você sabe exatamente o que funciona e onde investir.' },
  { icon:'fas fa-shield-halved',  color:'#7B2FFF', bg:'rgba(123,47,255,.12)', title:'Segurança e escalabilidade',               desc:'Infraestrutura robusta que cresce com o seu negócio. Nada de sistemas frágeis que quebram no momento errado.' },
]

export default function Benefits() {
  return (
    <section className="benefits" id="beneficios">
      <div className="container">
        <div className="benefits-grid">

          <div>
            <span className="section-tag reveal">Por que nos escolher</span>
            <h2 className="h-lg reveal d1" style={{ marginBottom: '3rem' }}>
              Transformações que{' '}
              <span className="text-gradient">você vai sentir</span>
            </h2>
            <div className="benefits-list">
              {benefits.map((b, i) => (
                <div className={`benefit reveal d${Math.min(i + 1, 4)}`} key={b.title}>
                  <div className="benefit-icon" style={{ background: b.bg, color: b.color }}>
                    <i className={b.icon}></i>
                  </div>
                  <div className="benefit-body">
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="benefits-visual reveal d2">
            {[
              ['150+', 'Projetos entregues'],
              ['98%',  'Taxa de satisfação'],
              ['5x',   'ROI médio dos clientes'],
            ].map(([n, l]) => (
              <div className="bv-card" key={l}>
                <div className="bv-num">{n}</div>
                <div className="bv-label">{l}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
