import React, { useState } from "react";
import NavBar from "./NavBar";
import Gallery from "./Gallery";
import { librosImportados } from "../libros.js"
import NewProduct from "./NewProduct.jsx";

export default function Home() {
  const [formLibro, setFormLibro] = useState(false);


  const [libros, setLibros] = useState(librosImportados);

  const cambiarEstado = () => {
    setFormLibro(formLibro == true ? false : true);
    console.log(formLibro);
  };

  return (
    <>
      <NavBar />
      <div className="bg-light mt-2 p-2 d-flex justify-content-center ">
        <button className="btn btn-outline-dark" onClick={cambiarEstado}>
          Crear Producto
        </button>
      </div>
      <main className="container mt-2">
        {formLibro ? <NewProduct libros={libros} setLibros={setLibros}/> : null}
        <Gallery libros={libros} />
      </main>
    </>
  );
}
