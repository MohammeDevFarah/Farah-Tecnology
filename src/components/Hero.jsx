import { useEffect, useRef } from 'react'
import { scrollTo } from '../utils/helpers.js'

const proofItems = [
  'Estratégia antes do layout',
  'Performance e SEO desde o início',
  'Entrega acompanhada de perto',
]

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    let raf = 0
    let points = []

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * ratio
      canvas.height = rect.height * ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      points = Array.from({ length: Math.min(72, Math.max(28, Math.floor(rect.width / 18))) }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }))
    }

    const draw = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.13)'
      ctx.lineWidth = 1

      points.forEach((point, index) => {
        point.x += point.vx
        point.y += point.vy
        if (point.x < 0 || point.x > rect.width) point.vx *= -1
        if (point.y < 0 || point.y > rect.height) point.vy *= -1

        for (let next = index + 1; next < points.length; next += 1) {
          const other = points[next]
          const dx = point.x - other.x
          const dy = point.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 120) {
            ctx.globalAlpha = 1 - distance / 120
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }

        ctx.globalAlpha = 1
        ctx.fillStyle = 'rgba(245, 158, 11, 0.72)'
        ctx.fillRect(point.x, point.y, 2, 2)
      })

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero" id="inicio">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-kicker anim-fade-up">
          <span>Design + código + crescimento</span>
        </div>

        <h1 className="h-xl hero-title anim-fade-up delay-1">
          Sites e sistemas digitais para empresas que precisam parecer tão sérias quanto são.
        </h1>

        <p className="hero-sub anim-fade-up delay-2">
          A FarahTechnology cria presença digital profissional, páginas que convertem,
          aplicações web sob medida e conteúdo estratégico para transformar visitantes em
          oportunidades reais de negócio.
        </p>

        <div className="hero-actions anim-fade-up delay-3">
          <a className="btn btn-primary btn-lg" href="#contato" onClick={(e) => { e.preventDefault(); scrollTo('#contato') }}>
            <i className="fas fa-rocket" aria-hidden="true" />
            Quero evoluir meu digital
          </a>
          <a className="btn btn-secondary btn-lg" href="#portfolio" onClick={(e) => { e.preventDefault(); scrollTo('#portfolio') }}>
            Ver projetos
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
        </div>

        <div className="hero-proof anim-fade-up delay-4">
          {proofItems.map((item) => (
            <span key={item}>
              <i className="fas fa-check" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-console" aria-hidden="true">
        <div className="console-top">
          <span />
          <span />
          <span />
        </div>
        <div className="console-row strong">farahtechnology.deploy()</div>
        <div className="console-row">diagnóstico: presença digital</div>
        <div className="console-row">performance: 98/100</div>
        <div className="console-row success">status: pronto para crescer</div>
      </div>
    </section>
  )
}
