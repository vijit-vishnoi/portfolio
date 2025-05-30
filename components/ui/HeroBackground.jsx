'use client'

import { useState, useEffect } from 'react'

export default function HeroBackground() {
  const [circles, setCircles] = useState([])

  useEffect(() => {
    // Generate 20 random circles on the client only
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      style: {
        width:  `${Math.random() * 300 + 50}px`,
        height: `${Math.random() * 300 + 50}px`,
        top:    `${Math.random() * 100}%`,
        left:   `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 20 + 10}s`,
        animationDelay:    `${Math.random() * 2}s`,
        transform:         `scale(${Math.random() * 0.8 + 0.2})`,
      }
    }))
    setCircles(generated)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {circles.map(({ id, style }) => (
        <div
          key={id}
          className="absolute rounded-full bg-emerald-500/10"
          style={style}
        />
      ))}
    </div>
  )
}
