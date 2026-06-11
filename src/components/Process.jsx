const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    desc: 'Entendemos seu negócio, público, oferta, concorrência e os gargalos da presença digital atual.',
  },
  {
    n: '02',
    title: 'Plano de execução',
    desc: 'Definimos escopo, páginas, tecnologia, conteúdo, integrações e critérios claros de entrega.',
  },
  {
    n: '03',
    title: 'Design e construção',
    desc: 'Criamos a experiência visual, desenvolvemos o projeto e validamos responsividade, performance e fluxos.',
  },
  {
    n: '04',
    title: 'Lançamento e evolução',
    desc: 'Publicamos, monitoramos, ajustamos e deixamos um caminho claro para novas melhorias.',
  },
]

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <div className="process-head reveal">
          <span className="section-tag">Processo</span>
          <h2 className="h-lg">Um fluxo direto, sem promessa vaga e sem entrega às cegas.</h2>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <article className={`process-step reveal d${index + 1}`} key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
