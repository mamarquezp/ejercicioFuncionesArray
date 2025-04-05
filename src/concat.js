/*Un supermercado quiere combinar dos listas de compras de diferentes clientes en una sola
para preparar el pedido. Crea una función llamada combinarListasDeCompra que combine
las listas de compra de dos clientes en una sola. La función debe recibir las dos listas de
compra como parámetros, combinarlas en una sola y luego mostrar la lista de compras
completa.*/

const listaCliente1 = [
    { producto: `Leche`, cantidad: 3 },
    { producto: `Cereal`, cantidad: 1 },
    { producto: `Cafe`, cantidad: 1 },
    { producto: `Azucar`, cantidad: 2 },
]

const listaCliente2 = [
    { producto: `Huevos`, cantidad: 2 },
    { producto: `Frijoles`, cantidad: 4 },
    { producto: `Sal`, cantidad: 1 },
    { producto: `Salsa Ketchup`, cantidad: 2 },
]

const combinarListaDeCompras = (lista1, lista2) => {
    return listaCombinada = lista1.concat(lista2)
}

console.log(combinarListaDeCompras(listaCliente1, listaCliente2))