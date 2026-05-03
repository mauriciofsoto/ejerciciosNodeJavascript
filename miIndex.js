const {validarSaldo, realizarTransferencia} = require("./cuentaBancaria");
const {validarCorrelativas, inscribirAMaterias, alumno} = require("./instituto");

validarSaldo(20000, 27800)
    .then((respuesta) => {
        console.log(respuesta);
        return realizarTransferencia(respuesta);
    })
        .then((respuesta) => {
            console.log(respuesta)
        })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                console.log("proceso finalizado")
            })

validarCorrelativas(alumno)
    .then((respuesta) => {
        console.log(respuesta);
        return inscribirAMaterias(alumno, "ingles");
    })
        .then((respuesta) => {
            console.log(respuesta)
        })
            .catch((error) => {
                console.log(error)
            })
                .finally(() =>{
                    console.log("proceso finalizado")
                })