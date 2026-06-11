import { scrollTo } from '../utils/helpers.js'

const socials = [
  { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
  { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' },
  { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
  { icon: 'fab fa-whatsapp', href: 'https://wa.me/5521993936450', label: 'WhatsApp' },
]

const navLinks = [
  ['#sobre', 'Estratégia'],
  ['#servicos', 'Serviços'],
  ['#portfolio', 'Projetos'],
  ['#precos', 'Planos'],
  ['#faq', 'FAQ'],
  ['#contato', 'Contato'],
]

const services = [
  'Sites profissionais',
  'Landing pages',
  'Aplicações web',
  'Social media',
  'Identidade digital',
]

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollTo('#inicio') }}>
              <img src="/Logotipo.png" alt="FarahTechnology Solutions" />
            </a>
            <p>
              Design, tecnologia e presença digital para empresas que querem competir
              com mais clareza, confiança e consistência.
            </p>
            <div className="social-links">
              {socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                  <i className={social.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Serviços</h4>
            {services.map((service) => (
              <a key={service} href="#servicos" onClick={(e) => { e.preventDefault(); scrollTo('#servicos') }}>
                {service}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h4>Mapa</h4>
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} onClick={(e) => { e.preventDefault(); scrollTo(href) }}>
                {label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <a href="mailto:ricardfarah1983@gmail.com">ricardfarah1983@gmail.com</a>
            <a href="https://wa.me/5521993936450" target="_blank" rel="noopener noreferrer">
              +55 (21) 99393-6450
            </a>
            <span>Rio de Janeiro, Brasil</span>
            <span>Atendimento nacional</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} FarahTechnology Solutions.</span>
          <span>Construído pela FarahTechnology.</span>
        </div>
      </div>
    </footer>
  )
}
