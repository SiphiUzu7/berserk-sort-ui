import { useState } from 'react'
import Quiz from './components/Quiz'
import Result from './components/Results'
import Loader from './components/Loader'
import Dashboard from './components/Dashboard'

function App() {
  const [screen, setScreen] = useState('quiz')
  const [result, setResult] = useState(null)
  const [stats, setStats] = useState([])

  const handleComplete = async (answers) => {
    setScreen('loading')

    const response = await fetch('http://localhost:3000/sort', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers })
    })

    const data = await response.json()
    setResult(data)
    setScreen('result')

    fetch('http://localhost:3000/stats')
  .then(res => res.json())
  .then(data => setStats(data))
  }

  const handleRetake = () => {
    setResult(null)
    setScreen('quiz')
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center', padding: '2rem', letterSpacing: '0.2em', fontSize: '1rem', color: '#888' }}>
        BERSERK SORT
      </h1>
      {screen === 'quiz' && <Quiz onComplete={handleComplete} />}
      {screen === 'loading' && <Loader />}
      {screen === 'result' && <Result result={result} onRetake={handleRetake} />}
      {screen === 'result' && <Dashboard stats={stats} />}
    </div>
  )
}

export default App