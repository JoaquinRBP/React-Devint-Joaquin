import {authReducer} from '../../reducers/authReducer';
import { types } from '../../types/types';
describe('Pruebas en auth Reducer', () => {
    test('Debe de realizar el login', () => {
        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Joaquin' 
            }
        }
        const state = authReducer(initState, action);
        expect(state).toEqual({
            uid:'abc',
            name: 'Joaquin'
        });
    });
    test('Debe de realizar el logout', () => {
        const initState = {};
        const action = {
            type: types.logout,
        }
        const state = authReducer(initState, action);
        expect(state).toEqual({});
    });
    test('no debe hacer cambios', () => {
        const initState = {
            uid: 'abcasdjab',
            displayName: 'Joaquin'
        };
        const action = {
            type: 'asdkafan',
        }
        const state = authReducer(initState, action);
        expect(state).toEqual(initState);
    });
    
})
