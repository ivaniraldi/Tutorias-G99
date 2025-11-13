import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import ChangeMode from './components/ChangeMode'
import Login from './components/Login'
import Nombre from './components/Nombre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nombre></Nombre>
    </>
  )
}

export default App
