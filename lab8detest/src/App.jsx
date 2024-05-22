import { useState } from 'react'
import Numeros from '../src/componentes/numeros.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Numeros />
    </>
  )
}

export default App
