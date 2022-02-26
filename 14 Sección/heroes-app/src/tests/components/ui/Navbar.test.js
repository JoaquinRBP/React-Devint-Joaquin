import {shallow, mount} from 'enzyme';
import {Navbar} from '../../../components/ui/Navbar';
import {AuthContext} from '../../../auth/AuthContext';
import { MemoryRouter } from 'react-router';
import { types } from '../../../types/types';
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
describe('Pruebas en Navbar', () => {
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
        )
    test('Deberia mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Joaquin');
    });
    test('debe de llamar el logout', () => {
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout,
        });
    })
    
})
