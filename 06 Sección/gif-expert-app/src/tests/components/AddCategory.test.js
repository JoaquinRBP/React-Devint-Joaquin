import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';
describe('Pruebas sobre el AddCategory', ()=> {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    beforeEach(()=>{
        jest.clearAllMocks();//Si se tiene una simulación, se limpia
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })
    test('debe de mostrarse correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de cambiar el input',()=>{
        const input = wrapper.find('input');
        const value ='Hola mundo';
        input.simulate('change',{target: {value: value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    test('No debe de recargar',()=>{
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });
    test('debe de llamar el setCategories y limpiar la caja de texto',()=>{
        const value= 'Hola mundo';
        wrapper.find('input').simulate('change',{target: {value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
        expect(wrapper.find('input').prop('value')).toBe('');

    })
})