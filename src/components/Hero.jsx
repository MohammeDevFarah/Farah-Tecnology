import { useEffect, useRef } from 'react'
import { scrollTo } from '../utils/helpers.js'

export default function Hero() {
  const canvasRef = useRef(null)

  /* Partículas com canvas — JS puro é a ferramenta certa para canvas 2D */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf, pts = []

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const N = Math.min(Math.floor(canvas.width * canvas.height / 14000), 90)
    for (let i = 0; i < N; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.45 + 0.08,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width;  if (p.x > canvas.width)  p.x = 0
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,120,255,${p.o})`
        ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(0,102,255,${0.14 * (1 - d / 130)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section className="hero" id="inicio">
      <canvas ref={canvasRef} id="hero-canvas" />
      <div className="hero-glow" />
      <div className="orb" style={{ width:'550px', height:'550px', top:'-80px',  left:'-180px', background:'rgba(0,102,255,.045)' }} />
      <div className="orb" style={{ width:'450px', height:'450px', bottom:'-60px',right:'-120px',background:'rgba(123,47,255,.045)' }} />

      <div className="container">
        <div className="hero-content">
          <div className="anim-fade-up">
            <span className="badge">
              <i className="fas fa-bolt"></i>
              Soluções Tecnológicas de Alta Performance
            </span>
          </div>

          <h1 className="h-xl hero-title anim-fade-up delay-1">
            Sua empresa merece{' '}
            <span className="text-gradient">existir na internet</span>{' '}
            do jeito certo
          </h1>

          <p className="hero-sub anim-fade-up delay-2">
            Desenvolvemos sites, aplicações web e gerenciamos suas redes sociais
            para que você conquiste mais clientes, mais autoridade e resultados
            que realmente aparecem.
          </p>

          <div className="hero-btns anim-fade-up delay-3">
            <a href="#contato" className="btn btn-primary btn-lg" onClick={e => { e.preventDefault(); scrollTo('#contato') }}>
              <i className="fas fa-rocket"></i> Solicitar Proposta Gratuita
            </a>
            <a href="#portfolio" className="btn btn-secondary btn-lg" onClick={e => { e.preventDefault(); scrollTo('#portfolio') }}>
              Ver Projetos <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="hero-trust anim-fade-up delay-4">
            {[
              ['fas fa-check-circle', 'Entrega no prazo'],
              ['fas fa-check-circle', 'Suporte contínuo'],
              ['fas fa-check-circle', 'Projetos sob medida'],
              ['fas fa-check-circle', '100% responsivos'],
            ].map(([icon, text]) => (
              <div className="trust-item" key={text}>
                <i className={icon}></i>{text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Explore</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
