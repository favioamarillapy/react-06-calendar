import moment from "moment";
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

        case types.CALENDAR_ADD:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }

        case types.CALENDAR_ACTIVE:
            return {
                ...state,
                active: action.payload
            }

        default:
            return state
    }


}
