import { useState, useEffect } from 'react'
import { scrollTo } from '../utils/helpers.js'

const links = [
  ['#sobre',       'Sobre'],
  ['#servicos',    'Serviços'],
  ['#portfolio',   'Portfólio'],
  ['#depoimentos', 'Depoimentos'],
  ['#faq',         'FAQ'],
  ['#contato',     'Contato'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mob,      setMob]      = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => { scrollTo(href); setMob(false) }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">

          {/* Logotipo com container que integra o fundo branco ao dark theme */}
          <a href="#" onClick={e => { e.preventDefault(); go('#inicio') }}>
            <div className="logo-wrap">
              <img src="/Logotipo.png" alt="FarahTechnology Solutions" />
            </div>
          </a>

          <ul className="nav-links">
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={e => { e.preventDefault(); go(href) }}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <a
              href="#contato"
              className="btn btn-primary"
              onClick={e => { e.preventDefault(); go('#contato') }}
            >
              <i className="fas fa-paper-plane"></i> Solicitar Proposta
            </a>
            <button
              className="hamburger"
              aria-label="Menu"
              onClick={() => setMob(v => !v)}
            >
              <span style={{ transform: mob ? 'rotate(45deg) translate(5px,5px)'   : 'none' }} />
              <span style={{ opacity: mob ? 0 : 1 }} />
              <span style={{ transform: mob ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      <div className={`mob-menu${mob ? ' open' : ''}`}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={e => { e.preventDefault(); go(href) }}>{label}</a>
        ))}
        <a
          href="#contato"
          className="btn btn-primary"
          style={{ marginTop: '0.5rem' }}
          onClick={e => { e.preventDefault(); go('#contato') }}
        >
          Solicitar Proposta
        </a>
      </div>
    </>
  )
}
