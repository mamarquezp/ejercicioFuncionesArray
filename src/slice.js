/*Una aplicación de edición de imágenes necesita recortar una parte específica de una foto.
Implementa una función llamada recortarImagen que recorte una sección rectangular de
una imagen representada como una matriz. La función debe recibir la matriz de la imagen y
las coordenadas del área a recortar, recortar la sección correspondiente y luego mostrar la
sección recortada.*/

require('colours')

const arrayFoto = [
    [0,1,0,1],
    [0,1,1,1],
    [1,1,0,0],
    [1,1,1,0]
]

const recortarImagen = (array,filaInicio,filaFin,columnaInicio,columnaFin) => {
    const filaSeleccionada = array.slice(filaInicio,filaFin)    
    const recortarColumnas = filaSeleccionada.map(filaActual => {
        return filaActual.slice(columnaInicio,columnaFin)
    })
    return recortarColumnas
}
console.log(`******* Imagen Original *******`)
console.log(arrayFoto.map(fila => fila.join(` `)).join('\n').blue)
console.log(`******* Imagen Recortada*******`)
console.log(recortarImagen(arrayFoto,0,3,1,3).map(fila => fila.join(` `)).join('\n').cyan)
console.log(`*******************************`)