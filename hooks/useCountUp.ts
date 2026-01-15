'use client'

import { useEffect, useState } from 'react'

interface UseCountUpOptions {
  start?: number
  end: number
  duration?: number
  delay?: number
  enabled?: boolean
}

export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  enabled = true
}: UseCountUpOptions) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!enabled) {
      setCount(start)
      return
    }

    const timeout = setTimeout(() => {
      const startTime = Date.now()
      const difference = end - start

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Ease out cubic
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)

        const currentValue = start + difference * easeOutCubic
        setCount(Math.round(currentValue))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timeout)
  }, [start, end, duration, delay, enabled])

  return count
}
