const express = require("express");
const cors = require("cors");
const pool = require("./database/db");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;

app.listen(PORT, () => {
  console.log("💻 Servidor encendido y funcionando el puerto " + PORT);
});

app.get("/items", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM item");
    res.json(result.rows);
  } catch (error) {
    console.error("❌ Error en la consulta GET /items: " + error);
    res.status(500).json({
      error: error.code,
      message: error.message,
    });
  }
});

app.post("/items", async (req, res) => {
  try {
    const { name, price } = req.body;
    const values = [name, price];
    const result = await pool.query(
      "INSERT INTO item (name, price) VALUES ($1, $2)",
      values,
    );
    res.status(201).send("Producto añadido con éxito!");
  } catch (error) {
    console.error("❌ Error en la consulta POST /items: " + error);
    res.status(500).json({
      error: error.code,
      message: error.message,
    });
  }
});
