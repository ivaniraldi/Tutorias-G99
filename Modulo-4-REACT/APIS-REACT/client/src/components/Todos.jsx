import React, { useEffect, useState } from "react";

export default function Todos() {
  const apiurl = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState([]);

  const [token, setToken] = useState(false);

  const getTodos = async () => {
    const res = await fetch(apiurl);
    const data = await res.json();
    console.log(data);
    setTodos(data);
  };
  const cerrarSesion = ()=>{
    localStorage.removeItem("token");
    window.location.reload();
  }

  useEffect(() => {
    getTodos();
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <div>
      {token ? (
        todos.map((t) => {
          return (
            <div key={t.id}>
              <h3>{t.id}</h3>
              <h4>{t.title}</h4>
            </div>
          );
        })
      ) : (
        <p>Necesitas iniciar sesión para ver los datos</p>
      )}

      <button onClick={()=> cerrarSesion()}>Cerrar Sesión</button>
    </div>
  );
}
