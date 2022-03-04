import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Sidebar } from '../../../components/journal/Sidebar';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';
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
jest.mock('../../../actions/notes',()=>{
    startNewNote: jest.fn()
})
jest.mock('../../../actions/auth',()=>{
    startLogout: jest.fn()
})
let store = mockStore(initState);
store.dispatch = jest.fn();
const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <Sidebar />
        </MemoryRouter>
    </Provider>
    )
describe('Pruebas sobre Sidebar', () => {
    test('Deberia mostrar todo correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    // test('Debe de llamar al logout', () => {
    //     wrapper.find('button').prop('onClick')();
    //     expect(startLogout).toHaveBeenCalled();
    // });
    // test('Debe de llamar el startNewNote', () => {
    //     wrapper.find('.journal__new-entry').prop('onClick')();
    //     expect(startNewNote).toHaveBeenCalled();
    // });
    
    
    
})
