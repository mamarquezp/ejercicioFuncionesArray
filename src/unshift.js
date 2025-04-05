/*Una lista de tareas pendientes necesita priorizar una nueva tarea importante. Crea una
función llamada priorizarTarea que añada una tarea importante al principio de la lista de
tareas pendientes. La función debe recibir el nombre de la tarea como parámetro, agregarla
al principio de la lista y luego mostrar la lista actualizada.*/

require('colors')
const readline = require('readline-sync')
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()

let tareas = []

const agregarTarea = (nombre) => {
    tareas.push({Tarea: nombre, Prioridad: 3})
    console.log(`Tareas actualizadas`.green)
    console.log(`********** Listado de Tareas por Prioridad **********`.blue)
    console.log(tareas)
    console.log(`*****************************************************`.blue)
}

const agregarTareaPrioritaria = (nombre) => {
    tareas.unshift({Tarea: nombre, Prioridad: 1})
    console.log(`Tareas actualizadas`.green)
    console.log(`********** Listado de Tareas por Prioridad **********`.blue)
    console.log(tareas)
    console.log(`*****************************************************`.blue)

}


async function gestionDeTareas(){
let controlBucleTareas = true
let controlPrioridad = false
do {

    const nombreTarea = readline.question("Ingrese el nombre de la tarea: ")
    const respuestaPrioridad = await prompt([{
        type: 'list',
        name: 'opt',
        message: 'Es una tarea urgente?',
        choices: ['Si', 'No']
    }])

    controlPrioridad = respuestaPrioridad.opt.toLowerCase() === 'si'

    controlPrioridad ? agregarTareaPrioritaria(nombreTarea) : agregarTarea(nombreTarea)

    const nuevaTarea = await prompt([{
        type: 'list',
        name: 'opt',
        message: 'Desea ingresar otra tarea?',
        choices: ['Si', 'No']
    }])

    controlBucleTareas = nuevaTarea.opt.toLowerCase() === 'si'

} while (controlBucleTareas)
}

gestionDeTareas()
