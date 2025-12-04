import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const { products } = useContext(ProductsContext);

  const navigate = useNavigate();


  return (
    <div className="container mb-5">
      <div className="row gap-3 justify-content-center">
        {products.map((p) => {
          return (
            <div
              className="col-3 border rounded d-flex flex-column justify-content-between align-items-center"
              key={p.id}
                style={{ height: "400px" }}
            >
              <img
                src={p.image}
                alt={p.title}
                style={{ width: "100px", height: "100px", objectFit: "contain"}}
                />
              <h3 className="fs-5">{p.title}</h3>
                <p className="border p-2 rounded text-success ">Precio: ${p.price}</p>
                <div className="d-flex justify-content-center flex-column align-items-center">

                <Button onClick={()=> navigate(`/detail/${p.id}`)}  variant="secondary" className="mb-3">Ver detalles</Button>


                <button className="btn btn-primary mb-3" disabled={true}>Añadir al carrito</button>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
