let cuenta = [1, 3, 5, 7, 1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,1, 3, 5, 7,]

const metodosPago = ["Tarjeta de debito", "Tarjeta de credito", "Efectivo", "Transferencia"]

//console.log(metodosPago[2])

// Metodo length ---> nos dice cuantos elementos tiene nuestro arreglo
/*
console.log(metodosPago.length)

console.log(cuenta[cuenta.length - 1])

for( el of metodosPago ){
    console.log(el)
}
*/
let nombre = "Ivan"
// ``
//console.log("Hola " + nombre + " bienvenido/a a nuestra web!")
//console.log(`Hola ${nombre} bienvenido/a a nuestra web!`)

let usuario = {
    email: "ivan@email.com",
    password: "123123",
    id: 1
}

//console.log(usuario.email)
// 
/*
        <div class="card">
            <img class="card-img" src="https://p3-ofp.static.pub/fes/cms/2021/10/25/caqm6xeo57daq7nij26glvewaqvt02706786.png" alt="">
            <h3 class="card-title">Notebook</h3>
            <p class="card-price">$750</p>
            <div style="display: flex; justify-content: center;">
                <button class="card-btn">Comprar ahora</button>
            </div>
        </div>
*/
// 
//console.log(usuario["password"])

let productos = [
    {
        id: 0,
        titulo: "Notebook Lenovo",
        precio: 800,
        imagen: "https://p3-ofp.static.pub/fes/cms/2021/10/25/caqm6xeo57daq7nij26glvewaqvt02706786.png"
    },
    {
        id: 1,
        titulo: "Ipad WiFi 256GB",
        precio: 1250,
        imagen: "https://horizonplay.fbitsstatic.net/img/p/apple-ipad-10th-geracao-10-9-64gb-wi-fi-cor-prateado-150992/337586.jpg?w=670&h=670&v=no-value"
    },
    {
        id: 2,
        titulo: "GoPro Hero 14",
        precio: 740,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdl_CwKsxBV_j2-CyuaLjaedh9EgbYceTkYw&s"
    },
      {
        id: 3,
        titulo: "Mouse Logitech",
        precio: 240,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdl_CwKsxBV_j2-CyuaLjaedh9EgbYceTkYw&s"
    }
    
]

let grilla = document.querySelector("#grilla")
let htmlTemplate = ""

for( el of productos ){
    htmlTemplate += 
    `
        <div class="card" id="${el.id}">
            <img class="card-img" src="${el.imagen}" alt="${el.titulo}">
            <h3 class="card-title">${el.titulo}</h3>
            <p class="card-price" style="color: ${el.precio > 750 ? "red" : "green"}">$${el.precio}</p>
            <div style="display: flex; justify-content: center;">
                <button class="card-btn">Comprar ahora</button>
            </div>
        </div>
    `
}

grilla.innerHTML = htmlTemplate