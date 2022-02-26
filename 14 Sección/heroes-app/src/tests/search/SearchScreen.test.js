import React from 'react';
import {mount} from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router';
import {SearchScreen} from '../../components/search/SearchScreen';
import {AuthContext} from '../../auth/AuthContext';
jest.mock('react-router',() => ({
    ...jest.requireActual('react-router'),
    useNavigate: ()=> jest.fn()
}));
describe('Pruebas en Search', () => {
    test('Debe de mostrarse correctamente', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Routes>
                <Route path="/search" element={<SearchScreen />}/>
                </Routes>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a Hero')
    });
    test('Debe de mostrar a batman', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Routes>
                <Route path="/search" element={<SearchScreen />}/>
                </Routes>
            </MemoryRouter>
        );
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de mostrar un error si no hay hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Routes>
                <Route path="/search" element={<SearchScreen />}/>
                </Routes>
            </MemoryRouter>
        );
        expect(wrapper.find('.alert-danger').text().trim()).toBe('There is no a Hero with batman123 in the list');
    });
    test('Simular un cambio en input', () => {
        //Codigo distinto ya que se usó useNavigate,useLocation y useParams en el proyecto en ves de history
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Routes>
                <Route path="/search" element={<SearchScreen />}/>
                </Routes>
            </MemoryRouter>
        );
        wrapper.find('input').simulate('change',{
            target:{
                name: 'SearchText',
                value: 'batman'
            }
        })
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
        expect(wrapper).toMatchSnapshot();
    })
    
    
})
