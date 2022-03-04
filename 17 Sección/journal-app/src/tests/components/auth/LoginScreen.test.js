import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';
jest.mock('../../../actions/auth',()=>{
    startGoogleLogin: jest.fn()
});
jest.mock('../../../actions/auth',()=>{
    startLoginEmailPassword : jest.fn()
});
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const initState ={
    auth: {},
    notes:{
        active:{
            id: 'My5MpVrJrktWUIGtHeJV',
            title: 'Hola',
            body: 'Mundo'
        }
    },
    ui:{
        loading: false,
        msgError:null
    }
}
let store = mockStore(initState);
store.dispatch = jest.fn();
const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
    )
describe('Pruebas sobres <LoginScreen />', () => {
    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    })
    test('Carga todo', () => {
        expect(wrapper).toMatchSnapshot();
    });
    // test('Debe de disparar la accion de startLoginScreen', () => {
    //     wrapper.find('.google-btn').prop('onClick')();
    //     expect(startGoogleLogin).toHaveBeenCalled();
    // });
    // test('Debe de disparar el startLoginEmail', () => {
    //     wrapper.find('form').prop('onSubmit')(
    //         {preventDefault(){}}
    //     );
    //     const initial ={
    //         email:'joaquin@gmail.com',
    //         password:123456
    //     }
    //     expect(startLoginEmailPassword).toHaveBeenCalledWith(initial);
    // })
    
    
    
})
