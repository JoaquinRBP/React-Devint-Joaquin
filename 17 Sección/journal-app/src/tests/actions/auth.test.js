import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, Logout, startLoginEmailPassword, startLogout } from "../../actions/auth";
import { types } from "../../types/types";
import '@testing-library/jest-dom'
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const initState ={
    auth: {
        uid: 'TESTING'
    },
    notes:{
        active:{
            id: 'My5MpVrJrktWUIGtHeJV',
            title: 'Hola',
            body: 'Mundo'
        }
    }
};
let store = mockStore(initState);
describe('Pruebas con las aciones de auth', () => {
    beforeEach(() => {
        store = mockStore(initState);
    })
    test('Login y logout debe de crear la accion respectiva', () => {
        const uid = 'ABC';
        const displayName = 'Joaquin'
        const loginAction = login(uid, displayName);
        const logout = Logout();
        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });
        expect(logout).toEqual({
            type: types.logout,
        })
    });
    //  @firebase/auth: Auth (9.6.7): INTERNAL ASSERTION FAILED: Expected a class definition
    // test('Debe de realizar un Logout', async() => {
    //     await store.dispatch(startLogout());
    //     const actions = store.getActions();
    //     expect(actions[0]).toEqual({
    //         type:types.logout
    //     })
    //     expect(actions[1]).toEqual({
    //         type: types.notesLogoutCleaning
    //     });
    // })
    // test('debe de iniciar el startLoginEmailPassword', async() => {
    //     await store.dispatch(startLoginEmailPassword('test@testing.com','123456'));
    //     const actions = store.getActions();
    //     console.log(actions);
    //     expect(actions[1]).toEqual({
    //         type: types.login,
    //         payload: {
    //             uid: 'QlFMbS6kh0ggtBORE01tAsyqKKZ2',
    //             displayName: null
    //         }
    //     });
    // })
    
    
})
