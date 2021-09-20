import React, { useState } from 'react'
import Modal from 'react-modal'
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment'
import Swal from 'sweetalert2'

import { useForm } from '../../hook/useForm';
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../actions/modalAction'
import { addCalendar, deleteCalendar, startSetActive, updateCalendar } from '../actions/calendarAction'

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

    const { isOpen } = useSelector(state => state.modal);
    const { active } = useSelector(state => state.calendar);
    const { id, bgcolor, user } = active;

    const dispatch = useDispatch();

    const afterOpenModal = () => {

    }

    const closeModal = () => {

        dispatch(startSetActive({}));

        dispatch(openModal(false));
    }

    const [formsInput, handleInputChange, formReset] = useForm({
        start: active.start ? active.start : '',
        end: active.end ? active.end : '',
        title: active.title ? active.title : '',
        description: active.description ? active.description : ''
    });
    const { start, end, title, description } = formsInput;

    const setStartDate = (e) => {
        formReset({
            ...formsInput,
            start: e,
        });
    }

    const setEndDate = (e) => {
        formReset({
            ...formsInput,
            end: e,
        });
    }

    const handleSave = (e) => {
        e.preventDefault();

        const momentStart = moment(start);
        const momentEnd = moment(end);

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


        if (id) {

            dispatch(updateCalendar({
                ...formsInput,
                id,
                user,
                bgcolor
            }));

        } else {
            dispatch(addCalendar({
                ...formsInput,
                id: new Date().getTime(),
                bgcolor: '#fafafa',
                user: {
                    uid: 123456,
                    name: 'Favio Amarilla Miño updated'
                }
            }));

        }


        closeModal();
    }

    const handleDelete = () => {

        dispatch(deleteCalendar());

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

                {
                    (active != null) ?
                        (
                            <h1> Update Event </h1>
                        ) :
                        (
                            <h1> New Event </h1>
                        )
                }

                <hr />
                <form className="container">

                    <div className="form-group">
                        <label>  Start date</label>
                        <DateTimePicker
                            onChange={setStartDate}
                            value={start}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label>End date</label>
                        <DateTimePicker
                            onChange={setEndDate}
                            value={end}
                            minDate={start}
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

                    {
                        (id) && (
                            <button
                                type="submit"
                                className="btn btn-outline-primary btn-block"
                                onClick={handleDelete}
                            >
                                <i className="far fa-trash"></i>
                                <span> Delete</span>
                            </button>
                        )
                    }

                </form>

            </Modal>
        </div>
    )
}
