import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const [nombre, setNombre] = useState("")
    
  return (
    <div>
        <p>Ingrese su nombre</p>
        <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)}  />

        <Link to="/home"> <button className='btn btn-primary'>Iniciar sesión</button> </Link>
        
    </div>
  )
}
