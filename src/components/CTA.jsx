import { scrollTo } from '../utils/helpers.js'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-layout reveal">
        <div>
          <span className="section-tag">Próximo passo</span>
          <h2 className="h-lg">Antes de investir em tráfego, organize a experiência que vai receber seus clientes.</h2>
        </div>
        <div className="cta-copy">
          <p>
            Agende uma conversa gratuita. Em poucos minutos, entendemos seu momento,
            identificamos oportunidades e indicamos o caminho mais inteligente para sua
            presença digital.
          </p>
          <div className="cta-actions">
            <a className="btn btn-primary btn-lg" href="#contato" onClick={(e) => { e.preventDefault(); scrollTo('#contato') }}>
              <i className="fas fa-calendar-check" aria-hidden="true" />
              Agendar conversa
            </a>
            <a className="btn btn-secondary btn-lg" href="https://wa.me/5521993936450" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
