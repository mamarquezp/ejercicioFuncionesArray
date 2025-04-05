//Una tienda quiere mostrar los precios finales de sus productos incluyendo el 21% de IVA. 
//Crea una función que reciba una lista de precios sin IVA y devuelva una nueva lista con los precios actualizados.

function agregarIVA(productos){
    const productosConIVA = productos.map((productos) => {
        productos.precio = (productos.precio * 1.21).toFixed(2)
        return productos
})
    return productosConIVA
}

const productos = [
    {nombre: `Zapatos Blancos`, precio: 100},
    {nombre: `Tenis Nike`, precio: 150},
    {nombre: `Lentes Rayban`, precio: 200}
]

const productosConIVA = agregarIVA(productos)
console.log(productosConIVA)