import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const initState ={}
let store = mockStore(initState);
store.dispatch = jest.fn();
const nota = {
    id: 10,
    date: 0,
    title: 'Hola',
    body: 'Mundo',
    url:'https://algunlugar.com/foto.jpg'
}
const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <JournalEntry {...nota} />
        </MemoryRouter>
    </Provider>
    )
describe('Pruebas en JournalEntry', () => {
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de activar la nota', () => {
        wrapper.find('.journal__entry').prop('onClick')();
        expect(store.dispatch).toHaveBeenCalledWith(
            activeNote(nota.id, {...nota}),
        );
    })
    
    
})
