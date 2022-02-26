import React from 'react';
import {PrivateRoute} from '../../routers/PrivateRoute';
import {mount, shallow} from 'enzyme';
import { MemoryRouter } from 'react-router';
import {AuthContext} from '../../auth/AuthContext';
jest.mock('react-router',() => ({
    ...jest.requireActual('react-router'),
    useLocation: ()=>({
        pathname: '/test/private/route'
    })
}));
const contextValue ={
    dispatch: jest.fn(),
    user:{
        logged:true
    }
}
describe('Pruebas en PrivateRoute',()=>{
    Storage.prototype.setItem = jest.fn();
    test('Debe de renderizar el componente DashboardRoutes si esta autenticado y ver el localstorage',()=>{
        const wrapper = mount(
            <MemoryRouter>
            <AuthContext.Provider value={contextValue}>
            <PrivateRoute
            isAuthenticated={true}/>
            </AuthContext.Provider>
            </MemoryRouter>
        );
        //Prueba diferente ya que el curso usa React-router-dom v5 y no v6, se usó un metodo diferente para privateRoute y Public
        expect(wrapper.find('DashboardRoutes')).toHaveLength(1);
        //Prueba estandar
        expect(localStorage.setItem).toHaveBeenCalledWith('lastpath','/test/private/route');
    });
    test('Debe de bloquear el componente DashboardRoutes si no está autenticado',()=>{
        const wrapper = shallow(
            <MemoryRouter>
            <PrivateRoute
            isAuthenticated={false}/>
            </MemoryRouter>
        );
        expect(wrapper.find('DashboardRoutes')).toHaveLength(0);
    });
    
})