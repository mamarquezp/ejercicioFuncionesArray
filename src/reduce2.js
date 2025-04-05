/*Un sistema de mensajes guarda las palabras de una oración en una lista. Crea una función
que reciba esa lista de palabras y las una en una sola frase.
["Hola","mundo","esto","es","JS"]*/
require ('colors')

const readline = require ('readline-sync')
const frase = readline.question ("Ingrese una frase: ")

const fraseArray = frase.split(' ')

console.log (`Array de palabras separadas: `+`${fraseArray}`.green)

const fraseUnificada = fraseArray.reduce((unificador,palabraActual) =>{
return unificador ==="" ? palabraActual : unificador + " " + palabraActual
},"")


console.log (`Frase reunificada con la función reduce: ` + `${fraseUnificada}`.blue)