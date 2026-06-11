import { useEffect, useState } from 'react'
import { scrollTo } from '../utils/helpers.js'

const links = [
  ['#sobre', 'Estratégia'],
  ['#servicos', 'Serviços'],
  ['#portfolio', 'Projetos'],
  ['#precos', 'Planos'],
  ['#faq', 'FAQ'],
  ['#contato', 'Contato'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    scrollTo(href)
    setOpen(false)
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Navegação principal">
        <div className="nav-inner">
          <a className="brand-link" href="#inicio" onClick={(e) => { e.preventDefault(); go('#inicio') }}>
            <span className="brand-mark">
              <img src="/Logotipo.png" alt="FarahTechnology Solutions" />
            </span>
            <span className="brand-name">FarahTechnology</span>
          </a>

          <ul className="nav-links">
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={(e) => { e.preventDefault(); go(href) }}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a className="btn btn-primary" href="#contato" onClick={(e) => { e.preventDefault(); go('#contato') }}>
              <i className="fas fa-paper-plane" aria-hidden="true" />
              Solicitar proposta
            </a>
            <button
              className={`hamburger${open ? ' open' : ''}`}
              type="button"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={(e) => { e.preventDefault(); go(href) }}>{label}</a>
        ))}
        <a className="btn btn-primary btn-full" href="#contato" onClick={(e) => { e.preventDefault(); go('#contato') }}>
          Solicitar proposta
        </a>
      </div>
    </>
  )
}
