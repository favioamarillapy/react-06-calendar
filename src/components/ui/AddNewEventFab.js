import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../actions/modalAction';

export const AddNewEventFab = () => {

    const dispatch = useDispatch();

    const handleAddEvent = () =>{

        dispatch(openModal(true));
    }

    return (
        <div>
            <button className="btn btn-primary btn-fab" onClick={handleAddEvent}>
                <i className="fas fa-plus"></i>
            </button>
        </div>
    )
}
