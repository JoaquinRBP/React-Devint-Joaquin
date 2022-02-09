//Variables
const nombre = 'Joaquin';
console.log('Hola mundo');
const apellido='Bernabe';

let valorDado =5;
//let valorDado=4; //Error
valorDado=4;
//var No se debe usar
if(true){
    const nombre = 'Rodolfo';
    let valorDado = 6;
    //Se permite por que es variable de scope?
    console.log(valorDado);
    console.log(nombre);
}

console.log(nombre,apellido,valorDado)