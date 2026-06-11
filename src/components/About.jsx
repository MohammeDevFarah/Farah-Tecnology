import { scrollTo } from '../utils/helpers.js'

const principles = [
  {
    icon: 'fas fa-compass-drafting',
    title: 'Estratégia antes de estética',
    desc: 'Mapeamos público, oferta, objeções e jornada antes de desenhar qualquer tela.',
  },
  {
    icon: 'fas fa-gauge-high',
    title: 'Performance como requisito',
    desc: 'Layouts leves, responsivos, acessíveis e preparados para SEO técnico.',
  },
  {
    icon: 'fas fa-handshake-angle',
    title: 'Parceria depois da entrega',
    desc: 'Acompanhamento, ajustes e evolução contínua para o digital não ficar parado.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="about section-split">
      <div className="container about-grid">
        <div className="about-copy reveal">
          <span className="section-tag">Estratégia digital</span>
          <h2 className="h-lg">
            Um site profissional não é enfeite. É uma máquina de confiança.
          </h2>
          <p>
            A FarahTechnology une design, desenvolvimento e posicionamento para criar
            experiências digitais que explicam bem sua empresa, reduzem dúvidas e aproximam
            clientes qualificados do próximo passo.
          </p>
          <p>
            Trabalhamos com empresas que precisam sair do improviso: marcas que querem um
            site confiável, sistemas sob medida, presença consistente nas redes e uma base
            digital pronta para crescer.
          </p>

          <div className="about-principles">
            {principles.map((item) => (
              <article className="principle" key={item.title}>
                <i className={item.icon} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <a className="btn btn-primary" href="#contato" onClick={(e) => { e.preventDefault(); scrollTo('#contato') }}>
            Falar com especialista
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
        </div>

        <div className="about-panel reveal d2">
          <div className="panel-label">Método Farah</div>
          <div className="panel-score">
            <span>Diagnóstico</span>
            <strong>01</strong>
          </div>
          <div className="panel-lines">
            <span style={{ width: '86%' }} />
            <span style={{ width: '64%' }} />
            <span style={{ width: '74%' }} />
          </div>
          <div className="panel-matrix">
            <div>
              <strong>Oferta</strong>
              <span>clareza</span>
            </div>
            <div>
              <strong>UX</strong>
              <span>conversão</span>
            </div>
            <div>
              <strong>SEO</strong>
              <span>base técnica</span>
            </div>
            <div>
              <strong>Social</strong>
              <span>autoridade</span>
            </div>
          </div>
          <div className="panel-footer">
            <i className="fas fa-circle-check" aria-hidden="true" />
            Plano digital desenhado para vender melhor.
          </div>
        </div>
      </div>
    </section>
  )
}
