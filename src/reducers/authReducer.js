import { types } from "../types/types";


const initialState = {
    checking: true
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.AUTH_SIGNIN:
            return {
                ...state,
                ...action.payload,
                checking: false
            }

        case types.AUTH_CHECKING_FINISH:
            return {
                ...state,
                ...action.payload,
                checking: false
            }

        case types.AUTH_LOGOUT:
            return {
                checking: false
            }


        default:
            return state
    }

}
