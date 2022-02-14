import '@testing-library/jest-dom';
import {getImagen} from '../../base/11-async-await';

describe('Pruebas con async-await',()=>{
    test('Debe de retornar el url', async ()=>{
        const url = await getImagen();
        expect(typeof url).include('https://').toBe(true);
    })
})