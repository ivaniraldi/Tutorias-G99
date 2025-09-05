console.log("Estamos corriendo el codigo en el archivo .js");
let body = document.querySelector("body");
let botonNombre = document.querySelector("#nombre");
console.log(body.style.backgroundColor);

//Funcion de expresion
const modoClaroOscuro = function () {
  console.log("Cambiando de modo de color");
  if (body.style.backgroundColor == "white") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
};

//Funcion declarativa
function sumar(parametro1, parametro2) {
  console.log("Sumando: " + parametro1 + " + " + parametro2);
  console.log("El resultado es: " + (parametro1 + parametro2));
  return parametro1 + parametro2;
}
console.log(sumar(5, 6));

//Funcion flecha o Arrow Function
let dividir = (a, b) => {
  return a / b;
};
let multiplicar = (a, b) => a * b;
let restar = (a, b) => {
  console.log(a - b);
  let resultado = a - b;
  return resultado;
};

let resultado2 = restar(8, 5);

console.log(resultado2);

//Funcion anonima
botonNombre.addEventListener("click", () => {
  //ESTA ES LA FUNCION ANONIMA (SIN NOMBRE)
  console.log("Ivan");
});

//--------------------------------------------------
let pintarTexto = (color) => {
  let apellido = "Iraldi";
  body.style.color = color;
};
//console.log(apellido)//Esto no funciona

document.addEventListener("keydown", (evento) => {
  console.log(evento.key);
  if (evento.key == "g") {
    body.style.backgroundColor = "green";
  } else if (evento.key == "w") {
    body.style.backgroundColor = "white";
  }
});

//saludar("Ivan")
function saludar(nombre = "usuario", apellido = "") {
  alert(`Hola ${nombre} ${apellido}`); //INTERPOLACION: Se hace igual a un string, pero con comillas invertidas (backtick) ``
}

/*
Para insertar un elemento HTML con JavaScript, usa document.createElement() para crear el nuevo nodo y luego 
parentElement.appendChild() para agregarlo al final de un elemento padre existente, o parentElement.insertBefore() 
para insertarlo antes de un nodo de referencia específico. También puedes usar parentElement.append() para añadir múltiples nodos o texto,
 o element.insertAdjacentElement() para insertar el elemento en una posición relativa a otro elemento.  */
