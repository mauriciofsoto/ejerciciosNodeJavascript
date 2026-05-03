require('colors');

const validarSaldo = (saldo, monto) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if (saldo >= monto){
                resolve("saldo suficiente, puede continuar".green);
            }else{
                reject("Saldo insuficiente".red);
            }
        }, 5000)
    })
};

const realizarTransferencia = (transferencia) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve("Transferencia realizada con exito".green)
        }, 10000)
    })
}

 module.exports = {validarSaldo, realizarTransferencia};