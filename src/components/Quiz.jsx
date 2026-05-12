import { useState } from 'react'

const questions = [
  {
    id: 1,
    question: "You've lost something you can never get back. What do you do?",
    options: [
      "Keep moving, no matter what",
      "Find a new dream to fill the void",
      "Grieve it fully, then adapt",
      "Study why it happened"
    ]
  },
  {
    id: 2,
    question: "Someone you trust asks you to do something that costs you greatly. You...",
    options: [
      "Do it without hesitation",
      "Do it, but remember the cost",
      "Negotiate first",
      "Refuse — your limits are your own"
    ]
  },
  {
    id: 3,
    question: "Power is...",
    options: [
      "A tool to protect what matters",
      "The only language the world speaks",
      "Something that always corrupts",
      "Irrelevant — connection is what matters"
    ]
  },
  {
    id: 4,
    question: "If you knew your path was written — that causality had already decided your role — you would...",
    options: [
      "Fight it with everything",
      "Use that knowledge as a map",
      "Accept it and move gracefully",
      "Watch to understand it better first"
    ]
  },
  {
    id: 5,
    question: "When the world shows you its worst, your instinct is to...",
    options: [
      "Meet it head-on",
      "Become something that can survive it",
      "Protect those around you from it",
      "Find absurdity in it — laugh or you'll break"
    ]
  },
  {
    id: 6,
    question: "At your core, you are defined by...",
    options: [
      "What you refuse to give up",
      "What you're willing to sacrifice",
      "Who you choose to stand beside",
      "What you've survived"
    ]
  }
]

function Quiz({ onComplete }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option]

    if (current + 1 === questions.length) {
      onComplete(newAnswers)
    } else {
      setAnswers(newAnswers)
      setCurrent(current + 1)
    }
  }

  const q = questions[current]

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>
        {current + 1} / {questions.length}
      </p>
      <h2 style={{ fontSize: '1.3rem', lineHeight: '1.7', marginBottom: '2rem' }}>
        {q.question}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {q.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(option)}
            style={{
              background: 'transparent',
              border: '1px solid #333',
              color: '#e8e0d0',
              padding: '1rem 1.25rem',
              cursor: 'pointer',
              fontSize: '0.95rem',
              textAlign: 'left',
              lineHeight: '1.5',
              transition: 'border-color 0.2s'
            }}
            onMouseEnter={e => e.target.style.borderColor = '#e8e0d0'}
            onMouseLeave={e => e.target.style.borderColor = '#333'}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Quiz