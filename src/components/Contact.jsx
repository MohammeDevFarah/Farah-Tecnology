import { useState } from 'react'

const CONTACT_EMAIL = 'ricardfarah1983@gmail.com'
const WA_NUMBER     = '5521993936450'

const details = [
  { icon:'fas fa-envelope',     label:'E-mail',       value:'ricardfarah1983@gmail.com' },
  { icon:'fab fa-whatsapp',     label:'WhatsApp',     value:'+55 (21) 99393-6450'       },
  { icon:'fas fa-map-marker-alt',label:'Localização', value:'Rio de Janeiro, Brasil — Atendemos todo o país' },
  { icon:'fas fa-clock',        label:'Horário',      value:'Seg–Sex, das 9h às 18h'    },
]

const initialForm = { name:'', email:'', phone:'', service:'', message:'' }

export default function Contact() {
  const [form,    setForm]    = useState(initialForm)
  const [errors,  setErrors]  = useState({})
  const [loading, setLoading] = useState(false)
  const [done,    setDone]    = useState(false)

  const setField = (k, v) => {
    setForm(prev => ({ ...prev, [k]: v }))
    setErrors(prev => ({ ...prev, [k]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())                         e.name    = 'Informe seu nome'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'E-mail inválido'
    if (!form.service)                             e.service = 'Selecione um serviço'
    if (!form.message.trim())                      e.message = 'Escreva uma mensagem'
    return e
  }

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    try {
      const data = new FormData()
      data.append('name',     form.name)
      data.append('email',    form.email)
      data.append('phone',    form.phone)
      data.append('service',  form.service)
      data.append('message',  form.message)
      data.append('_subject', `Nova proposta: ${form.service} — ${form.name}`)
      data.append('_captcha', 'false')
      await fetch(`https://formsubmit.co/${CONTACT_EMAIL}`, { method:'POST', body:data })
      setDone(true)
    } catch {
      alert('Erro ao enviar. Tente pelo WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato">
      <div className="container">
        <div className="contact-grid">

          {/* Informações */}
          <div className="reveal">
            <span className="section-tag">Contato</span>
            <h2 className="h-lg">
              Vamos construir algo{' '}
              <span className="text-gradient">incrível juntos</span>
            </h2>
            <p>
              Preencha o formulário ou entre em contato diretamente.
              Respondemos em até 4 horas em dias úteis.
            </p>
            <div className="contact-details">
              {details.map(d => (
                <div className="c-detail" key={d.label}>
                  <div className="c-detail-ico"><i className={d.icon}></i></div>
                  <div className="c-detail-info">
                    <strong>{d.label}</strong>
                    <span>{d.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <div className="contact-form-wrap reveal d2">
            {done ? (
              <div className="form-success">
                <div className="succ-ico"><i className="fas fa-check"></i></div>
                <h3>Mensagem enviada!</h3>
                <p>
                  Obrigado pelo contato. Nossa equipe retornará em até 4 horas.
                  Fique de olho no seu e-mail.
                </p>
                <button
                  className="btn btn-ghost"
                  style={{ margin:'1.5rem auto 0', display:'flex' }}
                  onClick={() => { setDone(false); setForm(initialForm) }}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="form-row">
                  <div className="form-grp">
                    <label>Nome completo *</label>
                    <input className="f-input" placeholder="Seu nome" value={form.name} onChange={e => setField('name', e.target.value)} />
                    {errors.name && <span className="form-err">{errors.name}</span>}
                  </div>
                  <div className="form-grp">
                    <label>E-mail *</label>
                    <input className="f-input" type="email" placeholder="seu@email.com" value={form.email} onChange={e => setField('email', e.target.value)} />
                    {errors.email && <span className="form-err">{errors.email}</span>}
                  </div>
                  <div className="form-grp">
                    <label>WhatsApp</label>
                    <input className="f-input" placeholder="+55 (21) 99393-6450" value={form.phone} onChange={e => setField('phone', e.target.value)} />
                  </div>
                  <div className="form-grp">
                    <label>Serviço desejado *</label>
                    <select className="f-input" value={form.service} onChange={e => setField('service', e.target.value)}>
                      <option value="">Selecione...</option>
                      <option>Desenvolvimento Web</option>
                      <option>Aplicação Web</option>
                      <option>Social Media</option>
                      <option>Identidade Digital</option>
                      <option>Pacote Completo</option>
                    </select>
                    {errors.service && <span className="form-err">{errors.service}</span>}
                  </div>
                  <div className="form-grp full">
                    <label>Mensagem *</label>
                    <textarea
                      className="f-input"
                      placeholder="Conte um pouco sobre seu projeto e o que você espera alcançar..."
                      value={form.message}
                      onChange={e => setField('message', e.target.value)}
                    />
                    {errors.message && <span className="form-err">{errors.message}</span>}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                  disabled={loading}
                  style={{ marginTop:'.25rem', opacity: loading ? 0.7 : 1 }}
                >
                  {loading
                    ? <><i className="fas fa-spinner fa-spin"></i> Enviando...</>
                    : <><i className="fas fa-paper-plane"></i> Enviar Mensagem</>
                  }
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
