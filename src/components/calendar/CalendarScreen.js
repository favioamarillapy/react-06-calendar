import React, { useEffect, useState } from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar } from '../ui/Navbar'
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { openModal } from '../../actions/modalAction';
import { useDispatch, useSelector } from 'react-redux';
import { startCalendarLoad, startSetActive } from '../../actions/calendarAction';
import { AddNewEventFab } from '../ui/AddNewEventFab';


export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const { events } = useSelector(state => state.calendar);

    const localizer = momentLocalizer(moment);

    useEffect(() => {

        dispatch(startCalendarLoad());
    }, [])

    const onDoubleClick = (e) => {

        dispatch(startSetActive(e));
        dispatch(openModal(true));
    }

    const onView = (e) => {
        localStorage.setItem('calendar-last-view', e);
        setLastView(e);
    }

    const [lastView, setLastView] = useState(localStorage.getItem('calendar-last-view') || 'month')


    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                view={lastView}
                components={{ event: CalendarEvent }}
                onDoubleClickEvent={onDoubleClick}
                onView={onView}
                eventPropGetter={event => {
                    const backgroundColor = "#007bff";
                    return { style: { backgroundColor } };
                }}
            />


            <AddNewEventFab />

            <CalendarModal />


        </div>
    )
}
