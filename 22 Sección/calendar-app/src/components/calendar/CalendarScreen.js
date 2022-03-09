import React, { useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';
import 'moment/locale/es';//import moment espaniol
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';
moment.locale('es');//TODO: cambiamos idioma a moment
const localizer = momentLocalizer(moment);
export const CalendarScreen = () => {
  const dispatch = useDispatch();
  const {activeEvents} = useSelector( state => state.calendar);
  const {events} = useSelector( state => state.calendar);
  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'month');
  const onDoubleClick=(e)=>{
    dispatch(uiOpenModal());
  }
  const onSelectEvent=(e)=>{
    dispatch(eventSetActive(e));
  }
  const onViewChange=(e)=>{
    setlastView(e);
    localStorage.setItem('lastView', e);
  }
  const onSelectSlot = (e)=>{
    dispatch(eventClearActiveEvent());
  }
  const eventStyleGetter =(event,start,end,isSelected) =>{
    const style ={
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    return style;
  }
  return (
    <div>
    <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        selectable={true}
        onSelectSlot={onSelectSlot}
        components={{
          event: CalendarEvent
        }}
      />
      <AddNewFab />
      {
        (activeEvents) && <DeleteEventFab />
      }
      <CalendarModal />
      
    </div>
  )
}
