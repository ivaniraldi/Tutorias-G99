import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
import { Button } from "bootstrap";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function NavBar() {

  const { logout } = useContext(AuthContext);
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img
            alt=""
            src="https://fakestoreapi.com/icons/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top rounded me-2"
          />
          Tutoría de Context API
        </Navbar.Brand>
        <div className="d-flex gap-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "nav-link" : "text-secondary text-decoration-none"
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link" : "text-secondary text-decoration-none"
            }
          >
            Sobre nosotros
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "nav-link" : "text-secondary text-decoration-none"
            }
          >
            Perfil
          </NavLink>
        </div>
        <ThemeToggler />
        <button className="btn btn-outline-danger" onClick={()=>{logout()}} >Cerrar Sesión</button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
