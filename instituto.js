require('colors');

const alumno = {
    nombre: "Alumno",
    edad: 15,
    inscriptoAMaterias: ["algebra", "algoritmos", "economia"],
    debeCorrelativa : true
}

const validarCorrelativas = (alumno) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            if (alumno.debeCorrelativa === false){
            resolve("el alumno no debe correlativas".green);
        }else{
            reject("el alumno debe correlativas".red);
        }
        }, 2000)
    })
    
}

const inscribirAMaterias = (alumno, materia) => {
    return new Promise(resolve => {
        setTimeout(() => {
            alumno.inscriptoAMaterias.push(materia)
            resolve("Inscripcion realizada con exito".green);
        }, 5000)
    })
}

module.exports = {validarCorrelativas, inscribirAMaterias, alumno}