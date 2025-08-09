'use client'

import { useEffect, useState } from 'react'

interface BowPosition {
  left: string;
  top: string;
  transform: string;
  opacity: number;
  speed: number;
}

export const BowBackground = () => {
  const [bows, setBows] = useState<BowPosition[]>([])
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setBows([...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      transform: `scale(${0.8 + Math.random() * 0.7}) rotate(${Math.random() * 360}deg)`,
      opacity: 0.3 + Math.random() * 0.3,
      speed: 0.05 + Math.random() * 0.15,
    })))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 overflow-hidden">
        {bows.map((bow, i) => {
          const translateY = -scrollY * bow.speed
          
          return (
            <div
              key={i}
              className="absolute will-change-transform text-5xl text-pink-300"
              style={{
                left: bow.left,
                top: bow.top,
                opacity: bow.opacity,
                transform: `${bow.transform} translateY(${translateY}px)`,
                transition: 'transform 0.5s ease-out',
              }}
            >
              🎀
            </div>
          )
        })}
      </div>
    </div>
  )
};