/*Un sistema de seguimiento de paquetes necesita encontrar la ubicación de un paquete en
un recorrido de entrega. Implementa una función llamada ubicacionDelPaquete que
encuentre el índice de la ubicación actual del paquete en el recorrido de entrega. La función
debe recibir el recorrido de entrega como parámetro, encontrar la ubicación del paquete y
luego mostrar la posición.*/

const recorridoDeEntrega = [
    { ubicacion: "En recolección", paquete: "" },
    { ubicacion: "Recolectado", paquete: "" },
    { ubicacion: "En bodega central", paquete: "" },
    { ubicacion: "En ruta", paquete: "" },
    { ubicacion: "En bodega periférica", paquete: "Paquete Temu" },
    { ubicacion: "En ruta de entrega", paquete: "" },
    { ubicacion: "Entregado", paquete: "" }
]

const ubicacionDelPaquete = (recorrido) => {
    const nombrePaquetes = recorrido.map(paquetes => paquetes.paquete)
    const indice = nombrePaquetes.indexOf("Paquete Temu")
    if (indice !== -1) {
        return `La ubicación actual del pedido es: ${recorrido[indice].ubicacion}`
    } else {
        return `Paquete no encontrado.`
    }
}

console.log(ubicacionDelPaquete(recorridoDeEntrega))