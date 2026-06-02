import { scrollTo } from '../utils/helpers.js'

export default function CTA() {
  return (
    <section>
      <div className="container">
        <div className="cta-inner reveal">
          <h2 className="h-lg">
            Pronto para transformar sua{' '}
            <span className="text-gradient">presença digital?</span>
          </h2>
          <p className="cta-sub">
            Agende uma conversa gratuita de 30 minutos e descubra exatamente o que a
            FarahTechnology pode fazer pelo seu negócio. Sem compromisso, sem pressão.
          </p>
          <div className="cta-btns">
            <a
              href="#contato"
              className="btn btn-primary btn-lg"
              onClick={e => { e.preventDefault(); scrollTo('#contato') }}
            >
              <i className="fas fa-calendar-check"></i> Agendar Conversa Gratuita
            </a>
            <a
              href="https://wa.me/5521993936450"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <i className="fab fa-whatsapp"></i> Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
