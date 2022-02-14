//objetos Literales = Diccionarios
//lo mejor es no usar caracteres especiales
//Los navegadores web terminan presentando las llaves alfabeticamente
const persona ={
    nombre: 'Joaquin',
    apellido: 'Bernabe',
    edad: 23,
    direccion: {
        ciudad: 'Puente Piedra',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321,
    }
};
//Con  {} creamos una propiedad llamada persona cuyo valor apunta a persona
//console.log({persona}); //igual a lo de abajo
console.log({
    persona: persona
});
//const arzapalo = persona; //estamos copiando la referencia del espacio en memoria. Se debe hacer uno nuevo
//Creamos un clone de un objeto con
const arzapalo = {...persona}; 
//ejemp.
arzapalo.nombre='Revisa';
arzapalo.apellido='Pussy Destroyer';
//también puede usarse para mostrar
console.table(arzapalo);

