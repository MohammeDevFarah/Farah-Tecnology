const steps = [
  { n: '01', title: 'Briefing',             desc: 'Mergulhamos no seu negócio, entendemos seus objetivos, público e diferenciais. Sem atalhos — quanto melhor nos entendemos, melhor o resultado final.' },
  { n: '02', title: 'Estratégia',           desc: 'Planejamos cada detalhe: tecnologia, arquitetura, design e conteúdo. Você aprova tudo antes de começarmos a construir.' },
  { n: '03', title: 'Desenvolvimento',      desc: 'Executamos com excelência técnica e agilidade. Você acompanha o progresso em tempo real e pode dar feedback a qualquer momento.' },
  { n: '04', title: 'Suporte Contínuo',     desc: 'Lançamos juntos e continuamos ao seu lado. Monitoramento, atualizações e suporte pós-entrega fazem parte do nosso compromisso.' },
]

export default function Process() {
  return (
    <section>
      <div className="container">
        <div className="process-header reveal">
          <span className="section-tag">Como Trabalhamos</span>
          <h2 className="h-lg">
            Do briefing ao ar em um processo{' '}
            <span className="text-gradient">transparente e ágil</span>
          </h2>
        </div>

        <div className="process-steps">
          {steps.map((s, i) => (
            <div className={`p-step reveal d${i + 1}`} key={s.n}>
              <div className="p-step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
