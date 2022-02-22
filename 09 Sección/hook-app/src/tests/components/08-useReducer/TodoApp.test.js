import { act } from '@testing-library/react';
import { mount, shallow} from 'enzyme';
import React from 'react';
import {demoTodos} from '../../fixtures/demoTodos';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
describe('Pruebas sobre TodoApp', () => {
    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn();
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de agregar un TODO',()=>{
        const wrapper = mount(<TodoApp />); //Engloba mas que shallow
        act(()=>{
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1]);
        });
        expect(wrapper.find('h1').first().text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });
    test('debe de eliminar un TODO ', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
    })
    

})
