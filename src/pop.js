/*Una cola de espera de atención al cliente necesita remover al último cliente que ha sido
atendido. Crea una función llamada removerUltimoCliente que elimine al último cliente de la
cola de espera. La función debe mostrar el cliente removido y luego mostrar la nueva cola de
espera actualizada.*/
require('colors')
const colaDeAtencion = [`Luis`,`David`,`Julia`,`Lucia`]

const removerUltimoCliente =(cola) => {
    let clienteEliminado = cola.pop()
    return clienteEliminado
}

console.log(`Cola actual:  `+`${colaDeAtencion}`.blue)
console.log(`Removiendo al último cliente...`)
console.log(`Se eliminó al cliente `+`${removerUltimoCliente(colaDeAtencion)}`.red)
console.log(`Cola actualizada:  `+`${colaDeAtencion}`.green)