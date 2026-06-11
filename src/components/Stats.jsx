const items = [
  { value: '150+', label: 'entregas digitais' },
  { value: '98%', label: 'aprovação média' },
  { value: '5+', label: 'anos de experiência' },
  { value: '24', label: 'horas para primeiro retorno' },
]

export default function Stats() {
  return (
    <section className="stats" aria-label="Indicadores da FarahTechnology">
      <div className="container">
        <div className="stats-grid">
          {items.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
