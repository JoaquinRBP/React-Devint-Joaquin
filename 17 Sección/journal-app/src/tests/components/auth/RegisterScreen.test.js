import { mount } from "enzyme";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { types } from "../../../types/types";
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
const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
    )
describe('Pruebas sobre RegisterScreen', () => {
    // beforeEach(() => {
    //     store = mockStore(initState);
    //     jest.clearAllMocks();
    // })
    test('Deberia estar todo Ok', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de hacer el dispatch de la acción respectiva', () => {
        const emailField = wrapper.find('input[name="email"]');
        emailField.simulate('change',{
            target: {
                value: '',
                name: 'email'
            }
        });
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        })
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.uiSetError,
            payload: 'Email is not valid',
        })
    });
    test('Debe de mostrar la caja de alerta con un error', () => {
        //Sobrescribimos valores
        const initState ={
            auth: {},
            ui:{
                loading: false,
                msgError:'Email is not valid',
            }
        }
        const store = mockStore(initState);
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
        );
        expect(wrapper.find('.auth__alert-error').exists()).toBe(true);
        expect(wrapper.find('.auth__alert-error').text().trim()).toBe(initState.ui.msgError);
    })
    
    
    
})
