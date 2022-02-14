import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';
describe('Pruebas en 02-template-string.test.js', () => {

    // test('getSaludo debe de retornar Hola Joaquin', () => {
    //     const nombre = 'Joaquin';
    //     const saludo = getSaludo(nombre);
    //     expect(saludo).toBe('Hola ' + nombre);
    // });
    test('getSaludo debe de retornar Hola carlos si no hay argumentos', ()=>{
        const saludo = getSaludo();
        expect(saludo).toBe('Hola carlos');
    })
})