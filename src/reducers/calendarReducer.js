import moment from "moment";
import { types } from "../types/types";


const initialState = {
    events: [
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
    ],
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

        default:
            return state
    }


}
