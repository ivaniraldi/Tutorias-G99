const express = require("express");
const fs = require("fs");
const cors=  require('cors')

const app = express();

app.use(express.json()); // express.json() es un middleware que se encarga de transformar a js todos los json recibidos en req.body
app.use(cors()) // CORS es un middleware que nos permite acceder al servidor desde todas o una lista de ips 

app.listen(3000, console.log("Servidor funcionando en el puerto 3000"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/products", (req, res) => {
  const productos = JSON.parse(fs.readFileSync("products.json", "utf8"));
  res.json(productos);
}); // 1 arg: PATH o DIRECCIóN 2: arg = FUNCION QUE RECIBE SIEMPRE req, res

app.get("/products/:id", (req, res) => {
      const { id } = req.params; 
  const todosLosProductos = JSON.parse(
    fs.readFileSync("products.json", "utf8"),
  );
  const productoAMostrar = todosLosProductos.find((p) => p.id == id);
  if(!productoAMostrar){
    res.send("No existe un producto con esa ID")
  }
  res.json(productoAMostrar);
});

app.post("/products", (req, res) => {
  const todosLosProductos = JSON.parse(
    fs.readFileSync("products.json", "utf8"),
  );
  let id = todosLosProductos.length + 1;
  const productoNuevo = {
    id,
    title: req.body.title,
    price: req.body.price,
  }; // productoNuevo = { titulo: "Camisa" , precio: 50000}
  todosLosProductos.push(productoNuevo);
  fs.writeFileSync("products.json", JSON.stringify(todosLosProductos));
  res.json(todosLosProductos);
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, price } = req.body;
  const todosLosProductos = JSON.parse(
    fs.readFileSync("products.json", "utf8"),
  );
  let indiceProducto = todosLosProductos.findIndex((p) => p.id == id);
  let productoActualizado = {
    id: Number(id),
    title,
    price,
  };
  todosLosProductos[indiceProducto] = productoActualizado;
  fs.writeFileSync("products.json", JSON.stringify(todosLosProductos));
  res.json(todosLosProductos);
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  console.log("ID del producto: " + id);
  const todosLosProductos = JSON.parse(
    fs.readFileSync("products.json", "utf8"),
  );
  let indiceProducto = todosLosProductos.findIndex((p) => p.id == id);
  console.log("Indice del producto: " + indiceProducto);
  todosLosProductos.splice(indiceProducto, 1);
  fs.writeFileSync("products.json", JSON.stringify(todosLosProductos));
  res.json(todosLosProductos);
});