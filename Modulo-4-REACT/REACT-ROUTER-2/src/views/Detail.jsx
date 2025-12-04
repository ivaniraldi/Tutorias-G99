import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import SpinnerCarga from "../components/SpinnerCarga";

export default function Detail() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  console.log("Parámetro recibido en Detail.jsx:", id);

  const getProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      console.log("Producto obtenido:", data);
    } catch (error) {
      console.log("Error al obtener el producto:", error);
      alert("Error al obtener el producto");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <NavBar></NavBar>


      <div className="container mt-4">
        {product ? (
          <div className="">
            <h1>{product.title}</h1>

            <img
              style={{ width: "200px" }}
              src={product.image}
              alt={product.title}
            />
            <p>Descripción del producto: {product.description}</p>
            <p className="border p-2 rounded text-success ">
              Precio: ${product.price}
            </p>
            <p>Categoria: {product.category}</p>
            <p>
              Calificación: {product.rating.rate} ({product.rating.count}{" "}
              reseñas)
            </p>

            <button className="btn btn-primary mb-3">Añadir al carrito</button>
          </div>
        ) : (
          <SpinnerCarga />
        )}
      </div>
    </>
  );
}
