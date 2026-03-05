import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState(null)


  const getProducts = async () =>{
    console.log(import.meta.env.VITE_BACKEND_URL)
    const res = await fetch(import.meta.env.VITE_BACKEND_URL)
    const data = await res.json()
    setItems(data)
  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="read-the-docs">
        {items? 
        items.forEach(element => {
          return <p>{element.name}</p>
        })
      : <p>No hay items</p>}
      </div>
    </>
  )
}

export default App
