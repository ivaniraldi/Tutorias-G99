import React from 'react'
import NavBar from '../components/NavBar'

export default function Profile() {
  return (
    <div>
        <NavBar></NavBar>

        <div className='container my-2'>
            <h1>Perfil de Usuario</h1>
            <p>Nombre: </p>
            <p>Email: </p>
        </div>
    </div>
  )
}
