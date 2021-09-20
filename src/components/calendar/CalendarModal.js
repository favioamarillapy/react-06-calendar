import React, { useState } from 'react'
import Modal from 'react-modal'
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment'
import Swal from 'sweetalert2'

import { useForm } from '../../hook/useForm';
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../actions/modalAction'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


Modal.setAppElement('#root');

export const CalendarModal = () => {

    const now = moment();
    const { isOpen } = useSelector(state => state.modal);
    const { active } = useSelector(state => state.calendar);

    const dispatch = useDispatch();

    const afterOpenModal = () => {

    }

    const closeModal = () => {
        dispatch(openModal(false));
    }

    const [formsInput, handleInputChange, formReset] = useForm({
        startDate: active.start,
        endDate:  active.end,
        title: active.title,
        description: active.description
    });
    const { startDate, endDate, title, description } = formsInput;

    const setStartDate = (e) => {
        formReset({
            ...formsInput,
            startDate: e,
        });
    }

    const setEndDate = (e) => {
        formReset({
            ...formsInput,
            endDate: e,
        });
    }

    const handleSave = (e) => {
        e.preventDefault();

        const momentStart = moment(startDate);
        const momentEnd = moment(endDate);

        if (momentStart.isSameOrAfter(momentEnd)) {
            Swal.fire('The end date must be greater than the start date');
            return;
        }

        if (title.trim() == '') {
            Swal.fire('The field title is required');
            return;
        }

        if (description.trim() == '') {
            Swal.fire('The field description is required');
            return;
        }


        closeModal();
    }


    return (
        <div>
            <Modal
                isOpen={isOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                closeTimeoutMS={200}
                style={customStyles}
                className="modal"
                overlayClassName="modal-overlay"
            >

                <h1> New Event </h1>
                <hr />
                <form className="container">

                    <div className="form-group">
                        <label>  Start date</label>
                        <DateTimePicker
                            onChange={setStartDate}
                            value={startDate}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label>End date</label>
                        <DateTimePicker
                            onChange={setEndDate}
                            value={endDate}
                            minDate={startDate}
                            className="form-control"
                        />
                    </div>

                    <hr />
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            name="title"
                            value={title}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Description"
                            rows="5"
                            name="description"
                            value={description}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                        onClick={handleSave}
                    >
                        <i className="far fa-save"></i>
                        <span> Save</span>
                    </button>

                </form>

            </Modal>
        </div>
    )
}
