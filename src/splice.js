/*Un sistema de gestión de empleados necesita agregar, eliminar y reemplazar empleados en
una lista. Escribe una función llamada gestionarEmpleados que agregue un nuevo
empleado, elimine al segundo empleado y reemplace al tercero por un nuevo empleado en
una lista de empleados. La función debe recibir la lista de empleados como parámetro,
realizar las operaciones mencionadas y luego mostrar la lista actualizada.*/

require('colors')
const listaDeEmpleados = [`Luis`, `David`, `Julia`, `Lucia`]

const gestionarEmpleados = (lista) => {
    console.log(`**********************************************************`)
    lista.splice(lista.length, 1, "Mike")
    console.log(`**Nuevo empleado añadido: ` + `${lista}`.green)
    console.log(`**********************************************************`)
    listaDeEmpleados.splice(1, 1)
    console.log(`**Segundo empleado borrado: ` + `${lista}`.red)
    console.log(`**********************************************************`)
    listaDeEmpleados.splice(2, 1, "Jonathan")
    console.log(`**Tercer empleado reemplazado: ` + `${lista}`.cyan)
    console.log(`**********************************************************`)
    return lista
}

console.log(`Listado de empleados actuales: ` + `${listaDeEmpleados}`.blue)
console.log(`La nueva lista es: ` + `${gestionarEmpleados(listaDeEmpleados)}`.magenta)