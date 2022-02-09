//asincronas
//resolve -> promesa exitosa
//reject -> promesa no cumplida
import { getHeroeById} from './bases/08-imp-exp';
// const promesa = new Promise( (resolve, reject)=>{
//     setTimeout(() => {
//         //Tarea: Importar getHeroeById()
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log('heroe', heroe);
// })
// .catch(err=> console.warn(err));

const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolve, reject)=>{
        setTimeout(() => {
            //Tarea: Importar getHeroeById()
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }
            else{
                reject('No se encontró el heroe')
            }
        }, 2000)
    });
}
getHeroeByIdAsync(1).then(console.log)
.catch(err=> console.warn(err));