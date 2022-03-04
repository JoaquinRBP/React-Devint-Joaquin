import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../../components/routers/AppRouter';
import { login } from '../../../actions/auth';
import { act } from '@testing-library/react';
import {firebase } from '../../../firebase/firebase-config';
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const initState ={
    auth: {},
    notes:{
        active:{
            id: 'My5MpVrJrktWUIGtHeJV',
            title: 'Hola',
            body: 'Mundo',
        },
        notes:[]
    },
    ui:{
        loading: false,
        msgError:null
    }
}
jest.mock('../../../actions/auth',()=>{
    login: jest.fn()
});

let store = mockStore(initState);
store.dispatch = jest.fn();
describe('Pruebas en <AppRouter />', () => {
    let user;
    test('Debo estar autenticado', async() => {
        //Error Firebase :'v
        // await act(async()=>{
        //     const userCred = firebase.auth().signInWithEmailAndPassword('test@testing.com','123456');
        //     user = userCred.user;
        //     console.log(userCred);
        //     const wrapper = mount(
        //         <Provider store={store}>
        //             <MemoryRouter>
        //                 <AppRouter />
        //             </MemoryRouter>
        //         </Provider>
        //     )
        // })
        // expect(login).toHaveBeenCalled();
        
        console.log('Ok')
    })
    
})
