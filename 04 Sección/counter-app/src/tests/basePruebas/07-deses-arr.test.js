import '@testing-library/jest-dom';
import {retornaArreglo} from '../../base/07-deses-arr';
describe('Pruebas en deses',()=>{
    test('Debe de devolver un string y un numero', ()=>{
        
        const [letras, numero] = retornaArreglo();
        //const arr=retornaArreglo();
        //expect(arr).toEqual(['ABC',123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string')
        expect(numero).toBe()
        expect(typeof numero).toBe('number');
    })
})