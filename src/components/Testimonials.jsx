const testimonials = [
  {
    name: 'Ana Paula Silva',
    role: 'Diretora, Clínica Rosaté',
    initials: 'AS',
    text: 'A equipe entendeu nosso negócio antes de falar de layout. O novo site deixou a clínica mais profissional e trouxe pacientes mais preparados para fechar.',
  },
  {
    name: 'Roberto Ferreira',
    role: 'Sócio, Grill Urbano',
    initials: 'RF',
    text: 'Contratamos o site e mantivemos social media. A comunicação ficou consistente e começamos a receber contatos citando conteúdos das redes.',
  },
  {
    name: 'Juliana Costa',
    role: 'Marketing, TechVantage',
    initials: 'JC',
    text: 'O sistema interno reduziu horas de relatório manual. A entrega foi transparente, com checkpoints claros e ajustes rápidos.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="depoimentos">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Confiança</span>
          <h2 className="h-lg">Clientes valorizam quando tecnologia fala a língua do negócio.</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article className={`testimonial-card reveal d${index + 1}`} key={testimonial.name}>
              <div className="stars" aria-label="5 estrelas">
                {[1, 2, 3, 4, 5].map((star) => <i key={star} className="fas fa-star" aria-hidden="true" />)}
              </div>
              <p>“{testimonial.text}”</p>
              <div className="testimonial-author">
                <span>{testimonial.initials}</span>
                <div>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
