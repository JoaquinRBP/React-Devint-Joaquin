import React from 'react'
import { useDispatch } from 'react-redux'
import { eventClearActiveEvent, eventDeleted } from '../../actions/events';

export const DeleteEventFab = () => {
    const dispatch = useDispatch();
    const handleDeleteEvent=()=>{
        dispatch(eventDeleted());
        dispatch(eventClearActiveEvent())
    }
return (
    <div>
        <button 
        className="btn btn-danger fab-danger"
        onClick={handleDeleteEvent}>
            <i className="fas fa-trash"></i>
            Borrar Evento
        </button>
    </div>
)
}
