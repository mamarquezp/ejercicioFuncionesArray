//El mismo colegio quiere saber cuántos estudiantes aprobaron. Usa la lista anterior y crea una
//función que devuelva la cantidad total de estudiantes aprobados.

const estudiantes = [
    { nombre: `Ana`, nota: 85 },
    { nombre: `Luis`, nota: 45 },
    { nombre: `Carla`, nota: 70 }
]

const estudiantesGanadores = estudiantes.reduce((contador, estudianteActual) => {
    return estudianteActual.nota >= 60 ? contador + 1 : contador
    /*if (estudianteActual.nota >= 60) {
        return contador + 1
    } else {
        return contador
    }*/
}, 0)
console.log(`Ganaron ${estudiantesGanadores} estudiantes`)