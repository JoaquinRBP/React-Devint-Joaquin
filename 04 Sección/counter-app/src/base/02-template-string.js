//console.log('Hola Mundo');
const nombre = 'Joaquin';
const apellido = 'Bernabe';
//`` - back
//Concatenaciones
//const nombreCompleto = nombre + ' '+apellido;
//const nombreCompleto = ` Hola Mundo `;
//esto sería igual a ' Hola Mundo '
//TEMPLATE String - Permite saltos de linea facilente, expresiones de JS
const nombreCompleto = `${nombre} ${apellido}`;
//console.log(nombreCompleto)


export function getSaludo(nombre = "carlos "){
    return `Hola ${nombre}`
}
const arzapalo = 'Pussy Destroyer'
//console.log(`Este es un texto: ${getSaludo(arzapalo)}`);