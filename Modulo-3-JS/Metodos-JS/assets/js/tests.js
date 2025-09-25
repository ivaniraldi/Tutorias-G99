let arr = ["a", "b", "c"]
// Indice   0    1    2

let arr3 =[10, 20, 25, 30]


//arr.splice(2, 0, "d", "e", "f")


//arr.unshift("0")
//arr.push("d")

let indiceDelNum = arr3.findIndex((numero)=>{
    return numero > 20
})

let indiceDeB = arr.findIndex((e) =>{
    return e == "b"
})

let arr2 = [
    {id: 1, nombre: "Tarea 1"},
    {id: 2, nombre: "Tarea 2"},
    {id: 3, nombre: "Tarea 2"}
]

let indiceDeTarea2 = arr2.findIndex((e)=>{
    return e.id == 3
})



console.log(JSON.stringify(arr2))