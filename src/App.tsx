import MyMarquee from './MyMarquee'
import './App.css'
import ParticleRing from './components/particlering/ParticleRing'

function App() {
  return (
    <>
      <div className="particle-ring-container">
        <ParticleRing/>
      </div>

      <MyMarquee/>
    </>
  )
}

export default App
