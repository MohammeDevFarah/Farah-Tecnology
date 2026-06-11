import { useState } from 'react'

const faqs = [
  {
    q: 'Quanto tempo leva para colocar um site no ar?',
    a: 'Uma landing page costuma levar de 5 a 10 dias úteis. Sites completos ficam entre 2 e 4 semanas, dependendo de conteúdo, integrações e número de páginas.',
  },
  {
    q: 'Vocês cuidam de domínio, hospedagem e SSL?',
    a: 'Sim. Podemos configurar domínio, hospedagem, certificado SSL, formulários, e-mail profissional e publicação final. Você não precisa lidar com a parte técnica sozinho.',
  },
  {
    q: 'O projeto já sai preparado para Google?',
    a: 'Sim. Entregamos estrutura semântica, meta tags, performance, responsividade e base de SEO on-page. Para crescimento orgânico contínuo, também podemos planejar conteúdo e otimizações mensais.',
  },
  {
    q: 'Consigo pedir alterações depois da entrega?',
    a: 'Sim. Todos os planos incluem suporte inicial. Também oferecemos manutenção mensal para ajustes, novas páginas, monitoramento e evolução do site.',
  },
  {
    q: 'Vocês fazem apenas site ou também sistema?',
    a: 'Fazemos os dois. Além de sites e landing pages, criamos aplicações web, dashboards, áreas administrativas, integrações com APIs e automações sob medida.',
  },
]

export default function FAQ() {
  const [active, setActive] = useState(0)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">FAQ</span>
          <h2 className="h-lg">Perguntas que geralmente aparecem antes do primeiro contato.</h2>
        </div>

        <div className="faq-list reveal d2">
          {faqs.map((item, index) => (
            <article className={`faq-item${active === index ? ' open' : ''}`} key={item.q}>
              <button className="faq-q" type="button" onClick={() => setActive(active === index ? null : index)}>
                <span>{item.q}</span>
                <i className={`fas ${active === index ? 'fa-minus' : 'fa-plus'}`} aria-hidden="true" />
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
