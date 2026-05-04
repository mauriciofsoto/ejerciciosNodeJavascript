const {validarSaldo, realizarTransferencia} = require("./cuentaBancaria");
const {validarCorrelativas, inscribirAMaterias, alumno} = require("./instituto");
const {validarStock, realizarVenta, imprimirEtiqueta, productos} = require("./mercadoRestringido")

// Ejercicio 1
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


//ejercicio 2
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

// Ejercicio 3
validarStock("mesa", productos)
                .then((respuesta) =>{
                    console.log(respuesta);
                    return realizarVenta(respuesta)
                })
                    .then((respuesta) =>{
                        console.log(respuesta);
                        return imprimirEtiqueta(respuesta)
                    })
                        .then((respuesta) =>{
                            console.log(respuesta);
                        })
                            .catch((error) =>{
                                console.log(error);
                            })
                                .finally(() =>{
                                    console.log("Proceso finalizado");
                                })