import React, { useState, useRef } from 'react'
import './ModelReactions.css'

const REACTIONS = [
  { key: 'heart',     emoji: '❤️' },
  { key: 'fire',      emoji: '🔥' },
  { key: 'wow',       emoji: '😲' },
  { key: 'mindblown', emoji: '🤯' },
]

export default function ModelReactions({ storageKey = 'model-reactions' }) {
  const [counts, setCounts] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })
  const [floaters, setFloaters] = useState([])
  const idRef = useRef(0)

  const handleReact = (key, emoji) => {
    const next = { ...counts, [key]: (counts[key] || 0) + 1 }
    setCounts(next)
    try { localStorage.setItem(storageKey, JSON.stringify(next)) } catch {}

    const id = idRef.current++
    const offsetX = Math.random() * 30 - 15
    setFloaters(prev => [...prev, { id, emoji, offsetX }])
    setTimeout(() => {
      setFloaters(prev => prev.filter(f => f.id !== id))
    }, 1400)
  }

  return (
    <div className="model-reactions">
      <div className="mr-floaters">
        {floaters.map(f => (
          <span
            key={f.id}
            className="mr-floater"
            style={{ '--offset-x': `${f.offsetX}px` }}
          >
            {f.emoji}
          </span>
        ))}
      </div>

      <div className="mr-pill">
        {REACTIONS.map(r => (
        <button
            key={r.key}
            className="mr-btn"
            onClick={() => handleReact(r.key, r.emoji)}
            aria-label={`React with ${r.key}`}
        >
            <span className="mr-emoji">{r.emoji}</span>
        </button>
        ))}
      </div>
    </div>
  )
}