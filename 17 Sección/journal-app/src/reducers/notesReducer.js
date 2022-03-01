import { types } from "../types/types";

/*
    {
        note: [],
        active:null,
        active{
            id: 'asdasd',
            title:'',
            body: '',
            imageUrl: '',
            date: 121512
        }
    }
*/
const initialState = {
    notes: [],
    active:null,
}
export const notesReducer = (state=initialState, action) =>{
    switch(action.type){
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesAddNew:
            return {
                ...state,
                notes: [ ...state.notes,action.payload]
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }
        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map(
                    note=> note.id === action.payload.id
                    ? action.payload.note
                    : note
                )
            }
        case types.notesDelete:
            return{
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id!==action.payload)
            }
        case types.notesLogoutCleaning:
            return{
                ...state,
                notes: [],
                active: null,
            }
        default: 
            return state;
    }
}