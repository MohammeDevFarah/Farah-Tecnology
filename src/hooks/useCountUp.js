import { useEffect, useState } from 'react'

/**
 * Anima um numero de 0 ate `end` quando `active` for true.
 */
export default function useCountUp(end, duration = 2000, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return undefined
    let startTime = null
    let frame = 0

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(eased * end))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [active, end, duration])

  return count
}
