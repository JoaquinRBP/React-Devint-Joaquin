import '@testing-library/jest-dom';
import {getUser, getUsuarioActivo} from '../../base/05-funciones';
describe('Pruebas en Funciones', ()=>{
    test('Debe de retornar un objeto',()=>{
        const usuario = {
            uid: 123,
            username: 'El_PussyDestroyer123'
        }
        const user = getUser(usuario);
        expect(user).toEqual(usuario)
    })

    test('Debe de retornar lo mismo',()=>{
        const nombre = 'Pussy Destroyer';
        const user = getUsuarioActivo(nombre);
        expect(user).toEqual({
            uid: 'AICBP123',
            username: nombre
        })

    })
})