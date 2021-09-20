import { types } from "../types/types";

const initialState = {
    isOpen: false
}

export const modalReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.MODAL_OPEN:
            return {
                ...state,
                isOpen: action.payload
            }


        default:
            return state;

    }
}
