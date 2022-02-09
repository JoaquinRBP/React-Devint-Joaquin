//Funciones en JS
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

//transform func to flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre)=> `Hola ${nombre}`;
const saludar4 = () => `Hola Pussy Destroyer`;
//saludar = 30; //le caemos encima :v
console.log(saludar('Revisa'));
console.log(saludar2('Pussy Destroyer'));
console.log(saludar3('Revisa Pussy Destroyer'));
console.log(saludar4());

//info
const getUser= () => ({
        uid: 'AICBP123',
        username: 'El_PussyDestroyer123'
    }); //Los () sirven como return
console.log( getUser() );

//Tarea
//1. Transforma a =>
//2. Tiene que retornar implicito
//3. Pruebas
function getUsuarioActivo(nombre){
    return {
        uid: 'AICBP123',
        username: nombre
    }
};
const usuarioActivo = getUsuarioActivo('Joaquin');
console.log(usuarioActivo);

//Sol
const usuarioActual = (nombre) =>(
    {
        uid: 'AICBP123',
        username: nombre
    }
)
const usuarioTarea = usuarioActual('Revisa Pussy Destroyer');
console.log(usuarioTarea)