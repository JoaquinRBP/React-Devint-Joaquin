import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { eventAddNew, eventClearActiveEvent, eventUpdated } from '../../actions/events';
const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');
const initEvent ={
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate()
}
export const CalendarModal = () => {
    const dispatch = useDispatch();
    const {activeEvents} = useSelector( state => state.calendar);
    const {modalOpen} = useSelector( state => state.ui);
    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());
    const [titleValid, setTitleValid] = useState(true)
    const [formValues, setFormValues] = useState(initEvent)
    const {notes, title, start, end} = formValues;
    const handleInputChange = ({target})=> {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }
    useEffect(() => {
        if(activeEvents){
            setFormValues(activeEvents);
        }
        else{
            setFormValues(initEvent);
        }
    }, [setFormValues,activeEvents])
    
const closeModal = ()=>{
    dispatch(uiCloseModal());
    dispatch(eventClearActiveEvent());
    setFormValues(initEvent);
}
const handleStartDateChange=(e)=>{
    setDateStart(e);
    setFormValues({
        ...formValues,
        start:e
    })
}
const handleEndDateChange=(e)=>{
    setDateEnd(e);
    setFormValues({
        ...formValues,
        end:e
    })
}
const handleSubmit=(e)=>{
    e.preventDefault();
    const momentStart = moment(start);
    const momentEnd = moment(end);
    if(momentStart.isSameOrAfter(momentEnd)){
        return Swal.fire('Error', 'La fecha fin debe ser mayor','error');
    }
    if(title.trim().length<2){
        setTitleValid(false);
        return false;
    }
    if(title.trim().length>=2){
        setTitleValid(true);
    }
    if(activeEvents){
        dispatch(eventUpdated(formValues));
    }
    else{
        dispatch(eventAddNew({
            ...formValues,
            id: new Date().getTime(),
            user:{
                _id:123,
                name: 'Joaquin'
                }
        }))
    }

        closeModal();        
    //TODO: Realizar grabación BD
}
return (
    <div>
        <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        closeTimeoutMS = {200}
        style={customStyles}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="modal-fondo"
        >
            <h1> { (activeEvents) ? 'Editar Evento' : 'Nuevo evento'} </h1>
        <hr />
        <form 
        className="container"
        onSubmit={handleSubmit}
        >

            <div className="form-group">
                <label>Fecha y hora inicio</label>
                <DateTimePicker 
                onChange={handleStartDateChange} 
                value={dateStart}
                className="form-control"
                />
            </div>

            <div className="form-group">
                <label>Fecha y hora fin</label>
                <DateTimePicker 
                onChange={handleEndDateChange}
                minDate={dateStart} 
                value={dateEnd}
                className="form-control"
                />
            </div>
            <hr />
            <div className="form-group">
                <label>Titulo y notas</label>
                <input 
                    type="text" 
                    className={`form-control ${ (!titleValid) ? 'is-invalid' : 'is-valid'}`}
                    placeholder="Título del evento"
                    name="title"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={title} 
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    onChange={handleInputChange}
                    value={notes} 
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>
        </Modal>
    </div>
)
}
