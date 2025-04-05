/*Una plataforma de cursos en línea quiere verificar si al menos un curso tiene un precio de
descuento. Escribe una función llamada verificarDescuento que determine si al menos uno
de los cursos en una lista tiene un precio de descuento. La función debe recibir la lista de
cursos como parámetro, verificar si hay algún curso con descuento y luego mostrar el
resultado.*/

require('colors')

const listaDeCursos = [
    { nombreCurso: "Curso JS Principiantes", precioOriginal: 50, precioActual: 50 },
    { nombreCurso: "Curso JS Avanzados", precioOriginal: 100, precioActual: 75 },
    { nombreCurso: "Curso Node.js", precioOriginal: 80, precioActual: 80 },
    { nombreCurso: "Curso GIT y GitHub", precioOriginal: 60, precioActual: 40 }
]

const verificarDescuento = (cursos) => {
    console.log("Buscando descuentos en los cursos...".yellow)

    const hayAlgunDescuento = cursos.some(curso => {
        const tieneDescuento = curso.precioActual < curso.precioOriginal
        return tieneDescuento
    })

    if (hayAlgunDescuento) {
        console.log("Resultado: ¡Sí! Se encontraron cursos con descuento.".green)
        console.log("------------------------------------------".cyan)
        console.log("Cursos en oferta:".cyan)
        const cursosConDescuento = cursos.filter(curso => {
            const tieneDescuento = curso.precioActual < curso.precioOriginal
            return tieneDescuento
        })
        cursosConDescuento.forEach(curso => {
            console.log(
                ` -> ${curso.nombreCurso.blue}: ${('Q' + curso.precioOriginal.toFixed(2)).red} AHORA ${('Q' + curso.precioActual.toFixed(2)).green}`
            )
        })
        console.log("------------------------------------------".cyan)
        return true
    } else {
        console.log("Resultado: No, ningún curso tiene precio de descuento actualmente.".red)
        return false
    }
}

verificarDescuento(listaDeCursos)