import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const mockProducts = "Productos";
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ mockProducts, products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
