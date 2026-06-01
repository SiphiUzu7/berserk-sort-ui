function Result({ result, onRetake }) {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <p style={{ color: '#888', marginBottom: '0.5rem' }}>You have been sorted into</p>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{result.role}</h1>
      <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1.5rem', color: '#c8b89a' }}>
        "{result.tagline}"
      </p>
      <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>{result.reasoning}</p>
      <p style={{ color: '#888', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
        Arc: {result.arc_reference}
      </p>
      <p style={{ color: '#888', marginBottom: '2rem', fontSize: '0.9rem' }}>
        Characters: {result.characters && result.characters.join(', ')}
      </p>
      <button
        onClick={onRetake}
        style={{
          background: 'transparent',
          border: '1px solid #e8e0d0',
          color: '#e8e0d0',
          padding: '0.75rem 2rem',
          cursor: 'pointer',
          fontSize: '1rem',
          letterSpacing: '0.05em'
        }}
      >
        Take it again
      </button>
    </div>
  )
}

export default Result