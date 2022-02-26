import {AuthContext} from '../../auth/AuthContext';
import {DashboardRoutes} from '../../routers/DashboardRoutes';
import React from 'react';
import {shallow, mount} from 'enzyme';
import { MemoryRouter } from 'react-router';
jest.mock('react-router',() => ({
    ...jest.requireActual('react-router'),
    useNavigate: ()=> jest.fn()
}));
describe('Prueba en DashboardRoutes', () => {
    const contextValue ={
        dispatch: jest.fn(),
        user:{
            logged:true,
            name: 'Joaquin'
        }
    }
    test('Debe mostrarse correctamente', () => {
        const wrapper = mount(
            <MemoryRouter>
            <AuthContext.Provider value={contextValue}>
                <DashboardRoutes />
            </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Joaquin');
    })
    
})
