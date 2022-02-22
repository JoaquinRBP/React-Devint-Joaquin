import { mount, shallow } from 'enzyme';
import React from 'react';
import {HomeScreen} from '../../../components/09-useContext/HomeScreen';
import {UserContext} from '../../../components/09-useContext/UserContext';
describe('Pruebas sobre HomeScreen', () => {
    const user = {
        name: 'Joaquin',
        email: 'joaquin@gmail.com'
    }
    const wrapper = mount(
    <UserContext.Provider
        value={user}
    >
        <HomeScreen/>
    </UserContext.Provider>);
    test('Debereia mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
