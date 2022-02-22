import React from 'react';
import {shallow} from 'enzyme';
import {MultipleCustomHooks} from '../../../components/03-Examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import {useCounter} from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
// jest.mock('../../../hooks/useCounter');
describe('Pruebas sobre MultipleCustomHooks',()=>{
    // useCounter.mockReturnValue({
    //     counter: 10,
    //     increment: () => {}
    // });
    test('debe de mostrarse correctamente',()=>{
        useFetch.mockReturnValue({
            data:null,
            loading:false,
            error:null
        })
        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar la información', () => {
        useFetch.mockReturnValue({
            data:[{
                author:'Joaquin',
                quote: 'Hola Pussy Destroyer'
            }],
            loading:false,
            error:null
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Pussy Destroyer');
        expect(wrapper.find('footer').text().trim()).toBe('Joaquin');
    });
    
})