import { useState, useEffect } from 'react'

/**
 * Anima um número de 0 até `end` quando `active` for true.
 * Usa easing ease-out cúbico para suavidade.
 */
export default function useCountUp(end, duration = 2000, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let startTime = null

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)   // ease-out cubic
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [active, end, duration])

  return count
}
