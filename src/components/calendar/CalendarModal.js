import React, { useEffect } from 'react'
import Modal from 'react-modal'
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment'
import Swal from 'sweetalert2'

import { useForm } from '../../hook/useForm';
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../actions/modalAction'
import { deleteCalendar, startCalendarDelete, startCalendarRegister, startCalendarUpdate, startSetActive } from '../../actions/calendarAction'

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

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');

const initEvent = {
    start: now.toDate(),
    end: nowPlus1.toDate(),
    title: '',
    description: ''
}

export const CalendarModal = () => {

    const { _id: uid, name: username } = useSelector(state => state.auth);
    const { isOpen } = useSelector(state => state.modal);
    const { active: activeEvent } = useSelector(state => state.calendar);
    const { _id: id } = activeEvent;

    const dispatch = useDispatch();


    const closeModal = () => {
        dispatch(startSetActive({}));
        dispatch(openModal(false));
    }


    const [formsInput, handleInputChange, formReset] = useForm(initEvent);
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

    useEffect(() => {
        if (activeEvent) {
            formReset(activeEvent);
        } else {
            formReset(initEvent);
        }
    }, [activeEvent])



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

            dispatch(startCalendarUpdate({
                ...formsInput,
                user: {
                    id: uid,
                    name: username
                }
            }, id));

        } else {
            dispatch(startCalendarRegister({
                ...formsInput,
                user: {
                    id: uid,
                    name: username
                }
            }));

        }


        closeModal();
    }

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(startCalendarDelete(id));

        closeModal();
    }


    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                closeTimeoutMS={200}
                style={customStyles}
                className="modal"
                overlayClassName="modal-overlay"
            >

                {
                    (activeEvent != null) ?
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
                        type="button"
                        className="btn btn-outline-primary btn-block"
                        onClick={handleSave}
                    >
                        <i className="far fa-save"></i>
                        <span> Save</span>
                    </button>

                    {
                        (id) && (
                            <button
                                type="button"
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
