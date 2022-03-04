import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../actions/notes';
jest.mock('../../../actions/notes',()=>({
    activeNote: jest.fn()
}))
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const initState ={
    auth: {
        uid: '1',
        displayName: 'Joaquin'
    },
    notes:{
        active:{
            id: 'My5MpVrJrktWUIGtHeJV',
            title: 'Hola',
            body: 'Mundo'
        },
        notes: []
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
            <NoteScreen />
        </MemoryRouter>
    </Provider>
    )
describe('Pruebas sobre el NoteScreen', () => {
    test('Todo Ok', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de disparar el activeNote', () => {
        wrapper.find('input[name="title"]').simulate('change',{
            target: {
                name: 'title',
                value: 'Hola denuevo'
            }
        });
        expect(activeNote).toHaveBeenLastCalledWith('My5MpVrJrktWUIGtHeJV',{"body": "Mundo", "id": "My5MpVrJrktWUIGtHeJV", "title": "Hola denuevo"});
    })
    
    
})
