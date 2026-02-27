const fs= require("fs")

const sumar = (a, b) => a+b
const nombre = "ivan"

const crearUsuario = (nombre, edad) =>{
    const usuariosAnteriores = JSON.parse(fs.readFileSync("usuarios.json", "utf8")) // leemos los usuarios que existen y los transformamos a JS
    let id = usuariosAnteriores.length + 1 // calculamos las id's  con el largo del array, creamos nuevas con +1 
    let usuario = { id, nombre, edad } // creamos el usuario nuevo con la id generada en la linea anterior y el nombre que recibimos
    usuariosAnteriores.push(usuario) // agregamos el usuario nuevo al array de los usuarios anteriores
    fs.writeFileSync("usuarios.json", JSON.stringify(usuariosAnteriores, null, 2) )// Sobrescribimos con los usuarios anteriores + el usuario nuevo 
}

const leerUsuario = ()=>{
    const usuarios = fs.readFileSync("usuarios.json", "utf8")
    console.log(JSON.parse(usuarios))
}


module.exports = { sumar, nombre, crearUsuario, leerUsuario }
// para exportar, podemos usar module.exports = algo
// si exportamos más de una cosa, podemos agregarlas en un objeto que luego le haremos destructuring
