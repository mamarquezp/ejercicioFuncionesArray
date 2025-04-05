/*Una aplicación de gestión de eventos necesita enviar un correo de confirmación
personalizado a cada asistente. Implementa una función llamada enviarCorreoConfirmacion
que envíe un correo de confirmación personalizado a cada asistente a un evento. La función
debe recibir la lista de asistentes y enviar un correo de confirmación a cada uno, luego
mostrar un mensaje de confirmación para cada asistente.*/

const listaDeAsistentes = [
    { nombre: "Ana Alvizures", email: "ana.alvi@example.com"},
    { nombre: "Brandon Bran", email: "brando.bran@example.com"},
    { nombre: "Carla Castro", email: "carla.cast@example.com"},
    { nombre: "Daniela Donis", email: "dani.donis@sample.com"}
]

require('colors')

const enviarCorreoConfirmacion = (asistentes) => {
    console.log(`**************Iniciando envío**************`)
    console.log("===========================================".cyan)

    asistentes.forEach(asistente => {
        const asunto = `Confirmación para evento`
        const mensaje = `Estimado/a ${asistente.nombre}, Confirmamos tu registro para el evento`
        console.log(`Enviando correo a: ${asistente.nombre.blue} <${asistente.email.grey}>`)
        console.log(`   Asunto: ${asunto}`)
        console.log(`   -> Correo para ${asistente.nombre} ENVIADO con éxito.`.green)
        console.log("******************************************")
    })

    console.log("==========================================".cyan)
    console.log(`Proceso finalizado. ${asistentes.length} correos enivados.`.cyan)
}

enviarCorreoConfirmacion(listaDeAsistentes)