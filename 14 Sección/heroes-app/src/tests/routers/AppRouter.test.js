import {AppRouter} from '../../routers/AppRouter';
import {mount, shallow} from 'enzyme';
import React from 'react';
import {AuthContext} from '../../auth/AuthContext';
const contextValue ={
    dispatch: jest.fn(),
    user:{
        logged:false
    }
}
describe('Pruebas en AppRouter', () => {
    test('Debe de mostrar el login si no está autenticado', () => {
        const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <AppRouter />
        </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de mostrar el componente marvel si está autenticado', () => {
        const contextValue ={
            dispatch: jest.fn(),
            user:{
                logged:true
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )
        expect(wrapper.find('.navbar').exists()).toBe(true);
    })
    
    
})
