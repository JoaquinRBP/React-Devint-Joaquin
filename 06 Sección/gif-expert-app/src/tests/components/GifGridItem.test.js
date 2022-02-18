import React from 'react';
import { shallow } from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';
describe('Pruebas sobre <GifGridItem />',()=>{
    const title = 'Pruebas sobre';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem url={url} title={title}/>);
    test('Pruebas sobre <GifGridItem />',()=>{
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de tener un parrafo con el title',()=>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    test('debe de tener la imagen igual al url',()=>{
        const img = wrapper.find('img');
        //expect(img.props().src).toBe(url);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    test('debe tener animate__fadeIn',()=>{
        const div = wrapper.find('div');
        const className=div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
})