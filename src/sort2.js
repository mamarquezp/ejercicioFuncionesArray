/*Un sistema de gestión de inventario necesita ordenar los productos por su precio de manera
ascendente. Implementa una función llamada ordenarPorPrecio que ordene un arreglo de
objetos producto por su precio de menor a mayor. La función debe recibir el arreglo de
productos como parámetro, ordenarlo por precio y luego mostrar la lista ordenada.*/

require('colors')
const readline = require('readline-sync')
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()

const productos = []

const agregarProducto = (nombre, precio) => {
    productos.push({ Producto: nombre, Precio: precio })
    console.log(`Productos actualizadas`.green)
    console.log(`********** Catálogo **********`.blue)
    console.log(productos)
    console.log(`******************************`.blue)
}

const ordenarProductoPrecio = (producto) => {
    productos.sort((a, b) => { return a.Precio - b.Precio })
    console.log(`Productos ordenados por precio`.green)
    console.log(`********** Catálogo **********`.blue)
    console.log(productos)
    console.log(`******************************`.blue)
}

const ordenarProductoNombre = (producto) => {
    productos.sort((a, b) => {
    const nombreA = a.Producto.toLowerCase()
    const nombreB = b.Producto.toLowerCase()
    if (nombreA < nombreB) {
        return -1
    }
    if (nombreA > nombreB) {
        return 1
    }
    return 0
})
    console.log(`Productos ordenados alfabéticamente`.green)
    console.log(`********** Catálogo **********`.blue)
    console.log(productos)
    console.log(`******************************`.blue)
}

async function gestionDeCatalogo() {
    let controlBucleProducto = true
    let controlOrdenamiento = true
    do {

        const nombreProducto = readline.question("Ingrese el nombre del producto: ")
        const precioProducto = readline.questionFloat("Ingrese el precio del producto: ")

        agregarProducto(nombreProducto, precioProducto)

        const nuevoProductoConfirmacion = await prompt([{
            type: 'list',
            name: 'opt',
            message: 'Desea ingresar otro producto?',
            choices: ['Si', 'No']
        }])

        controlBucleProducto = nuevoProductoConfirmacion.opt.toLowerCase() === 'si'

    } while (controlBucleProducto)
    const ordenar = await prompt([{
        type: 'list',
        name: 'opt',
        message: 'Cómo desea ordenar la lista del catalogo de productos?',
        choices: ['Alfabeticamente', 'Precio']
    }])
    controlOrdenamiento = ordenar.opt.toLowerCase() === 'alfabeticamente'
    controlOrdenamiento ? ordenarProductoNombre(productos) : ordenarProductoPrecio(productos)
}

gestionDeCatalogo()