const { leerUsuario, crearUsuario } = require("./funciones.js")

const argumentos = process.argv.slice(2) // Extraemos los argumentos desde la consola, por ejemplo= "node index.js crear Ivan ====>  ["crear", "Ivan"]

if(argumentos[0] === "leer"){ // si el argumento 0 es "leer", ejecutamos la funcion correspondiente
    leerUsuario()
}

if(argumentos[0] === "crear"){ // si el argumento 0 es "crear" ejecutamos crearUsuario
    crearUsuario(argumentos[1], argumentos[2]) // argumentos[1] seria lo que colocamos lueego de "crear", por ejemplo, "Ivan"
 }

if(argumentos[0] === "hola"){
    console.log("Hola mundo")
}