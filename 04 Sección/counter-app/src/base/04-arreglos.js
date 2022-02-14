//Arreglos en JS

//const arreglo = new Array(100); //Se crea un arreglo literal
//Solo se usa cuando usamos un tamaño fijo, aunque asi se puede expandir más
const arreglo=[1,2,3,4];
//arreglo.push(1) //No es recomendable ya que modifica el arreglo principal

//let arreglo2=arreglo;//Se hace una copia de la referencia
let arreglo2=[...arreglo,5]
// ... = Operador Spread

//map() espera una funcion, devuelve los resultados de la función aplicando a cada elemento del arreglo
const arreglo3 = arreglo2.map( function(numero){
    return 'Hola Pussy Destroyer';
})

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)