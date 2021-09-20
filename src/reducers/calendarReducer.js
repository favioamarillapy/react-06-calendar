import moment from "moment";
import { types } from "../types/types";


const initialState = {
    events: [],
    active: {}
};

export const calendarReducer = (state = initialState, action) => {

    console.log('add event', action);
    
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
                events: state.events.map(event => event.id === action.payload.id ? action.payload : event)
            }

        default:
            return state
    }


}
