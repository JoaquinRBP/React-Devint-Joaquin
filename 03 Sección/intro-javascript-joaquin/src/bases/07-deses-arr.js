const personajes = ['cesar','kennedy','me aburro'];
//Aburrido
// console.log(personajes[0])
// console.log(personajes[1])
// console.log(personajes[2])
//usar el clasico F2 para renombrar
const [personaje1]=personajes;
console.log(personaje1);
//obtenemos el 3er personaje
const [,,personaje3]=personajes;
console.log(personaje3);

const retornaArreglo = ()=>{
    return ['ABC',123];
};
const [letras, numeros]= retornaArreglo();
console.log(letras,numeros);

//Tarea
//1. El primer valor del arr se llamará nombre
//2. El 2do se llamara setNombre
const usaEstado = (valor)=>{
    return [valor, ()=>{ console.log('Revisa Pussy Destroyer')}]
};
const arr = usaEstado('Me Aburro');
console.log(arr);

const [nombre,setNombre]=arr;
setNombre();
console.log(nombre)