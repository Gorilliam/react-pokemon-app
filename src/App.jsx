import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonApplication from './components/PokemonApplication'
import Pokemon from './components/Pokemon'

function App() {
  const [pokApp, setPokApp] = useState(false)

  return (
    <div className="pokeApp">
     <h1>Pokémon application</h1>
     <button onClick={() => setPokApp(!pokApp)}>{pokApp ? "Close Pokémon app" : "Start Pokémon app"}</button>
     {pokApp && <PokemonApplication/>}
    </div>
  )
}

export default App
