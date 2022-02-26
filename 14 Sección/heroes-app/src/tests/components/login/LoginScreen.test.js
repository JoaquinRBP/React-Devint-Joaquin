import React from 'react';
import {shallow,mount} from 'enzyme';
import {AuthContext} from '../../../auth/AuthContext';
import {LoginScreen} from '../../../components/login/LoginScreen';
import { MemoryRouter } from 'react-router';
import { types } from '../../../types/types';
jest.mock('react-router',() => ({
    ...jest.requireActual('react-router'),
    useNavigate: ()=>jest.fn()
}));
const contextValue ={
    dispatch: jest.fn(),
    user:{
        logged:false,
    }
}
describe('Pruebas en LoginScreen', () => {
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <LoginScreen />
            </MemoryRouter>
        </AuthContext.Provider>
    )
    test('Debe de cargarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Verifica el login', () => {
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload:{
                name:'Joaquin'
            }
        })
    })
    
    
})
