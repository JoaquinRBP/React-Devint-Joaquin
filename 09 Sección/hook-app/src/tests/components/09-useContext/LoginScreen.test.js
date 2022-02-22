import React from 'react';
import {UserContext} from '../../../components/09-useContext/UserContext';
import {LoginScreen} from '../../../components/09-useContext/LoginScreen';
import { mount } from 'enzyme';
describe('Pruebas sobre el LoginScreen', () => {
    const setuser = jest.fn();
    const wrapper = mount(
    <UserContext.Provider value={{setuser}}>
        <LoginScreen />
    </UserContext.Provider>);
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de ejecutar el setUser con el argumento esperado', () => {
        wrapper.find('button').prop('onClick')();
        expect(setuser).toHaveBeenCalledWith({
            id:8,
            password: '123456',
            username: 'Joaquin'
        });   
    });
})
