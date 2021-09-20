import { types } from "../../types/types";


export const openModal = (value) => ({
    type: types.MODAL_OPEN,
    payload: value
});