import { useState } from 'react'

const CONTACT_EMAIL = 'ricardfarah1983@gmail.com'

const details = [
  { icon: 'fas fa-envelope', label: 'E-mail', value: CONTACT_EMAIL },
  { icon: 'fab fa-whatsapp', label: 'WhatsApp', value: '+55 (21) 99393-6450' },
  { icon: 'fas fa-location-dot', label: 'Base', value: 'Rio de Janeiro, com atendimento nacional' },
  { icon: 'fas fa-clock', label: 'Resposta', value: 'Até 24h úteis após o contato' },
]

const initialForm = { name: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const setField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: '' }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Informe seu nome'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nextErrors.email = 'Informe um e-mail válido'
    if (!form.service) nextErrors.service = 'Selecione uma necessidade'
    if (!form.message.trim()) nextErrors.message = 'Conte um pouco sobre o projeto'
    return nextErrors
  }

  const submit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    setErrors({})
    setLoading(true)

    try {
      const data = new FormData()
      data.append('name', form.name)
      data.append('email', form.email)
      data.append('phone', form.phone)
      data.append('service', form.service)
      data.append('message', form.message)
      data.append('_subject', `Nova proposta: ${form.service} - ${form.name}`)
      data.append('_captcha', 'false')

      await fetch(`https://formsubmit.co/${CONTACT_EMAIL}`, { method: 'POST', body: data })
      setDone(true)
    } catch {
      alert('Não foi possível enviar agora. Tente pelo WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" className="contact">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <span className="section-tag">Contato</span>
          <h2 className="h-lg">Conte o que você quer construir. Nós traduzimos em plano, tela e código.</h2>
          <p>
            Use o formulário para enviar o contexto do projeto. Quanto mais claro for o
            objetivo, mais precisa será a primeira recomendação.
          </p>

          <div className="contact-details">
            {details.map((detail) => (
              <div className="contact-detail" key={detail.label}>
                <i className={detail.icon} aria-hidden="true" />
                <div>
                  <strong>{detail.label}</strong>
                  <span>{detail.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-wrap reveal d2">
          {done ? (
            <div className="form-success">
              <i className="fas fa-check" aria-hidden="true" />
              <h3>Mensagem enviada.</h3>
              <p>Obrigado pelo contato. A FarahTechnology vai retornar pelo e-mail informado.</p>
              <button className="btn btn-secondary" type="button" onClick={() => { setDone(false); setForm(initialForm) }}>
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="form-row">
                <label>
                  Nome completo *
                  <input className="field" placeholder="Seu nome" value={form.name} onChange={(e) => setField('name', e.target.value)} />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </label>
                <label>
                  E-mail *
                  <input className="field" type="email" placeholder="seu@email.com" value={form.email} onChange={(e) => setField('email', e.target.value)} />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </label>
                <label>
                  WhatsApp
                  <input className="field" placeholder="+55 (21) 99393-6450" value={form.phone} onChange={(e) => setField('phone', e.target.value)} />
                </label>
                <label>
                  Necessidade principal *
                  <select className="field" value={form.service} onChange={(e) => setField('service', e.target.value)}>
                    <option value="">Selecione...</option>
                    <option value="Site profissional">Site profissional</option>
                    <option value="Landing page">Landing page</option>
                    <option value="Aplicação web">Aplicação web</option>
                    <option value="Social media">Social media</option>
                    <option value="Identidade digital">Identidade digital</option>
                    <option value="Ainda não sei">Ainda não sei, preciso de orientação</option>
                  </select>
                  {errors.service && <span className="form-error">{errors.service}</span>}
                </label>
                <label className="full">
                  Mensagem *
                  <textarea
                    className="field"
                    placeholder="Fale sobre sua empresa, objetivo e prazo desejado..."
                    value={form.message}
                    onChange={(e) => setField('message', e.target.value)}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </label>
              </div>

              <button className="btn btn-primary btn-full" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin" aria-hidden="true" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane" aria-hidden="true" />
                    Enviar mensagem
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
