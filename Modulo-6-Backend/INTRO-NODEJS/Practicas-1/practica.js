const fs = require("fs") // para importar módulos o librerias usamos require
const { sumar, nombre } = require("./funciones.js")

const argumentos = process.argv.slice(2)
// process.argv = lee los argumentos de la consola
// usamos .slice(2) para quitar "node index.js" de la lectura y quedarnos solo con los argumentos que agregamos
console.log(argumentos)
 
//console.log("Hola mundo desde NodeJS, los saluda " + nombre)
//console.log(sumar(2,4))

fs.writeFileSync("Minombre.txt", "Ivan Yoel Iraldi") // SIEMPRE que escribamos un archivo, debemos colocar la extensión correspondiente (.txt, .js, .json etc...)

let productos = [
    {
        id: 1,
        title: "Camisa",
        price: 30000
    },
    {
        id: 2,
        title: "Pantalon",
        price: 45000
    }
]

fs.writeFileSync("products.json", JSON.stringify(productos)) // JSON.stringify = Transforma de JS a JSON

const clientes = fs.readFileSync("clients.json", "utf8") // SIEMPRE que leemos un archivo, debemos colocar la codificación correspondiente al lenguaje (utf-8 para nuestro lenguaje)

const clientesParseados = JSON.parse(clientes) // JSON.parse = Transforma de JSON a JS

clientesParseados.forEach((c)=>{ // Debemos usar JSON.parse para poder tratar nuestro json como js y así poder usar métodos de array, objetos, etc...
    console.log(c)
})