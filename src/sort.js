/*Una tienda quiere mostrar su catálogo ordenado de menor a mayor precio.Escribe una
función que reciba una lista de productos (nombre y precio) y los devuelva ordenados por
precio. [ { nombre: "Mouse", precio: 20 }, { nombre: "Monitor", precio: 150 }, { nombre:"Teclado", precio: 50 } ]*/

const productos = [
    { nombre: "Mouse", precio: 20 }, 
    { nombre: "Monitor", precio: 150 }, 
    { nombre:"Teclado", precio: 50 }
]

productos.sort((a,b) => {return a.precio - b.precio})

console.log(productos)
