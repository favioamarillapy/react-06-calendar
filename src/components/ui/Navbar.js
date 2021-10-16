import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/authAction';

export const Navbar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);


    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(startLogout());
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Calendar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <strong className="mr-3 text-white"> {name} </strong>
                    <button type="button" className="btn btn-outline-danger" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i> &nbsp;
                        Logout
                    </button>
                </form>
            </div>
        </nav>
    )
}
