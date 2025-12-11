import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navegar = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await login(username, password);

    } catch (error) {
      console.log("Error en el login:", error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Credenciales Incorrectas!",
        footer: '<a href="#">Olvide mi contraseña :(</a>',
      });
    }
  };

  return (
    <div
      className="container h-100 d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <h1>Iniciar Sesión</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your username with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Entrar
        </button>
      </form>
    </div>
  );
}
