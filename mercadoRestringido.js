const mesa = {
    id: 1,
    nombreProducto: "silla",
    precio: 8000,
    stock : 5
}
const silla = {
    id: 2,
    nombreProducto: "mesa",
    precio: 5000,
    stock : 12
}
const aspiradora = {
    id: 3,
    nombreProducto: "aspiradora",
    precio: 8000,
    stock : 0
}
const cocina = {
    id: 4,
    nombreProducto: "cocina",
    precio: 45000,
    stock : 2
}
const heladera = {
    id: 5,
    nombreProducto: "heladera",
    precio: 50000,
    stock : 0
}

let productos = [mesa, silla, aspiradora, cocina, heladera];

const validarStock = (nombreProducto, productos) => {
    return new Promise ((resolve, reject) =>{
        const producto = productos.find((p) => p.nombreProducto === nombreProducto);
        setTimeout(() => {
            if(producto){
            if(producto.stock > 0){
                resolve(producto);
            }else{
                reject("No hay stock disponible".red);
            }
        }else{
            reject("No se vende ese producto".red);
        }
        }, 2000)
    })
}

const realizarVenta = (producto) => {
    return new Promise (resolve => {
        setTimeout(() => {
            producto.stock--
            resolve(producto)
        }, 1000)
    })
}

const imprimirEtiqueta = (producto) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(producto.nombreProducto)
        }, 4000)
        })
}

module.exports = {validarStock, realizarVenta, imprimirEtiqueta, productos}