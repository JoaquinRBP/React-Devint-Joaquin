import React from 'react';
import { shallow } from 'enzyme';
import {HookApp} from '../HookApp';
describe('Pruebas sobre HookApp', () =>{
    test('Correctamente ejecutado', () =>{
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })
})