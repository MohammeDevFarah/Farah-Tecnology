import { useState, useEffect, useRef } from 'react'

/**
 * Dispara `inView = true` uma única vez quando o elemento
 * entra na viewport (IntersectionObserver).
 */
export default function useInView(threshold = 0.12) {
  const ref    = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}
