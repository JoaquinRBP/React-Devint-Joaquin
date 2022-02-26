import React from 'react';
import {shallow, mount} from 'enzyme';
import {HeroScreen} from '../../../components/heroes/HeroScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router';
jest.mock('react-router',() => ({
    ...jest.requireActual('react-router'),
    useNavigate: ()=>jest.fn()
}));
const contextValue ={
    dispatch: jest.fn(),
    user:{
        logged:true,
        name: 'Joaquin'
    }
}
describe('Pruebas en HeroScreen', () => {
    
    test('Debe mostrarse correctamente', () => {
        const wrapper= shallow(
            <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen />
            </MemoryRouter>
            </AuthContext.Provider>
            
        )
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de mostrar un heroe según su url', () => {
        const wrapper= mount(
            <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                <Route path='/hero/:heroId/*' element={<HeroScreen />} />
                </Routes>
            </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(wrapper.find('.row').exists()).toBe(true);
    });
    //Test omitidos puesto que se usa useNavigate/un hook, en ves del history de la v5
    test('Debe de redireccionar si el hero no existe', () => {
        const wrapper= mount(
            <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/hero/marvel-spider123554']}>
                <Routes>
                <Route path='/hero/:heroId/*' element={<HeroScreen />} />
                </Routes>
            </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(wrapper.find('.row').exists()).toBe(false);
    })
    
})
