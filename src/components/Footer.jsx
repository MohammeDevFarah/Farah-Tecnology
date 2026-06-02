import { scrollTo } from '../utils/helpers.js'

const socials = [
  { icon: 'fab fa-instagram',   href: '#' },
  { icon: 'fab fa-linkedin-in', href: '#' },
  { icon: 'fab fa-facebook-f',  href: '#' },
  { icon: 'fab fa-github',      href: '#' },
  { icon: 'fab fa-whatsapp',    href: 'https://wa.me/5521993936450' },
]

const navLinks = [
  ['#sobre',       'Sobre nós'],
  ['#portfolio',   'Portfólio'],
  ['#depoimentos', 'Depoimentos'],
  ['#precos',      'Planos'],
  ['#faq',         'FAQ'],
  ['#contato',     'Contato'],
]

const services = [
  'Desenvolvimento Web', 'Aplicações Web', 'Social Media',
  'Identidade Digital',  'SEO e Performance', 'Consultoria Digital',
]

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">

          {/* Marca */}
          <div className="footer-brand">
            <a href="#" onClick={e => { e.preventDefault(); scrollTo('#inicio') }}>
              <div className="logo-wrap logo-wrap-lg">
                <img src="/Logotipo.png" alt="FarahTechnology Solutions" />
              </div>
            </a>
            <p>
              Transformando negócios através da tecnologia. Desenvolvemos a presença
              digital que a sua empresa merece.
            </p>
            <div className="social-links">
              {socials.map(s => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="soc-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div className="footer-col">
            <h4>Serviços</h4>
            <div className="footer-links">
              {services.map(s => (
                <a key={s} href="#servicos" onClick={e => { e.preventDefault(); scrollTo('#servicos') }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div className="footer-col">
            <h4>Empresa</h4>
            <div className="footer-links">
              {navLinks.map(([href, label]) => (
                <a key={href} href={href} onClick={e => { e.preventDefault(); scrollTo(href) }}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div className="footer-col">
            <h4>Contato</h4>
            <div className="footer-links">
              <a href="mailto:ricardfarah1983@gmail.com">ricardfarah1983@gmail.com</a>
              <a href="https://wa.me/5521993936450" target="_blank" rel="noopener noreferrer">
                +55 (21) 99393-6450
              </a>
              <span style={{ color: 'var(--text3)', cursor: 'default' }}>Rio de Janeiro, Brasil</span>
              <span style={{ color: 'var(--text3)', cursor: 'default' }}>Atendimento nacional</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} FarahTechnology Solutions. Todos os direitos reservados.</span>
          <span>
            Desenvolvido com{' '}
            <i className="fas fa-heart" style={{ color: '#FF4D4D', margin: '0 .25rem' }}></i>
            pela{' '}
            <a href="#inicio" onClick={e => { e.preventDefault(); scrollTo('#inicio') }}>
              FarahTechnology
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
