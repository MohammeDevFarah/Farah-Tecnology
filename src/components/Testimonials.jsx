const testimonials = [
  { name:'Carlos Mendonça',  role:'CEO — Mendonça Cosméticos',         av:'CM', text:'"A FarahTechnology transformou completamente nossa presença digital. Em 3 meses após o lançamento do novo site, nossas consultas online aumentaram 240%. O nível de atenção ao projeto foi impressionante."' },
  { name:'Ana Paula Silva',  role:'Proprietária — Clínica Estética Rosaté', av:'AS', text:'"Finalmente encontrei um parceiro de tecnologia que entende de negócio. Não me entregaram só um site bonito — me entregaram um sistema que agenda, confirma e reduz faltas. Resultado imediato."' },
  { name:'Roberto Ferreira', role:'Empresário — Rede Grill Urbano',    av:'RF', text:'"Contratei para criar o site e fiquei com eles para o social media também. Em 6 meses, nossa conta no Instagram saiu de 1.200 para 18.000 seguidores com engajamento e clientes reais."' },
  { name:'Juliana Costa',    role:'Gerente de Marketing — TechVantage',av:'JC', text:'"O sistema de gestão que desenvolveram para nós reduziu nosso tempo de relatórios em 70%. A equipe foi proativa, transparente e entregou antes do prazo. Já indicamos para três parceiros."' },
  { name:'Marcelo Augusto',  role:'Fundador — StartHub Incubadora',    av:'MA', text:'"Precisávamos de uma plataforma robusta para conectar startups e investidores. A FarahTechnology entregou em 8 semanas algo que cotamos em outros lugares por o dobro do prazo."' },
  { name:'Fernanda Lima',    role:'Diretora — FisioCorp Clínicas',     av:'FL', text:'"Gestão de redes sociais de alta qualidade. Nosso conteúdo nunca foi tão profissional e os pacientes chegam nos citando posts do Instagram. Claramente sentiram a diferença."' },
]

export default function Testimonials() {
  return (
    <section id="depoimentos">
      <div className="container">
        <div className="test-header reveal">
          <span className="section-tag">Depoimentos</span>
          <h2 className="h-lg">
            O que nossos clientes{' '}
            <span className="text-gradient">dizem de nós</span>
          </h2>
          <p style={{ color:'var(--text2)', marginTop:'1rem' }}>
            Resultados reais de empresas reais. Não vendemos promessas — entregamos transformações.
          </p>
        </div>

        <div className="test-grid">
          {testimonials.map((t, i) => (
            <div className={`test-card reveal d${(i % 3) + 1}`} key={t.name}>
              <div className="test-stars">
                {[1,2,3,4,5].map(s => <i key={s} className="fas fa-star"></i>)}
              </div>
              <p className="test-text">{t.text}</p>
              <div className="test-author">
                <div className="test-avatar">{t.av}</div>
                <div>
                  <div className="test-name">{t.name}</div>
                  <div className="test-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
