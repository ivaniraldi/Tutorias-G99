import "./App.css";
import { Boton } from "./components/Boton";
import CardCuppon from "./components/CardCuppon";
import NavBar from "./components/NavBar";

import imagen_pelota from "./assets/img.avif"


function App() {

  const unidad = "Modulo de React"
  const clase = true
  const numeroDeDesafios = 80000000

  let numeroFormateado = numeroDeDesafios.toLocaleString()

  console.log("Hola desde el componente App.jsx")

  return (
    <>
      <NavBar titulo="Intro de React"></NavBar>
           <NavBar titulo="Intro de React - Componentes "></NavBar>
      <h1 className="titulo" id="titulo">
        Intro a React - G99
      </h1>
      <div>

        <div>
          <h2>Info del curso:</h2>
          <p>{unidad}</p>
          <p>Estamos en tutoria?: {clase == true? "No" : "Si"} </p>
          <p>Este modulo tiene {numeroDeDesafios.toLocaleString()} desafios</p>
        </div>

        <h2>Lista</h2>
        <ul>
          <li>Item 1 { unidad }</li>
          <li>Item 2 { clase == true ? "Estamos en clase" : "Estamos en tutoria" }</li>
          <li>Item 3 Este modulo tiene {numeroFormateado} desafios</li>
        </ul>

        <Boton numero="1" color="btn-danger" estamosEnClase={clase} ></Boton>
        <Boton numero="2" color="btn-success"></Boton>
        <Boton numero="3" color="btn-warning"></Boton>

      <div className="divCartas">

        <CardCuppon 
        titulo="Cama"
        imagen="https://plus.unsplash.com/premium_photo-1684445035187-c4bc7c96bc5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
        desc="Una cama muy comoda"
        loc="Santiago, Chile"
        precio1="4000"
        precio2="3200"
        ></CardCuppon>
        <CardCuppon
               titulo="Sofá"
        imagen="https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
        desc="Sofa color crema, de dos plazas"
        loc="Brasilia, Brasil"
        precio1="5000"
        precio2="2500"
        ></CardCuppon>
        <CardCuppon
               titulo="Juego de cocina completo"
        imagen="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=874"
        desc="Incluye todos los items mostrados en la imagen"
        loc="Bs.As, Argentina"
        precio1="8000"
        precio2="7200"
        ></CardCuppon>
        
                <CardCuppon
               titulo="Pelota de futbol"
        imagen={imagen_pelota}
        desc="Pelota no profesional"
        loc="Bs.As, Argentina"
        precio1="500"
        precio2="350"
        ></CardCuppon>
      </div>

      </div>
    </>
  );
 
}

export default App;
