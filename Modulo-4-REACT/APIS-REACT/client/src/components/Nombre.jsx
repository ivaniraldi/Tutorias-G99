import React, { useEffect, useState } from 'react'

export default function Nombre() {

    const [nombre, setNombre] = useState("")
// localStorage.setItem("nombre_item", valor) // crear item
// localStorage.getItem("nombre_item") //obtener item
// localStorage.removeItem("nombre_item") //eliminar item
// localStorage.clear() // elimina TODOS los items

    const handleChange = (e) =>{
         setNombre(e.target.value)
         localStorage.setItem("nombre", e.target.value)
    }

    useEffect(()=>{
        setNombre(localStorage.getItem("nombre"))
    },[])

  return (
    <div>
        <h1>Hola {nombre}!</h1>
        <input type="text" value={nombre} onChange={(e) => handleChange(e)} />
    </div>
  )
}
