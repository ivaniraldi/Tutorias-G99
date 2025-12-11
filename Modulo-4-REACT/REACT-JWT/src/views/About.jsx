import React from 'react'
import NavBar from '../components/NavBar'

export default function About() {
  return (
    <>
        <NavBar></NavBar>
        <div className="container mt-4">
            <h1>Acerca de esta aplicación</h1>
            <p>Esta aplicación es una demostración del uso de la Context API en React para gestionar el estado global de la aplicación. Permite a los usuarios cambiar entre temas claros y oscuros utilizando el componente ThemeToggler en la barra de navegación.</p>
            <p>La aplicación está construida con React y React Bootstrap para una interfaz de usuario receptiva y moderna.</p>
        </div>
    </>
  )
}
