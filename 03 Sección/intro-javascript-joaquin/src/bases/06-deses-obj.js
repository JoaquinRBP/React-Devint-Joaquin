//Desestructuración
//Asignación Desestructurante

const persona = {
    nombre: 'Joaquin',
    edad: 23,
    clave: 'Bernabe',
    rango: 'KOG'
};
//Renombrando
//const {nombre:nombre2}= persona;
const {nombre, edad}=persona;
console.log(nombre, edad)
// console.log(persona.edad)
// console.log(persona.clave)

//Usos
//Desestructuración (valores default)
const Avenger = ({nombre, edad,clave, rango ='Revisa Pussy Destroyer'})=>{
    //console.log(nombre, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232
        }
    }
};
const avenger = Avenger( persona );
//Destructuramos lo desestructurado
const {nombreClave, anios, latlng: {lat, lng}}=avenger;
console.log(nombreClave,anios, lat,lng);