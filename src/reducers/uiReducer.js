import { types } from "../types/types";

const initialState = {
    isOpen: false
}

export const uiReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.UI_OPEN_MODAL:
            return {
                ...state,
                isOpen: true
            }

        case types.UI_MODAL_MODAL:
            return {
                ...state,
                isOpen: false
            }

        default:
            return state;

    }
}
