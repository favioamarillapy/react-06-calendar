import { types } from "../../types/types"


export const addCalendar = (calendar) => ({
    type: types.CALENDAR_ADD,
    payload: calendar
});


export const startSetActive = (calendar) => ({
    type: types.CALENDAR_ACTIVE,
    payload: calendar
});
