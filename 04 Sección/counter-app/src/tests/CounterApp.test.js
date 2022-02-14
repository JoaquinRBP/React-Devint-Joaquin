import {render} from '@testing-library/react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';
describe('Pruebas en Counter',()=>{
    let wrapper = shallow(<CounterApp />);
    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    })
    test('Debe de moster Counterapp correctamente',()=>{
        //expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar el valor por defecto 100',()=>{
        //const wrapper = shallow(<CounterApp value={100}/>);
        //const textoParrafo = wrapper.find('h2').text().trim();
        //expect(textoParrafo).toBe('100')
    });
    test('Debe de aumentar +1',()=>{
        wrapper.find('button').at(0).simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();
        expect(textoParrafo).toBe('11')
    });
    test('Debe de disminuir -1',()=>{
        wrapper.find('button').at(2).simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();
        expect(textoParrafo).toBe('9')
    });
    test('Debe de reseteart',()=>{
        const wrapper = shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const reset = wrapper.find('h2').text().trim();
        expect(reset).toBe('105')
    })
})