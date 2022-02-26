import {authReducer} from '../../auth/authReducer';
import { types } from '../../types/types';
describe('Debe de retornar el estado por defecto',() => {
    test('Debe de retornar el estado por defecto',() => {
        const state = authReducer({logged: false},{});
        expect(state).toEqual({logged: false});
    });
    test('debe de autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Joaquin'
            }
        }
        const state = authReducer({logged: false},action);
        expect(state).toEqual({logged: true, name: 'Joaquin'});
    });
    test('debe de deslogearse y borrar el usuario',() => {
        const action = {
            type: types.logout,
        }
        const state = authReducer({logged: true, name:'Joaquin'},action);
        expect(state).toEqual({logged:false})
    })
    
    
});