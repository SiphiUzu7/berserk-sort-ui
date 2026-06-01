import { useEffect, useState } from 'react'

const COLORS = {
  'THE STRUGGLER': '#8b0000',
  'THE DREAMER': '#1a3a5c',
  'THE DEVOTED': '#2d6a4f',
  'THE WATCHER': '#4a4a2a',
  'THE APOSTLE': '#3a0a0a',
  'THE ANCHOR': '#5a3a1a'
}

function Dashboard({ stats }) {
  if (!stats || stats.length === 0) return null

  const max = Math.max(...stats.map(s => s.count))

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', letterSpacing: '0.2em', fontSize: '1rem' }}>
        FANDOM DISTRIBUTION
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {stats.map((entry, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '130px', fontSize: '0.7rem', textAlign: 'right', color: '#e8e0d0' }}>
              {entry._id}
            </div>
            <div style={{ flex: 1, background: '#1a1a1a', borderRadius: '2px', height: '28px' }}>
              <div style={{
                width: `${(entry.count / max) * 100}%`,
                height: '100%',
                background: COLORS[entry._id] || '#555',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '8px',
                fontSize: '0.75rem',
                color: '#e8e0d0',
                transition: 'width 0.6s ease'
              }}>
                {entry.count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard