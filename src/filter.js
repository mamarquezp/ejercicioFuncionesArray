//Un colegio quiere conocer cuáles estudiantes aprobaron una materia. Crea una función que
//reciba una lista de estudiantes con sus notas, y devuelva un nuevo arreglo con los
//estudiantes cuya nota sea mayor o igual a 60. [ { nombre: "Ana", nota: 85 }, { nombre: "Luis", nota: 45 }, { nombre: "Carla", nota: 70 }]

const estudiantes = [
    {nombre: `Ana`, nota: 85},
    {nombre: `Luis`, nota: 45},
    {nombre: `Carla`, nota: 70}
    ]
    
    const estudiantesGanadores = estudiantes.filter((estudiantes) => estudiantes.nota >= 60)
    
    console.log(estudiantesGanadores)