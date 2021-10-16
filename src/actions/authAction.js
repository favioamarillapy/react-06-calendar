import { types } from '../types/types'
import { fecthNotUsingToken } from '../helpers/fetch'
import Swal from 'sweetalert2';


export const startLogin = (user) => {

    return async (dispatch) => {

        const response = await fecthNotUsingToken('auth/signin', user, 'POST');
        const body = await response.json();

        if (body.ok) {
            localStorage.setItem('react-06-calendar-token', body.data.token)
            localStorage.setItem('react-06-calendar-init-date-token', new Date().getTime())

            dispatch(startAuth(types.AUTH_SIGNIN, body.data));
        } else {
            Swal.fire(body.message);
        }
    }
}


export const startRegister = (user) => {

    return async (dispatch) => {

        const response = await fecthNotUsingToken('auth/signup', user, 'POST');
        const body = await response.json();

        if (body.ok) {
            localStorage.setItem('react-06-calendar-token', body.data.token)
            localStorage.setItem('react-06-calendar-init-date-token', new Date().getTime())

            dispatch(startAuth(types.AUTH_SIGNIN, body.data));
        } else {
            Swal.fire(body.message);
        }
    }
}


export const startChecking = (user) => {

    return async (dispatch) => {

        const response = await fecthNotUsingToken('auth/renew', {}, 'GET');
        const body = await response.json();

        if (body.ok) {
            localStorage.setItem('react-06-calendar-token', body.data.token)
            localStorage.setItem('react-06-calendar-init-date-token', new Date().getTime())

            dispatch(startAuth(types.AUTH_SIGNIN, body.data));
        } else {
            dispatch(startCheckingFinish());
        }
    }
}

export const startCheckingFinish = () => ({ type: types.AUTH_CHECKING_FINISH });

export const startAuth = (type, payload) => ({ type, payload });