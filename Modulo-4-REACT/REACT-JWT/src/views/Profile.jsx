import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import SpinnerCarga from '../components/SpinnerCarga';

export default function Profile() {

  const [userInfo, setUserInfo] = useState(null);

  const getUserInfo = async () =>{
    try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
        });
        const data = await res.json();
        console.log("User Info:", data);
        setUserInfo(data);
    } catch (error) {
        console.log("Error fetching user info:", error); 
    }
  }
 

  useEffect(()=>{
    getUserInfo();
  },[])

  return (
    <div>
        <NavBar></NavBar>

       {userInfo ?
       ( <div className='container my-2'>
            <h1>Perfil de Usuario</h1>
            <p>ID: {userInfo.id} </p>
            <p>Email: {userInfo.email} </p>
        </div>):
        <SpinnerCarga></SpinnerCarga>}
    </div>
  )
}
