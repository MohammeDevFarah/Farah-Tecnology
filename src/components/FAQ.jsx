import { useEffect, useRef } from 'react'
import { createApp }        from 'vue'
import FaqAccordion         from '../vue/FaqAccordion.vue'

/**
 * FAQ — accordion gerenciado pelo Vue.js (composition API).
 * O React renderiza o container; o Vue cuida do estado e da
 * animação de altura real (scrollHeight), corrigindo o bug
 * de max-height fixo.
 */
export default function FAQ() {
  const mountRef = useRef(null)
  const vueApp   = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return
    vueApp.current = createApp(FaqAccordion)
    vueApp.current.mount(mountRef.current)

    return () => {
      vueApp.current?.unmount()
      vueApp.current = null
    }
  }, [])

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header reveal">
          <span className="section-tag">Perguntas Frequentes</span>
          <h2 className="h-lg">
            Respondemos antes{' '}
            <span className="text-gradient">de você perguntar</span>
          </h2>
        </div>

        {/* Ponto de montagem do Vue */}
        <div ref={mountRef} />
      </div>
    </section>
  )
}
