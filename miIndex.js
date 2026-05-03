const {validarSaldo, realizarTransferencia} = require("./cuentaBancaria")

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