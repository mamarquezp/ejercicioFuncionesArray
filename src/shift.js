/*Una lista de reproducción de música necesita empezar con una nueva canción destacada.
Implementa una función llamada empezarConCancionDestacada que retire la primera
canción de la lista de reproducción. La función debe mostrar la canción removida y luego
mostrar la lista de reproducción actualizada.*/

require('colors')
const colaDeCanciones = [`-Amores como el nuestro- `,`-Entre dos Tierras- `,`-Amor y Control- `,`-Bed of Roses- `]

const empezarConCancionDestacada =(cola) => {
    let cancionRetirada = cola.shift()
    return cancionRetirada
}

console.log(`Canciones siguientes:  `+`${colaDeCanciones}`.blue)
console.log(`Removiendo primera cancion...`)
console.log(`Se quitó `+`${empezarConCancionDestacada(colaDeCanciones)}`.red +` de la fila de reproduccion`)
console.log(`Lista actualizada:  `+`${colaDeCanciones}`.green)