/*Una tienda en línea necesita agregar productos nuevos a su catálogo. Escribe una función
llamada agregarProducto que permita agregar un nuevo producto al catálogo de la tienda.
La función debe recibir el nombre del producto y su precio como parámetros, agregar el
producto al final del catálogo y luego mostrar el catálogo actualizado.*/
require('colors')
const readline = require('readline-sync')
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()

let catalogo = []

const agregarProducto = (nombre, precio) => {
    catalogo.push({Nombre: nombre, Precio: precio.toFixed(2)})
    console.log(`Catálogo actualizado`.green)
    console.log(`********** Catalogo De Productos **********`.blue)
    console.log(catalogo)
    console.log(`*******************************************`.blue)

}

async function gestionDeCatalogo(){
let controlBucleProducto = true
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
}

gestionDeCatalogo()