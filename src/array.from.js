/*Un juego de adivinanzas necesita convertir la respuesta del jugador en un arreglo de letras
para validarla. Escribe una función llamada convertirRespuestaEnArreglo que convierta la
respuesta del jugador (una cadena de texto) en un arreglo de letras. La función debe recibir
la respuesta como parámetro, convertirla en un arreglo de letras y luego validar si contiene
las letras correctas.*/

require('colors')
const readline = require('readline-sync')

const convertirRespuestaEnArreglo = (arreglo) => {
    return Array.from(arreglo)
}

const revisarRespuesta = (arreglo1, arreglo2) => {
if (arreglo1.length !== arreglo2.length) {
    return false
}
for (let i=0; i<arreglo1.length; i++){
    if (arreglo1[i]!==arreglo2[i]){
        return false
    }
}
return true
}

const adivinanza = readline.question(`Ingrese la adivinanza: `.magenta)
const respuestaCorrecta = readline.question(`Ingrese la respuesta correcta a la adivinanza: `.magenta)
const respuestaCorrectaArray = convertirRespuestaEnArreglo(respuestaCorrecta.toLowerCase())

console.clear()
console.log(adivinanza.blue)
console.log(`*****************************************************`)
const respuestaUsuario = readline.question(`Ingresa la respuesta: `.magenta)
const respuestaUsuarioArray = convertirRespuestaEnArreglo(respuestaUsuario.toLowerCase())
if (revisarRespuesta(respuestaCorrectaArray,respuestaUsuarioArray)) {
    console.log(`**************************************************`)
    console.log(`Felicitaciones! `.green + `${respuestaUsuario}`. blue + ` es la respuesta correcta.`.green)
    console.log(`**************************************************`)
} else {
    console.log(`**************************************************`)
    console.log(`Fallaste! `.red + `${respuestaUsuario}`. blue + ` no es la respuesta correcta.`.red)
    console.log(`**************************************************`)
}