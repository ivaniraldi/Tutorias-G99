import React, { useEffect, useState } from 'react'

export default function ChangeMode() {
    const [modo, setModo] = useState("light")

    const cambiarDeModo = () =>{
        if (modo == "light"){
            setModo("dark")
            localStorage.setItem("style", "dark")
        }else{
            setModo("light")
            localStorage.setItem("style", "light")
        }
    }


    useEffect(()=>{
        const name = prompt("Ingresa tu nombre")
    },[])
// localStorage.setItem("nombre_item", valor) // crear item
// localStorage.getItem("nombre_item") //obtener item
// localStorage.removeItem("nombre_item") //eliminar item
// localStorage.clear() // elimina TODOS los items

    useEffect(()=>{
        const style = localStorage.getItem("style")
        setModo(style)
    }, [modo])


  return (
    <div>
        Hola "Nombre_usuario"
        <button onClick={cambiarDeModo}>Modo claro/Oscuro</button>

        <p>{modo}</p>
    </div>
  )
}
