/** Scroll suave para um seletor CSS (ex: '#contato') */
export const scrollTo = (selector) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}
