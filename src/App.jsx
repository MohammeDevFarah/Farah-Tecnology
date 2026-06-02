import { useEffect } from 'react'
import Navbar        from './components/Navbar.jsx'
import Hero          from './components/Hero.jsx'
import Stats         from './components/Stats.jsx'
import About         from './components/About.jsx'
import Services      from './components/Services.jsx'
import Process       from './components/Process.jsx'
import Benefits      from './components/Benefits.jsx'
import Portfolio     from './components/Portfolio.jsx'
import Testimonials  from './components/Testimonials.jsx'
import Pricing       from './components/Pricing.jsx'
import FAQ           from './components/FAQ.jsx'
import CTA           from './components/CTA.jsx'
import Contact       from './components/Contact.jsx'
import Footer        from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

export default function App() {
  /* ── Scroll-reveal via IntersectionObserver ──────────────────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    }, 120)

    /* ── Cursor glow (desktop) ──────────────────────────────────── */
    const glow = document.getElementById('cursor-glow')
    let mx = 0, my = 0, cx = 0, cy = 0, raf
    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    const lerp = () => {
      cx += (mx - cx) * 0.08
      cy += (my - cy) * 0.08
      if (glow) { glow.style.left = cx + 'px'; glow.style.top = cy + 'px' }
      raf = requestAnimationFrame(lerp)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(lerp)

    /* ── Page loader ────────────────────────────────────────────── */
    const loader = document.getElementById('loader')
    if (loader) {
      setTimeout(() => loader.classList.add('hidden'), 1800)
      setTimeout(() => loader.remove(), 2500)
    }

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Benefits />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
