import moment from "moment";
import { types } from "../types/types";
const initialState = {
    events: [{
        id: new Date().getTime(),
        title: 'Cumpleanios del jefe',
        start: moment().toDate(),//new date en moment
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa',
        notes: 'Comprar el pan',
        user:{
        _id:123,
        name: 'Joaquin'
        }
    }], 
    activeEvents: null,
}
export const calendarReducer=(state=initialState,action) =>{
    switch(action.type){
        case types.eventAddNew:
            return {
                ...state,
                events: [...state.events, action.payload]
            }
        case types.eventSetActive:
            return {
                ...state,
                activeEvents: action.payload
            }
        case types.eventClearActive:
            return {
                ...state,
                activeEvents: null
            };
        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(
                    event=> (event.id===action.payload.id)? action.payload :event
                )
            }
        case types.eventDeleted:
                return {
                    ...state,
                    events: state.events.filter(
                        event=> (event.id!==state.activeEvents.id)
                    ),
                    activeEvents:null,
                }
        default:
            return state;
    }
}