import React, { useState } from "react";
import LibroCard from "./LibroCard";

export default function Gallery(props) {
  const [busqueda, setBusqueda] = useState("");
  const [listaLibros, setListaLibros] = useState(props.libros);

  const filtrarLibros = (valor) => {
    setBusqueda(valor)
    if(busqueda.length> 0){
      let librosFiltrados = props.libros.filter((e) =>
      e.nombre.toUpperCase().includes(busqueda.toUpperCase())
    );
    console.log(librosFiltrados);
    setListaLibros(librosFiltrados);
    }else{
      setListaLibros(props.libros)
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={busqueda}
          onChange={(e) => filtrarLibros(e.target.value)}
        />
        <button onClick={filtrarLibros}>Buscar</button>
      </div>
      <div className="galeria">
        {listaLibros.length > 0 ? props.libros.map((libro, i) => {
          return <LibroCard key={i} libro={libro} />;
        }): <p>No hay libros que coincidan con esa busqueda</p>}
      </div>
    </div>
  );
}
