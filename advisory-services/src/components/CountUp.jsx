import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/** Animated counter that counts from start up to end when scrolled into view */
export default function CountUp({ end, suffix = '', prefix = '', start = 1, duration = 1800 }) {
  const [count, setCount] = useState(start)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    let startTime = null
    const startVal = start
    const endVal = typeof end === 'number' ? end : parseInt(String(end).replace(/[^0-9]/g, ''), 10)
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(startVal + (endVal - startVal) * eased))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration, start])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}
