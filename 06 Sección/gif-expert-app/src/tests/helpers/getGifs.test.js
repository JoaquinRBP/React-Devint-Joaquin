import React from 'react';
import { shallow } from 'enzyme';
import { getGifs } from '../../helpers/getGifs';
describe('Pruebas con getGifs fetch',()=>{
    test('debe de traer 10 elementos',async ()=>{
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });
    test('no debe traer nada con arreglo vacio',async ()=>{
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
    
})