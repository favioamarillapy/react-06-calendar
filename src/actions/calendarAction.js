import { types } from "../types/types"


export const startSetActive = (calendar) => ({
    type: types.CALENDAR_ACTIVE,
    payload: calendar
});

export const addCalendar = (calendar) => ({
    type: types.CALENDAR_ADD,
    payload: calendar
});

export const updateCalendar = (calendar) => ({
    type: types.CALENDAR_UPDATE,
    payload: calendar
});

export const deleteCalendar = () => ({
    type: types.CALENDAR_DELETE
});


export const startSetList = (calendar) => ({
    type: types.CALENDAR_LIST,
    payload: calendar
});