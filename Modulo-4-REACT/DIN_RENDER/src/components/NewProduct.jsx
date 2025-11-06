import React, { useState } from "react";

export default function NewProduct(props) {
    const [nombreInput, setNombreInput] = useState("")
    const [precioInput, setPrecioInput] = useState("")
    const [stockInput, setStockInput] = useState("")
    const [categoriasInput, setCategoriasInput] = useState("")

    const { setLibros, libros } = props

    const handleSubmit =(e) =>{
        e.preventDefault()
        let nuevoProducto = {
            id: new Date(),
            nombre: nombreInput,
            precio: precioInput,
            stock: stockInput,
            disponibilidad: Number(stockInput) > 0 ? "Hay stock" : "No hay Stock",
            categorias: [categoriasInput]
        }
        setLibros([...libros, nuevoProducto])
        setNombreInput("")
        setPrecioInput("")
        setStockInput("")
        setCategoriasInput("")       
        console.log(libros)
    }
  return (
    <form className="container p-2 bg-light" action="submit" onSubmit={(e)=>handleSubmit(e)}>
      <h2 className="text-center">Nuevo Producto</h2>
      <div className="d-flex justify-content-center">
        <div>
          <label htmlFor="Nombre">Nombre</label>
          <br />
          <input type="text" value={nombreInput} onChange={(e) => setNombreInput(e.target.value)} />
          <br />
          <label htmlFor="Precio">Precio</label>
          <br />
          <input type="number"  value={precioInput} onChange={(e)=> setPrecioInput(e.target.value)} />
          <br />
          <label htmlFor="Stock">Stock</label>
          <br />
          <input type="number"  value={stockInput} onChange={(e)=> setStockInput(e.target.value)} />
          <br />
          <label htmlFor="Categorias">Categorias (separadas por coma)</label>
          <br />
          <input type="text" value={categoriasInput} onChange={(e)=> setCategoriasInput(e.target.value)} />
          <br />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-success mt-4">Crear</button>
      </div>
    </form>
  );
}
