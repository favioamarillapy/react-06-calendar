import { types } from "../types/types";


const initialState = {
    events: [],
    active: {}
};

export const calendarReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.CALENDAR_LIST:
            return {
                ...state
            }

        case types.CALENDAR_ACTIVE:
            return {
                ...state,
                active: action.payload
            }

        case types.CALENDAR_ADD:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }

        case types.CALENDAR_UPDATE:
            return {
                ...state,
                events: state.events.map(event => event._id === action.payload._id ? action.payload : event)
            }

        case types.CALENDAR_DELETE:
            return {
                ...state,
                events: state.events.filter(event => event._id !== state.active._id),
                active: {}
            }

        default:
            return state
    }

}
