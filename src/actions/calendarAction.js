import Swal from "sweetalert2";
import { eventsFormat } from "../helpers/eventsFormat";
import { fecthUsingToken } from "../helpers/fetch";
import { types } from "../types/types"


export const startCalendarLoad = (event) => {

    return async (dispatch) => {

        const response = await fecthUsingToken('event', event, 'GET');
        const body = await response.json();

        if (body.ok) {
            const data = eventsFormat(body.data);
            dispatch(startLoad(data));
        } else {
            Swal.fire(body.message);
        }
    }
}

export const startCalendarRegister = (event) => {

    return async (dispatch) => {

        const response = await fecthUsingToken('event', event, 'POST');
        const body = await response.json();

        if (body.ok) {

            dispatch(addCalendar({ ...body.data, user: event.user }));
            dispatch(startSetList({ ...body.data, user: event.user }));
        } else {
            Swal.fire(body.message);
        }
    }
}

export const startCalendarUpdate = (event, id) => {

    return async (dispatch) => {

        const response = await fecthUsingToken('event/' + id, event, 'PUT');
        const body = await response.json();

        if (body.ok) {

            dispatch(updateCalendar({ ...body.data, user: event.user }));
            dispatch(startSetList({ ...body.data, user: event.user }));
        } else {
            Swal.fire(body.message);
        }
    }
}


export const startCalendarDelete = (id) => {

    return async (dispatch) => {

        const response = await fecthUsingToken('event/' + id, {}, 'DELETE');
        const body = await response.json();

        if (body.ok) {

            dispatch(deleteCalendar());
        } else {
            Swal.fire(body.message);
        }
    }
}

export const startSetActive = (calendar) => ({
    type: types.CALENDAR_ACTIVE,
    payload: calendar
});

export const addCalendar = (calendar) => ({
    type: types.CALENDAR_ADD,
    payload: calendar
});

const updateCalendar = (calendar) => ({
    type: types.CALENDAR_UPDATE,
    payload: calendar
});

const deleteCalendar = () => ({
    type: types.CALENDAR_DELETE
});

const startSetList = (calendar) => ({
    type: types.CALENDAR_LIST,
    payload: calendar
});

const startLoad = (data) => ({
    type: types.CALENDAR_LOAD,
    payload: data
});