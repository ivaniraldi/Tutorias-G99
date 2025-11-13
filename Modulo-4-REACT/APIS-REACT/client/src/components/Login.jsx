import React, { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const iniciarSesion = () =>{
        if(!username.trim() || !password.trim()){

            console.log(username.trim())
            alert("Todos los campos son necesarios")
        }else{

            // const res = await fetch(miApi + "/login" { method: "POST "})
            // const data = await res.json()
            // localStorage.setItem("token", data.token)
            localStorage.setItem("token", true)
            window.location.reload();
        }
    }


  return (
    <div>
        <label htmlFor="">Username</label>
        <br />
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <br />
        <label htmlFor="" >Password</label>
        <br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={iniciarSesion}>Iniciar sesión</button>
    </div>
  )
}
