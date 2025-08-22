 let nombre = "Ivan" // let permite reasignar variables
const apellido = 'Iraldi' // const NO permite cambiar el valor de una variable

let edad = 27

// console.log() nos sirve para mostrar algo en consola
//console.log(nombre)

/*
alert()
nos sirve para
mostrar una alerta en el NAVEGADOR
*/

// alert(edad + 1)

//let nombre = prompt("Ingrese su nombre")
/*
let num1 = Number(prompt("Ingrese el primer numero"))
let num2 = prompt("Ingrese el segundo numero") // usuario ingresa 2 ---> el prompt entrega "2" y lo guarda en num2

let conversionNumero2 = Number(num2) // transformamos el "2" que esta en num2 a 2

let resultado = num1+num2

alert("El resultado de la suma es " + resultado)

console.log(nombre + " " + apellido)
*/

console.log("Esto esta corriendo desde el archivo js")

let titulo = document.querySelector("h1")

titulo.style.color = "red"

titulo.innerHTML = "<img width=200 src='https://random.dog/b780466a-d547-45db-9168-924e3dc485ea.jpg' /> Hola! Rellené esta etiqueta con JavaScript " + nombre 

document.querySelector("h1").style.backgroundColor = "black"

let subtitulo = document.querySelector("#subtitulo")
let subtitulo2 = document.querySelector(".subtitulo2").innerHTML = "Segundo subtitulo"

subtitulo.textContent = "Hola soy un subtitulo <img width=200 src='https://random.dog/b780466a-d547-45db-9168-924e3dc485ea.jpg' />"


let botonRestar = document.querySelector("#btnRestar")

botonRestar.addEventListener("click", ()=>{
    let etiquetaNumero = document.querySelector('#numero')
   let valor = Number(etiquetaNumero.innerHTML)
   etiquetaNumero.innerHTML = valor - 1
})