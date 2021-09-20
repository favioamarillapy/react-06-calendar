import { types } from "../../types/types"


export const startSetActive = (calendar) => ({
    type: types.CALENDAR_ACTIVE,
    payload: calendar
});

export const addCalendar = (calendar) => ({
    type: types.CALENDAR_ADD,
    payload: calendar
});

export const startSetList = (calendar) => ({
    type: types.CALENDAR_LIST,
    payload: calendar
});