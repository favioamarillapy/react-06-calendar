import React, { useState } from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar } from '../ui/Navbar'
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { openModal } from '../actions/modalAction';
import { useDispatch } from 'react-redux';


export const CalendarScreen = () => {

    const dispatch = useDispatch();
    
    const localizer = momentLocalizer(moment);

    const onSelectEvent = (e) => {

    }

    const onDoubleClick = (e) => {

        dispatch(openModal(true));
    }

    const onView = (e) => {
        localStorage.setItem('calendar-last-view', e);
        setLastView(e);
    }

    const [lastView, setLastView] = useState(localStorage.getItem('calendar-last-view') || 'month')

    const myEventsList = [
        {
            title: 'Event 1',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgcolor: '#fafafa',
            user: {
                uid: 123456,
                name: 'Favio Amarilla Miño'
            }
        }
    ]

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                view={lastView}
                components={{ event: CalendarEvent }}
                onSelectEvent={onSelectEvent}
                onDoubleClickEvent={onDoubleClick}
                onView={onView}
            />

            <CalendarModal />

        </div>
    )
}
