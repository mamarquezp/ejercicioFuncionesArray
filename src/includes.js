/*Un juego de búsqueda de tesoros necesita verificar si un tesoro está presente en un área
específica del mapa. Crea una función llamada verificarTesoro que verifique si el tesoro está
presente en una lista de áreas del mapa. La función debe recibir la lista de áreas y el tesoro a
buscar como parámetros, verificar si el tesoro está presente y luego mostrar si se encontró o
no.*/

require('colors')
const readline = require('readline-sync')

const areasDelMapa = [
    { ubicacion: "Playa", tesoro: "" },
    { ubicacion: "Selva", tesoro: "" },
    { ubicacion: "Mar", tesoro: "" },
    { ubicacion: "Montaña", tesoro: "" },
    { ubicacion: "Cueva", tesoro: "Tesoro 1" }
]

const encontrarUbicacionTesoro = (mapa, tesoroBuscado) => {
    const tesorosEnMapa = mapa.map(area => area.tesoro)
    const hayTesoro = tesorosEnMapa.includes(tesoroBuscado)

    if (hayTesoro) {
        const indiceTesoro = tesorosEnMapa.indexOf(tesoroBuscado)
        if (indiceTesoro !== -1) {
             const ubicacionTesoro = mapa[indiceTesoro].ubicacion
             return ubicacionTesoro
        } else {
             return null
        }
    } else {
        return null
    }
}


const nombresAreas = areasDelMapa.map(area => area.ubicacion)
console.log(`Las posibles áreas del mapa son: ${nombresAreas.join(', ').blue}`)

const tesoroObjetivo = "Tesoro 1"
const ubicacionRealTesoro = encontrarUbicacionTesoro(areasDelMapa, tesoroObjetivo)

if (ubicacionRealTesoro === null) {
    console.log(`El tesoro ${tesoroObjetivo} no se encontró en el mapa`.red)
} else {
     const respuestaUsuario = readline.question(`Ingrese la ubicacion donde cree que esta el ${tesoroObjetivo}: `.magenta);

     if (respuestaUsuario.toLowerCase() === ubicacionRealTesoro.toLowerCase()) {
          console.log(`***************************************************************************`.yellow)
          console.log(`¡Felicitaciones! Encontraste el ${tesoroObjetivo} en ${ubicacionRealTesoro}.`.green)
          console.log(`***************************************************************************`.yellow)
     } else {
          console.log(`***************************************************************************`.yellow)
          console.log(`Fallaste. En ${respuestaUsuario.blue} no estaba el tesoro.`.red)
          console.log(`La ubicación correcta era: ${ubicacionRealTesoro.green}`)
          console.log(`***************************************************************************`.yellow)
     }
}