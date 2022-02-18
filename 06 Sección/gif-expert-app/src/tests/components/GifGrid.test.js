import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import {useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
describe('Pruebas sobre GifGrid',()=>{
    const category = 'Pruebitas';
    useFetchGifs.mockReturnValue({
        data: [],
        loading: true
    });//regresar el valor asignado
    const wrapper = shallow(<GifGrid category={category} />);
    test('GifGrid snapshoot',()=>{
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar items cuando se cargan imagenes',()=>{
        const gifs = [{
            id:'ABC',
            url:'https://localhost/cualquier/cosa.jpg',
            title:'Cualquier cosa'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });//regresar el valor asignado
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(1);
    })
});