import useInView    from '../hooks/useInView.js'
import useCountUp   from '../hooks/useCountUp.js'

const items = [
  { num: 150, suffix: '+',  label: 'Projetos Entregues'   },
  { num: 98,  suffix: '%',  label: 'Clientes Satisfeitos'  },
  { num: 5,   suffix: '+',  label: 'Anos de Experiência'   },
  { num: 24,  suffix: '/7', label: 'Suporte Disponível'    },
]

function StatCard({ num, suffix, label, delay }) {
  const [ref, inView] = useInView()
  const count = useCountUp(num, 2000, inView)
  return (
    <div className="stat-card reveal" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="stat-num">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {items.map((item, i) => (
            <StatCard key={item.label} {...item} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
