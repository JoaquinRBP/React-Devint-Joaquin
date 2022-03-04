import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLoadingNotes, startUploading, startNewNote, startSaveNote } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
import { fileUpload } from '../../helpers/fileUpload';
jest.mock('../../helpers/fileUpload',()=>({
    fileUpload: jest.fn(()=>{
        return Promise.resolve('https://hola-mundo.com/cosa.jpg');
        //return 'https://hola-mundo.com/cosa.jpg';
    })
}))
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const initState ={
    auth: {
        uid: 'TESTING'
    },
    notes:{
        active:{
            id: 'My5MpVrJrktWUIGtHeJV',
            title: 'Hola',
            body: 'Mundo'
        }
    }
}
let store = mockStore(initState);
//Los codigos comentados funcionan bien pero Demora mucho, aumentar a jest.setTimeout(60000) o incluso a más si se desea probar todos;
//jest.setTimeout(60000);
describe('Pruebas en notes', () => {
    beforeEach(() => {
        store= mockStore(initState);
    })
    test('Todo bie', async() => {
        await store.dispatch(startNewNote());
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });
        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });
        const docId = actions[0].payload.id;
        await db.doc(`/TESTING/journal/notes/${docId}`).delete();
    });
    // test('startLoadingNotes debe de cargar', async() => {
    //     await store.dispatch(startLoadingNotes('TESTING'));
    //     const actions = store.getActions();
    //     expect(actions[0]).toEqual({
    //         type: types.notesLoad,
    //         payload: expect.any(Array)
    //     });
    //     const expected = {
    //         id: expect.any(String), 
    //         title: expect.any(String),
    //         body: expect.any(String),
    //         date: expect.any(Number)
    //     }
    //     expect(actions[0].payload).toMatchObject(expected); 
    // });
    test('Debe de actualizar la nota', async() => {
        const note ={
            id: 'My5MpVrJrktWUIGtHeJV',
            title: 'titulo',
            body: 'body'
        }
        await store.dispatch(startSaveNote(note));
        const actions = store.getActions();
        expect(actions[0].type).toBe(types.notesUpdate);
        // const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();
        // expect(docRef.data().title).toBe(note.title);
    });
    // test('startUploading debe de actualizar el URL', async() => {
    //     const file = new File([],'foto.jpg');
    //     await store.dispatch(startUploading(file));
    //     const docRef = await db.doc(`/TESTING/journal/notes/My5MpVrJrktWUIGtHeJV`).get();
    //     expect(docRef.data().url).toBe('https://hola-mundo.com/cosa.jpg');
    // });
    //Considerar edit setupTest, window, scrollTo
    
    
    
})
