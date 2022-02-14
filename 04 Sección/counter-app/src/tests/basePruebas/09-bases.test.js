import '@testing-library/jest-dom';
import {getHeroeByIdAsync} from '../../base/09-bases';
import heroes from '../../data/heroes';
describe('Pruebas con promesas',()=>{
    test('getHeroeByIdAsync debe devolver una promesa',()=>{
        const id=1;
        // getHeroeByIdAsync(id).then(heroe=>{
        //     expect(heroe).toBe(heroes[0])
        // done()
        // })
    });

    test('debe de obtener un error', ()=>{
        const id=25;
        // getHeroeByIdAsync(id)
            // .catch(err=>{
            //     expect(err).toBe('No se encontró el heroe!!');
            //     done();
            // })
    });
})